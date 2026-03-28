# 小小环球旅行家 - 游戏玩法增强实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为小小环球旅行家增加语音引导系统和多种小游戏，丰富玩法体验

**Architecture:** 
- 新增独立游戏模块文件，通过统一的接口与主应用集成
- 使用 Web Speech API 实现语音引导
- 使用 Canvas API 实现涂色和拼图游戏

**Tech Stack:** HTML5 Canvas, Web Speech API, CSS Animation, localStorage

---

## 文件结构规划

### 新增文件
```
world-explorer/
├── js/
│   ├── voice.js           # 语音引导模块
│   ├── game-tap.js        # 点击国旗游戏
│   ├── game-puzzle.js     # 拼图游戏
│   ├── game-match.js      # 翻牌配对游戏
│   └── game-coloring.js   # 涂色游戏
├── css/
│   └── games.css          # 新游戏样式
└── assets/
    └── flag-outlines/     # 国旗线稿SVG（按需生成）
```

### 需要修改的文件
- `index.html` - 添加新游戏弹窗HTML结构
- `js/app.js` - 集成新游戏模块，修改印章获取逻辑
- `js/storage.js` - 扩展数据结构支持画廊和配对历史
- `js/data.js` - 添加游戏配置数据

---

## Phase 1: 语音引导系统

### Task 1.1: 创建语音引导模块

**Files:**
- Create: `js/voice.js`

- [ ] **Step 1: 创建 voice.js 基础结构**

```javascript
// 世界环球旅行家 - 语音引导模块

const VoiceManager = {
  // 语音合成实例
  synth: window.speechSynthesis,
  
  // 当前是否正在播放
  isPlaying: false,
  
  // 语音配置
  config: {
    lang: 'zh-CN',
    rate: 0.9,      // 语速稍慢，适合儿童
    pitch: 1.1,     // 音调稍高，更活泼
    volume: 1
  },
  
  // 初始化
  init() {
    // 预加载语音列表
    this.voices = this.synth.getVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
    }
    console.log('🔊 语音模块初始化完成');
  },
  
  // 播放语音
  speak(text, callback) {
    if (!text || this.isPlaying) return;
    
    // 取消之前的语音
    this.synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.config.lang;
    utterance.rate = this.config.rate;
    utterance.pitch = this.config.pitch;
    utterance.volume = this.config.volume;
    
    // 尝试选择中文语音
    const zhVoice = this.voices.find(v => v.lang.includes('zh'));
    if (zhVoice) {
      utterance.voice = zhVoice;
    }
    
    utterance.onstart = () => {
      this.isPlaying = true;
    };
    
    utterance.onend = () => {
      this.isPlaying = false;
      if (callback) callback();
    };
    
    utterance.onerror = () => {
      this.isPlaying = false;
    };
    
    this.synth.speak(utterance);
  },
  
  // 停止播放
  stop() {
    this.synth.cancel();
    this.isPlaying = false;
  },
  
  // 预设文本模板
  templates: {
    welcome: () => '小小环球旅行家，点击大洲开始探险吧！',
    continent: (name, count) => `这里是${name}，有${count}个国家等你探索！`,
    countryInfo: (country) => `${country.name.zh}，首都${country.capital}，货币是${country.currency}。`,
    gameRule: (type) => {
      const rules = {
        tap: '找出这个国家的国旗，点对了就能获得入境章！',
        puzzle: '把打乱的国旗拼好吧，拼好就能获得出境章！',
        match: '轮流翻开两张牌，配对成功得一分！',
        coloring: '给国旗涂上颜色，创作你的专属作品！'
      };
      return rules[type] || '';
    },
    stampEarned: (countryName, stampType) => {
      const types = { entry: '入境章', exit: '出境章', special: '纪念章' };
      return `恭喜你获得了${countryName}的${types[stampType]}！`;
    },
    badgeEarned: (badgeName) => `太棒了！你获得了${badgeName}勋章！`,
    tryAgain: '再试试看！',
    correct: '答对了！真棒！',
    wrong: '不对哦，再想想！',
    playerTurn: (name) => `轮到${name}了！`,
    matchSuccess: '配对成功！',
    matchFail: '配对失败，换对方翻牌。',
    gameWin: (name) => `游戏结束！${name}获胜！`
  }
};

// 导出
window.VoiceManager = VoiceManager;
```

- [ ] **Step 2: 在 index.html 中引入 voice.js**

在 `js/game.js` 之前添加：
```html
<script src="js/voice.js"></script>
```

- [ ] **Step 3: 在 app.js 中初始化语音模块**

在 `initApp()` 函数开头添加：
```javascript
// 初始化语音模块
VoiceManager.init();
```

- [ ] **Step 4: 创建语音按钮组件样式**

在 `css/style.css` 末尾添加：
```css
/* ===== 语音按钮 ===== */
.voice-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.voice-btn:hover {
  transform: scale(1.1);
}

.voice-btn:active {
  transform: scale(0.95);
}

.voice-btn.playing {
  animation: voicePulse 1s ease-in-out infinite;
}

@keyframes voicePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.5); }
  50% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
}
```

- [ ] **Step 5: 提交语音模块**

```bash
git add js/voice.js index.html css/style.css
git commit -m "feat: 添加语音引导模块基础结构"
```

---

### Task 1.2: 在关键位置添加语音按钮

**Files:**
- Modify: `index.html`
- Modify: `js/app.js`

- [ ] **Step 1: 在首页标题旁添加语音按钮**

修改 `index.html` 中的 header-title 部分：
```html
<h1 class="header-title">
  <span class="title-icon">🌍</span>
  <span class="title-text">小小环球旅行家</span>
  <button class="voice-btn" onclick="VoiceManager.speak(VoiceManager.templates.welcome())">🔊</button>
</h1>
```

- [ ] **Step 2: 在大洲弹窗标题旁添加语音按钮**

修改 `openContinent()` 函数中的标题渲染：
```javascript
document.getElementById('continent-title').innerHTML = `
  ${continent.icon} ${continent.name}
  <button class="voice-btn" onclick="VoiceManager.speak('${continent.name}，有${countries.length}个国家等你探索！')">🔊</button>
`;
```

- [ ] **Step 3: 在国家详情弹窗添加语音按钮**

在 `openCountry()` 函数中添加语音按钮，并在 modal-header 后添加：
```javascript
// 在 modal-header 后添加语音按钮
const voiceBtn = document.createElement('button');
voiceBtn.className = 'voice-btn';
voiceBtn.innerHTML = '🔊';
voiceBtn.onclick = () => {
  const text = `${country.name.zh}，首都${country.capital}，货币是${country.currency}，语言是${country.language}。`;
  VoiceManager.speak(text);
};
document.querySelector('.modal-header').appendChild(voiceBtn);
```

- [ ] **Step 4: 在游戏弹窗添加规则语音按钮**

在 `game.js` 的 `startGame()` 函数中添加规则语音按钮。

- [ ] **Step 5: 提交语音按钮集成**

```bash
git add index.html js/app.js js/game.js
git commit -m "feat: 在关键位置添加语音引导按钮"
```

---

## Phase 2: 入境章游戏 - 点击国旗

### Task 2.1: 创建点击国旗游戏模块

**Files:**
- Create: `js/game-tap.js`
- Create: `css/games.css`

- [ ] **Step 1: 创建 game-tap.js**

```javascript
// 世界环球旅行家 - 点击国旗游戏（入境章）

const TapGame = {
  // 游戏状态
  targetCountry: null,
  options: [],
  isPlaying: false,
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements.modal = document.getElementById('tap-game-modal');
    this.elements.container = document.getElementById('tap-flags-container');
    this.elements.hint = document.getElementById('tap-game-hint');
    console.log('🎮 点击国旗游戏模块初始化完成');
  },
  
  // 开始游戏
  start(countryId) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountry = country;
    this.isPlaying = true;
    
    // 显示弹窗
    this.elements.modal.style.display = 'flex';
    this.elements.modal.classList.add('active');
    
    // 语音播报目标
    VoiceManager.speak(`找出${country.name.zh}的国旗！`);
    
    // 更新提示文字
    this.elements.hint.textContent = `找出 ${country.flag} ${country.name.zh} 的国旗`;
    
    // 生成选项
    this.generateOptions();
    
    return true;
  },
  
  // 生成选项（目标国旗 + 干扰项）
  generateOptions() {
    const continent = this.targetCountry.continent;
    const sameContinentCountries = COUNTRIES.filter(c => c.continent === continent);
    
    // 随机选3-5个干扰项
    const distractors = sameContinentCountries
      .filter(c => c.id !== this.targetCountry.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    // 合并目标并打乱
    this.options = [this.targetCountry, ...distractors]
      .sort(() => Math.random() - 0.5);
    
    // 渲染国旗
    this.renderFlags();
  },
  
  // 渲染飘动的国旗
  renderFlags() {
    this.elements.container.innerHTML = this.options.map((country, index) => `
      <div class="floating-flag" 
           data-country="${country.id}"
           style="animation-delay: ${index * 0.2}s; left: ${10 + Math.random() * 80}%; top: ${10 + Math.random() * 60}%"
           onclick="TapGame.selectFlag('${country.id}')">
        ${country.flag}
      </div>
    `).join('');
  },
  
  // 选择国旗
  selectFlag(countryId) {
    if (!this.isPlaying) return;
    
    const isCorrect = countryId === this.targetCountry.id;
    const selectedEl = document.querySelector(`[data-country="${countryId}"]`);
    
    if (isCorrect) {
      // 正确！
      selectedEl.classList.add('correct');
      VoiceManager.speak(VoiceManager.templates.correct(), () => {
        this.close();
        // 触发获得印章
        onGameComplete(this.targetCountry.id, 'entry');
      });
    } else {
      // 错误
      selectedEl.classList.add('wrong');
      VoiceManager.speak(VoiceManager.templates.tryAgain());
      setTimeout(() => {
        selectedEl.classList.remove('wrong');
      }, 500);
    }
  },
  
  // 关闭游戏
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
  }
};

window.TapGame = TapGame;
```

- [ ] **Step 2: 创建 games.css 样式**

```css
/* ===== 点击国旗游戏 ===== */
.tap-game-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1100;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.tap-game-modal.active {
  display: flex;
}

.tap-game-content {
  width: 90%;
  max-width: 500px;
  height: 70%;
  background: linear-gradient(180deg, #FFF9E6 0%, #FFE4B5 100%);
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.tap-game-header {
  text-align: center;
  margin-bottom: 20px;
}

.tap-game-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.tap-game-hint {
  font-size: 18px;
  color: #666;
  margin-top: 10px;
}

#tap-flags-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.floating-flag {
  position: absolute;
  font-size: 48px;
  cursor: pointer;
  animation: float 3s ease-in-out infinite;
  transition: transform 0.2s ease;
  user-select: none;
}

.floating-flag:hover {
  transform: scale(1.2);
}

.floating-flag:active {
  transform: scale(0.9);
}

.floating-flag.correct {
  animation: correctBounce 0.5s ease forwards;
}

.floating-flag.wrong {
  animation: wrongShake 0.5s ease;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes correctBounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1.3); opacity: 0; }
}

@keyframes wrongShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}
```

- [ ] **Step 3: 在 index.html 添加游戏弹窗结构**

在 `game-modal` 之前添加：
```html
<!-- ===== 点击国旗游戏弹窗 ===== -->
<div id="tap-game-modal" class="tap-game-modal">
  <div class="tap-game-content">
    <div class="tap-game-header">
      <div class="tap-game-title">🎯 找出国旗</div>
      <div id="tap-game-hint" class="tap-game-hint">找出正确的国旗！</div>
    </div>
    <div id="tap-flags-container">
      <!-- 飘动的国旗动态生成 -->
    </div>
    <button class="game-close-btn" onclick="TapGame.close()">✕ 跳过</button>
  </div>
</div>
```

- [ ] **Step 4: 在 index.html 引入 game-tap.js**

在 `js/game.js` 之后添加：
```html
<script src="js/game-tap.js"></script>
```

- [ ] **Step 5: 初始化游戏模块**

在 `app.js` 的 `initApp()` 中添加：
```javascript
// 初始化点击国旗游戏
TapGame.init();
```

- [ ] **Step 6: 提交点击国旗游戏**

```bash
git add js/game-tap.js css/games.css index.html js/app.js
git commit -m "feat: 添加点击国旗游戏（入境章）"
```

---

### Task 2.2: 集成入境章游戏到印章获取流程

**Files:**
- Modify: `js/app.js`
- Modify: `js/storage.js`

- [ ] **Step 1: 修改 addStampToCountry 函数**

在 `storage.js` 中修改印章获取逻辑，根据印章类型调用不同游戏：

```javascript
// 修改 addStampToCountry 函数，返回需要玩的游戏类型
function addStampToCountry(countryId) {
  const data = loadData();
  const countryStamps = data.countryStamps[countryId] || [];
  
  const alreadyCompleted = countryStamps.length >= 3;
  if (alreadyCompleted) {
    return { alreadyCompleted: true, newStamp: null, stamps: countryStamps };
  }
  
  // 确定下一个印章类型
  const stampTypes = ['entry', 'exit', 'special'];
  const nextType = stampTypes[countryStamps.length];
  
  return {
    alreadyCompleted: false,
    newStamp: nextType,
    stamps: countryStamps,
    needGame: true,
    gameType: nextType
  };
}

// 新增：确认获得印章（游戏通过后调用）
function confirmStamp(countryId, stampType) {
  const data = loadData();
  if (!data.countryStamps[countryId]) {
    data.countryStamps[countryId] = [];
  }
  
  const stamp = {
    type: stampType,
    date: new Date().toISOString(),
    emoji: stampType === 'entry' ? '🛬' : stampType === 'exit' ? '🛫' : '🌟'
  };
  
  data.countryStamps[countryId].push(stamp);
  
  // 检查是否完成国家
  const isCompleted = data.countryStamps[countryId].length >= 3;
  if (isCompleted) {
    data.completedCountries = data.completedCountries || [];
    if (!data.completedCountries.includes(countryId)) {
      data.completedCountries.push(countryId);
    }
  }
  
  saveData(data);
  return { stamp, isCompleted, totalStamps: data.countryStamps[countryId].length };
}
```

- [ ] **Step 2: 修改护照按钮点击逻辑**

在 `app.js` 中修改 `#get-passport-btn` 的点击事件：

```javascript
document.getElementById('get-passport-btn').onclick = () => {
  const result = addStampToCountry(currentCountry.id);
  
  if (result.alreadyCompleted) {
    showToast('该国家的印章已全部收集完成！', 'info');
    return;
  }
  
  // 根据印章类型启动不同游戏
  switch (result.gameType) {
    case 'entry':
      closeModal();
      TapGame.start(currentCountry.id);
      break;
    case 'exit':
      closeModal();
      PuzzleGame.start(currentCountry.id);
      break;
    case 'special':
      // 后续实现
      closeModal();
      showGameSelection(currentCountry.id);
      break;
  }
};
```

- [ ] **Step 3: 添加游戏完成回调**

在 `app.js` 中添加：

```javascript
// 游戏完成回调
function onGameComplete(countryId, stampType) {
  const result = confirmStamp(countryId, stampType);
  
  // 显示获得印章弹窗
  showStampModal(countryId, result.stamp);
  
  // 检查是否解锁勋章
  checkAndUnlockBadge();
}

// 显示印章获得弹窗
function showStampModal(countryId, stamp) {
  const country = getCountryById(countryId);
  const stampModal = document.getElementById('stamp-modal');
  
  document.getElementById('stamp-icon-large').textContent = stamp.emoji;
  document.getElementById('stamp-type-text').textContent = 
    stamp.type === 'entry' ? '入境章' : stamp.type === 'exit' ? '出境章' : '纪念章';
  document.getElementById('stamp-country').textContent = country.name.zh;
  document.getElementById('stamp-date').textContent = new Date().toLocaleDateString('zh-CN');
  
  stampModal.style.display = 'flex';
  stampModal.classList.add('active');
  
  // 播放语音
  VoiceManager.speak(VoiceManager.templates.stampEarned(country.name.zh, stamp.type));
}
```

- [ ] **Step 4: 提交印章流程修改**

```bash
git add js/app.js js/storage.js
git commit -m "feat: 集成点击国旗游戏到印章获取流程"
```

---

## Phase 3: 出境章游戏 - 拼图

### Task 3.1: 创建拼图游戏模块

**Files:**
- Create: `js/game-puzzle.js`

- [ ] **Step 1: 创建 game-puzzle.js**

```javascript
// 世界环球旅行家 - 拼图游戏（出境章）

const PuzzleGame = {
  targetCountry: null,
  pieces: [],
  placedPieces: [],
  gridSize: 3, // 默认3x2
  isPlaying: false,
  
  elements: {},
  
  init() {
    this.elements.modal = document.getElementById('puzzle-game-modal');
    this.elements.reference = document.getElementById('puzzle-reference');
    this.elements.piecesContainer = document.getElementById('puzzle-pieces');
    this.elements.dropzone = document.getElementById('puzzle-dropzone');
    console.log('🧩 拼图游戏模块初始化完成');
  },
  
  start(countryId) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountry = country;
    this.isPlaying = true;
    this.placedPieces = [];
    
    // 根据国旗复杂度决定网格大小
    this.gridSize = this.getGridSize(country.id);
    
    // 显示弹窗
    this.elements.modal.style.display = 'flex';
    this.elements.modal.classList.add('active');
    
    // 语音播报
    VoiceManager.speak(`把${country.name.zh}的国旗拼好吧！`);
    
    // 生成拼图
    this.generatePuzzle();
    
    return true;
  },
  
  // 根据国家决定拼图难度
  getGridSize(countryId) {
    // 简单国旗：日本、法国、波兰等
    const simpleFlags = ['japan', 'france', 'poland', 'italy', 'germany'];
    return simpleFlags.includes(countryId) ? 2 : 3;
  },
  
  // 生成拼图
  generatePuzzle() {
    const rows = 2;
    const cols = this.gridSize;
    const totalPieces = rows * cols;
    
    // 生成参考图（国旗）
    this.elements.reference.innerHTML = `
      <div class="puzzle-reference-flag">${this.targetCountry.flag}</div>
      <div class="puzzle-reference-hint">参考图</div>
    `;
    
    // 生成碎片槽位
    this.elements.dropzone.innerHTML = '';
    for (let i = 0; i < totalPieces; i++) {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.index = i;
      slot.onclick = () => this.placePiece(i);
      this.elements.dropzone.appendChild(slot);
    }
    
    // 生成碎片（打乱顺序）
    this.pieces = Array.from({ length: totalPieces }, (_, i) => i)
      .sort(() => Math.random() - 0.5);
    
    this.renderPieces();
  },
  
  // 渲染碎片
  renderPieces() {
    const cols = this.gridSize;
    
    this.elements.piecesContainer.innerHTML = this.pieces.map((pieceIndex, i) => {
      const col = pieceIndex % cols;
      const row = Math.floor(pieceIndex / cols);
      const bgPosition = `${-col * 100}% ${-row * 100}%`;
      
      return `
        <div class="puzzle-piece" 
             data-index="${pieceIndex}"
             style="background-position: ${bgPosition}"
             onclick="PuzzleGame.selectPiece(${pieceIndex})">
        </div>
      `;
    }).join('');
  },
  
  selectedPiece: null,
  
  // 选择碎片
  selectPiece(pieceIndex) {
    if (this.placedPieces.includes(pieceIndex)) return;
    
    // 取消之前的选择
    document.querySelectorAll('.puzzle-piece').forEach(el => {
      el.classList.remove('selected');
    });
    
    // 选中当前碎片
    this.selectedPiece = pieceIndex;
    const pieceEl = document.querySelector(`.puzzle-piece[data-index="${pieceIndex}"]`);
    if (pieceEl) pieceEl.classList.add('selected');
  },
  
  // 放置碎片到槽位
  placePiece(slotIndex) {
    if (this.selectedPiece === null) return;
    
    const slot = document.querySelector(`.puzzle-slot[data-index="${slotIndex}"]`);
    
    // 检查是否正确
    if (this.selectedPiece === slotIndex) {
      // 正确！
      slot.classList.add('correct');
      slot.innerHTML = '✓';
      this.placedPieces.push(this.selectedPiece);
      
      // 从碎片区移除
      const pieceEl = document.querySelector(`.puzzle-piece[data-index="${this.selectedPiece}"]`);
      if (pieceEl) pieceEl.remove();
      
      // 检查是否完成
      if (this.placedPieces.length === this.pieces.length) {
        this.onComplete();
      }
    } else {
      // 错误
      slot.classList.add('wrong');
      setTimeout(() => slot.classList.remove('wrong'), 300);
    }
    
    this.selectedPiece = null;
    document.querySelectorAll('.puzzle-piece').forEach(el => {
      el.classList.remove('selected');
    });
  },
  
  // 完成拼图
  onComplete() {
    VoiceManager.speak(VoiceManager.templates.correct(), () => {
      this.close();
      onGameComplete(this.targetCountry.id, 'exit');
    });
  },
  
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
  }
};

window.PuzzleGame = PuzzleGame;
```

- [ ] **Step 2: 添加拼图游戏样式**

在 `css/games.css` 中添加：

```css
/* ===== 拼图游戏 ===== */
.puzzle-game-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1100;
  align-items: center;
  justify-content: center;
}

.puzzle-game-modal.active {
  display: flex;
}

.puzzle-game-content {
  width: 90%;
  max-width: 600px;
  background: linear-gradient(180deg, #E8F5E9 0%, #C8E6C9 100%);
  border-radius: 30px;
  padding: 20px;
}

.puzzle-game-header {
  text-align: center;
  margin-bottom: 15px;
}

.puzzle-game-body {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.puzzle-reference {
  text-align: center;
}

.puzzle-reference-flag {
  font-size: 80px;
  margin-bottom: 5px;
}

.puzzle-reference-hint {
  font-size: 12px;
  color: #666;
}

.puzzle-dropzone {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  background: rgba(255,255,255,0.5);
  padding: 10px;
  border-radius: 10px;
}

.puzzle-dropzone.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.puzzle-slot {
  width: 80px;
  height: 50px;
  background: rgba(255,255,255,0.8);
  border: 2px dashed #999;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.puzzle-slot:hover {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.puzzle-slot.correct {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.2);
}

.puzzle-slot.wrong {
  animation: wrongShake 0.3s ease;
  border-color: #f44336;
}

.puzzle-pieces-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  background: rgba(255,255,255,0.5);
  border-radius: 10px;
}

.puzzle-piece {
  width: 80px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.puzzle-piece:hover {
  transform: scale(1.05);
}

.puzzle-piece.selected {
  border-color: #FFD700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}
```

- [ ] **Step 3: 在 index.html 添加拼图游戏弹窗**

```html
<!-- ===== 拼图游戏弹窗 ===== -->
<div id="puzzle-game-modal" class="puzzle-game-modal">
  <div class="puzzle-game-content">
    <div class="puzzle-game-header">
      <div class="tap-game-title">🧩 拼出国旗</div>
    </div>
    <div class="puzzle-game-body">
      <div class="puzzle-reference">
        <div id="puzzle-reference"></div>
      </div>
      <div>
        <div id="puzzle-dropzone" class="puzzle-dropzone"></div>
        <div id="puzzle-pieces" class="puzzle-pieces-container" style="margin-top: 10px;"></div>
      </div>
    </div>
    <button class="game-close-btn" onclick="PuzzleGame.close()">✕ 跳过</button>
  </div>
</div>
```

- [ ] **Step 4: 初始化并提交**

在 `app.js` 中初始化 `PuzzleGame.init()`

```bash
git add js/game-puzzle.js css/games.css index.html js/app.js
git commit -m "feat: 添加拼图游戏（出境章）"
```

---

## Phase 4: 纪念章游戏 - 翻牌配对

### Task 4.1: 创建翻牌配对游戏模块

**Files:**
- Create: `js/game-match.js`

- [ ] **Step 1: 创建 game-match.js（核心逻辑）**

```javascript
// 世界环球旅行家 - 翻牌配对游戏（纪念章）

const MatchGame = {
  // 游戏状态
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  totalPairs: 8,
  currentPlayer: 0,
  players: [
    { name: '玩家1', score: 0 },
    { name: '玩家2', score: 0 }
  ],
  isPlaying: false,
  canFlip: true,
  
  elements: {},
  
  init() {
    this.elements.modal = document.getElementById('match-game-modal');
    this.elements.board = document.getElementById('match-board');
    this.elements.scoreDisplay = document.getElementById('match-scores');
    this.elements.turnIndicator = document.getElementById('match-turn');
    console.log('🎴 翻牌配对游戏模块初始化完成');
  },
  
  // 显示设置界面
  showSetup() {
    const setupModal = document.getElementById('match-setup-modal');
    setupModal.style.display = 'flex';
    setupModal.classList.add('active');
  },
  
  // 开始游戏
  start(config) {
    this.players = [
      { name: config.player1 || '玩家1', score: 0 },
      { name: config.player2 || '玩家2', score: 0 }
    ];
    this.currentPlayer = 0;
    this.matchedPairs = 0;
    this.flippedCards = [];
    this.canFlip = true;
    this.isPlaying = true;
    
    // 选择国旗
    this.selectCards(config.continent);
    
    // 显示游戏弹窗
    document.getElementById('match-setup-modal').style.display = 'none';
    this.elements.modal.style.display = 'flex';
    this.elements.modal.classList.add('active');
    
    // 语音提示
    VoiceManager.speak(`游戏开始！${this.players[0].name}先来！`);
    
    this.renderBoard();
    this.updateScoreDisplay();
  },
  
  // 选择国旗卡片
  selectCards(continentId) {
    let countries = continentId 
      ? COUNTRIES.filter(c => c.continent === continentId)
      : COUNTRIES;
    
    // 随机选8个国家
    const selected = countries
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
    
    // 创建配对卡片（每个国家2张）
    this.cards = [];
    selected.forEach((country, index) => {
      this.cards.push({ id: index * 2, countryId: country.id, flag: country.flag, name: country.name.zh });
      this.cards.push({ id: index * 2 + 1, countryId: country.id, flag: country.flag, name: country.name.zh });
    });
    
    // 打乱顺序
    this.cards.sort(() => Math.random() - 0.5);
  },
  
  // 渲染游戏板
  renderBoard() {
    this.elements.board.innerHTML = this.cards.map((card, index) => `
      <div class="match-card" data-index="${index}" onclick="MatchGame.flipCard(${index})">
        <div class="match-card-inner">
          <div class="match-card-front">🎴</div>
          <div class="match-card-back">${card.flag}</div>
        </div>
      </div>
    `).join('');
  },
  
  // 翻牌
  flipCard(index) {
    if (!this.canFlip) return;
    if (this.flippedCards.length >= 2) return;
    
    const cardEl = document.querySelector(`.match-card[data-index="${index}"]`);
    const card = this.cards[index];
    
    // 检查是否已翻开或已配对
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) {
      return;
    }
    
    // 翻开卡片
    cardEl.classList.add('flipped');
    this.flippedCards.push({ index, card });
    
    // 检查是否翻开两张
    if (this.flippedCards.length === 2) {
      this.canFlip = false;
      this.checkMatch();
    }
  },
  
  // 检查配对
  checkMatch() {
    const [first, second] = this.flippedCards;
    
    if (first.card.countryId === second.card.countryId) {
      // 配对成功！
      setTimeout(() => {
        document.querySelector(`.match-card[data-index="${first.index}"]`).classList.add('matched');
        document.querySelector(`.match-card[data-index="${second.index}"]`).classList.add('matched');
        
        this.players[this.currentPlayer].score++;
        this.matchedPairs++;
        this.flippedCards = [];
        this.canFlip = true;
        
        VoiceManager.speak(VoiceManager.templates.matchSuccess);
        this.updateScoreDisplay();
        
        // 检查游戏结束
        if (this.matchedPairs === this.totalPairs) {
          this.endGame();
        }
      }, 500);
    } else {
      // 配对失败
      setTimeout(() => {
        document.querySelector(`.match-card[data-index="${first.index}"]`).classList.remove('flipped');
        document.querySelector(`.match-card[data-index="${second.index}"]`).classList.remove('flipped');
        
        this.flippedCards = [];
        this.canFlip = true;
        
        // 换人
        this.currentPlayer = 1 - this.currentPlayer;
        VoiceManager.speak(VoiceManager.templates.matchFail);
        this.updateScoreDisplay();
      }, 1000);
    }
  },
  
  // 更新分数显示
  updateScoreDisplay() {
    this.elements.scoreDisplay.innerHTML = `
      <div class="match-player ${this.currentPlayer === 0 ? 'active' : ''}">
        <span>${this.players[0].name}</span>
        <span class="match-score">${this.players[0].score}</span>
      </div>
      <div class="match-vs">VS</div>
      <div class="match-player ${this.currentPlayer === 1 ? 'active' : ''}">
        <span>${this.players[1].name}</span>
        <span class="match-score">${this.players[1].score}</span>
      </div>
    `;
    this.elements.turnIndicator.textContent = `轮到 ${this.players[this.currentPlayer].name}`;
  },
  
  // 结束游戏
  endGame() {
    const winner = this.players[0].score > this.players[1].score 
      ? this.players[0] 
      : this.players[1].score > this.players[0].score 
        ? this.players[1] 
        : null;
    
    if (winner) {
      VoiceManager.speak(VoiceManager.templates.gameWin(winner.name));
      // 获胜者获得纪念章（如果当前有目标国家）
    } else {
      VoiceManager.speak('平局！都很厉害！');
    }
    
    setTimeout(() => {
      this.close();
      // 显示结果
      showMatchResult(this.players, winner);
    }, 2000);
  },
  
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
  }
};

window.MatchGame = MatchGame;
```

- [ ] **Step 2: 添加翻牌配对样式**

在 `css/games.css` 中添加翻牌配对游戏样式（包含3D翻转效果）

- [ ] **Step 3: 在 index.html 添加游戏弹窗**

- [ ] **Step 4: 提交翻牌配对游戏**

---

## Phase 5: 涂色创作游戏

### Task 5.1: 创建涂色游戏模块

**Files:**
- Create: `js/game-coloring.js`

- [ ] **Step 1: 创建 game-coloring.js**

实现Canvas涂色、Flood Fill算法、保存功能

- [ ] **Step 2: 添加涂色游戏样式**

- [ ] **Step 3: 在 index.html 添加涂色弹窗**

- [ ] **Step 4: 提交涂色游戏**

---

## Phase 6: 我的画廊页面

### Task 6.1: 创建画廊页面

**Files:**
- Modify: `index.html`
- Modify: `js/app.js`
- Modify: `js/storage.js`

- [ ] **Step 1: 在 storage.js 添加画廊数据管理**

- [ ] **Step 2: 创建画廊页面HTML**

- [ ] **Step 3: 实现画廊展示和导出功能**

- [ ] **Step 4: 提交画廊功能**

---

## 执行顺序总结

1. **Phase 1**: 语音引导系统 (Task 1.1 → 1.2)
2. **Phase 2**: 点击国旗游戏 (Task 2.1 → 2.2)
3. **Phase 3**: 拼图游戏 (Task 3.1)
4. **Phase 4**: 翻牌配对游戏 (Task 4.1)
5. **Phase 5**: 涂色创作游戏 (Task 5.1)
6. **Phase 6**: 我的画廊页面 (Task 6.1)

每个 Phase 完成后进行集成测试，确保功能正常再继续下一阶段。
