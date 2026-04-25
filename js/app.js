// 世界环球旅行家 - 主应用逻辑

// 当前状态
let currentPage = 'home';  // home, continent, passport, badge, traveler-select, traveler-create
let currentContinent = null;
let selectedAvatar = null; // 创建旅行家时选中的头像
let isTransitioning = false; // 是否正在过渡中

// DOM 元素缓存
const elements = {};

// 页面过渡类型配置
const PAGE_TRANSITIONS = {
  'home->continent': 'slide-left',     // 首页 -> 大洲页：左滑
  'continent->home': 'slide-right',    // 大洲页 -> 首页：右滑
  'home->passport-book': 'slide-up',   // 首页 -> 护照本：从下往上
  'passport-book->home': 'slide-up',   // 护照本 -> 首页：往下滑
  'home->badge': 'scale',              // 首页 -> 勋章：缩放
  'badge->home': 'scale',              // 勋章 -> 首页：缩放
  'default': 'fade'                     // 默认：淡入淡出
};

// ==================== 旅行家管理 ====================

// 初始化应用
function initApp() {
  console.log('=== 开始初始化应用 ===');
  
  // 初始化语音模块
  VoiceManager.init();
  
  // 缓存 DOM 元素
  cacheElements();
  
  // 初始化音频管理
  audioManager.init();
  
  // 初始化游戏模块
  initGame();
  
  // 初始化点击国旗游戏
  TapGame.init();
  
  // 初始化拼图游戏
  PuzzleGame.init();
  
  // 初始化翻牌配对游戏
  MatchGame.init();
  
  // 初始化涂色游戏
  ColoringGame.init();
  
  // 初始化连连看游戏
  LinkGame.init();
  
  // 初始化垃圾分类百科
  if (typeof GarbageEncyclopedia !== 'undefined') {
    GarbageEncyclopedia.init();
  }
  
  // 初始化垃圾分类游戏
  if (typeof GarbageGame !== 'undefined') {
    GarbageGame.init();
  }
  
  // 从 EPUB 中更新垃圾分类数据
  if (typeof EpubParser !== 'undefined') {
    EpubParser.updateGarbageData();
  }
  
  // 检查是否有当前旅行家
  const currentTraveler = getCurrentTraveler();
  
  if (currentTraveler) {
    // 有旅行家，直接进入主界面
    enterMainApp();
  } else {
    // 没有旅行家，显示选择/创建页面
    showTravelerSelectPage();
  }
  
  console.log('=== 应用初始化完成 ===');
}

// 缓存 DOM 元素
function cacheElements() {
  elements.homePage = document.getElementById('home-page');
  elements.passportPage = document.getElementById('passport-page');
  elements.badgePage = document.getElementById('badge-page');
  elements.flagModal = document.getElementById('flag-modal');
  elements.soundBtn = document.getElementById('sound-btn');
  elements.collectedCount = document.getElementById('collected-count');
  elements.badgeCount = document.getElementById('badge-count');
  
  // 旅行家相关页面
  elements.travelerSelectPage = document.getElementById('traveler-select-page');
  elements.travelerCreatePage = document.getElementById('traveler-create-page');
  elements.travelerList = document.getElementById('traveler-list');
  elements.deleteConfirmModal = document.getElementById('delete-confirm-modal');
}

// 进入主应用
function enterMainApp() {
  // 隐藏旅行家选择页面
  elements.travelerSelectPage.style.display = 'none';
  elements.travelerCreatePage.style.display = 'none';
  
  // 显示首页
  showPage('home');

  // 更新首页状态
  updateHomeStatus();

  // 绑定事件
  bindEvents();

  // 检查并更新勋章
  checkAndUnlockBadges();

  // 更新头部显示当前旅行家
  updateTravelerDisplay();
  
  console.log('🌍 小小环球旅行家已启动！当前旅行家:', getCurrentTraveler()?.name);
}

// 显示旅行家选择页面
function showTravelerSelectPage() {
  elements.travelerSelectPage.style.display = 'flex';
  elements.travelerCreatePage.style.display = 'none';
  
  renderTravelerList();
  
  // 绑定创建按钮事件
  const createBtn = document.getElementById('create-traveler-btn');
  createBtn.onclick = showTravelerCreatePage;
  
  // 更新创建按钮状态
  createBtn.disabled = !canCreateTraveler();
}

// 渲染旅行家列表
function renderTravelerList() {
  const travelers = getAllTravelers();
  
  if (travelers.length === 0) {
    elements.travelerList.innerHTML = `
      <div class="no-traveler-tip">
        <div class="no-traveler-icon">🧳</div>
        <div class="no-traveler-text">还没有旅行家<br>快创建一个开始冒险吧！</div>
      </div>
    `;
    return;
  }
  
  elements.travelerList.innerHTML = travelers.map(traveler => {
    // 获取该旅行家的进度
    const data = loadGlobalData();
    const save = data.saves[traveler.id] || { countryStamps: {} };
    const collectedCount = Object.keys(save.countryStamps).length;
    
    return `
      <div class="traveler-card" onclick="selectTravelerAndEnter('${traveler.id}')">
        <div class="traveler-card-avatar">${traveler.avatar}</div>
        <div class="traveler-card-info">
          <div class="traveler-card-name">${traveler.name}</div>
          <div class="traveler-card-progress">已收集 ${collectedCount} 个国家</div>
        </div>
        <button class="traveler-card-delete" onclick="event.stopPropagation(); showDeleteConfirm('${traveler.id}', '${traveler.name}')">
          🗑️
        </button>
      </div>
    `;
  }).join('');
}

// 选择旅行家并进入
function selectTravelerAndEnter(travelerId) {
  const result = selectTraveler(travelerId);
  if (result.success) {
    audioManager.playSound('tap');
    enterMainApp();
  }
}

// 显示旅行家创建页面
function showTravelerCreatePage() {
  if (!canCreateTraveler()) {
    alert('已达到旅行家数量上限（最多3个）');
    return;
  }
  
  elements.travelerSelectPage.style.display = 'none';
  elements.travelerCreatePage.style.display = 'flex';
  
  // 渲染头像选择
  renderAvatarGrid();
  
  // 绑定返回按钮
  document.getElementById('create-back-btn').onclick = () => {
    elements.travelerCreatePage.style.display = 'none';
    elements.travelerSelectPage.style.display = 'flex';
  };
  
  // 绑定输入框事件
  const nameInput = document.getElementById('traveler-name-input');
  nameInput.value = '';
  nameInput.oninput = validateCreateForm;
  
  // 绑定创建按钮
  document.getElementById('confirm-create-btn').onclick = handleCreateTraveler;
  
  // 重置表单状态
  selectedAvatar = null;
  validateCreateForm();
}

// 渲染头像选择网格
function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  
  grid.innerHTML = AVATARS.map((avatar, index) => `
    <div class="avatar-option ${index === 0 ? 'selected' : ''}" 
         data-avatar="${avatar}" 
         onclick="selectAvatar('${avatar}', this)">
      ${avatar}
    </div>
  `).join('');
  
  // 默认选中第一个
  selectedAvatar = AVATARS[0];
}

// 选择头像
function selectAvatar(avatar, element) {
  // 移除所有选中状态
  document.querySelectorAll('.avatar-option').forEach(el => {
    el.classList.remove('selected');
  });
  
  // 添加选中状态
  element.classList.add('selected');
  selectedAvatar = avatar;
}

// 验证创建表单
function validateCreateForm() {
  const nameInput = document.getElementById('traveler-name-input');
  const confirmBtn = document.getElementById('confirm-create-btn');
  const name = nameInput.value.trim();
  
  // 名字长度 1-8 个字符
  const isValid = name.length >= 1 && name.length <= 8;
  confirmBtn.disabled = !isValid;
}

// 处理创建旅行家
function handleCreateTraveler() {
  const nameInput = document.getElementById('traveler-name-input');
  const name = nameInput.value.trim();
  
  if (!name) {
    alert('请输入旅行家名字');
    return;
  }
  
  if (name.length > 8) {
    alert('名字最多8个字符');
    return;
  }
  
  const result = createTraveler(name, selectedAvatar);
  
  if (result.success) {
    audioManager.playSound('tap');
    enterMainApp();
  } else {
    alert(result.error);
  }
}

// 显示删除确认弹窗
function showDeleteConfirm(travelerId, travelerName) {
  const modal = document.getElementById('delete-confirm-modal');
  const nameSpan = document.getElementById('delete-traveler-name');
  
  nameSpan.textContent = travelerName;
  modal.style.display = 'flex';
  
  // 绑定按钮事件
  document.getElementById('delete-cancel-btn').onclick = () => {
    modal.style.display = 'none';
  };
  
  document.getElementById('delete-confirm-btn').onclick = () => {
    handleDeleteTraveler(travelerId);
    modal.style.display = 'none';
  };
}

// 处理删除旅行家
function handleDeleteTraveler(travelerId) {
  const result = deleteTraveler(travelerId);
  
  if (result.success) {
    // 重新渲染旅行家列表
    renderTravelerList();
    
    // 更新创建按钮状态
    document.getElementById('create-traveler-btn').disabled = !canCreateTraveler();
    
    // 如果没有旅行家了，更新提示
    if (getAllTravelers().length === 0) {
      elements.travelerList.innerHTML = `
        <div class="no-traveler-tip">
          <div class="no-traveler-icon">🧳</div>
          <div class="no-traveler-text">还没有旅行家<br>快创建一个开始冒险吧！</div>
        </div>
      `;
    }
  }
}

// 更新头部旅行家显示
function updateTravelerDisplay() {
  const traveler = getCurrentTraveler();
  if (!traveler) return;
  
  // 在头部控件区域添加旅行家信息
  const controls = document.querySelector('.header-controls');
  if (!controls) return;
  
  // 检查是否已有旅行家显示
  let travelerDisplay = controls.querySelector('.current-traveler');
  if (!travelerDisplay) {
    travelerDisplay = document.createElement('div');
    travelerDisplay.className = 'current-traveler';
    travelerDisplay.onclick = switchTraveler;
    controls.insertBefore(travelerDisplay, controls.firstChild);
  }
  
  travelerDisplay.innerHTML = `
    <span class="current-traveler-avatar">${traveler.avatar}</span>
    <span class="current-traveler-name">${traveler.name}</span>
  `;
  
  // 添加导入导出按钮（如果还没有）
  addImportExportButtons(controls);
}

// 添加导入导出按钮
function addImportExportButtons(controls) {
  // 检查是否已存在
  if (controls.querySelector('.import-export-btns')) return;
  
  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'import-export-btns';
  btnsContainer.innerHTML = `
    <button class="import-export-btn" id="export-btn" title="导出存档">
      📤
    </button>
    <button class="import-export-btn" id="import-btn" title="导入存档">
      📥
    </button>
  `;
  
  controls.appendChild(btnsContainer);
  
  // 绑定事件
  document.getElementById('export-btn').onclick = handleExport;
  document.getElementById('import-btn').onclick = handleImport;
}

// 处理导出
function handleExport() {
  audioManager.playSound('tap');
  
  try {
    exportToFile();
    showToast('存档导出成功！文件已下载', 'success');
  } catch (err) {
    showToast('导出失败：' + err.message, 'error');
  }
}

// 处理导入
function handleImport() {
  audioManager.playSound('tap');
  
  // 创建文件选择器
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const result = await importFromFile(file);
      showToast(`存档导入成功！共 ${result.travelerCount} 位旅行家`, 'success');
      
      // 刷新界面
      updateTravelerDisplay();
      updateHomeStatus();
    } catch (err) {
      showToast('导入失败：' + err.message, 'error');
    }
  };
  
  input.click();
}

// 显示提示消息
function showToast(message, type = 'info') {
  // 移除已有的 toast
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // 动画显示
  setTimeout(() => toast.classList.add('show'), 10);
  
  // 3秒后消失
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 切换旅行家
function switchTraveler() {
  audioManager.playSound('tap');
  logoutCurrentTraveler();
  
  // 显示旅行家选择页面
  showTravelerSelectPage();
}

// ==================== 主应用逻辑 ====================

// 绑定事件
function bindEvents() {
  // 音效开关
  elements.soundBtn.addEventListener('click', toggleSound);
  
  // SVG 大洲色块点击
  document.querySelectorAll('.map-block.clickable').forEach(block => {
    block.addEventListener('click', () => {
      const continentId = block.dataset.continent;
      console.log('点击大洲:', continentId);
      openContinent(continentId);
    });
  });
  
  // 返回按钮
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', goHome);
  });
  
  // 护照按钮 - 打开护照本页面
  document.getElementById('passport-btn').addEventListener('click', openPassportBook);
  
  // 勋章按钮
  document.getElementById('badge-btn').addEventListener('click', openBadge);
  
  // 弹窗关闭（点击背景）
  elements.flagModal.addEventListener('click', (e) => {
    if (e.target === elements.flagModal) {
      closeModal();
    }
  });
  
  // 游戏中心弹窗关闭（点击背景）
  document.getElementById('game-center-modal').addEventListener('click', (e) => {
    if (e.target.id === 'game-center-modal') {
      closeGameCenter();
    }
  });
  
  console.log('事件绑定完成，已绑定', document.querySelectorAll('.map-block.clickable').length, '个大洲点击事件');
}

// 切换音效
function toggleSound() {
  const isEnabled = !audioManager.soundEnabled;
  audioManager.setSoundEnabled(isEnabled);
  elements.soundBtn.textContent = isEnabled ? '🔊' : '🔇';
  elements.soundBtn.classList.toggle('active', isEnabled);
}

// 获取下一个印章类型
function getNextStampType(countryId) {
  const data = loadData();
  const stamps = data.countryStamps[countryId] || [];
  
  // 0个印章 → 入境章, 1个 → 出境章, 2个 → 纪念章, 3个 → 创作章
  const stampOrder = ['entry', 'exit', 'special', 'creative'];
  return stampOrder[stamps.length] || null;
}

// 启动印章游戏（根据印章类型选择游戏）
function startStampGame(countryId) {
  const stampType = getNextStampType(countryId);
  
  if (!stampType) {
    console.log('该国家已收集完成');
    return;
  }
  
  switch (stampType) {
    case 'entry':
      // 入境章 → 点击国旗游戏（简单）
      TapGame.start(countryId, (success) => {
        if (success) {
          onStampGameComplete(countryId);
        }
      });
      break;
      
    case 'exit':
      // 出境章 → 拼图游戏（中等）
      PuzzleGame.start(countryId, (success) => {
        if (success) {
          onStampGameComplete(countryId);
        }
      });
      break;
      
    case 'special':
      // 纪念章 → 翻牌配对游戏（亲子竞技）
      MatchGame.start(countryId, (success) => {
        if (success) {
          onStampGameComplete(countryId);
        }
      });
      break;
      
    case 'creative':
      // 创作章 → 涂色游戏（创作纪念）
      ColoringGame.start(countryId, (success) => {
        if (success) {
          onStampGameComplete(countryId);
        }
      });
      break;
  }
}

// 印章游戏完成回调
function onStampGameComplete(countryId) {
  const country = getCountryById(countryId);
  const result = addStampToCountry(countryId);
  
  if (result.alreadyCompleted) {
    return;
  }
  
  // 播放庆祝音效
  audioManager.playSound('badge');
  
  // 语音播报
  VoiceManager.speak(VoiceManager.templates.stampEarned(country.name.zh, result.newStamp.type));
  
  // 显示印章获得弹窗
  showStampModal(country, result.newStamp, result.stamps, result.isCompleted);

  // 检查勋章
  checkAndUnlockBadges();

  // 更新首页状态
  updateHomeStatus();
  
  // 更新卡片显示
  const card = document.querySelector(`.country-card[data-country="${countryId}"]`);
  if (card) {
    updateCountryCard(card, countryId);
  }
}

// 更新首页状态
function updateHomeStatus() {
  const collectedCount = getCollectedCount();
  const data = loadData();
  
  elements.collectedCount.textContent = collectedCount;
  elements.badgeCount.textContent = data.unlockedBadges.length;
  
  // 更新各大洲收集进度
  CONTINENTS.forEach(continent => {
    const countEl = document.getElementById(`${continent.id}-count`);
    if (countEl) {
      const countries = getCountriesByContinent(continent.id);
      const collected = countries.filter(c => data.collectedCountries.includes(c.id)).length;
      countEl.textContent = `${collected}/${countries.length}`;
    }
  });
  
  // 更新旅行家显示
  updateTravelerDisplay();
}

// 打开洲页面（弹窗形式）
function openContinent(continentId) {
  audioManager.playSound('tap');
  
  currentContinent = continentId;
  
  const continent = getContinentById(continentId);
  const countries = getCountriesByContinent(continentId);
  const collectedInContinent = getCollectedCountByContinent(continentId);
  
  // 更新标题
  document.getElementById('continent-title').innerHTML = `
    ${continent.icon} ${continent.name}
    <button class="voice-btn" onclick="VoiceManager.speak(VoiceManager.templates.continent('${continent.name}', ${countries.length}))">🔊</button>
  `;
  
  // 更新进度
  document.getElementById('continent-progress').innerHTML = `
    已收集：<span>${collectedInContinent}/${countries.length}</span> 个国家
  `;
  
  // 渲染国家卡片
  const grid = document.getElementById('country-grid');
  grid.innerHTML = countries.map((country, index) => {
    const stamps = getCountryStamp(country.id);
    const hasStamps = stamps && stamps.length > 0;
    const isCompleted = stamps && stamps.length >= 4;
    return `
      <div class="country-card ${isCompleted ? 'completed' : hasStamps ? 'collected' : ''}" 
           data-country="${country.id}"
           onclick="openCountry('${country.id}')">
        <div class="country-flag">${country.flag}</div>
        <div class="country-name">${country.name.zh}</div>
        <div class="country-icon">${country.icon}</div>
        ${isCompleted ? '<div class="country-collected-badge">✅</div>' : hasStamps ? `<div class="country-progress-badge">${stamps.length}/4</div>` : ''}
      </div>
    `;
  }).join('');
  
  // 显示弹窗
  const modal = document.getElementById('continent-modal');
  modal.style.display = 'flex';
  modal.classList.add('active');
}

// 关闭大洲弹窗
function closeContinentModal() {
  audioManager.playSound('tap');
  
  const modal = document.getElementById('continent-modal');
  modal.classList.remove('active');
  modal.style.display = 'none';
  currentContinent = null;
}

// 打开国家详情
function openCountry(countryId) {
  audioManager.playSound('tap');
  
  const country = getCountryById(countryId);
  
  // 播放语音
  audioManager.playCountryVoice(countryId);
  
  // 更新弹窗内容
  document.getElementById('modal-flag').textContent = country.flag;
  document.getElementById('modal-name').textContent = `${country.name.zh} · ${country.name.en}`;
  document.getElementById('modal-fullname').textContent = country.fullName || country.name.en;
  document.getElementById('modal-icon').textContent = country.icon;
  
  // 更新详细信息
  document.getElementById('modal-capital').textContent = country.capital || '-';
  document.getElementById('modal-area').textContent = country.area || '-';
  document.getElementById('modal-population').textContent = country.population || '-';
  document.getElementById('modal-currency').textContent = country.currency || '-';
  document.getElementById('modal-language').textContent = country.language || '-';
  
  // 添加语音按钮到 modal-header
  const modalHeader = document.querySelector('.modal-header');
  let voiceBtn = modalHeader.querySelector('.voice-btn');
  if (!voiceBtn) {
    voiceBtn = document.createElement('button');
    voiceBtn.className = 'voice-btn';
    voiceBtn.innerHTML = '🔊';
    modalHeader.appendChild(voiceBtn);
  }
  voiceBtn.onclick = () => {
    const text = `${country.name.zh}，首都${country.capital}，货币是${country.currency}，语言是${country.language}。`;
    VoiceManager.speak(text);
  };
  
  // 渲染文化板块
  renderCultureSections(countryId);
  
  // 更新印章状态
  const stamps = getCountryStamp(countryId);
  const stampStatus = document.getElementById('stamp-status');
  const getPassportBtn = document.getElementById('get-passport-btn');
  const modalCollected = document.getElementById('modal-collected');
  
  if (stamps && stamps.length > 0) {
    // 已有印章，显示所有印章
    const stampCount = stamps.length;
    const isCompleted = stampCount >= 4;
    
    // 显示所有印章徽章
    stampStatus.innerHTML = stamps.map(stamp => {
      const stampEmoji = getStampEmoji(stamp.type);
      const stampName = getStampTypeName(stamp.type);
      return `
        <div class="stamp-badge ${stamp.type}">
          <span class="stamp-badge-icon">${stampEmoji}</span>
          <span class="stamp-badge-text">${stampName}</span>
        </div>
      `;
    }).join('');
    
    if (isCompleted) {
      // 已完成收集
      getPassportBtn.textContent = '✅ 已完成收集';
      getPassportBtn.disabled = true;
      modalCollected.style.display = 'block';
      modalCollected.innerHTML = '🎉 恭喜！该国家已完全收集！';
    } else {
      // 继续挑战
      const nextStamp = stampCount === 1 ? '出境章' : stampCount === 2 ? '纪念章' : '创作章';
      getPassportBtn.textContent = `🎮 继续挑战（${nextStamp}）`;
      getPassportBtn.disabled = false;
      modalCollected.style.display = 'none';
    }
  } else {
    // 没有印章
    stampStatus.innerHTML = `
      <div class="stamp-progress">
        <span class="stamp-slot empty">?</span>
        <span class="stamp-slot empty">?</span>
        <span class="stamp-slot empty">?</span>
        <span class="stamp-slot empty">?</span>
      </div>
    `;
    getPassportBtn.textContent = '🎮 获取护照印章';
    getPassportBtn.disabled = false;
    modalCollected.style.display = 'none';
  }
  
  // 设置游戏按钮点击事件
  getPassportBtn.onclick = () => {
    closeModal();
    startStampGame(countryId);
  };
  
  // 显示弹窗（带动画）
  showModal(elements.flagModal, 'scale');
  
  // 滚动到顶部
  document.querySelector('.flag-modal-content').scrollTop = 0;
  
  // 更新首页状态
  updateHomeStatus();
}

// 渲染文化板块
function renderCultureSections(countryId) {
  const container = document.getElementById('culture-sections');
  const culture = getCountryCulture(countryId);
  
  if (!culture) {
    // 非亚洲国家暂无数据
    container.innerHTML = `
      <div class="no-culture-data">
        🌍 更多文化内容即将上线，敬请期待！
      </div>
    `;
    return;
  }
  
  // 板块顺序和类型映射
  const sectionTypes = [
    { key: 'attractions', class: 'attractions' },
    { key: 'history', class: 'history' },
    { key: 'food', class: 'food' },
    { key: 'festival', class: 'festival' },
    { key: 'sports', class: 'sports' }
  ];
  
  let html = '';
  
  sectionTypes.forEach(({ key, class: sectionClass }) => {
    const section = culture[key];
    if (!section) return;
    
    html += `
      <div class="culture-section ${sectionClass}">
        <div class="culture-section-title">
          <span class="culture-section-icon">${section.icon}</span>
          <span>${section.title}</span>
        </div>
        <div class="culture-items">
          ${section.items.map((item, index) => {
            // 生成本地 SVG 路径
            const localPath = getLocalImagePath(countryId, key, index + 1);
            const imgSrc = `${CULTURE_IMAGE_CONFIG.localBasePath}/${localPath}`;
            
            return `
              <div class="culture-item" onclick="showCultureDetail('${countryId}', '${key}', ${index})">
                <img 
                  class="culture-item-image loading" 
                  src="${imgSrc}"
                  alt="${item.text}"
                  onload="this.classList.remove('loading')"
                  onerror="this.onerror=null; this.src='data:image/svg+xml,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 110\"><rect fill=\"#f5f5f5\" width=\"140\" height=\"110\" rx=\"8\"/><text x=\"70\" y=\"50\" text-anchor=\"middle\" fill=\"#ccc\" font-size=\"24\">🖼️</text><text x=\"70\" y=\"75\" text-anchor=\"middle\" fill=\"#aaa\" font-size=\"10\">暂无图片</text></svg>`)}'; this.classList.remove('loading')"
                />
                <div class="culture-item-text">${item.text}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// 显示文化详情弹窗
function showCultureDetail(countryId, category, index) {
  const culture = getCountryCulture(countryId);
  if (!culture || !culture[category]) return;
  
  const item = culture[category].items[index];
  if (!item) return;
  
  const localPath = getLocalImagePath(countryId, category, index + 1);
  const imgSrc = `${CULTURE_IMAGE_CONFIG.localBasePath}/${localPath}`;
  
  // 创建详情弹窗
  const overlay = document.createElement('div');
  overlay.className = 'culture-detail-overlay active';
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  };
  
  overlay.innerHTML = `
    <div class="culture-detail-card">
      <img class="culture-detail-image" src="${imgSrc}" alt="${item.text}" onerror="this.src='data:image/svg+xml,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 200\"><rect fill=\"#f5f5f5\" width=\"400\" height=\"200\"/><text x=\"200\" y=\"100\" text-anchor=\"middle\" fill=\"#ccc\" font-size=\"48\">🖼️</text></svg>`)}'">
      <div class="culture-detail-content">
        <span class="culture-detail-category ${category}">${culture[category].icon} ${culture[category].title}</span>
        <h3 class="culture-detail-title">${item.text}</h3>
        <p class="culture-detail-desc">${item.desc || '暂无详细介绍'}</p>
        <button class="culture-detail-close" onclick="this.closest('.culture-detail-overlay').remove()">我知道了 👍</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  // 播放点击音效
  if (typeof audioManager !== 'undefined') {
    audioManager.playSound('tap');
  }
}

// 关闭弹窗
function closeModal() {
  hideModal(elements.flagModal, 'scale');
  audioManager.stopCurrentVoice();
}

// 显示弹窗（通用）
function showModal(modal, type = 'scale') {
  const enterClass = `${type}-enter`;
  modal.style.display = 'flex';
  modal.classList.add(enterClass);
  
  setTimeout(() => {
    modal.classList.remove(enterClass);
    modal.classList.add('active');
  }, getAnimationDuration(type));
}

// 隐藏弹窗（通用）
function hideModal(modal, type = 'scale') {
  const exitClass = `${type}-exit`;
  modal.classList.remove('active');
  modal.classList.add(exitClass);
  
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove(exitClass);
  }, getAnimationDuration(type));
}

// 打开护照页面
function openPassport() {
  audioManager.playSound('tap');
  
  const data = loadData();
  const totalCollected = data.collectedCountries.length;
  
  // 更新统计
  const summaryEl = document.getElementById('passport-summary');
  summaryEl.innerHTML = `
    已收集：<span>${totalCollected}/107</span> 个国家
  `;
  
  // 渲染国家卡片（两列网格布局）
  const list = document.getElementById('passport-list');
  let cardsHtml = '';
  
  // 遍历所有国家
  if (COUNTRIES && COUNTRIES.length > 0) {
    COUNTRIES.forEach(country => {
      const stamps = data.countryStamps[country.id] || [];
      const isCollected = stamps.length > 0;
      
      cardsHtml += `
        <div class="passport-card ${isCollected ? '' : 'empty'}">
          <div class="passport-card-icon">${country.flag}</div>
          <div class="passport-card-name">${country.name.zh}</div>
          <div class="passport-card-stamps">
            ${isCollected 
              ? stamps.map(stamp => `<span class="passport-stamp-mini">${getStampEmoji(stamp.type)}</span>`).join('')
              : '<span style="color: #999; font-size: 12px;">暂未收集</span>'
            }
          </div>
        </div>
      `;
    });
  } else {
    cardsHtml = '<div style="padding: 20px; text-align: center; color: #999;">加载国家数据失败</div>';
  }
  
  list.innerHTML = `<div class="passport-grid">${cardsHtml}</div>`;
  
  showPage('passport');
}

// 打开勋章页面
function openBadge() {
  audioManager.playSound('tap');
  
  const data = loadData();
  
  // 渲染勋章
  const grid = document.getElementById('badge-grid');
  grid.innerHTML = BADGES.map(badge => {
    const isUnlocked = data.unlockedBadges.includes(badge.id);
    return `
      <div class="badge-card ${isUnlocked ? '' : 'locked'}" onclick="showBadgeDetail('${badge.id}')">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-status">${isUnlocked ? '已解锁 ✓' : '🔒 未解锁'}</div>
      </div>
    `;
  }).join('');
  
  showPage('badge');
}

// 获取勋章解锁条件描述
function getBadgeConditionText(badge) {
  if (typeof badge.condition === 'number') {
    return `收集 ${badge.condition} 个国家的印章`;
  }
  
  const type = badge.condition.type;
  const count = badge.condition.count;
  
  switch (type) {
    case 'continent':
      const continentName = CONTINENTS.find(c => c.id === badge.condition.value)?.name || badge.condition.value;
      return `在 ${continentName} 收集 ${count} 个国家的印章`;
    case 'stamps':
      return `收集 ${count} 枚印章`;
    case 'complete-countries':
      return `完成 ${count} 个国家的全部4枚印章`;
    case 'tap-game':
      return `国旗点击游戏累计答对 ${count} 题`;
    case 'tap-game-highscore':
      return `国旗点击游戏达到 ${count} 分`;
    case 'puzzle-game':
      return `拼图挑战累计完成 ${count} 次`;
    case 'puzzle-game-highscore':
      return `拼图挑战达到 ${count} 关`;
    case 'match-game':
      return `翻牌游戏累计完成 ${count} 次`;
    case 'coloring':
      return `保存 ${count} 幅涂色作品`;
    default:
      return '未知条件';
  }
}

// 获取勋章解锁进度
function getBadgeProgress(badge) {
  const data = loadData();
  const gameStats = data.gameStats || {
    tapGame: { totalCorrect: 0, highScore: 0 },
    puzzleGame: { totalPlays: 0, highScore: 0 },
    matchGame: { totalPlays: 0, bestTime: null },
    coloring: { totalSaved: 0 }
  };
  
  if (typeof badge.condition === 'number') {
    const current = data.collectedCountries.length;
    return { current, target: badge.condition };
  }
  
  const type = badge.condition.type;
  const target = badge.condition.count;
  
  switch (type) {
    case 'continent':
      const continentCountries = getCountriesByContinent(badge.condition.value);
      const continentCurrent = continentCountries.filter(c => {
        const stamps = data.countryStamps[c.id] || [];
        return stamps.length > 0;
      }).length;
      return { current: continentCurrent, target };
      
    case 'stamps':
      let stampCount = 0;
      Object.values(data.countryStamps || {}).forEach(stamps => {
        stampCount += stamps.length;
      });
      return { current: stampCount, target };
      
    case 'complete-countries':
      let completeCount = 0;
      Object.values(data.countryStamps || {}).forEach(stamps => {
        if (stamps.length >= 4) completeCount++;
      });
      return { current: completeCount, target };
      
    case 'tap-game':
      return { current: gameStats.tapGame.totalCorrect || 0, target };
      
    case 'tap-game-highscore':
      return { current: gameStats.tapGame.highScore || 0, target };
      
    case 'puzzle-game':
      return { current: gameStats.puzzleGame.totalPlays || 0, target };
      
    case 'puzzle-game-highscore':
      return { current: gameStats.puzzleGame.highScore || 0, target };
      
    case 'match-game':
      return { current: gameStats.matchGame.totalPlays || 0, target };
      
    case 'coloring':
      return { current: gameStats.coloring.totalSaved || 0, target };
      
    default:
      return { current: 0, target: 0 };
  }
}

// 显示勋章详情弹窗
function showBadgeDetail(badgeId) {
  audioManager.playSound('tap');
  
  const badge = BADGES.find(b => b.id === badgeId);
  if (!badge) return;
  
  const data = loadData();
  const isUnlocked = data.unlockedBadges.includes(badgeId);
  const conditionText = getBadgeConditionText(badge);
  const progress = getBadgeProgress(badge);
  
  // 创建弹窗
  const modal = document.createElement('div');
  modal.className = 'badge-detail-modal';
  modal.id = 'badge-detail-modal';
  modal.innerHTML = `
    <div class="badge-detail-content">
      <div class="badge-detail-header">
        <div class="badge-detail-icon">${badge.icon}</div>
        <div class="badge-detail-title">${badge.name}</div>
      </div>
      
      <div class="badge-detail-body">
        <div class="badge-detail-status ${isUnlocked ? 'unlocked' : 'locked'}">
          ${isUnlocked ? '✅ 已解锁' : '🔒 未解锁'}
        </div>
        
        <div class="badge-detail-condition">
          <div class="condition-label">解锁条件</div>
          <div class="condition-text">${conditionText}</div>
        </div>
        
        <div class="badge-detail-progress">
          <div class="progress-label">当前进度</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${Math.min(100, (progress.current / progress.target) * 100)}%"></div>
          </div>
          <div class="progress-text">${progress.current} / ${progress.target}</div>
        </div>
      </div>
      
      <button class="badge-detail-close" onclick="closeBadgeDetail()">知道了</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // 点击背景关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBadgeDetail();
    }
  });
}

// 关闭勋章详情弹窗
function closeBadgeDetail() {
  const modal = document.getElementById('badge-detail-modal');
  if (modal) {
    modal.remove();
  }
}

// 返回首页
function goHome() {
  audioManager.playSound('tap');
  currentContinent = null;
  showPage('home');
  updateHomeStatus();
}

// 切换页面显示（带过渡动画）
function showPage(page) {
  if (isTransitioning) return;
  
  const previousPage = currentPage;
  if (previousPage === page) return;
  
  // 获取过渡类型
  const transitionKey = `${previousPage}->${page}`;
  const transitionType = PAGE_TRANSITIONS[transitionKey] || PAGE_TRANSITIONS['default'];
  
  // 获取页面元素
  const pageMap = {
    'home': elements.homePage,
    'passport': elements.passportPage,
    'badge': elements.badgePage,
    'passport-book': document.getElementById('passport-book-page'),
    'gallery': document.getElementById('gallery-page')
  };
  
  const oldPageEl = pageMap[previousPage];
  const newPageEl = pageMap[page];
  
  if (!oldPageEl || !newPageEl) {
    // 降级为直接切换
    directShowPage(page);
    return;
  }
  
  isTransitioning = true;
  
  // 执行过渡动画
  animateTransition(oldPageEl, newPageEl, transitionType, () => {
    currentPage = page;
    isTransitioning = false;
  });
}

// 直接切换页面（无动画）
function directShowPage(page) {
  elements.homePage.style.display = page === 'home' ? 'flex' : 'none';
  elements.passportPage.style.display = page === 'passport' ? 'flex' : 'none';
  elements.badgePage.style.display = page === 'badge' ? 'flex' : 'none';
  
  const passportBookPage = document.getElementById('passport-book-page');
  if (passportBookPage) {
    passportBookPage.style.display = page === 'passport-book' ? 'flex' : 'none';
  }
  
  currentPage = page;
}

// 执行过渡动画
function animateTransition(oldPage, newPage, type, callback) {
  const enterClass = `${type}-enter`;
  const exitClass = `${type}-exit`;
  
  // 先隐藏新页面，准备动画
  newPage.style.display = 'flex';
  newPage.style.opacity = '0';
  
  // 强制重绘
  void newPage.offsetWidth;
  
  // 旧页面退出动画
  oldPage.classList.add(exitClass);
  
  // 新页面进入动画
  newPage.classList.add(enterClass);
  newPage.style.opacity = '';
  
  // 动画结束后清理
  const duration = getAnimationDuration(type);
  
  setTimeout(() => {
    oldPage.style.display = 'none';
    oldPage.classList.remove(exitClass, enterClass);
    newPage.classList.remove(exitClass, enterClass);
    callback();
  }, duration);
}

// 获取动画持续时间
function getAnimationDuration(type) {
  const durations = {
    'fade': 300,
    'slide-left': 400,
    'slide-right': 400,
    'slide-up': 400,
    'scale': 350,
    'bounce': 500,
    'flip': 500
  };
  return durations[type] || 400;
}

// 打开护照本页面
function openPassportBook() {
  audioManager.playSound('tap');
  
  // 更新印章统计
  document.getElementById('entry-stamp-count').textContent = getStampCountByType(STAMP_TYPES.ENTRY);
  document.getElementById('exit-stamp-count').textContent = getStampCountByType(STAMP_TYPES.EXIT);
  document.getElementById('special-stamp-count').textContent = getStampCountByType(STAMP_TYPES.SPECIAL);
  document.getElementById('creative-stamp-count').textContent = getStampCountByType(STAMP_TYPES.CREATIVE);
  
  // 渲染印章列表
  renderPassportStamps();
  
  // 切换页面
  showPage('passport-book');
}

// 关闭护照本页面
function closePassportBook() {
  audioManager.playSound('tap');
  showPage('home');
  updateHomeStatus();
}

// 渲染护照本印章列表
function renderPassportStamps() {
  const data = loadData();
  const stampsGrid = document.getElementById('passport-stamps-grid');
  
  if (!stampsGrid) return;
  
  let html = '';
  let collectedCount = 0;
  
  // 按大洲分组显示
  CONTINENTS.forEach(continent => {
    const countries = getCountriesByContinent(continent.id);
    const collectedCountries = countries.filter(c => {
      const stamps = data.countryStamps[c.id] || [];
      return stamps.length > 0;
    });
    
    // 大洲分隔标题
    html += `
      <div class="continent-divider">
        <span class="continent-icon">${continent.icon}</span>
        <span class="continent-name">${continent.name}</span>
        <span class="continent-count">(${collectedCountries.length}/${countries.length})</span>
      </div>
    `;
    
    // 该大洲的国家卡片
    countries.forEach(country => {
      const stamps = data.countryStamps[country.id] || [];
      const isCollected = stamps.length > 0;
      
      if (isCollected) collectedCount++;
      
      html += `
        <div class="stamp-card ${isCollected ? '' : 'empty'}">
          <div class="stamp-card-icon">${country.flag}</div>
          <div class="stamp-card-name">${country.name.zh}</div>
          <div class="stamp-card-progress">
            ${isCollected 
              ? stamps.map(stamp => `<span class="stamp-card-mini">${getStampEmoji(stamp.type)}</span>`).join('')
              : '<span style="color: #999; font-size: 12px;">暂未收集</span>'
            }
          </div>
        </div>
      `;
    });
  });
  
  stampsGrid.innerHTML = html;
}

// 格式化日期
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

// 获取印章类型名称
function getStampTypeName(type) {
  const names = {
    entry: '入境章',
    exit: '出境章',
    special: '纪念章'
  };
  return names[type] || '印章';
}

// ===== 游戏中心 =====

// 游戏列表配置
const GAME_CENTER_GAMES = [
  { id: 'tap', name: '天梯挑战', icon: '🎯', desc: '国旗识别', action: () => TapGame.startChallenge() },
  { id: 'puzzle', name: '拼图挑战', icon: '🧩', desc: '国旗拼图', action: () => PuzzleGame.startChallenge() },
  { id: 'match', name: '翻牌配对', icon: '🃏', desc: '记忆配对', action: () => MatchGame.showDifficultySelect() },
  { id: 'link', name: '连连看', icon: '🔗', desc: '连接消除', action: () => LinkGame.showDifficultySelect() },
  { id: 'garbage', name: '垃圾分类', icon: '🗑️', desc: '垃圾识别', action: () => GarbageGame.showDifficultySelect() },
  { id: 'garbage-encyclopedia', name: '垃圾大百科', icon: '📚', desc: '垃圾分类知识', action: () => window.location.href = 'garbage-encyclopedia.html' }
];

// 打开游戏中心
function openGameCenter() {
  audioManager.playSound('tap');
  
  const grid = document.getElementById('game-center-grid');
  if (!grid) return;
  
  grid.innerHTML = GAME_CENTER_GAMES.map(game => `
    <div class="game-center-item" onclick="selectGameFromCenter('${game.id}')">
      <span class="game-item-icon">${game.icon}</span>
      <span class="game-item-name">${game.name}</span>
      <span class="game-item-desc">${game.desc}</span>
    </div>
  `).join('');
  
  document.getElementById('game-center-modal').classList.add('active');
}

// 关闭游戏中心
function closeGameCenter() {
  document.getElementById('game-center-modal').classList.remove('active');
}

// 从游戏中心选择游戏
function selectGameFromCenter(gameId) {
  audioManager.playSound('tap');
  closeGameCenter();
  
  const game = GAME_CENTER_GAMES.find(g => g.id === gameId);
  if (game) {
    game.action();
  }
}

// ===== 画廊功能 =====

// 显示画廊页面
function showGallery() {
  renderGallery();
  showPage('gallery');
}

// 渲染画廊
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const empty = document.getElementById('gallery-empty');
  
  const gallery = JSON.parse(localStorage.getItem('coloring_gallery') || '[]');
  
  if (gallery.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  
  grid.style.display = 'grid';
  empty.style.display = 'none';
  
  grid.innerHTML = gallery.map(item => `
    <div class="gallery-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.countryName}" class="gallery-item-image">
      <div class="gallery-item-info">
        <div class="gallery-item-country">
          <span>${item.countryFlag}</span>
          <span>${item.countryName}</span>
        </div>
        <div class="gallery-item-date">${formatDate(item.date)}</div>
        <div class="gallery-item-actions">
          <button class="gallery-item-btn download" onclick="downloadArtwork('${item.id}')">下载</button>
          <button class="gallery-item-btn delete" onclick="deleteArtwork('${item.id}')">删除</button>
        </div>
      </div>
    </div>
  `).join('');
}

// 格式化日期
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

// 下载作品
function downloadArtwork(id) {
  const gallery = JSON.parse(localStorage.getItem('coloring_gallery') || '[]');
  const item = gallery.find(g => g.id === parseInt(id));
  
  if (item) {
    const link = document.createElement('a');
    link.download = `${item.countryName}_国旗涂色_${formatDate(item.date)}.png`;
    link.href = item.image;
    link.click();
    
    VoiceManager.speak('作品已下载！');
  }
}

// 删除作品
function deleteArtwork(id) {
  if (!confirm('确定要删除这幅作品吗？')) return;
  
  let gallery = JSON.parse(localStorage.getItem('coloring_gallery') || '[]');
  gallery = gallery.filter(g => g.id !== parseInt(id));
  localStorage.setItem('coloring_gallery', JSON.stringify(gallery));
  
  renderGallery();
  VoiceManager.speak('作品已删除');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

// ===== 天梯排行榜功能 =====

let currentLeaderboardGame = 'tap';

function openLeaderboard() {
  audioManager.playSound('tap');
  const page = document.getElementById('leaderboard-page');
  page.classList.add('active');
  page.style.display = 'flex';
  switchLeaderboard('tap');
}

function closeLeaderboard() {
  audioManager.playSound('tap');
  const page = document.getElementById('leaderboard-page');
  page.classList.remove('active');
  page.style.display = 'none';
}

function switchLeaderboard(game) {
  currentLeaderboardGame = game;
  
  document.querySelectorAll('.leaderboard-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.game === game);
  });
  
  renderLeaderboard(game);
}

function renderLeaderboard(game) {
  const content = document.getElementById('leaderboard-content');
  const currentTraveler = getCurrentTraveler();
  
  let leaderboard = [];
  let gameName = '';
  let scoreUnit = '分';
  
  if (game === 'tap') {
    leaderboard = getTapGameLeaderboard ? getTapGameLeaderboard() : [];
    gameName = '国旗天梯挑战';
    scoreUnit = '分';
  } else if (game === 'garbage') {
    leaderboard = getGarbageGameLeaderboard ? getGarbageGameLeaderboard() : [];
    gameName = '垃圾分类天梯挑战';
    scoreUnit = '题';
  }
  
  if (leaderboard.length === 0) {
    content.innerHTML = `
      <div class="leaderboard-empty">
        <div class="empty-icon">🏆</div>
        <p>暂无记录</p>
        <p class="empty-hint">完成${gameName}后，成绩会记录在这里</p>
      </div>
    `;
    return;
  }
  
  const top5 = leaderboard.slice(0, 5);
  
  content.innerHTML = `
    <div class="leaderboard-list">
      ${top5.map((entry, index) => {
        const isCurrent = currentTraveler && entry.travelerId === currentTraveler.id;
        const rankClass = index < 3 ? `rank-${index + 1}` : '';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        
        return `
          <div class="leaderboard-item ${isCurrent ? 'current' : ''} ${rankClass}">
            <div class="leaderboard-rank">
              ${medal || `<span class="rank-number">${index + 1}</span>`}
            </div>
            <div class="leaderboard-info">
              <span class="leaderboard-name">${entry.travelerName}</span>
              <span class="leaderboard-score">${entry.score} ${scoreUnit}</span>
            </div>
            <div class="leaderboard-date">${formatDate(entry.date)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  // 确保 leaderboard-list 正确填充父容器高度
  const listEl = content.querySelector('.leaderboard-list');
  if (listEl) {
    listEl.style.height = '100%';
    listEl.style.maxHeight = 'none';
    listEl.style.overflowY = 'auto';
  }
}

// ===== 调试工具 =====

