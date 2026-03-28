// 世界环球旅行家 - 国旗连连看游戏模块

// 难度配置
const LINK_DIFFICULTIES = [
  { gridSize: 6, name: '入门', stars: '⭐' },
  { gridSize: 8, name: '简单', stars: '⭐⭐' },
  { gridSize: 10, name: '普通', stars: '⭐⭐⭐' },
  { gridSize: 12, name: '困难', stars: '⭐⭐⭐⭐' },
  { gridSize: 15, name: '大师', stars: '⭐⭐⭐⭐⭐' },
  { gridSize: 18, name: '传奇', stars: '⭐⭐⭐⭐⭐⭐' },
  { gridSize: 20, name: '至尊', stars: '⭐⭐⭐⭐⭐⭐⭐' }
];

// 连连看游戏状态
const LinkGame = {
  // 游戏配置
  config: {
    cellSize: 60,        // 单元格大小（增大）
    padding: 30,         // 边距（增大）
    lineColor: '#FF6B6B', // 连线颜色
    lineWidth: 5         // 连线宽度（增大）
  },
  
  // 排行榜存储 key
  LEADERBOARD_KEY: 'link_game_leaderboard',
  
  // 游戏状态
  grid: [],              // 网格数据
  gridSize: 6,           // 网格大小
  currentDifficulty: 0,  // 当前难度索引
  selected: null,        // 当前选中的格子
  pairsLeft: 0,          // 剩余配对数
  isPlaying: false,
  startTime: 0,
  timerInterval: null,
  hints: 3,              // 提示次数
  isDrawing: false,      // 是否正在绘制连线
  canvas: null,
  ctx: null,
  animationFrame: null,  // 动画帧
  lineAnimation: null,   // 连线动画状态
  particles: [],         // 粒子效果数组
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('link-game-modal'),
      difficultyModal: document.getElementById('link-difficulty-modal'),
      title: document.getElementById('link-game-title'),
      pairsLeft: document.getElementById('link-pairs-left'),
      timer: document.getElementById('link-timer'),
      gridContainer: document.getElementById('link-grid-container'),
      canvas: document.getElementById('link-canvas'),
      hintBtn: document.getElementById('link-hint-btn'),
      shuffleBtn: document.getElementById('link-shuffle-btn')
    };
    
    this.canvas = this.elements.canvas;
    this.ctx = this.canvas.getContext('2d');
    
    // 绑定画布点击事件
    this.canvas.addEventListener('click', (e) => this.handleClick(e));
    
    console.log('🔗 连连看游戏模块初始化完成');
  },
  
  // 显示难度选择
  showDifficultySelect() {
    const grid = document.getElementById('link-difficulty-grid');
    if (!grid) return;
    
    grid.innerHTML = LINK_DIFFICULTIES.map((diff, index) => {
      const leaderboard = this.getLeaderboard(index);
      const bestTime = leaderboard.length > 0 ? leaderboard[0].time : null;
      const bestTimeStr = bestTime ? this.formatTime(bestTime) : '--:--';
      
      return `
        <button class="link-difficulty-btn" onclick="LinkGame.startGame(${index})">
          <div class="difficulty-name">${diff.name}</div>
          <div class="difficulty-size">${diff.gridSize}×${diff.gridSize}</div>
          <div class="difficulty-stars">${diff.stars}</div>
          <div class="difficulty-best">最佳: ${bestTimeStr}</div>
          <div class="difficulty-records">${leaderboard.length}条记录</div>
        </button>
      `;
    }).join('');
    
    this.elements.difficultyModal.classList.add('active');
  },
  
  // 获取排行榜数据
  getLeaderboard(difficultyIndex) {
    const allData = this.loadAllLeaderboards();
    return allData[difficultyIndex] || [];
  },
  
  // 加载所有排行榜
  loadAllLeaderboards() {
    try {
      const data = localStorage.getItem(this.LEADERBOARD_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },
  
  // 保存排行榜
  saveLeaderboard(difficultyIndex, time) {
    const allData = this.loadAllLeaderboards();
    if (!allData[difficultyIndex]) {
      allData[difficultyIndex] = [];
    }
    
    const record = {
      time: time,
      date: new Date().toLocaleDateString('zh-CN'),
      timestamp: Date.now()
    };
    
    allData[difficultyIndex].push(record);
    // 按用时排序，只保留前10名
    allData[difficultyIndex].sort((a, b) => a.time - b.time);
    allData[difficultyIndex] = allData[difficultyIndex].slice(0, 10);
    
    localStorage.setItem(this.LEADERBOARD_KEY, JSON.stringify(allData));
    
    // 返回排名
    return allData[difficultyIndex].findIndex(r => r.timestamp === record.timestamp) + 1;
  },
  
  // 格式化时间
  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  },
  
  // 关闭难度选择
  closeDifficultySelect() {
    this.elements.difficultyModal.classList.remove('active');
  },
  
  // 开始游戏
  startGame(difficultyIndex) {
    const diff = LINK_DIFFICULTIES[difficultyIndex];
    this.currentDifficulty = difficultyIndex;  // 保存当前难度
    this.gridSize = diff.gridSize;
    this.isPlaying = true;
    this.selected = null;
    this.hints = 3;
    this.startTime = Date.now();
    
    // 关闭难度选择
    this.closeDifficultySelect();
    
    // 生成网格
    this.generateGrid();
    
    // 计算画布大小（增大最大限制）
    const canvasSize = this.gridSize * this.config.cellSize + this.config.padding * 2;
    this.canvas.width = canvasSize;
    this.canvas.height = canvasSize;
    // 根据屏幕大小自适应，但保持更大的最小尺寸
    const maxSize = Math.min(canvasSize, window.innerWidth - 40, window.innerHeight - 250);
    const finalSize = Math.max(maxSize, Math.min(500, canvasSize));
    this.canvas.style.width = finalSize + 'px';
    this.canvas.style.height = finalSize + 'px';
    
    // 更新UI
    this.elements.title.textContent = `🔗 国旗连连看 - ${diff.name}`;
    this.elements.hintBtn.innerHTML = `💡 提示(${this.hints})`;
    this.updatePairsLeft();
    
    // 启动计时器
    this.startTimer();
    
    // 绘制网格
    this.draw();
    
    // 显示游戏弹窗
    this.elements.modal.classList.add('active');
    
    // 播放语音
    VoiceManager.speak('连连看开始！找出相同的国旗连起来吧！');
  },
  
  // 生成网格
  generateGrid() {
    const size = this.gridSize;
    const totalCells = size * size;
    const pairs = totalCells / 2;
    this.pairsLeft = pairs;
    
    // 随机选择国旗
    const availableCountries = [...COUNTRIES];
    const selectedCountries = [];
    
    for (let i = 0; i < pairs; i++) {
      const randomIndex = Math.floor(Math.random() * availableCountries.length);
      selectedCountries.push(availableCountries[randomIndex]);
      selectedCountries.push(availableCountries[randomIndex]); // 每个国旗出现2次
    }
    
    // 打乱顺序
    this.shuffleArray(selectedCountries);
    
    // 填充网格
    this.grid = [];
    for (let row = 0; row < size; row++) {
      this.grid[row] = [];
      for (let col = 0; col < size; col++) {
        const index = row * size + col;
        const country = selectedCountries[index];
        this.grid[row][col] = {
          country: country,
          flag: country.flag,
          matched: false,
          selected: false
        };
      }
    }
  },
  
  // 打乱数组
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  
  // 绘制网格
  draw() {
    const ctx = this.ctx;
    const cellSize = this.config.cellSize;
    const padding = this.config.padding;
    
    // 清空画布
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绘制背景
    ctx.fillStyle = '#FFF9E6';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绘制每个格子
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        const cell = this.grid[row][col];
        if (cell.matched) continue;
        
        const x = padding + col * cellSize;
        const y = padding + row * cellSize;
        
        // 绘制格子背景
        ctx.fillStyle = cell.selected ? '#FFE66D' : '#FFFFFF';
        ctx.strokeStyle = cell.selected ? '#FF6B6B' : '#DDD';
        ctx.lineWidth = cell.selected ? 3 : 1;
        
        ctx.beginPath();
        ctx.roundRect(x + 2, y + 2, cellSize - 4, cellSize - 4, 8);
        ctx.fill();
        ctx.stroke();
        
        // 绘制国旗
        ctx.font = `${cellSize * 0.6}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cell.flag, x + cellSize / 2, y + cellSize / 2);
      }
    }
  },
  
  // 处理点击
  handleClick(e) {
    if (!this.isPlaying) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX - this.config.padding;
    const y = (e.clientY - rect.top) * scaleY - this.config.padding;
    
    const col = Math.floor(x / this.config.cellSize);
    const row = Math.floor(y / this.config.cellSize);
    
    // 检查是否在有效范围内
    if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) return;
    
    const cell = this.grid[row][col];
    if (cell.matched) return;
    
    // 播放点击音效
    audioManager.playSound('tap');
    
    if (this.selected) {
      // 已有选中的格子
      if (this.selected.row === row && this.selected.col === col) {
        // 取消选中
        cell.selected = false;
        this.selected = null;
      } else {
        // 尝试匹配
        const prevCell = this.grid[this.selected.row][this.selected.col];
        
        if (cell.country.id === prevCell.country.id) {
          // 检查是否可以连接
          if (this.canConnect(this.selected.row, this.selected.col, row, col)) {
            // 匹配成功
            this.matchCells(this.selected.row, this.selected.col, row, col);
          } else {
            // 无法连接
            this.selectCell(row, col);
          }
        } else {
          // 不是相同的国旗，切换选中
          this.selectCell(row, col);
        }
      }
    } else {
      // 第一次选择
      this.selectCell(row, col);
    }
    
    this.draw();
  },
  
  // 选中格子
  selectCell(row, col) {
    // 取消之前的选中
    if (this.selected) {
      this.grid[this.selected.row][this.selected.col].selected = false;
    }
    
    // 选中新格子
    this.grid[row][col].selected = true;
    this.selected = { row, col };
  },
  
  // 检查是否可以连接（最多转2次弯）
  canConnect(r1, c1, r2, c2) {
    // 直接相连
    if (this.checkLine(r1, c1, r2, c2)) return true;
    
    // 转一次弯
    if (this.checkOneTurn(r1, c1, r2, c2)) return true;
    
    // 转两次弯
    if (this.checkTwoTurns(r1, c1, r2, c2)) return true;
    
    return false;
  },
  
  // 检查直线是否可通
  checkLine(r1, c1, r2, c2) {
    if (r1 === r2) {
      // 水平线
      const minC = Math.min(c1, c2);
      const maxC = Math.max(c1, c2);
      for (let c = minC + 1; c < maxC; c++) {
        if (!this.isEmpty(r1, c)) return false;
      }
      return true;
    }
    if (c1 === c2) {
      // 垂直线
      const minR = Math.min(r1, r2);
      const maxR = Math.max(r1, r2);
      for (let r = minR + 1; r < maxR; r++) {
        if (!this.isEmpty(r, c1)) return false;
      }
      return true;
    }
    return false;
  },
  
  // 检查一次转弯
  checkOneTurn(r1, c1, r2, c2) {
    // 拐点1: (r1, c2)
    if (this.isEmpty(r1, c2) && this.checkLine(r1, c1, r1, c2) && this.checkLine(r1, c2, r2, c2)) {
      return true;
    }
    // 拐点2: (r2, c1)
    if (this.isEmpty(r2, c1) && this.checkLine(r1, c1, r2, c1) && this.checkLine(r2, c1, r2, c2)) {
      return true;
    }
    return false;
  },
  
  // 检查两次转弯
  checkTwoTurns(r1, c1, r2, c2) {
    // 水平方向延伸
    for (let c = -1; c <= this.gridSize; c++) {
      if (c === c1 || c === c2) continue;
      if (this.isEmpty(r1, c) && this.isEmpty(r2, c)) {
        if (this.checkLine(r1, c1, r1, c) && this.checkLine(r1, c, r2, c) && this.checkLine(r2, c, r2, c2)) {
          return true;
        }
      }
    }
    // 垂直方向延伸
    for (let r = -1; r <= this.gridSize; r++) {
      if (r === r1 || r === r2) continue;
      if (this.isEmpty(r, c1) && this.isEmpty(r, c2)) {
        if (this.checkLine(r1, c1, r, c1) && this.checkLine(r, c1, r, c2) && this.checkLine(r, c2, r2, c2)) {
          return true;
        }
      }
    }
    return false;
  },
  
  // 检查格子是否为空（包括边界外）
  isEmpty(row, col) {
    if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) {
      return true; // 边界外视为空
    }
    return this.grid[row][col].matched;
  },
  
  // 匹配成功
  matchCells(r1, c1, r2, c2) {
    this.grid[r1][c1].matched = true;
    this.grid[r1][c1].selected = false;
    this.grid[r2][c2].matched = true;
    this.grid[r2][c2].selected = false;
    this.selected = null;
    
    this.pairsLeft--;
    this.updatePairsLeft();
    
    // 播放音效
    audioManager.playSound('correct');
    VoiceManager.speak(VoiceManager.templates.correctPraise());
    
    // 获取连接路径并绘制连线动画
    const path = this.getConnectionPath(r1, c1, r2, c2);
    if (path) {
      this.animateConnection(path, r1, c1, r2, c2);
    }
    
    // 检查是否胜利
    if (this.pairsLeft === 0) {
      this.gameWon();
    }
  },
  
  // 获取连接路径
  getConnectionPath(r1, c1, r2, c2) {
    // 直接相连
    if (this.checkLine(r1, c1, r2, c2)) {
      return [{r: r1, c: c1}, {r: r2, c: c2}];
    }
    
    // 转一次弯
    const oneTurnResult = this.getOneTurnPath(r1, c1, r2, c2);
    if (oneTurnResult) return oneTurnResult;
    
    // 转两次弯
    const twoTurnsResult = this.getTwoTurnsPath(r1, c1, r2, c2);
    if (twoTurnsResult) return twoTurnsResult;
    
    return null;
  },
  
  // 获取一次转弯路径
  getOneTurnPath(r1, c1, r2, c2) {
    // 拐点1: (r1, c2)
    if (this.isEmpty(r1, c2) && this.checkLine(r1, c1, r1, c2) && this.checkLine(r1, c2, r2, c2)) {
      return [{r: r1, c: c1}, {r: r1, c: c2}, {r: r2, c: c2}];
    }
    // 拐点2: (r2, c1)
    if (this.isEmpty(r2, c1) && this.checkLine(r1, c1, r2, c1) && this.checkLine(r2, c1, r2, c2)) {
      return [{r: r1, c: c1}, {r: r2, c: c1}, {r: r2, c: c2}];
    }
    return null;
  },
  
  // 获取两次转弯路径
  getTwoTurnsPath(r1, c1, r2, c2) {
    // 水平方向延伸
    for (let c = -1; c <= this.gridSize; c++) {
      if (c === c1 || c === c2) continue;
      if (this.isEmpty(r1, c) && this.isEmpty(r2, c)) {
        if (this.checkLine(r1, c1, r1, c) && this.checkLine(r1, c, r2, c) && this.checkLine(r2, c, r2, c2)) {
          return [{r: r1, c: c1}, {r: r1, c: c}, {r: r2, c: c}, {r: r2, c: c2}];
        }
      }
    }
    // 垂直方向延伸
    for (let r = -1; r <= this.gridSize; r++) {
      if (r === r1 || r === r2) continue;
      if (this.isEmpty(r, c1) && this.isEmpty(r, c2)) {
        if (this.checkLine(r1, c1, r, c1) && this.checkLine(r, c1, r, c2) && this.checkLine(r, c2, r2, c2)) {
          return [{r: r1, c: c1}, {r: r, c: c1}, {r: r, c: c2}, {r: r2, c: c2}];
        }
      }
    }
    return null;
  },
  
  // 连线动画
  animateConnection(path, r1, c1, r2, c2) {
    const ctx = this.ctx;
    const cellSize = this.config.cellSize;
    const padding = this.config.padding;
    
    // 转换为画布坐标
    const points = path.map(p => ({
      x: padding + p.c * cellSize + cellSize / 2,
      y: padding + p.r * cellSize + cellSize / 2
    }));
    
    // 连线动画状态
    let progress = 0;
    const duration = 300; // 动画持续时间ms
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      // 绘制当前帧
      this.draw();
      
      // 绘制渐变连线
      ctx.save();
      ctx.strokeStyle = this.config.lineColor;
      ctx.lineWidth = this.config.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = '#FF6B6B';
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // 绘制部分路径
      const totalLength = this.getPathLength(points);
      const currentLength = totalLength * progress;
      let drawnLength = 0;
      
      for (let i = 1; i < points.length; i++) {
        const segmentLength = Math.sqrt(
          Math.pow(points[i].x - points[i-1].x, 2) +
          Math.pow(points[i].y - points[i-1].y, 2)
        );
        
        if (drawnLength + segmentLength <= currentLength) {
          ctx.lineTo(points[i].x, points[i].y);
          drawnLength += segmentLength;
        } else {
          const remainingLength = currentLength - drawnLength;
          const ratio = remainingLength / segmentLength;
          const x = points[i-1].x + (points[i].x - points[i-1].x) * ratio;
          const y = points[i-1].y + (points[i].y - points[i-1].y) * ratio;
          ctx.lineTo(x, y);
          break;
        }
      }
      
      ctx.stroke();
      ctx.restore();
      
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        // 连线完成，开始消除特效
        this.animateRemove(r1, c1, r2, c2, points);
      }
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  },
  
  // 计算路径总长度
  getPathLength(points) {
    let length = 0;
    for (let i = 1; i < points.length; i++) {
      length += Math.sqrt(
        Math.pow(points[i].x - points[i-1].x, 2) +
        Math.pow(points[i].y - points[i-1].y, 2)
      );
    }
    return length;
  },
  
  // 消除特效动画
  animateRemove(r1, c1, r2, c2, pathPoints) {
    const ctx = this.ctx;
    const cellSize = this.config.cellSize;
    const padding = this.config.padding;
    
    const x1 = padding + c1 * cellSize + cellSize / 2;
    const y1 = padding + r1 * cellSize + cellSize / 2;
    const x2 = padding + c2 * cellSize + cellSize / 2;
    const y2 = padding + r2 * cellSize + cellSize / 2;
    
    // 创建粒子
    this.createParticles(x1, y1, this.grid[r1][c1].flag);
    this.createParticles(x2, y2, this.grid[r2][c2].flag);
    
    let progress = 0;
    const duration = 400;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      // 绘制当前帧
      this.draw();
      
      // 绘制闪烁的连线
      if (progress < 0.5) {
        const alpha = 1 - progress * 2;
        ctx.save();
        ctx.strokeStyle = `rgba(255, 107, 107, ${alpha})`;
        ctx.lineWidth = this.config.lineWidth + 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = '#FF6B6B';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
        for (let i = 1; i < pathPoints.length; i++) {
          ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
        }
        ctx.stroke();
        ctx.restore();
      }
      
      // 更新和绘制粒子
      this.updateParticles();
      this.drawParticles();
      
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        // 清除粒子
        this.particles = [];
        this.draw();
      }
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  },
  
  // 创建粒子效果
  createParticles(x, y, flag) {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i + Math.random() * 0.5;
      const speed = 2 + Math.random() * 3;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2
      });
    }
    // 添加国旗emoji粒子
    for (let i = 0; i < 4; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // 向上飘
        size: 16,
        color: flag,
        alpha: 1,
        isEmoji: true,
        rotation: 0,
        rotationSpeed: 0
      });
    }
  },
  
  // 更新粒子
  updateParticles() {
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1; // 重力
      p.alpha -= 0.02;
      p.rotation += p.rotationSpeed;
    }
    this.particles = this.particles.filter(p => p.alpha > 0);
  },
  
  // 绘制粒子
  drawParticles() {
    const ctx = this.ctx;
    for (let p of this.particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      
      if (p.isEmoji) {
        ctx.font = `${p.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.color, 0, 0);
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    }
  },
  
  // 绘制连线
  drawLine(r1, c1, r2, c2) {
    const ctx = this.ctx;
    const cellSize = this.config.cellSize;
    const padding = this.config.padding;
    
    const x1 = padding + c1 * cellSize + cellSize / 2;
    const y1 = padding + r1 * cellSize + cellSize / 2;
    const x2 = padding + c2 * cellSize + cellSize / 2;
    const y2 = padding + r2 * cellSize + cellSize / 2;
    
    // 绘制连线
    ctx.strokeStyle = this.config.lineColor;
    ctx.lineWidth = this.config.lineWidth;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    
    // 简化为直线（实际应该绘制带拐点的路径）
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // 短暂显示后重绘
    setTimeout(() => this.draw(), 300);
  },
  
  // 更新剩余配对数
  updatePairsLeft() {
    this.elements.pairsLeft.textContent = `剩余: ${this.pairsLeft}对`;
  },
  
  // 启动计时器
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    
    this.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
      const seconds = (elapsed % 60).toString().padStart(2, '0');
      this.elements.timer.textContent = `⏱️ ${minutes}:${seconds}`;
    }, 1000);
  },
  
  // 停止计时器
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },
  
  // 使用提示
  useHint() {
    if (this.hints <= 0 || !this.isPlaying) return;
    
    // 寻找可连接的一对
    for (let r1 = 0; r1 < this.gridSize; r1++) {
      for (let c1 = 0; c1 < this.gridSize; c1++) {
        if (this.grid[r1][c1].matched) continue;
        
        for (let r2 = 0; r2 < this.gridSize; r2++) {
          for (let c2 = 0; c2 < this.gridSize; c2++) {
            if (r1 === r2 && c1 === c2) continue;
            if (this.grid[r2][c2].matched) continue;
            
            if (this.grid[r1][c1].country.id === this.grid[r2][c2].country.id) {
              if (this.canConnect(r1, c1, r2, c2)) {
                // 找到可连接的一对，高亮显示
                this.hints--;
                this.elements.hintBtn.innerHTML = `💡 提示(${this.hints})`;
                
                // 高亮这对格子
                this.grid[r1][c1].selected = true;
                this.grid[r2][c2].selected = true;
                this.draw();
                
                // 1秒后取消高亮
                setTimeout(() => {
                  this.grid[r1][c1].selected = false;
                  this.grid[r2][c2].selected = false;
                  this.draw();
                }, 1000);
                
                return;
              }
            }
          }
        }
      }
    }
    
    // 没有可连接的对，需要重排
    VoiceManager.speak('没有可连接的了，试试重排吧！');
  },
  
  // 重排
  shuffle() {
    if (!this.isPlaying) return;
    
    // 收集未匹配的国旗
    const remaining = [];
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        if (!this.grid[row][col].matched) {
          remaining.push(this.grid[row][col].country);
        }
      }
    }
    
    // 打乱
    this.shuffleArray(remaining);
    
    // 重新分配
    let index = 0;
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        if (!this.grid[row][col].matched) {
          this.grid[row][col].country = remaining[index];
          this.grid[row][col].flag = remaining[index].flag;
          index++;
        }
      }
    }
    
    // 取消选中
    if (this.selected) {
      this.grid[this.selected.row][this.selected.col].selected = false;
      this.selected = null;
    }
    
    this.draw();
    VoiceManager.speak('国旗重新排列了！');
  },
  
  // 游戏胜利
  gameWon() {
    this.stopTimer();
    this.isPlaying = false;
    
    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    // 保存成绩并获取排名
    const rank = this.saveLeaderboard(this.currentDifficulty, elapsed);
    
    audioManager.playSound('win');
    VoiceManager.speak(`太棒了！你用了${minutes}分${seconds}秒完成了连连看！`);
    
    // 显示成绩弹窗
    setTimeout(() => {
      this.showResultModal(elapsed, rank);
    }, 500);
  },
  
  // 显示成绩弹窗
  showResultModal(time, rank) {
    const diff = LINK_DIFFICULTIES[this.currentDifficulty];
    const leaderboard = this.getLeaderboard(this.currentDifficulty);
    
    // 创建弹窗
    const modal = document.createElement('div');
    modal.className = 'link-result-modal';
    modal.innerHTML = `
      <div class="link-result-content">
        <div class="result-header">
          <h2>🎉 恭喜完成！</h2>
        </div>
        
        <div class="result-score-section">
          <div class="result-item">
            <div class="result-label">难度</div>
            <div class="result-value difficulty-badge">${diff.name}</div>
          </div>
          <div class="result-item">
            <div class="result-label">用时</div>
            <div class="result-value time">${this.formatTime(time)}</div>
          </div>
          <div class="result-item">
            <div class="result-label">排名</div>
            <div class="result-value rank">#${rank}</div>
          </div>
        </div>
        
        <div class="result-leaderboard">
          <h3>🏆 ${diff.name}急速榜</h3>
          <div class="leaderboard-list">
            ${leaderboard.map((r, i) => `
              <div class="leaderboard-item ${r.time === time ? 'current' : ''}">
                <span class="rank">${i + 1}</span>
                <span class="time">${this.formatTime(r.time)}</span>
                <span class="date">${r.date}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="result-actions">
          <button class="result-btn retry" onclick="LinkGame.retryGame()">再来一局 🔄</button>
          <button class="result-btn back" onclick="LinkGame.closeResult()">返回选择 ↩️</button>
        </div>
      </div>
    `;
    
    this.elements.modal.appendChild(modal);
    
    // 动画显示
    setTimeout(() => modal.classList.add('active'), 10);
  },
  
  // 再来一局
  retryGame() {
    this.closeResult();
    this.close();
    setTimeout(() => this.startGame(this.currentDifficulty), 300);
  },
  
  // 关闭结果弹窗
  closeResult() {
    const resultModal = this.elements.modal.querySelector('.link-result-modal');
    if (resultModal) {
      resultModal.classList.remove('active');
      setTimeout(() => resultModal.remove(), 300);
    }
    this.close();
  },
  
  // 关闭游戏
  close() {
    this.stopTimer();
    this.isPlaying = false;
    // 取消动画帧
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    this.particles = [];
    this.elements.modal.classList.remove('active');
  }
};

window.LinkGame = LinkGame;
