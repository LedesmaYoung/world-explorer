// 世界环球旅行家 - 翻牌配对游戏模块（亲子竞技）

// 难度配置（pairs不能超过gridSize²/2）
const MATCH_DIFFICULTIES = [
  { gridSize: 3, pairs: 4, name: '入门', stars: '⭐' },
  { gridSize: 4, pairs: 8, name: '简单', stars: '⭐⭐' },
  { gridSize: 5, pairs: 12, name: '普通', stars: '⭐⭐⭐' },
  { gridSize: 6, pairs: 18, name: '困难', stars: '⭐⭐⭐⭐' },
  { gridSize: 7, pairs: 24, name: '大师', stars: '⭐⭐⭐⭐⭐' },
  { gridSize: 8, pairs: 32, name: '传奇', stars: '⭐⭐⭐⭐⭐⭐' },
  { gridSize: 9, pairs: 40, name: '王者', stars: '⭐⭐⭐⭐⭐⭐⭐' },
  { gridSize: 10, pairs: 50, name: '至尊', stars: '⭐⭐⭐⭐⭐⭐⭐⭐' }
];

// 翻牌配对游戏状态
const MatchGame = {
  // 游戏配置
  config: {
    gridSize: 4,          // 4x4 网格
    totalPairs: 8,        // 8对国旗
    flipDuration: 600,    // 翻牌动画时长
    matchDelay: 1000      // 配对失败延迟
  },
  
  // 游戏状态
  cards: [],              // 卡片数组
  flippedCards: [],       // 已翻开的卡片
  matchedPairs: 0,        // 已配对数量
  isPlaying: false,
  isProcessing: false,    // 是否正在处理翻牌
  currentPlayer: 0,       // 当前玩家 (0 或 1)
  players: [],            // 玩家信息
  callback: null,
  targetCountryId: null,  // 目标国家（获取纪念章的国家）
  isStandalone: false,    // 是否是独立模式（不关联护照印章）
  currentDifficulty: null, // 当前难度
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('match-game-modal'),
      difficultyModal: document.getElementById('match-difficulty-modal'),
      title: document.getElementById('match-game-title'),
      playersBar: document.getElementById('match-players-bar'),
      grid: document.getElementById('match-grid'),
      resultModal: document.getElementById('match-result-modal'),
      resultTitle: document.getElementById('match-result-title'),
      resultScores: document.getElementById('match-result-scores')
    };
    console.log('🃏 翻牌配对游戏模块初始化完成');
  },
  
  // 开始游戏
  start(countryId, callback) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountryId = countryId;
    this.isPlaying = true;
    this.callback = callback;
    // 如果没有回调函数，说明是独立模式
    this.isStandalone = (callback === null || callback === undefined);
    this.matchedPairs = 0;
    this.flippedCards = [];
    this.isProcessing = false;
    this.currentPlayer = 0;
    
    // 初始化玩家信息
    this.players = [
      { name: '玩家1', score: 0, avatar: '👤' },
      { name: '玩家2', score: 0, avatar: '👥' }
    ];
    
    // 生成卡片
    this.generateCards();
    
    // 更新标题
    this.elements.title.innerHTML = `
      翻牌配对 - ${country.name.zh}
      <button class="voice-btn" onclick="VoiceManager.speak('轮流翻开两张牌，配对成功得一分！')">🔊</button>
    `;
    
    // 渲染玩家栏
    this.renderPlayersBar();
    
    // 渲染卡片网格
    this.renderGrid();
    
    // 更新跳过按钮文本和行为
    const skipBtn = document.querySelector('.match-skip-btn');
    if (skipBtn) {
      skipBtn.textContent = this.isStandalone ? '✕ 放弃' : '✕ 返回';
      // 重新绑定点击事件
      skipBtn.onclick = () => {
        if (this.isStandalone) {
          // 独立模式：返回难度选择
          this.close();
          this.showDifficultySelect();
        } else {
          // 护照模式：调用回调
          this.close();
          if (this.callback) this.callback(false);
        }
      };
    }
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak('翻牌配对游戏！轮流翻开两张牌，配对成功得一分！');
    
    return true;
  },
  
  // 生成卡片数据
  generateCards() {
    const pairsNeeded = this.config.totalPairs;
    let selectedCountries = [];
    
    if (this.isStandalone && this.currentDifficulty) {
      // 独立模式 + 有难度配置：从所有国家中随机选取
      const shuffled = COUNTRIES.sort(() => Math.random() - 0.5);
      selectedCountries = shuffled.slice(0, pairsNeeded);
    } else {
      // 护照模式：使用原来的逻辑
      const country = getCountryById(this.targetCountryId);
      const continent = country.continent;
      const continentCountries = COUNTRIES.filter(c => c.continent === continent);
      
      // 随机选择国家（确保包含目标国家）
      selectedCountries = [country];
      const otherCountries = continentCountries.filter(c => c.id !== country.id);
      const shuffled = otherCountries.sort(() => Math.random() - 0.5);
      selectedCountries = selectedCountries.concat(shuffled.slice(0, pairsNeeded - 1));
      
      // 如果大洲国家不足，从其他大洲补充
      if (selectedCountries.length < pairsNeeded) {
        const additionalNeeded = pairsNeeded - selectedCountries.length;
        const otherContinents = COUNTRIES.filter(c => c.continent !== continent);
        const additional = otherContinents.sort(() => Math.random() - 0.5).slice(0, additionalNeeded);
        selectedCountries = selectedCountries.concat(additional);
      }
    }
    
    // 创建卡片对（每个国家2张卡片）
    this.cards = [];
    selectedCountries.forEach((c, index) => {
      // 第一张卡片
      this.cards.push({
        id: index * 2,
        countryId: c.id,
        flag: c.flag,
        name: c.name.zh,
        pairId: index,
        isFlipped: false,
        isMatched: false
      });
      // 第二张卡片
      this.cards.push({
        id: index * 2 + 1,
        countryId: c.id,
        flag: c.flag,
        name: c.name.zh,
        pairId: index,
        isFlipped: false,
        isMatched: false
      });
    });
    
    // 打乱卡片顺序
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  },
  
  // 渲染玩家栏
  renderPlayersBar() {
    this.elements.playersBar.innerHTML = `
      <div class="match-player ${this.currentPlayer === 0 ? 'active' : ''}" data-player="0">
        <span class="player-avatar">${this.players[0].avatar}</span>
        <span class="player-name">${this.players[0].name}</span>
        <span class="player-score">${this.players[0].score}</span>
      </div>
      <div class="match-vs">VS</div>
      <div class="match-player ${this.currentPlayer === 1 ? 'active' : ''}" data-player="1">
        <span class="player-avatar">${this.players[1].avatar}</span>
        <span class="player-name">${this.players[1].name}</span>
        <span class="player-score">${this.players[1].score}</span>
      </div>
    `;
  },
  
  // 渲染卡片网格
  renderGrid() {
    const grid = this.elements.grid;
    grid.innerHTML = '';
    
    // 根据gridSize动态设置列数
    grid.style.gridTemplateColumns = `repeat(${this.config.gridSize}, 1fr)`;
    
    this.cards.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'match-card';
      cardEl.dataset.cardId = card.id;
      
      cardEl.innerHTML = `
        <div class="match-card-inner">
          <div class="match-card-front">🎴</div>
          <div class="match-card-back">
            <span class="card-flag">${card.flag}</span>
          </div>
        </div>
      `;
      
      // 点击事件
      cardEl.addEventListener('click', () => this.handleCardClick(card.id));
      
      // 触摸事件
      cardEl.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.handleCardClick(card.id);
      });
      
      grid.appendChild(cardEl);
    });
  },
  
  // 处理卡片点击
  handleCardClick(cardId) {
    if (!this.isPlaying || this.isProcessing) return;
    
    const card = this.cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    
    // 翻开卡片
    this.flipCard(card);
    this.flippedCards.push(card);
    
    // 检查是否翻开了两张卡片
    if (this.flippedCards.length === 2) {
      this.isProcessing = true;
      
      const [first, second] = this.flippedCards;
      
      if (first.pairId === second.pairId) {
        // 配对成功
        this.handleMatch(first, second);
      } else {
        // 配对失败
        this.handleMismatch(first, second);
      }
    }
  },
  
  // 翻开卡片
  flipCard(card) {
    card.isFlipped = true;
    const cardEl = this.elements.grid.querySelector(`[data-card-id="${card.id}"]`);
    cardEl.classList.add('flipped');
    audioManager.playSound('tap');
  },
  
  // 翻回卡片
  unflipCard(card) {
    card.isFlipped = false;
    const cardEl = this.elements.grid.querySelector(`[data-card-id="${card.id}"]`);
    cardEl.classList.remove('flipped');
  },
  
  // 处理配对成功
  handleMatch(first, second) {
    first.isMatched = true;
    second.isMatched = true;
    this.matchedPairs++;
    
    // 得分
    this.players[this.currentPlayer].score++;
    
    // 更新卡片样式
    const firstEl = this.elements.grid.querySelector(`[data-card-id="${first.id}"]`);
    const secondEl = this.elements.grid.querySelector(`[data-card-id="${second.id}"]`);
    firstEl.classList.add('matched');
    secondEl.classList.add('matched');
    
    // 播放音效
    audioManager.playSound('correct');
    VoiceManager.speak(VoiceManager.templates.matchFound());
    
    // 更新玩家栏
    this.renderPlayersBar();
    
    // 清空已翻开卡片
    this.flippedCards = [];
    this.isProcessing = false;
    
    // 检查游戏是否结束
    if (this.matchedPairs === this.config.totalPairs) {
      setTimeout(() => this.endGame(), 500);
    }
  },
  
  // 处理配对失败
  handleMismatch(first, second) {
    // 播放音效
    audioManager.playSound('wrong');
    
    // 延迟翻回
    setTimeout(() => {
      this.unflipCard(first);
      this.unflipCard(second);
      
      // 切换玩家
      this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
      
      // 更新玩家栏
      this.renderPlayersBar();
      
      // 语音提示
      VoiceManager.speak(VoiceManager.templates.matchMissed() + ` 轮到${this.players[this.currentPlayer].name}！`);
      
      // 清空已翻开卡片
      this.flippedCards = [];
      this.isProcessing = false;
    }, this.config.matchDelay);
  },
  
  // 结束游戏
  endGame() {
    this.isPlaying = false;
    
    // 确定获胜者
    const winner = this.players[0].score > this.players[1].score 
      ? this.players[0] 
      : this.players[0].score < this.players[1].score 
        ? this.players[1] 
        : null;
    
    // 显示结果
    this.showResult(winner);
  },
  
  // 显示结果
  showResult(winner) {
    // 更新游戏统计（独立模式）
    if (this.isStandalone) {
      updateMatchGameStats();
    }
    
    this.elements.resultScores.innerHTML = `
      <div class="result-player">
        <span class="result-avatar">${this.players[0].avatar}</span>
        <span class="result-name">${this.players[0].name}</span>
        <span class="result-score">${this.players[0].score}分</span>
      </div>
      <div class="result-divider">VS</div>
      <div class="result-player">
        <span class="result-avatar">${this.players[1].avatar}</span>
        <span class="result-name">${this.players[1].name}</span>
        <span class="result-score">${this.players[1].score}分</span>
      </div>
    `;
    
    if (winner) {
      this.elements.resultTitle.innerHTML = `🎉 ${winner.name}获胜！`;
      VoiceManager.speak(`游戏结束！${winner.name}获胜！`);
    } else {
      this.elements.resultTitle.innerHTML = `🤝 平局！`;
      VoiceManager.speak('游戏结束！平局！');
    }
    
    // 显示结果弹窗
    this.elements.resultModal.classList.add('active');
    
    // 根据是否是独立模式修改按钮
    const confirmBtn = document.querySelector('.match-confirm-btn');
    let backBtn = document.querySelector('.match-back-btn');
    
    if (this.isStandalone) {
      // 独立模式：显示继续挑战和返回主页两个按钮
      if (confirmBtn) {
        confirmBtn.textContent = '继续挑战 ➡️';
      }
      // 添加返回按钮（如果不存在）
      if (!backBtn) {
        const resultContent = document.querySelector('.match-result-content');
        if (resultContent) {
          backBtn = document.createElement('button');
          backBtn.className = 'match-back-btn';
          backBtn.textContent = '返回主页 ↩️';
          backBtn.onclick = () => MatchGame.backToHome();
          resultContent.appendChild(backBtn);
        }
      } else {
        backBtn.style.display = 'block';
      }
    } else {
      // 护照模式：动态显示当前印章类型
      if (confirmBtn) {
        const stamps = getCountryStamp(this.targetCountryId);
        const nextStampType = getNextStampType(this.targetCountryId);
        // 此时已经完成配对游戏（纪念章），但stamp还未添加，所以stamps.length应该是2
        // 按钮应该显示即将获得的印章类型
        const stampEmoji = getStampEmoji(nextStampType);
        const stampName = getStampTypeName(nextStampType);
        confirmBtn.textContent = `获得${stampName} ${stampEmoji}`;
      }
      if (backBtn) {
        backBtn.style.display = 'none';
      }
    }
    
    // 播放音效
    audioManager.playSound('badge');
  },
  
  // 确认结果（获得纪念章或继续）
  confirmResult() {
    this.elements.resultModal.classList.remove('active');
    this.close();
    
    if (this.isStandalone) {
      // 独立模式：重新开始一局
      if (this.targetCountryId) {
        MatchGame.start(this.targetCountryId, null);
      }
    } else {
      // 护照模式：调用回调
      if (this.callback) this.callback(true);
    }
  },
  
  // 返回主页
  backToHome() {
    this.elements.resultModal.classList.remove('active');
    this.close();
  },
  
  // 关闭游戏
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
    this.elements.resultModal.classList.remove('active');
    this.elements.grid.innerHTML = '';
    this.cards = [];
    this.flippedCards = [];
  },
  
  // 显示难度选择弹窗
  showDifficultySelect() {
    const grid = document.getElementById('match-difficulty-grid');
    if (!grid) return;
    
    grid.innerHTML = MATCH_DIFFICULTIES.map((diff, index) => `
      <div class="match-difficulty-item" data-index="${index}" onclick="MatchGame.selectDifficulty(${index})">
        <div class="difficulty-name">${diff.name}</div>
        <div class="difficulty-size">${diff.gridSize}×${diff.gridSize}</div>
        <div class="difficulty-stars">${diff.stars}</div>
      </div>
    `).join('');
    
    this.elements.difficultyModal.classList.add('active');
    this.elements.difficultyModal.style.display = 'flex';
  },
  
  // 选择难度
  selectDifficulty(index) {
    const difficulty = MATCH_DIFFICULTIES[index];
    if (!difficulty) return;
    
    // 更新选中状态
    document.querySelectorAll('.match-difficulty-item').forEach((item, i) => {
      item.classList.toggle('selected', i === index);
    });
    
    // 保存当前难度
    this.currentDifficulty = difficulty;
    this.config.gridSize = difficulty.gridSize;
    this.config.totalPairs = difficulty.pairs;
    
    // 关闭难度选择弹窗
    this.closeDifficultySelect();
    
    // 随机选择一个国家开始游戏
    const randomIndex = Math.floor(Math.random() * COUNTRIES.length);
    const randomCountry = COUNTRIES[randomIndex];
    
    // 启动游戏
    this.start(randomCountry.id, null);
  },
  
  // 关闭难度选择弹窗
  closeDifficultySelect() {
    if (this.elements.difficultyModal) {
      this.elements.difficultyModal.classList.remove('active');
      this.elements.difficultyModal.style.display = 'none';
    }
  }
};

// 导出
window.MatchGame = MatchGame;
