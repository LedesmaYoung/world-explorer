# 🌍 小小环球旅行家

> 一款专为 3-6 岁幼儿设计的世界国旗探索游戏，让孩子在游戏中认识世界各国国旗、学习地理知识。

![Version](https://img.shields.io/badge/版本-1.0.0-blue)
![Target Age](https://img.shields.io/badge/适合年龄-3--6岁-green)
![License](https://img.shields.io/badge/协议-MIT-orange)

## 📖 项目简介

小小环球旅行家是一个寓教于乐的儿童教育应用，通过游戏化的方式帮助幼儿认识世界各国的国旗、地理位置和基础文化知识。支持多个旅行家档案管理，完美适配亲子互动场景。

### ✨ 核心特性

- 🎮 **多种游戏玩法**：颜色辨识、国旗点击、拼图游戏、翻牌配对、涂色创作
- 🔊 **语音引导**：全程语音提示，解决幼儿识字困难
- 👨‍👩‍👧‍👦 **亲子互动**：支持双人对战的翻牌配对游戏
- 🎨 **创作画廊**：涂色作品保存与展示
- 📱 **PWA 支持**：可安装到手机桌面，离线可用
- 👤 **多用户管理**：支持最多 3 个旅行家档案

## 🎯 目标用户

- **主要用户**：3-6 岁幼儿
- **使用场景**：亲子互动、早期教育、地理启蒙
- **设计理念**：简单直观、趣味性强、教育性高

## 🗂️ 项目结构

```
world-explorer/
├── index.html              # 主页面
├── manifest.json           # PWA 配置
├── sw.js                   # Service Worker
├── css/                    # 样式文件
│   ├── style.css          # 主样式
│   ├── traveler.css       # 旅行家相关样式
│   ├── games.css          # 游戏模块样式
│   └── transitions.css    # 页面过渡动画
├── js/                     # JavaScript 模块
│   ├── app.js             # 主应用逻辑
│   ├── data.js            # 国家数据配置（107 国）
│   ├── storage.js         # 本地存储管理
│   ├── audio.js           # 音频管理
│   ├── voice.js           # 语音引导模块
│   ├── game.js            # 颜色辨识游戏
│   ├── game-tap.js        # 国旗点击游戏
│   ├── game-puzzle.js     # 拼图游戏
│   ├── game-match.js      # 翻牌配对游戏
│   ├── game-coloring.js   # 涂色创作游戏
│   └── culture-data.js    # 文化数据
├── assets/                 # 资源文件
│   ├── audio/             # 音频文件
│   │   ├── voices/        # 国家中英文发音
│   │   └── sounds/        # 音效文件
│   └── icons/             # 图标资源
├── docs/                   # 文档目录
└── pages/                  # 其他页面
```

## 🚀 快速开始

### 方式一：使用启动脚本（推荐）

项目提供了固定端口的启动脚本，适合局域网内 iPad 等移动设备测试：

```bash
cd world-explorer
./start.sh
```

**固定端口**: `50895`

**访问地址**:
- 本地访问: `http://localhost:50895`
- 局域网访问: `http://192.168.31.152:50895`

> 脚本会自动杀死占用端口的旧进程，无需手动清理。

### 方式二：直接打开

1. 克隆项目到本地
   ```bash
   git clone [项目地址]
   cd world-explorer
   ```

2. 使用浏览器打开 `index.html`
   ```bash
   # macOS
   open index.html
   
   # Windows
   start index.html
   
   # Linux
   xdg-open index.html
   ```

### 方式三：PWA 安装

1. 使用 HTTPS 协议部署项目
2. 在移动设备浏览器中打开
3. 点击"添加到主屏幕"即可安装

### 缓存刷新参数

PWA 应用支持通过 URL 参数控制缓存行为：

| 参数 | 作用 | 示例 |
|------|------|------|
| `clear-cache=1` | 清除所有缓存并重新加载 | `http://192.168.31.152:50895?clear-cache=1` |
| `force-cache=1` | 立即开始缓存所有资源（跳过 2 秒延迟） | `http://192.168.31.152:50895?force-cache=1` |

**使用场景：**
- 代码更新后在 iPad 上访问 `?clear-cache=1` 强制清除旧缓存
- 首次安装后访问 `?force-cache=1` 快速缓存所有资源

## 🎮 游戏玩法

### 印章体系

游戏设计了三种类型的护照印章：

| 印章类型 | 图标 | 难度 | 游戏类型 | 适合年龄 |
|---------|------|------|---------|---------|
| 入境章 | 🛬 | ⭐ 简单 | 点击类游戏 | 3-4 岁 |
| 出境章 | 🛫 | ⭐⭐ 中等 | 拼图/拖拽游戏 | 4-5 岁 |
| 纪念章 | 🌟 | ⭐⭐⭐ 挑战 | 翻牌配对/涂色创作 | 5-6 岁 |

### 游戏模块

#### 1. 颜色辨识游戏 🎨
- **玩法**：找出国旗上的颜色对应的气球
- **适合年龄**：3-4 岁
- **获得印章**：入境章

#### 2. 国旗点击游戏 🚩
- **玩法**：从多个国旗中找到正确的国旗
- **适合年龄**：3-5 岁
- **获得印章**：入境章

#### 3. 拼图游戏 🧩
- **玩法**：将国旗碎片拖拽到正确位置
- **适合年龄**：4-5 岁
- **获得印章**：出境章

#### 4. 翻牌配对游戏 🃏
- **玩法**：翻开两张卡片进行配对（双人竞技）
- **适合年龄**：5-6 岁
- **获得印章**：纪念章
- **独立模式**：可选择不同难度（3×3 到 10×10）

#### 5. 涂色创作游戏 🖍️
- **玩法**：给国旗轮廓涂色
- **适合年龄**：5-6 岁
- **获得印章**：纪念章
- **作品保存**：保存到个人画廊

### 勋章系统

通过收集印章解锁成就勋章：

- 🥇 **新手旅行家**：收集第 1 个印章
- 🌏 **洲际探险家**：探索完整一个大洲
- 🎯 **游戏达人**：完成所有游戏类型
- 🏆 **环球旅行家**：收集所有国家印章
- 等等...

## 💾 数据存储

### 本地存储结构

应用使用 `localStorage` 存储数据，支持多旅行家档案：

```javascript
{
  travelers: [                    // 旅行家列表（最多3个）
    {
      id: 'uuid',
      name: '小明',
      avatar: '🧑‍✈️',
      createdAt: '2026-03-25'
    }
  ],
  currentTravelerId: 'uuid',      // 当前登录的旅行家
  saves: {                        // 各旅行家的存档
    'uuid': {
      collectedCountries: [],     // 已收集国家ID
      countryStamps: {},          // 国家印章记录
      unlockedBadges: [],         // 已解锁勋章
      gallery: [],                // 画廊作品
      settings: {
        soundEnabled: true,
        bgmEnabled: false
      }
    }
  }
}
```

### 数据安全

- 所有数据存储在用户本地设备
- 不涉及网络传输和服务器存储
- 用户可随时清除数据

## 🔧 开发指南

### 技术栈

- **前端框架**：原生 JavaScript（无框架依赖）
- **样式**：原生 CSS3 + CSS Variables
- **存储**：LocalStorage API
- **语音**：Web Speech API
- **PWA**：Service Worker + Web App Manifest

### 核心模块

#### 1. 旅行家管理 (`app.js`)
```javascript
// 创建旅行家
createTraveler(name, avatar)

// 切换旅行家
switchTraveler(travelerId)

// 删除旅行家
deleteTraveler(travelerId)
```

#### 2. 存储管理 (`storage.js`)
```javascript
// 保存数据
saveTravelerData(travelerId, data)

// 加载数据
loadTravelerData(travelerId)

// 清除所有数据
clearAllData()
```

#### 3. 游戏模块
```javascript
// 颜色辨识游戏
startGame(countryId)

// 国旗点击游戏
TapGame.start(countryId, callback)

// 拼图游戏
PuzzleGame.start(countryId, callback)

// 翻牌配对游戏
MatchGame.start(countryId, callback)
MatchGame.showDifficultySelect()  // 独立模式

// 涂色创作游戏
ColoringGame.start(countryId, callback)
```

#### 4. 语音引导 (`voice.js`)
```javascript
// 播放语音
VoiceManager.speak('欢迎来到小小环球旅行家！')

// 模板语音
VoiceManager.templates.welcome()
VoiceManager.templates.continentIntro(continent)
```

### 添加新国家

在 `js/data.js` 中添加国家数据：

```javascript
{ 
  id: 'country-id', 
  name: { zh: '中文名', en: 'English Name' }, 
  fullName: '国家全称',
  continent: 'asia',              // 所属大洲
  flag: '🇨🇳',                     // 国旗 emoji
  icon: '🐼',                      // 代表图标
  capital: '首都',
  area: '面积',
  population: '人口',
  currency: '货币',
  language: '语言',
  flagColors: ['red', 'yellow'],  // 国旗颜色
  audioZh: 'assets/audio/voices/xxx_zh.m4a', 
  audioEn: 'assets/audio/voices/xxx_en.m4a' 
}
```

### 添加新游戏

1. 在 `js/` 目录创建新游戏模块文件
2. 在 `index.html` 中引入脚本
3. 在 `css/games.css` 中添加样式
4. 在 `js/app.js` 中初始化游戏模块

## 📱 设备适配

### 支持平台

- ✅ iOS Safari (iOS 12+)
- ✅ Android Chrome (Android 5+)
- ✅ 桌面浏览器 (Chrome, Firefox, Safari, Edge)

### 响应式设计

- 移动优先设计
- 支持横屏和竖屏
- 触摸手势优化

### 性能优化

- 静态资源懒加载
- 音频文件按需加载
- CSS 动画使用 GPU 加速
- Service Worker 缓存策略

## 🐛 已知问题

- [ ] 部分老旧设备语音合成可能不支持
- [ ] 某些 Android 设备 PWA 安装提示不明显
- [ ] 大量音频文件首次加载较慢

## 🗺️ 开发路线

### v1.1 计划功能

- [x] 世界地图可视化（以亚洲为中心的太平洋视角）
- [x] 涂色游戏增强（橡皮擦、画笔粗细、16色、35国模板）
- [x] 语音反馈增强（随机化鼓励语、连击表扬）
- [x] 国旗连连看游戏（7级难度、急速榜单、连线特效）
- [ ] 增加国家音频讲解（真人录音）
- [ ] 增加社交分享功能
- [ ] 增加家长控制面板

### v1.2 计划功能

- [ ] 增加城市探索模块
- [ ] 增加著名景点介绍
- [ ] 增加世界美食介绍
- [ ] 增加动物世界模块

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发规范

- 代码风格：遵循 JavaScript Standard Style
- 注释规范：使用 JSDoc 格式
- 提交信息：使用语义化提交信息

## 📄 许可证

MIT License

## 👨‍💻 作者

- 开发团队：CodeBuddy AI + 项目所有者
- 创建日期：2026-03
- 最后更新：2026-03-27

## 🙏 致谢

- 感谢所有国旗 emoji 和图标的设计者
- 感谢 Web Speech API 提供语音支持
- 感谢所有测试用户的宝贵反馈

---

**让孩子在游戏中认识世界！** 🌍✨
