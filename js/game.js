// 世界环球旅行家 - 颜色辨识游戏

// 颜色名称映射
const COLOR_NAMES = {
  red: '红色',
  blue: '蓝色',
  yellow: '黄色',
  green: '绿色',
  white: '白色',
  black: '黑色',
  orange: '橙色',
  purple: '紫色',
  brown: '棕色',
  gold: '金色'
};

// 颜色对应的 CSS 类名
const COLOR_CLASSES = {
  red: 'balloon-red',
  blue: 'balloon-blue',
  yellow: 'balloon-yellow',
  green: 'balloon-green',
  white: 'balloon-white',
  black: 'balloon-black',
  orange: 'balloon-orange',
  purple: 'balloon-purple',
  brown: 'balloon-brown',
  gold: 'balloon-gold'
};

// 游戏状态
let currentGameCountry = null;
let currentRound = 0;
let totalRounds = 1;  // 简化为1轮，答对即可获得印章
let targetColors = [];
let currentTargetColor = null;
let gameActive = false;

// DOM 元素
const gameElements = {};

// 初始化游戏模块
function initGame() {
  gameElements.modal = document.getElementById('game-modal');
  gameElements.flagLarge = document.getElementById('game-flag-large');
  gameElements.flagHint = document.getElementById('game-flag-hint');
  gameElements.targetCircle = document.getElementById('target-color-circle');
  gameElements.targetHint = document.getElementById('target-color-hint');
  gameElements.balloonsContainer = document.getElementById('balloons-container');
  gameElements.progressDots = document.getElementById('game-progress');
  
  console.log('🎮 游戏模块初始化完成');
}

// 开始游戏
function startGame(countryId) {
  const country = getCountryById(countryId);
  if (!country) return false;
  
  currentGameCountry = country;
  currentRound = 0;
  gameActive = true;
  
  // 获取国旗颜色，如果没有配置则使用默认颜色
  targetColors = country.flagColors || ['red', 'blue', 'yellow'];
  
  // 随机选择一个目标颜色
  currentTargetColor = targetColors[Math.floor(Math.random() * targetColors.length)];
  
  // 更新弹窗内容
  gameElements.flagLarge.textContent = country.flag;
  gameElements.flagHint.textContent = `找出 ${country.name.zh} 国旗上的颜色！`;
  
  // 更新目标颜色显示
  const colorHex = getColorHex(currentTargetColor);
  gameElements.targetCircle.style.backgroundColor = colorHex;
  gameElements.targetHint.textContent = `找${COLOR_NAMES[currentTargetColor]}气球 🎈`;
  
  // 渲染气球
  renderBalloons();
  
  // 渲染进度点（简化为1轮）
  gameElements.progressDots.innerHTML = '<div class="progress-dot active"></div>';
  
  // 显示游戏弹窗
  gameElements.modal.classList.add('active');
  
  // 播放音效
  audioManager.playSound('tap');
  
  return true;
}

// 获取颜色的十六进制值
function getColorHex(colorName) {
  const colors = {
    red: '#FF6B6B',
    blue: '#4DABF7',
    yellow: '#FFD43B',
    green: '#69DB7C',
    white: '#F8F9FA',
    black: '#495057',
    orange: '#FF922B',
    purple: '#DA77F2',
    brown: '#A0522D',
    gold: '#FFD700'
  };
  return colors[colorName] || '#CCCCCC';
}

// 渲染气球
function renderBalloons() {
  // 生成气球颜色列表（包含目标颜色 + 随机干扰色，共4个）
  const availableColors = Object.keys(COLOR_NAMES);
  let balloonColors = [currentTargetColor];
  
  // 添加 3 个随机干扰色
  const otherColors = availableColors.filter(c => c !== currentTargetColor);
  const shuffledOthers = shuffleArray(otherColors);
  balloonColors = balloonColors.concat(shuffledOthers.slice(0, 3));
  
  // 再次打乱顺序
  balloonColors = shuffleArray(balloonColors);
  
  // 渲染气球 HTML
  gameElements.balloonsContainer.innerHTML = balloonColors.map(color => `
    <div class="balloon ${COLOR_CLASSES[color]}" data-color="${color}" onclick="onBalloonClick('${color}', this)">
      <div class="balloon-body"></div>
      <div class="balloon-knot"></div>
      <div class="balloon-string"></div>
    </div>
  `).join('');
}

// 气球点击事件
function onBalloonClick(color, element) {
  if (!gameActive) return;
  
  if (color === currentTargetColor) {
    // 正确！
    element.classList.add('correct');
    audioManager.playSound('collect');
    
    // 延迟完成游戏
    setTimeout(() => {
      gameComplete();
    }, 500);
  } else {
    // 错误
    element.classList.add('wrong');
    audioManager.playSound('tap');
    
    // 移除错误动画
    setTimeout(() => {
      element.classList.remove('wrong');
    }, 500);
  }
}

// 游戏完成
function gameComplete() {
  gameActive = false;
  
  // 关闭游戏弹窗
  gameElements.modal.classList.remove('active');
  
  // 添加印章
  const result = addStampToCountry(currentGameCountry.id);
  
  // 如果已完成收集，不显示弹窗
  if (result.alreadyCompleted) {
    return;
  }
  
  // 播放庆祝音效
  audioManager.playSound('badge');
  
  // 显示印章获得弹窗
  showStampModal(currentGameCountry, result.newStamp, result.stamps, result.isCompleted);
  
  // 检查勋章
  const newBadges = checkAndUpdateBadges();
  if (newBadges.length > 0) {
    setTimeout(() => {
      audioManager.playSound('badge');
    }, 1500);
  }
  
  // 更新首页状态
  if (typeof updateHomeStatus === 'function') {
    updateHomeStatus();
  }
  
  // 更新卡片显示
  const card = document.querySelector(`.country-card[data-country="${currentGameCountry.id}"]`);
  if (card) {
    updateCountryCard(card, currentGameCountry.id);
  }
  
  // 更新洲进度
  if (typeof currentContinent !== 'undefined' && currentContinent) {
    const collectedInContinent = getCollectedCountByContinent(currentContinent);
    const countries = getCountriesByContinent(currentContinent);
    const progressEl = document.getElementById('continent-progress');
    if (progressEl) {
      progressEl.innerHTML = `已收集：<span>${collectedInContinent}/${countries.length}</span> 个国家`;
    }
  }
  
  // 更新国家弹窗中的印章状态
  updateCountryStampStatus(currentGameCountry.id);
}

// 更新国家卡片显示
function updateCountryCard(card, countryId) {
  const stamps = getCountryStamp(countryId);
  const hasStamps = stamps && stamps.length > 0;
  const isCompleted = stamps && stamps.length >= 4;
  
  // 移除旧徽章
  const oldBadge = card.querySelector('.country-collected-badge, .country-progress-badge');
  if (oldBadge) oldBadge.remove();
  
  // 更新类名
  card.classList.remove('collected', 'completed');
  if (isCompleted) {
    card.classList.add('completed');
  } else if (hasStamps) {
    card.classList.add('collected');
  }
  
  // 添加新徽章
  if (isCompleted) {
    card.innerHTML += '<div class="country-collected-badge">✅</div>';
  } else if (hasStamps) {
    card.innerHTML += `<div class="country-progress-badge">${stamps.length}/4</div>`;
  }
}

// 更新国家弹窗中的印章状态
function updateCountryStampStatus(countryId) {
  const stampStatus = document.getElementById('stamp-status');
  const getPassportBtn = document.getElementById('get-passport-btn');
  const modalCollected = document.getElementById('modal-collected');
  
  const stamps = getCountryStamp(countryId);
  
  if (stamps && stamps.length > 0) {
    const stampCount = stamps.length;
    const isCompleted = stampCount >= 4;
    
    // 显示所有印章徽章
    if (stampStatus) {
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
    }
    
    if (getPassportBtn) {
      if (isCompleted) {
        getPassportBtn.textContent = '✅ 已完成收集';
        getPassportBtn.disabled = true;
        if (modalCollected) {
          modalCollected.style.display = 'block';
          modalCollected.innerHTML = '🎉 恭喜！该国家已完全收集！';
        }
      } else {
        const nextStamp = stampCount === 1 ? '出境章' : stampCount === 2 ? '纪念章' : '创作章';
        getPassportBtn.textContent = `🎮 继续挑战（${nextStamp}）`;
        getPassportBtn.disabled = false;
      }
    }
  }
}

// 获取印章表情符号
function getStampEmoji(stampType) {
  switch (stampType) {
    case 'entry': return '🛬';  // 飞机降落 - 入境章
    case 'exit': return '🛫';   // 飞机起飞 - 出境章
    case 'special': return '🌟'; // 星星 - 纪念章
    case 'creative': return '🎨'; // 调色板 - 创作章
    default: return '⚪';
  }
}

// 获取印章类型名称
function getStampTypeName(stampType) {
  switch (stampType) {
    case 'entry': return '入境章';
    case 'exit': return '出境章';
    case 'special': return '纪念章';
    case 'creative': return '创作章';
    default: return '印章';
  }
}

// 显示印章弹窗
let currentStampCountryId = null;  // 当前获得印章的国家ID

function showStampModal(country, newStamp, allStamps, isCompleted) {
  const modal = document.getElementById('stamp-modal');
  const iconEl = document.getElementById('stamp-icon-large');
  const typeEl = document.getElementById('stamp-type-text');
  const countryEl = document.getElementById('stamp-country');
  const dateEl = document.getElementById('stamp-date');
  const previewGrid = document.getElementById('stamp-preview-grid');
  const closeBtn = document.getElementById('stamp-close-btn');
  const continueBtn = document.getElementById('stamp-continue-btn');
  const backBtn = document.getElementById('stamp-back-btn');
  
  // 保存当前国家ID
  currentStampCountryId = country.id;
  
  // 设置印章图标和类型
  let stampIcon = '';
  let stampTypeText = '';
  
  switch (newStamp.type) {
    case 'entry':
      stampIcon = '🔴';
      stampTypeText = '入境章';
      iconEl.className = 'stamp-icon-large entry';
      break;
    case 'exit':
      stampIcon = '🔵';
      stampTypeText = '出境章';
      iconEl.className = 'stamp-icon-large exit';
      break;
    case 'special':
      stampIcon = '🌟';
      stampTypeText = '纪念章';
      iconEl.className = 'stamp-icon-large special';
      break;
    case 'creative':
      stampIcon = '🎨';
      stampTypeText = '创作章';
      iconEl.className = 'stamp-icon-large creative';
      break;
  }
  
  iconEl.textContent = stampIcon;
  typeEl.textContent = stampTypeText;
  countryEl.textContent = `${country.flag} ${country.name.zh}`;
  
  // 格式化日期
  const date = new Date(newStamp.date);
  dateEl.textContent = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  
  // 渲染印章预览（显示所有印章）
  renderStampPreview(previewGrid, allStamps, isCompleted);
  
  // 根据完成状态显示按钮
  if (isCompleted) {
    // 全部完成，只显示"太棒了"按钮
    closeBtn.style.display = 'block';
    continueBtn.style.display = 'none';
    backBtn.style.display = 'none';
  } else {
    // 未全部完成，显示继续挑战和返回按钮
    closeBtn.style.display = 'none';
    continueBtn.style.display = 'block';
    backBtn.style.display = 'block';
    
    // 根据下一个印章类型更新按钮文字
    const nextStampNames = { 1: '出境章', 2: '纪念章', 3: '创作章' };
    const nextStampName = nextStampNames[allStamps.length] || '下一个';
    continueBtn.textContent = `继续挑战（${nextStampName}）➡️`;
  }
  
  // 显示弹窗
  modal.classList.add('active');
  
  // 添加星星效果
  createConfetti(modal.querySelector('.stamp-modal-content'));
}

// 渲染印章预览
function renderStampPreview(container, stamps, isCompleted) {
  container.innerHTML = '';
  
  // 显示所有已获得的印章
  if (stamps && stamps.length > 0) {
    stamps.forEach(stamp => {
      const mini = document.createElement('div');
      mini.className = `stamp-mini ${stamp.type}`;
      mini.textContent = getStampEmoji(stamp.type);
      container.appendChild(mini);
    });
  }
  
  // 如果完成，添加完成标记
  if (isCompleted) {
    const completeMark = document.createElement('div');
    completeMark.className = 'stamp-complete-mark';
    completeMark.textContent = '✅';
    container.appendChild(completeMark);
  }
}

// 创建星星效果
function createConfetti(container) {
  const colors = ['#FFD700', '#FF6B6B', '#4DABF7', '#69DB7C', '#DA77F2'];
  
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.cssText = `
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      animation: confettiFall ${1 + Math.random() * 2}s ease-out forwards;
      opacity: 0;
      z-index: 10;
    `;
    container.appendChild(confetti);
    
    // 动画结束后移除
    setTimeout(() => confetti.remove(), 3000);
  }
}

// 关闭印章弹窗
function closeStampModal() {
  const modal = document.getElementById('stamp-modal');
  modal.classList.remove('active');
  audioManager.playSound('tap');
}

// 继续挑战下一个游戏
function continueToNextGame() {
  const modal = document.getElementById('stamp-modal');
  modal.classList.remove('active');
  
  // 启动下一个游戏
  if (currentStampCountryId) {
    startStampGame(currentStampCountryId);
  }
}

// 返回国家详情
function backToCountry() {
  const modal = document.getElementById('stamp-modal');
  modal.classList.remove('active');
  
  // 重新打开国家详情弹窗
  if (currentStampCountryId) {
    // 先更新国家详情弹窗中的印章状态
    updateCountryStampStatus(currentStampCountryId);
    
    // 重新显示弹窗
    const country = getCountryById(currentStampCountryId);
    if (country) {
      const flagModal = document.getElementById('flag-modal');
      showModal(flagModal, 'scale');
    }
  }
}

// 更新国家详情弹窗中的印章状态（供外部调用）
function updateCountryStampStatus(countryId) {
  const stampStatus = document.getElementById('stamp-status');
  const getPassportBtn = document.getElementById('get-passport-btn');
  const modalCollected = document.getElementById('modal-collected');
  
  if (!stampStatus || !getPassportBtn) return;
  
  const stamps = getCountryStamp(countryId);
  
  if (stamps && stamps.length > 0) {
    const stampCount = stamps.length;
    const isCompleted = stampCount >= 3;
    
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
      getPassportBtn.textContent = '✅ 已完成收集';
      getPassportBtn.disabled = true;
      if (modalCollected) {
        modalCollected.style.display = 'block';
        modalCollected.innerHTML = '🎉 恭喜！该国家已完全收集！';
      }
    } else {
      const nextStamp = stampCount === 1 ? '出境章' : '纪念章';
      getPassportBtn.textContent = `🎮 继续挑战（${nextStamp}）`;
      getPassportBtn.disabled = false;
      if (modalCollected) {
        modalCollected.style.display = 'none';
      }
    }
  } else {
    stampStatus.innerHTML = `
      <div class="stamp-progress">
        <span class="stamp-slot empty">?</span>
        <span class="stamp-slot empty">?</span>
        <span class="stamp-slot empty">?</span>
      </div>
    `;
    getPassportBtn.textContent = '🎮 获取护照印章';
    getPassportBtn.disabled = false;
    if (modalCollected) {
      modalCollected.style.display = 'none';
    }
  }
  
  // 更新按钮点击事件
  getPassportBtn.onclick = () => {
    closeModal();
    startStampGame(countryId);
  };
}

// 关闭游戏弹窗
function closeGameModal() {
  gameElements.modal.classList.remove('active');
  gameActive = false;
  audioManager.stopCurrentVoice();
  audioManager.playSound('tap');
}

// 打乱数组
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 添加 CSS 动画
const style = document.createElement('style');
style.textContent = `
  @keyframes confettiFall {
    0% {
      transform: translateY(-100px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(200px) rotate(720deg);
      opacity: 0;
    }
  }
  
  .game-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }
  
  .game-close-btn:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  
  .stamp-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .stamp-badge.entry {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.1));
    color: #FF6B6B;
  }
  
  .stamp-badge.exit {
    background: linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(77, 171, 247, 0.1));
    color: #4DABF7;
  }
  
  .stamp-badge.special {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
    color: #D4A900;
  }
  
  .stamp-badge-icon {
    font-size: 24px;
  }
  
  .stamp-badge-text {
    font-size: 16px;
  }
`;
document.head.appendChild(style);
