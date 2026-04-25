// 垃圾分类天梯挑战游戏

// 天梯挑战难度配置
const GARBAGE_CHALLENGE_LEVELS = [
  { minQuestion: 1, maxQuestion: 5, name: '简单', timeLimit: 15 },
  { minQuestion: 6, maxQuestion: 10, name: '中等', timeLimit: 12 },
  { minQuestion: 11, maxQuestion: 15, name: '困难', timeLimit: 10 },
  { minQuestion: 16, maxQuestion: 20, name: '困难', timeLimit: 8 },
  { minQuestion: 21, maxQuestion: 999, name: '地狱', timeLimit: 6 }
];

const GarbageGame = {
  garbageData: null,
  isLoading: false,
  
  // 天梯挑战状态
  isPlaying: false,
  currentQuestion: 0,
  correctCount: 0,
  streakCount: 0,
  timer: null,
  timeLeft: 0,
  currentItem: null,
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('garbage-game-modal'),
      title: document.getElementById('garbage-game-title'),
      score: document.getElementById('garbage-game-score'),
      itemDisplay: document.getElementById('garbage-item-display'),
      options: document.getElementById('garbage-options'),
      message: document.getElementById('garbage-game-message'),
      skipBtn: document.getElementById('garbage-skip-btn'),
      challengeModal: document.getElementById('garbage-challenge-modal'),
      challengeScore: document.getElementById('garbage-challenge-score'),
      challengeRank: document.getElementById('garbage-challenge-rank'),
      leaderboard: document.getElementById('garbage-leaderboard')
    };
    console.log('🗑️ 垃圾分类天梯挑战模块初始化完成');
    this.loadGarbageData();
  },
  
  // 加载垃圾分类数据
  async loadGarbageData() {
    if (this.garbageData) return this.garbageData;
    if (this.isLoading) {
      while (this.isLoading) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.garbageData;
    }
    
    this.isLoading = true;
    try {
      const response = await fetch('data/garbage/garbage-data.json');
      this.garbageData = await response.json();
      console.log(`垃圾分类数据加载完成，共 ${this.garbageData.items?.length || 0} 个物品`);
      return this.garbageData;
    } catch (error) {
      console.error('加载垃圾分类数据失败:', error);
      return null;
    } finally {
      this.isLoading = false;
    }
  },

  // 开始天梯挑战
  async startChallenge() {
    await this.loadGarbageData();
    
    if (!this.garbageData || !this.garbageData.items) {
      alert('数据加载失败，请刷新页面重试');
      return;
    }
    
    // 重置状态
    this.isPlaying = true;
    this.currentQuestion = 0;
    this.correctCount = 0;
    this.streakCount = 0;
    this.currentItem = null;
    
    // 更新分数显示
    if (this.elements.score) {
      this.elements.score.innerHTML = `
        <span class="score-label">得分：</span>
        <span class="score-value">0</span>
        <span class="score-level">第 1 题</span>
      `;
    }
    
    // 隐藏结果弹窗
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.remove('active');
      this.elements.challengeModal.style.display = 'none';
    }
    
    // 出第一题
    this.nextQuestion();
    
    // 显示游戏弹窗
    if (this.elements.modal) {
      this.elements.modal.classList.add('active');
      this.elements.modal.style.display = 'flex';
    }
    
    // 播放语音
    if (typeof VoiceManager !== 'undefined') {
      VoiceManager.speak('垃圾分类天梯挑战开始！看清楚垃圾，点击正确的垃圾桶！');
    }
  },
  
  // 下一题
  async nextQuestion() {
    this.currentQuestion++;
    
    // 随机选择一个物品
    const allItems = this.garbageData.items;
    const randomIndex = Math.floor(Math.random() * allItems.length);
    const item = allItems[randomIndex];
    
    if (!item) {
      this.endChallenge();
      return;
    }
    
    this.currentItem = item;
    
    // 更新分数显示
    if (this.elements.score) {
      this.elements.score.innerHTML = `
        <span class="score-label">得分：</span>
        <span class="score-value">${this.correctCount}</span>
        <span class="score-level">第 ${this.currentQuestion} 题</span>
      `;
    }
    
    // 渲染物品显示区域
    if (this.elements.itemDisplay) {
      this.elements.itemDisplay.innerHTML = `
        <div class="garbage-challenge-item">
          <img class="garbage-challenge-image" src="${item.image}" alt="${item.name}" 
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <span class="garbage-challenge-icon" style="display:none;">${item.icon || '🗑️'}</span>
          <div class="garbage-challenge-name">${item.name}</div>
        </div>
      `;
    }
    
    // 渲染4个选项按钮，固定顺序为：有害垃圾、厨余垃圾、可回收物、其他垃圾
      if (this.elements.options) {
        const types = this.garbageData.types;
        const typeList = [
          { type: 'hazardous', info: types.hazardous },
          { type: 'kitchen', info: types.kitchen },
          { type: 'recyclable', info: types.recyclable },
          { type: 'other', info: types.other }
        ];
      
      this.elements.options.innerHTML = typeList.map(({ type, info }) => `
        <button class="garbage-option-btn" data-type="${type}">
          <div class="option-icon" style="background-color: ${info.color}">
            <img src="${info.image}" alt="${info.name}" class="type-icon-image" onerror="this.style.display='none'">
          </div>
          <div class="option-name">${info.name}</div>
        </button>
      `).join('');
      
      // 绑定点击事件
      this.elements.options.querySelectorAll('.garbage-option-btn').forEach(btn => {
        btn.addEventListener('click', () => this.selectOption(btn.dataset.type));
      });
    }
    
    // 播放语音
    if (typeof VoiceManager !== 'undefined') {
      VoiceManager.speak(`第${this.currentQuestion}题！${item.name}属于什么垃圾？`);
    }
  },
  
  // 选择选项
  selectOption(selectedType) {
    if (!this.isPlaying) return;
    
    const correctType = this.currentItem?.type;
    const isCorrect = selectedType === correctType;
    
    // 禁用所有按钮
    const buttons = this.elements.options?.querySelectorAll('.garbage-option-btn');
    buttons?.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.type === correctType) {
        btn.classList.add('correct-answer');
      } else if (btn.dataset.type === selectedType && !isCorrect) {
        btn.classList.add('wrong-answer');
      }
    });
    
    if (isCorrect) {
      this.correctCount++;
      this.streakCount++;
      
      // 更新分数显示
      if (this.elements.score) {
        this.elements.score.innerHTML = `
          <span class="score-label">得分：</span>
          <span class="score-value">${this.correctCount}</span>
          <span class="score-level">第 ${this.currentQuestion} 题</span>
        `;
      }
      
      // 显示消息
      if (this.elements.message) {
        this.elements.message.textContent = '✅ 分类正确！';
        this.elements.message.className = 'garbage-game-message correct';
      }
      
      if (typeof audioManager !== 'undefined') {
        audioManager.playSound('badge');
      }
      
      // 连续正确时播放特殊鼓励
      if (this.streakCount >= 3 && typeof VoiceManager !== 'undefined') {
        VoiceManager.speak(VoiceManager.templates.streakPraise(this.streakCount), () => {
          setTimeout(() => {
            this.nextQuestion();
          }, 800);
        });
      } else {
        setTimeout(() => {
          this.nextQuestion();
        }, 1000);
      }
    } else {
      // 答错，游戏结束
      this.streakCount = 0;
      
      const correctTypeName = this.garbageData.types[correctType]?.name || '未知';
      
      // 显示消息
      if (this.elements.message) {
        this.elements.message.textContent = `❌ 错误！正确答案是：${correctTypeName}`;
        this.elements.message.className = 'garbage-game-message error';
      }
      
      if (typeof audioManager !== 'undefined') {
        audioManager.playSound('tap');
      }
      
      setTimeout(() => {
        this.endChallenge();
      }, 1500);
    }
  },
  
  // 退出游戏
  quit() {
    this.isPlaying = false;
    
    if (this.elements.modal) {
      this.elements.modal.classList.remove('active');
      this.elements.modal.style.display = 'none';
    }
  },
  
  // 结束天梯挑战
  endChallenge() {
    this.isPlaying = false;
    
    // 保存分数到排行榜
    const rank = saveGarbageGameScore(this.correctCount);
    
    // 更新游戏统计
    updateGarbageGameStats(this.correctCount);
    
    // 更新结果弹窗
    if (this.elements.challengeScore) {
      this.elements.challengeScore.textContent = this.correctCount;
    }
    
    if (this.elements.challengeRank) {
      this.elements.challengeRank.textContent = rank > 0 ? rank : '-';
    }
    
    // 更新排行榜显示
    this.updateLeaderboard();
    
    // 显示结果弹窗
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.add('active');
      this.elements.challengeModal.style.display = 'flex';
    }
    
    // 播放语音
    if (typeof VoiceManager !== 'undefined') {
      const isGood = this.correctCount >= 10;
      VoiceManager.speak(VoiceManager.templates.gameEnd(this.correctCount, isGood) + (rank > 0 ? ` 排名第${rank}名！` : ''));
    }
  },
  
  // 更新排行榜显示
  updateLeaderboard() {
    if (!this.elements.leaderboard) return;
    
    const leaderboard = getGarbageGameLeaderboard();
    const currentTraveler = getCurrentTraveler();
    
    if (leaderboard.length === 0) {
      this.elements.leaderboard.innerHTML = '<div class="leaderboard-empty">暂无记录</div>';
      return;
    }
    
    this.elements.leaderboard.innerHTML = leaderboard.map((entry, index) => `
      <div class="leaderboard-item ${entry.travelerId === currentTraveler?.id ? 'current' : ''}">
        <div class="leaderboard-rank">${index + 1}</div>
        <div class="leaderboard-info">
          <span class="leaderboard-name">${entry.travelerName}</span>
          <span class="leaderboard-score">${entry.score} 题</span>
        </div>
        <div class="leaderboard-date">${this.formatDate(entry.date)}</div>
      </div>
    `).join('');
  },
  
  // 格式化日期
  formatDate(dateString) {
    const date = new Date(dateString);
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${m}-${d}`;
  },
  
  // 继续挑战
  continueChallenge() {
    // 隐藏结果弹窗
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.remove('active');
      this.elements.challengeModal.style.display = 'none';
    }
    
    // 清空消息
    if (this.elements.message) {
      this.elements.message.textContent = '';
      this.elements.message.className = 'garbage-game-message';
    }
    
    // 重新开始
    this.startChallenge();
  },
  
  // 返回主页
  backToHome() {
    // 隐藏结果弹窗
    if (this.elements.challengeModal) {
      this.elements.challengeModal.classList.remove('active');
      this.elements.challengeModal.style.display = 'none';
    }
    
    // 隐藏游戏弹窗
    if (this.elements.modal) {
      this.elements.modal.classList.remove('active');
      this.elements.modal.style.display = 'none';
    }
  },
  
  // 兼容旧接口
  async showDifficultySelect() {
    await this.startChallenge();
  }
};
