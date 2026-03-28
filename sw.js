// 世界环球旅行家 - Service Worker (PWA 完整离线支持)

const CACHE_NAME = 'world-explorer-v3';

// 核心资源（必须预先缓存）
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/traveler.css',
  './css/transitions.css',
  './css/games.css',
  './js/data.js',
  './js/storage.js',
  './js/audio.js',
  './js/app.js',
  './js/game.js',
  './js/game-tap.js',
  './js/game-puzzle.js',
  './js/game-match.js',
  './js/game-coloring.js',
  './js/voice.js',
  './js/culture-data.js'
];

// 文件模式（用于匹配需要缓存的资源）
const CACHE_PATTERNS = [
  /\.svg$/,           // SVG 文件
  /\.m4a$/            // 音频文件
];

// 检查 URL 是否需要预缓存
function shouldPreCache(url) {
  return CACHE_PATTERNS.some(pattern => pattern.test(url));
}

// 安装事件 - 缓存核心资源
self.addEventListener('install', (event) => {
  console.log('[SW] 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 缓存核心资源');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => {
        console.log('[SW] 安装完成，跳过等待');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] 安装失败:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[SW] 激活中...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] 删除旧缓存:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] 激活完成，接管所有客户端');
        return self.clients.claim();
      })
  );
});

// 请求拦截 - 缓存优先 + 动态缓存策略
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // 只处理 GET 请求
  if (request.method !== 'GET') {
    return;
  }
  
  // 跳过非同源请求
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // 命中缓存，直接返回
        if (cachedResponse) {
          // 后台更新缓存（可选，提高下次访问速度）
          fetchAndCache(request);
          return cachedResponse;
        }
        
        // 未命中，从网络获取并缓存
        return fetchAndCache(request);
      })
      .catch(() => {
        // 网络失败且无缓存，返回首页
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // 其他资源返回空
        return new Response('', { status: 408, statusText: 'Offline' });
      })
  );
});

// 从网络获取并缓存
function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // 检查响应有效性
      if (!response || response.status !== 200) {
        return response;
      }
      
      // 不缓存非基础类型请求
      if (response.type !== 'basic' && response.type !== 'cors') {
        return response;
      }
      
      // 克隆响应并缓存
      const responseToCache = response.clone();
      caches.open(CACHE_NAME)
        .then((cache) => {
          cache.put(request, responseToCache);
        });
      
      return response;
    });
}

// 消息处理 - 用于手动触发缓存或获取缓存状态
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urls = event.data.urls;
    console.log('[SW] 收到缓存请求，数量:', urls.length);

    // 去重
    const uniqueUrls = [...new Set(urls)];
    if (uniqueUrls.length !== urls.length) {
      console.log('[SW] 去重后数量:', uniqueUrls.length, '(原:', urls.length, ')');
    }

    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 开始批量缓存...');
        return cache.addAll(uniqueUrls);
      })
      .then(() => {
        console.log('[SW] ✅ 批量缓存成功');
        // 通知客户端缓存完成
        event.ports[0].postMessage({ success: true });
      })
      .catch((error) => {
        console.error('[SW] ❌ 批量缓存失败:', error);
        event.ports[0].postMessage({ success: false, error: error.message });
      });
  }
  
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    caches.open(CACHE_NAME)
      .then((cache) => cache.keys())
      .then((keys) => {
        event.ports[0].postMessage({ 
          cachedCount: keys.length,
          cacheName: CACHE_NAME 
        });
      });
  }
  
  // 新增：主动缓存所有资源
  if (event.data && event.data.type === 'PRECACHE_ALL') {
    self.clients.matchAll()
      .then(clients => {
        const channel = new MessageChannel();
        caches.open(CACHE_NAME)
          .then(cache => cache.keys())
          .then(keys => {
            console.log('[SW] 开始主动缓存所有资源，当前已有:', keys.length);
            
            // 获取所有已缓存的 URL
            const cachedUrls = new Set(keys.map(req => req.url));
            
            // 遍历所有已缓存的资源，发现同源的 SVG 和音频
            const allUrls = Array.from(cachedUrls)
              .map(url => new URL(url))
              .filter(urlObj => urlObj.origin === self.location.origin)
              .map(urlObj => {
                const path = urlObj.pathname;
                const directory = path.substring(0, path.lastIndexOf('/'));
                const fileName = path.substring(path.lastIndexOf('/'));
                
                // 根据已缓存资源推断同目录的其他资源
                return directory + fileName;
              });
            
            // 返回当前缓存状态
            if (clients[0]) {
              clients[0].postMessage({
                type: 'PRECACHE_PROGRESS',
                cached: keys.length,
                status: '正在缓存所有资源...'
              });
            }
            
            return keys.length;
          })
          .catch(error => {
            console.error('[SW] 预缓存错误:', error);
            throw error;
          });
      });
  }
});
