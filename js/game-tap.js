// 世界环球旅行家 - 点击国旗游戏模块

// 难度分级配置
const TAP_DIFFICULTY_LEVELS = [
  { minQuestion: 1, maxQuestion: 5, name: '简单', options: 4, strategy: 'random' },
  { minQuestion: 6, maxQuestion: 10, name: '中等', options: 6, strategy: 'similar-colors' },
  { minQuestion: 11, maxQuestion: 15, name: '困难', options: 8, strategy: 'similar-style' },
  { minQuestion: 16, maxQuestion: 20, name: '困难', options: 8, strategy: 'similar-both' },
  { minQuestion: 21, maxQuestion: 999, name: '地狱', options: 10, strategy: 'similar-both' }
];

// 颜色相近的国家组（用于干扰项）
const COLOR_SIMILARITY_GROUPS = [
  ['france', 'netherlands', 'russia', 'slovenia', 'slovakia', 'czech-republic'], // 红白蓝
  ['germany', 'belgium', 'austria', 'romania', 'andorra'], // 红黄黑
  ['italy', 'hungary', 'bulgaria', 'iran', 'mexico'], // 绿白红
  ['uk', 'usa', 'australia', 'new-zealand', 'fiji'], // 米字旗系列
  ['china', 'vietnam', 'morocco', 'turkey', 'tunisia'], // 红星/红底
  ['japan', 'bangladesh', 'palau', 'greenland'], // 红圆/圆点
  ['greece', 'israel', 'finland', 'nicaragua', 'honduras'], // 蓝白
  ['sweden', 'finland', 'denmark', 'norway', 'iceland'], // 北欧十字
  ['india', 'ireland', 'ivory-coast', 'italy', 'mexico'], // 橙白绿
  ['spain', 'portugal', 'colombia', 'venezuela', 'ecuador'], // 红黄
];

// 样式相近的国家组（用于干扰项）
const STYLE_SIMILARITY_GROUPS = [
  ['usa', 'liberia', 'malaysia', 'uruguay'], // 星星+条纹
  ['australia', 'new-zealand', 'fiji', 'tuvalu'], // 米字旗+星星
  ['greece', 'israel', 'usa', 'honduras'], // 条纹+星星
  ['sweden', 'denmark', 'norway', 'finland', 'iceland'], // 北欧十字
  ['switzerland', 'tonga', 'georgia'], // 十字
  ['japan', 'bangladesh', 'palau'], // 圆形中心
  ['canada', 'peru'], // 垂直条纹+中心图案
  ['uk', 'australia', 'new-zealand'], // 米字旗
  ['france', 'italy', 'ireland', 'belgium', 'romania'], // 垂直三色
  ['germany', 'austria', 'hungary', 'bulgaria'], // 水平三色
];

// 游戏状态
const TapGame = {
  targetCountry: null,
  options: [],
  isPlaying: false,
  callback: null,
  isStandalone: false,       // 是否独立模式
  currentQuestion: 0,        // 当前题号
  correctCount: 0,           // 答对题数
  isChallengeMode: false,    // 是否天梯挑战模式
  streakCount: 0,            // 连续正确次数（新增）
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('tap-game-modal'),
      title: document.getElementById('tap-game-title'),
      hint: document.getElementById('tap-game-hint'),
      flagContainer: document.getElementById('tap-flags-container'),
      progress: document.getElementById('tap-game-progress'),
      score: document.getElementById('tap-game-score'),
      skipBtn: document.getElementById('tap-skip-btn'),
      challengeModal: document.getElementById('tap-challenge-modal'),
      challengeScore: document.getElementById('tap-challenge-score'),
      challengeRank: document.getElementById('tap-challenge-rank'),
      leaderboard: document.getElementById('tap-leaderboard')
    };
    console.log('🎯 点击国旗游戏模块初始化完成');
  },
  
  // 开始游戏（护照模式）
  start(countryId, callback) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountry = country;
    this.isPlaying = true;
    this.callback = callback;
    this.isStandalone = false;
    this.isChallengeMode = false;
    this.correctCount = 0;
    this.streakCount = 0;  // 重置连续正确计数
    
    // 生成选项（目标国家 + 3个干扰项）
    this.generateOptions(countryId, 4, 'random');
    
    // 更新标题
    this.elements.title.innerHTML = `
      找出 ${country.name.zh} 的国旗
      <button class="voice-btn" onclick="VoiceManager.speak('找出${country.name.zh}的国旗！')">🔊</button>
    `;
    this.elements.hint.textContent = '点击正确的国旗';
    
    // 隐藏分数显示
    if (this.elements.score) {
      this.elements.score.style.display = 'none';
    }
    
    // 显示跳过按钮
    if (this.elements.skipBtn) {
      this.elements.skipBtn.style.display = 'block';
    }
    
    // 渲染国旗选项
    this.renderFlags();
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak(VoiceManager.templates.tapGamePassport(country.name.zh));
    
    return true;
  },
  
  // 开始天梯挑战（独立模式）
  startChallenge() {
    this.isStandalone = true;
    this.isChallengeMode = true;
    this.isPlaying = true;
    this.currentQuestion = 0;
    this.correctCount = 0;
    this.callback = null;
    
    // 更新标题
    this.elements.title.innerHTML = `
      🏆 天梯挑战
      <button class="voice-btn" onclick="VoiceManager.speak('天梯挑战开始！')">🔊</button>
    `;
    
    // 显示分数
    if (this.elements.score) {
      this.elements.score.style.display = 'block';
      this.elements.score.innerHTML = `
        <span class="score-label">得分：</span>
        <span class="score-value">0</span>
        <span class="score-level">第 1 题</span>
      `;
    }
    
    // 隐藏跳过按钮（天梯模式不能跳过）
    if (this.elements.skipBtn) {
      this.elements.skipBtn.style.display = 'none';
    }
    
    // 出第一题
    this.nextChallengeQuestion();
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak(VoiceManager.templates.tapGameStart());
    
    return true;
  },
  
  // 下一题（天梯挑战）
  nextChallengeQuestion() {
    this.currentQuestion++;
    
    // 根据题号决定难度
    const difficulty = this.getDifficultyLevel(this.currentQuestion);
    
    // 随机选择目标国家
    const targetCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    this.targetCountry = targetCountry;
    
    // 生成干扰项
    this.generateOptions(targetCountry.id, difficulty.options, difficulty.strategy);
    
    // 更新提示
    this.elements.hint.innerHTML = `
      找出 <strong>${targetCountry.name.zh}</strong> 的国旗
      <span class="difficulty-badge">${difficulty.name}</span>
    `;
    
    // 更新分数显示
    if (this.elements.score) {
      this.elements.score.innerHTML = `
        <span class="score-label">得分：</span>
        <span class="score-value">${this.correctCount}</span>
        <span class="score-level">第 ${this.currentQuestion} 题</span>
      `;
    }
    
    // 渲染国旗选项
    this.renderFlags();
    
    // 播放语音
    VoiceManager.speak(VoiceManager.templates.tapGameQuestion(this.currentQuestion, targetCountry.name.zh));
  },
  
  // 获取难度等级
  getDifficultyLevel(questionNum) {
    return TAP_DIFFICULTY_LEVELS.find(
      level => questionNum >= level.minQuestion && questionNum <= level.maxQuestion
    ) || TAP_DIFFICULTY_LEVELS[3]; // 默认地狱难度
  },
  
  // 生成选项（支持不同策略）
  generateOptions(targetId, numOptions, strategy) {
    const numDistractors = numOptions - 1;
    let distractors = [];
    
    switch (strategy) {
      case 'similar-colors':
        distractors = this.getSimilarColorDistractors(targetId, numDistractors);
        break;
      case 'similar-style':
        distractors = this.getSimilarStyleDistractors(targetId, numDistractors);
        break;
      case 'similar-both':
        distractors = this.getSimilarBothDistractors(targetId, numDistractors);
        break;
      case 'random':
      default:
        distractors = this.getRandomDistractors(targetId, numDistractors);
    }
    
    // 如果干扰项不足，用随机项补充
    if (distractors.length < numDistractors) {
      const extra = this.getRandomDistractors(targetId, numDistractors - distractors.length, distractors);
      distractors = [...distractors, ...extra];
    }
    
    // 合并目标国家和干扰项
    this.options = [this.targetCountry, ...distractors];
    
    // 打乱顺序
    this.options = this.options.sort(() => Math.random() - 0.5);
  },
  
  // 随机干扰项
  getRandomDistractors(targetId, count, excludeIds = []) {
    const allCountries = COUNTRIES.filter(c => 
      c.id !== targetId && !excludeIds.includes(c.id)
    );
    const shuffled = allCountries.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  },
  
  // 颜色相近干扰项
  getSimilarColorDistractors(targetId, count) {
    const targetCountry = getCountryById(targetId);
    if (!targetCountry) return this.getRandomDistractors(targetId, count);
    
    // 找到目标国家所在的颜色相近组
    let similarGroup = null;
    for (const group of COLOR_SIMILARITY_GROUPS) {
      if (group.includes(targetId)) {
        similarGroup = group;
        break;
      }
    }
    
    if (!similarGroup) {
      // 如果没有预定义组，根据颜色查找
      const targetColors = new Set(targetCountry.flagColors || []);
      const similar = COUNTRIES.filter(c => {
        if (c.id === targetId) return false;
        const colors = new Set(c.flagColors || []);
        // 至少有一个共同颜色
        for (const color of targetColors) {
          if (colors.has(color)) return true;
        }
        return false;
      });
      
      const shuffled = similar.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }
    
    // 从预定义组中选择
    const candidates = similarGroup.filter(id => id !== targetId);
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    
    // 转换为国家对象
    return shuffled.slice(0, count).map(id => getCountryById(id)).filter(c => c);
  },
  
  // 样式相近干扰项
  getSimilarStyleDistractors(targetId, count) {
    // 找到目标国家所在的样式相近组
    let similarGroup = null;
    for (const group of STYLE_SIMILARITY_GROUPS) {
      if (group.includes(targetId)) {
        similarGroup = group;
        break;
      }
    }
    
    if (!similarGroup) {
      return this.getRandomDistractors(targetId, count);
    }
    
    // 从预定义组中选择
    const candidates = similarGroup.filter(id => id !== targetId);
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    
    // 转换为国家对象
    return shuffled.slice(0, count).map(id => getCountryById(id)).filter(c => c);
  },
  
  // 颜色+样式都相近（地狱难度）
  getSimilarBothDistractors(targetId, count) {
    const colorDistractors = this.getSimilarColorDistractors(targetId, Math.ceil(count / 2));
    const styleDistractors = this.getSimilarStyleDistractors(targetId, Math.ceil(count / 2));
    
    // 合并并去重
    const combined = [...colorDistractors, ...styleDistractors];
    const unique = [...new Map(combined.map(c => [c.id, c])).values()];
    
    // 如果不够，用随机补充
    if (unique.length < count) {
      const extra = this.getRandomDistractors(targetId, count - unique.length, unique.map(c => c.id));
      unique.push(...extra);
    }
    
    return unique.slice(0, count);
  },
  
  // 渲染国旗
  renderFlags() {
    const container = this.elements.flagContainer;
    container.innerHTML = '';
    
    // 根据选项数量决定布局
    const numFlags = this.options.length;
    container.className = `tap-flags-container flags-${numFlags}`;
    
    this.options.forEach((country, index) => {
      const flagEl = document.createElement('div');
      flagEl.className = 'tap-flag-item';
      flagEl.dataset.countryId = country.id;
      // 只显示国旗，不显示国家名称
      flagEl.innerHTML = `
        <div class="tap-flag-emoji">${country.flag}</div>
      `;
      
      // 添加飘动动画，每个有不同的延迟
      flagEl.style.animationDelay = `${index * 0.1}s`;
      
      // 点击事件
      flagEl.addEventListener('click', () => this.handleTap(country.id));
      
      // 触摸事件支持
      flagEl.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.handleTap(country.id);
      });
      
      container.appendChild(flagEl);
    });
  },
  
  // 处理点击
  handleTap(selectedId) {
    if (!this.isPlaying) return;
    
    const isCorrect = selectedId === this.targetCountry.id;
    const flagEl = this.elements.flagContainer.querySelector(`[data-country-id="${selectedId}"]`);
    
    if (isCorrect) {
      // 正确！
      flagEl.classList.add('correct');
      this.correctCount++;
      this.streakCount++;
      
      if (this.isChallengeMode) {
        // 天梯挑战模式：答对继续下一题
        audioManager.playSound('correct');
        
        // 显示成功动画
        this.showSuccessAnimation();
        
        // 连续正确时播放特殊鼓励
        if (this.streakCount >= 3) {
          VoiceManager.speak(VoiceManager.templates.streakPraise(this.streakCount), () => {
            setTimeout(() => {
              this.nextChallengeQuestion();
            }, 1200);
          });
        } else {
          setTimeout(() => {
            this.nextChallengeQuestion();
          }, 1000);
        }
      } else {
        // 护照模式：答对即成功
        this.isPlaying = false;
        audioManager.playSound('correct');
        VoiceManager.speak(VoiceManager.templates.correctPraise(), () => {
          setTimeout(() => {
            this.close();
            if (this.callback) this.callback(true);
          }, 1000);
        });
        this.showSuccessAnimation();
      }
      
    } else {
      // 错误
      flagEl.classList.add('wrong');
      this.streakCount = 0;  // 重置连续正确计数
      
      if (this.isChallengeMode) {
        // 天梯挑战模式：答错即结束
        this.isPlaying = false;
        audioManager.playSound('wrong');
        
        // 显示正确答案
        setTimeout(() => {
          this.endChallenge();
        }, 800);
      } else {
        // 护照模式：提示重试（使用随机鼓励语）
        audioManager.playSound('wrong');
        VoiceManager.speak(VoiceManager.templates.wrongEncourage());
        
        setTimeout(() => {
          flagEl.classList.remove('wrong');
        }, 500);
      }
    }
  },
  
  // 显示成功动画
  showSuccessAnimation() {
    // 创建星星/烟花效果
    const container = this.elements.flagContainer;
    for (let i = 0; i < 8; i++) {
      const star = document.createElement('div');
      star.className = 'success-star';
      star.innerHTML = '⭐';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${i * 0.1}s`;
      container.appendChild(star);
    }
  },
  
  // 结束天梯挑战
  endChallenge() {
    this.isPlaying = false;
    
    // 保存分数到排行榜
    const rank = saveTapGameScore(this.correctCount);
    
    // 更新游戏统计
    updateTapGameStats(this.correctCount);
    
    // 更新结果弹窗
    if (this.elements.challengeScore) {
      this.elements.challengeScore.textContent = this.correctCount;
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
    const isGood = this.correctCount >= 10;
    VoiceManager.speak(VoiceManager.templates.gameEnd(this.correctCount, isGood) + ` 排名第${rank}名！`);
  },
  
  // 更新排行榜显示
  updateLeaderboard() {
    if (!this.elements.leaderboard) return;
    
    const leaderboard = getTapGameLeaderboard();
    const currentTraveler = getCurrentTraveler();
    
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
  
  // 关闭游戏
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
    this.elements.flagContainer.innerHTML = '';
    this.isChallengeMode = false;
    this.currentQuestion = 0;
    this.correctCount = 0;
  }
};

// 导出
window.TapGame = TapGame;
