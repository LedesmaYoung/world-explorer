// 世界环球旅行家 - 拼图游戏模块

// 难度分级配置
const PUZZLE_DIFFICULTY_LEVELS = [
  { minLevel: 1, maxLevel: 5, name: '入门', gridSize: 2, showRef: true, flagPool: 'simple' },
  { minLevel: 6, maxLevel: 10, name: '简单', gridSize: 2, showRef: true, flagPool: 'random' },
  { minLevel: 11, maxLevel: 15, name: '中等', gridSize: 3, showRef: true, flagPool: 'simple' },
  { minLevel: 16, maxLevel: 20, name: '进阶', gridSize: 3, showRef: true, flagPool: 'random' },
  { minLevel: 21, maxLevel: 25, name: '困难', gridSize: 3, showRef: 'flash', flagPool: 'simple' },
  { minLevel: 26, maxLevel: 30, name: '挑战', gridSize: 3, showRef: 'flash', flagPool: 'random' },
  { minLevel: 31, maxLevel: 999, name: '地狱', gridSize: 4, showRef: 'flash', flagPool: 'random' }
];

// 简单国旗（图案简单，容易辨识）
const SIMPLE_FLAGS = [
  'japan', 'france', 'poland', 'ukraine', 'thailand', 'indonesia', 'monaco', 'austria',
  'bangladesh', 'palau', 'canada', 'peru', 'colombia', 'sweden', 'finland', 'denmark',
  'norway', 'iceland', 'switzerland', 'belgium', 'germany', 'italy', 'ireland', 'netherlands'
];

// 拼图游戏状态
const PuzzleGame = {
  targetCountry: null,
  pieces: [],           // 拼图碎片数组
  placedPieces: [],     // 已放置的碎片
  gridSize: 2,          // 默认 2x2
  isPlaying: false,
  callback: null,
  pieceImages: [],      // 碎片图片数据
  
  // 独立模式状态
  isChallengeMode: false,
  currentLevel: 0,
  correctLevels: 0,
  wrongAttempts: 0,
  maxWrongAttempts: 3,
  placedCount: 0,       // 当前关卡已放置碎片数（新增）
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('puzzle-game-modal'),
      title: document.getElementById('puzzle-game-title'),
      reference: document.getElementById('puzzle-reference'),
      gridContainer: document.getElementById('puzzle-grid'),
      piecesContainer: document.getElementById('puzzle-pieces'),
      hint: document.getElementById('puzzle-hint'),
      skipBtn: document.getElementById('puzzle-skip-btn'),
      challengeInfo: document.getElementById('puzzle-challenge-info'),
      levelDisplay: document.getElementById('puzzle-level'),
      heartsDisplay: document.getElementById('puzzle-hearts'),
      challengeModal: document.getElementById('puzzle-challenge-modal'),
      challengeScore: document.getElementById('puzzle-challenge-score'),
      challengeRank: document.getElementById('puzzle-challenge-rank'),
      leaderboard: document.getElementById('puzzle-leaderboard')
    };
    console.log('🧩 拼图游戏模块初始化完成');
  },
  
  // 开始游戏（护照模式）
  start(countryId, callback) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountry = country;
    this.isPlaying = true;
    this.callback = callback;
    this.isChallengeMode = false;
    this.placedPieces = [];
    this.pieceImages = [];
    
    // 根据国旗复杂度决定网格大小
    this.gridSize = this.determineGridSize(countryId);
    
    // 生成拼图碎片
    this.generatePieces();
    
    // 更新标题
    this.elements.title.innerHTML = `
      把 ${country.name.zh} 的国旗拼好吧
      <button class="voice-btn" onclick="VoiceManager.speak('把${country.name.zh}的国旗拼好吧！')">🔊</button>
    `;
    
    // 显示参考国旗
    this.elements.reference.innerHTML = `
      <div class="puzzle-ref-flag">${country.flag}</div>
      <div class="puzzle-ref-label">参考图</div>
    `;
    this.elements.reference.style.display = 'block';
    
    // 隐藏挑战模式信息
    if (this.elements.challengeInfo) {
      this.elements.challengeInfo.style.display = 'none';
    }
    
    // 显示跳过按钮
    if (this.elements.skipBtn) {
      this.elements.skipBtn.style.display = 'block';
    }
    
    // 渲染拼图网格
    this.renderGrid();
    
    // 生成碎片图片并渲染
    this.generatePieceImages().then(() => {
      this.renderPieces();
    });
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak(`把${country.name.zh}的国旗拼好吧！`);
    
    return true;
  },
  
  // 开始拼图挑战（独立模式）
  startChallenge() {
    this.isChallengeMode = true;
    this.isPlaying = true;
    this.currentLevel = 0;
    this.correctLevels = 0;
    this.wrongAttempts = 0;
    this.callback = null;
    
    // 更新标题
    this.elements.title.innerHTML = `
      🧩 拼图挑战
      <button class="voice-btn" onclick="VoiceManager.speak('拼图挑战开始！')">🔊</button>
    `;
    
    // 隐藏参考图（后续根据难度决定）
    this.elements.reference.style.display = 'none';
    
    // 显示挑战模式信息
    if (this.elements.challengeInfo) {
      this.elements.challengeInfo.style.display = 'flex';
    }
    
    // 隐藏跳过按钮
    if (this.elements.skipBtn) {
      this.elements.skipBtn.style.display = 'none';
    }
    
    // 出第一题
    this.nextChallengeLevel();
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak('拼图挑战开始！把国旗拼好吧！');
    
    return true;
  },
  
  // 下一关（挑战模式）
  nextChallengeLevel() {
    this.currentLevel++;
    this.wrongAttempts = 0;
    this.placedPieces = [];
    this.pieceImages = [];
    
    // 获取当前难度
    const difficulty = this.getDifficultyLevel(this.currentLevel);
    this.gridSize = difficulty.gridSize;
    
    // 选择目标国家
    const targetCountry = this.selectTargetCountry(difficulty.flagPool);
    this.targetCountry = targetCountry;
    
    // 生成碎片
    this.generatePieces();
    
    // 更新关卡显示
    if (this.elements.levelDisplay) {
      this.elements.levelDisplay.textContent = `第 ${this.currentLevel} 关`;
    }
    
    // 更新红心显示
    this.updateHeartsDisplay();
    
    // 处理参考图显示
    this.handleReferenceDisplay(difficulty);
    
    // 渲染网格和碎片
    this.renderGrid();
    this.generatePieceImages().then(() => {
      this.renderPieces();
    });
    
    // 更新提示
    if (this.elements.hint) {
      this.elements.hint.innerHTML = `
        拼好 <strong>${targetCountry.name.zh}</strong> 的国旗
        <span class="difficulty-badge">${difficulty.name}</span>
      `;
    }
    
    // 播放语音
    VoiceManager.speak(`第${this.currentLevel}关！拼好${targetCountry.name.zh}的国旗！`);
  },
  
  // 获取难度等级
  getDifficultyLevel(level) {
    return PUZZLE_DIFFICULTY_LEVELS.find(
      d => level >= d.minLevel && level <= d.maxLevel
    ) || PUZZLE_DIFFICULTY_LEVELS[PUZZLE_DIFFICULTY_LEVELS.length - 1];
  },
  
  // 选择目标国家
  selectTargetCountry(pool) {
    if (pool === 'simple') {
      // 从简单国旗中选择
      const simpleCountryIds = SIMPLE_FLAGS.filter(id => getCountryById(id));
      const randomId = simpleCountryIds[Math.floor(Math.random() * simpleCountryIds.length)];
      return getCountryById(randomId);
    } else {
      // 随机选择
      return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    }
  },
  
  // 更新红心显示
  updateHeartsDisplay() {
    if (!this.elements.heartsDisplay) return;
    
    let heartsHtml = '';
    for (let i = 0; i < this.maxWrongAttempts; i++) {
      if (i < this.maxWrongAttempts - this.wrongAttempts) {
        heartsHtml += '❤️';
      } else {
        heartsHtml += '🖤';
      }
    }
    this.elements.heartsDisplay.innerHTML = heartsHtml;
  },
  
  // 处理参考图显示
  handleReferenceDisplay(difficulty) {
    const ref = this.elements.reference;
    
    if (difficulty.showRef === true) {
      // 始终显示
      ref.innerHTML = `
        <div class="puzzle-ref-flag">${this.targetCountry.flag}</div>
        <div class="puzzle-ref-label">参考图</div>
      `;
      ref.style.display = 'block';
      ref.classList.remove('flash-mode');
    } else if (difficulty.showRef === 'flash') {
      // 闪烁模式：显示3秒后隐藏
      ref.innerHTML = `
        <div class="puzzle-ref-flag">${this.targetCountry.flag}</div>
        <div class="puzzle-ref-label">参考图（3秒后隐藏）</div>
      `;
      ref.style.display = 'block';
      ref.classList.add('flash-mode');
      
      // 3秒后隐藏
      setTimeout(() => {
        if (this.isPlaying && this.isChallengeMode) {
          ref.innerHTML = `
            <div class="puzzle-ref-flag hidden">?</div>
            <div class="puzzle-ref-label">凭记忆拼图</div>
          `;
        }
      }, 3000);
    } else {
      ref.style.display = 'none';
    }
  },
  
  // 结束挑战
  endChallenge() {
    this.isPlaying = false;
    
    // 保存分数到排行榜
    const rank = savePuzzleGameScore(this.correctLevels);
    
    // 更新游戏统计
    updatePuzzleGameStats(this.correctLevels);
    
    // 更新结果弹窗
    if (this.elements.challengeScore) {
      this.elements.challengeScore.textContent = this.correctLevels;
    }
    
    if (this.elements.challengeRank) {
      this.elements.challengeRank.textContent = rank;
    }
    
    // 更新排行榜显示
    this.updateLeaderboard();
    
    // 显示结果弹窗
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.add('active');
      this.elements.challengeModal.style.display = 'flex';
    }
    
    // 播放语音
    const isGood = this.correctLevels >= 10;
    VoiceManager.speak(VoiceManager.templates.gameEnd(this.correctLevels, isGood) + ` 排名第${rank}名！`);
  },
  
  // 更新排行榜显示
  updateLeaderboard() {
    if (!this.elements.leaderboard) return;
    
    const leaderboard = getPuzzleGameLeaderboard();
    const currentTraveler = getCurrentTraveler();
    
    this.elements.leaderboard.innerHTML = leaderboard.map((entry, index) => `
      <div class="leaderboard-item ${entry.travelerId === currentTraveler?.id ? 'current' : ''}">
        <div class="leaderboard-rank">${index + 1}</div>
        <div class="leaderboard-info">
          <span class="leaderboard-name">${entry.travelerName}</span>
          <span class="leaderboard-score">${entry.score} 关</span>
        </div>
        <div class="leaderboard-date">${this.formatDate(entry.date)}</div>
      </div>
    `).join('');
  },
  
  // 格式化日期
  formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  
  // 继续挑战
  continueChallenge() {
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.remove('active');
      this.elements.challengeModal.style.display = 'none';
    }
    
    // 重新开始
    this.startChallenge();
  },
  
  // 返回主页
  backToHome() {
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.remove('active');
      this.elements.challengeModal.style.display = 'none';
    }
    this.close();
  },
  
  // 根据国家决定网格大小
  determineGridSize(countryId) {
    // 简单国旗（如日本、法国）用 2x2
    const simpleFlags = ['japan', 'france', 'poland', 'ukraine', 'thailand', 'indonesia', 'monaco', 'austria'];
    // 复杂国旗用 2x2 避免太难
    // const complexFlags = ['usa', 'uk', 'china', 'brazil'];
    
    if (simpleFlags.includes(countryId)) {
      return 2;
    }
    // 默认 2x2，对幼儿友好
    return 2;
  },
  
  // 生成拼图碎片数据
  generatePieces() {
    const total = this.gridSize * this.gridSize;
    this.pieces = [];
    
    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / this.gridSize);
      const col = i % this.gridSize;
      this.pieces.push({
        id: i,
        row: row,
        col: col,
        correctPosition: i,
        isPlaced: false
      });
    }
    
    // 打乱顺序
    this.pieces = this.pieces.sort(() => Math.random() - 0.5);
  },
  
  // 生成碎片图片（使用 Canvas 分割国旗）
  async generatePieceImages() {
    const flagEmoji = this.targetCountry.flag;
    const pieceWidth = 60;
    const pieceHeight = 45;
    const flagSize = 80; // 绘制国旗的总尺寸
    
    // 创建一个 canvas 来渲染完整的国旗
    const fullCanvas = document.createElement('canvas');
    fullCanvas.width = flagSize;
    fullCanvas.height = flagSize * 0.75; // 国旗通常是 3:2 比例
    const ctx = fullCanvas.getContext('2d');
    
    // 绘制国旗 emoji
    ctx.font = `${flagSize * 0.8}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(flagEmoji, fullCanvas.width / 2, fullCanvas.height / 2);
    
    // 为每个碎片切割图片
    const pieceW = fullCanvas.width / this.gridSize;
    const pieceH = fullCanvas.height / this.gridSize;
    
    this.pieceImages = [];
    
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const row = Math.floor(i / this.gridSize);
      const col = i % this.gridSize;
      
      // 创建碎片 canvas
      const pieceCanvas = document.createElement('canvas');
      pieceCanvas.width = pieceWidth;
      pieceCanvas.height = pieceHeight;
      const pieceCtx = pieceCanvas.getContext('2d');
      
      // 从完整国旗中切割对应区域
      pieceCtx.drawImage(
        fullCanvas,
        col * pieceW, row * pieceH, pieceW, pieceH,  // 源区域
        0, 0, pieceWidth, pieceHeight  // 目标区域
      );
      
      // 存储为 data URL
      this.pieceImages[i] = pieceCanvas.toDataURL('image/png');
    }
  },
  
  // 渲染拼图网格
  renderGrid() {
    const container = this.elements.gridContainer;
    container.innerHTML = '';
    container.className = `puzzle-grid grid-${this.gridSize}x${this.gridSize}`;
    
    const total = this.gridSize * this.gridSize;
    for (let i = 0; i < total; i++) {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.position = i;
      
      // 拖放事件
      slot.addEventListener('dragover', (e) => e.preventDefault());
      slot.addEventListener('drop', (e) => this.handleDrop(e, i));
      
      // 触摸事件支持
      slot.addEventListener('touchend', (e) => this.handleTouchEnd(e, i));
      
      container.appendChild(slot);
    }
  },
  
  // 渲染碎片
  renderPieces() {
    const container = this.elements.piecesContainer;
    container.innerHTML = '';
    
    this.pieces.forEach((piece, index) => {
      const pieceEl = document.createElement('div');
      pieceEl.className = 'puzzle-piece';
      pieceEl.dataset.pieceId = piece.id;
      pieceEl.draggable = true;
      
      // 显示国旗碎片图片
      if (this.pieceImages[piece.id]) {
        pieceEl.style.backgroundImage = `url(${this.pieceImages[piece.id]})`;
        pieceEl.style.backgroundSize = 'cover';
        pieceEl.style.backgroundPosition = 'center';
      } else {
        // 备用：显示数字
        pieceEl.innerHTML = `<span class="piece-number">${piece.id + 1}</span>`;
      }
      
      // 拖拽事件
      pieceEl.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('pieceId', piece.id);
        pieceEl.classList.add('dragging');
      });
      
      pieceEl.addEventListener('dragend', () => {
        pieceEl.classList.remove('dragging');
      });
      
      // 触摸事件
      pieceEl.addEventListener('touchstart', (e) => {
        this.selectedPiece = piece.id;
        pieceEl.classList.add('selected');
      });
      
      container.appendChild(pieceEl);
    });
  },
  
  // 处理拖放
  handleDrop(e, position) {
    e.preventDefault();
    
    const pieceId = parseInt(e.dataTransfer.getData('pieceId'));
    this.tryPlacePiece(pieceId, position);
  },
  
  // 处理触摸结束
  handleTouchEnd(e, position) {
    if (this.selectedPiece !== undefined) {
      this.tryPlacePiece(this.selectedPiece, position);
      this.selectedPiece = undefined;
      
      // 移除选中状态
      document.querySelectorAll('.puzzle-piece.selected').forEach(el => {
        el.classList.remove('selected');
      });
    }
  },
  
  // 尝试放置碎片
  tryPlacePiece(pieceId, position) {
    if (!this.isPlaying) return;
    
    const piece = this.pieces.find(p => p.id === pieceId);
    if (!piece || piece.isPlaced) return;
    
    // 检查该位置是否已有碎片
    const slot = this.elements.gridContainer.querySelector(`[data-position="${position}"]`);
    if (slot.querySelector('.puzzle-piece')) return;
    
    // 检查是否放对位置
    const isCorrect = piece.correctPosition === position;
    
    // 移动碎片到网格
    const pieceEl = this.elements.piecesContainer.querySelector(`[data-piece-id="${pieceId}"]`);
    
    if (isCorrect) {
      // 正确放置
      piece.isPlaced = true;
      pieceEl.classList.add('placed', 'correct');
      slot.appendChild(pieceEl);
      
      // 播放正确音效
      audioManager.playSound('tap');
      this.placedCount++;
      
      // 每放对一块都给予语音鼓励（概率 30%，避免太频繁）
      if (Math.random() < 0.3) {
        VoiceManager.speak(VoiceManager.templates.puzzlePlaced());
      }
      
      // 检查是否完成
      this.checkCompletion();
    } else {
      // 错误放置
      pieceEl.classList.add('wrong');
      audioManager.playSound('wrong');
      
      if (this.isChallengeMode) {
        // 挑战模式：增加错误计数
        this.wrongAttempts++;
        this.updateHeartsDisplay();
        
        if (this.wrongAttempts >= this.maxWrongAttempts) {
          // 错误次数用完，游戏结束
          VoiceManager.speak('错误太多次了！游戏结束！');
          setTimeout(() => {
            this.endChallenge();
          }, 800);
        } else {
          VoiceManager.speak(VoiceManager.templates.wrongEncourage() + ` 还有${this.maxWrongAttempts - this.wrongAttempts}次机会！`);
        }
      } else {
        // 护照模式：可以继续尝试
        VoiceManager.speak(VoiceManager.templates.wrongEncourage());
      }
      
      setTimeout(() => {
        pieceEl.classList.remove('wrong');
      }, 500);
    }
  },
  
  // 检查是否完成
  checkCompletion() {
    const placedCount = this.pieces.filter(p => p.isPlaced).length;
    const total = this.gridSize * this.gridSize;
    
    if (placedCount === total) {
      if (this.isChallengeMode) {
        // 挑战模式：进入下一关
        this.correctLevels++;
        audioManager.playSound('correct');
        
        // 显示成功动画
        this.showSuccessAnimation();
        
        VoiceManager.speak(VoiceManager.templates.correctPraise(), () => {
          setTimeout(() => {
            this.nextChallengeLevel();
          }, 1000);
        });
      } else {
        // 护照模式：完成游戏
        this.isPlaying = false;
        
        // 播放庆祝音效
        audioManager.playSound('correct');
        VoiceManager.speak(VoiceManager.templates.correctPraise(), () => {
          setTimeout(() => {
            this.close();
            if (this.callback) this.callback(true);
          }, 1500);
        });
        
        // 显示成功动画
        this.showSuccessAnimation();
      }
    }
  },
  
  // 显示成功动画
  showSuccessAnimation() {
    const container = this.elements.gridContainer;
    container.classList.add('completed');
    
    // 添加闪光效果
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const flash = document.createElement('div');
        flash.className = 'puzzle-flash';
        container.appendChild(flash);
        setTimeout(() => flash.remove(), 500);
      }, i * 200);
    }
  },
  
  // 关闭游戏
  close() {
    this.isPlaying = false;
    this.isChallengeMode = false;
    this.currentLevel = 0;
    this.correctLevels = 0;
    this.wrongAttempts = 0;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
    this.elements.gridContainer.innerHTML = '';
    this.elements.piecesContainer.innerHTML = '';
    this.selectedPiece = undefined;
  }
};

// 导出
window.PuzzleGame = PuzzleGame;
