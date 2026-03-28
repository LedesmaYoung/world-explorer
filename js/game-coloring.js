// 世界环球旅行家 - 涂色创作游戏模块

// 涂色创作游戏状态
const ColoringGame = {
  // 游戏状态
  targetCountry: null,
  canvas: null,
  ctx: null,
  isPlaying: false,
  callback: null,
  currentColor: '#FF6B6B',
  brushSize: 20,
  history: [],
  historyIndex: -1,
  isEraser: false,  // 橡皮擦模式
  
  // 国旗区域定义（简化版，适合幼儿涂色）
  // 目前支持 35 个国家的国旗模板
  flagRegions: {
    // ===== 亚洲 =====
    'japan': [
      { id: 'bg', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'circle', path: 'circle', color: 'red', bounds: { x: 100, y: 70, r: 40 } }
    ],
    'china': [
      { id: 'bg', path: 'rect', color: '#DE2910', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'star1', path: 'star', color: '#FFDE00', bounds: { x: 40, y: 45, size: 20 } }
    ],
    'south-korea': [
      { id: 'bg', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'circle', path: 'circle', color: '#C60C30', bounds: { x: 100, y: 70, r: 25 } },
      { id: 'circle2', path: 'circle', color: '#003478', bounds: { x: 100, y: 70, r: 25, clip: 'top' } }
    ],
    'india': [
      { id: 'top', path: 'rect', color: '#FF9933', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#138808', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'bangladesh': [
      { id: 'bg', path: 'rect', color: '#006a4e', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'circle', path: 'circle', color: '#f42a41', bounds: { x: 90, y: 70, r: 35 } }
    ],
    'pakistan': [
      { id: 'bg', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'left', path: 'rect', color: '#01411C', bounds: { x: 0, y: 0, w: 80, h: 140 } }
    ],
    'thailand': [
      { id: 'top', path: 'rect', color: '#ED1C24', bounds: { x: 0, y: 0, w: 200, h: 28 } },
      { id: 'top2', path: 'rect', color: 'white', bounds: { x: 0, y: 28, w: 200, h: 28 } },
      { id: 'middle', path: 'rect', color: '#241D4F', bounds: { x: 0, y: 56, w: 200, h: 28 } },
      { id: 'bottom2', path: 'rect', color: 'white', bounds: { x: 0, y: 84, w: 200, h: 28 } },
      { id: 'bottom', path: 'rect', color: '#ED1C24', bounds: { x: 0, y: 112, w: 200, h: 28 } }
    ],
    'indonesia': [
      { id: 'top', path: 'rect', color: '#FF0000', bounds: { x: 0, y: 0, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: 'white', bounds: { x: 0, y: 70, w: 200, h: 70 } }
    ],
    'vietnam': [
      { id: 'bg', path: 'rect', color: '#DA251D', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'star', path: 'star', color: '#FFFF00', bounds: { x: 100, y: 70, size: 25 } }
    ],
    'philippines': [
      { id: 'top', path: 'rect', color: '#0038A8', bounds: { x: 0, y: 0, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: '#CE1126', bounds: { x: 0, y: 70, w: 200, h: 70 } }
    ],
    'myanmar': [
      { id: 'top', path: 'rect', color: '#FECB00', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: '#EA2839', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#34B233', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'saudi-arabia': [
      { id: 'bg', path: 'rect', color: '#006C35', bounds: { x: 0, y: 0, w: 200, h: 140 } }
    ],
    
    // ===== 欧洲 =====
    'france': [
      { id: 'left', path: 'rect', color: '#002395', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#ED2939', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    'germany': [
      { id: 'top', path: 'rect', color: '#000000', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: '#DD0000', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#FFCE00', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'italy': [
      { id: 'left', path: 'rect', color: '#009246', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#CE2B37', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    'spain': [
      { id: 'top', path: 'rect', color: '#AA151B', bounds: { x: 0, y: 0, w: 200, h: 35 } },
      { id: 'middle', path: 'rect', color: '#F1BF00', bounds: { x: 0, y: 35, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: '#AA151B', bounds: { x: 0, y: 105, w: 200, h: 35 } }
    ],
    'netherlands': [
      { id: 'top', path: 'rect', color: '#AE1C28', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#21468B', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'belgium': [
      { id: 'left', path: 'rect', color: '#000000', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: '#FDDA24', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#EF3340', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    'austria': [
      { id: 'top', path: 'rect', color: '#ED2939', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#ED2939', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'poland': [
      { id: 'top', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: '#DC143C', bounds: { x: 0, y: 70, w: 200, h: 70 } }
    ],
    'ukraine': [
      { id: 'top', path: 'rect', color: '#005BBB', bounds: { x: 0, y: 0, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: '#FFD500', bounds: { x: 0, y: 70, w: 200, h: 70 } }
    ],
    'russia': [
      { id: 'top', path: 'rect', color: '#FFFFFF', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: '#0039A6', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#D52B1E', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'sweden': [
      { id: 'bg', path: 'rect', color: '#006AA7', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'cross1', path: 'rect', color: '#FECC00', bounds: { x: 60, y: 0, w: 25, h: 140 } },
      { id: 'cross2', path: 'rect', color: '#FECC00', bounds: { x: 0, y: 55, w: 200, h: 25 } }
    ],
    
    // ===== 非洲 =====
    'egypt': [
      { id: 'top', path: 'rect', color: '#CE1126', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#000000', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'algeria': [
      { id: 'left', path: 'rect', color: '#006233', bounds: { x: 0, y: 0, w: 100, h: 140 } },
      { id: 'right', path: 'rect', color: 'white', bounds: { x: 100, y: 0, w: 100, h: 140 } }
    ],
    'nigeria': [
      { id: 'left', path: 'rect', color: '#008751', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#008751', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    'kenya': [
      { id: 'top', path: 'rect', color: '#000000', bounds: { x: 0, y: 0, w: 200, h: 35 } },
      { id: 'top2', path: 'rect', color: '#BB0000', bounds: { x: 0, y: 35, w: 200, h: 23 } },
      { id: 'middle', path: 'rect', color: '#006600', bounds: { x: 0, y: 58, w: 200, h: 24 } },
      { id: 'bottom2', path: 'rect', color: '#BB0000', bounds: { x: 0, y: 82, w: 200, h: 23 } },
      { id: 'bottom', path: 'rect', color: '#000000', bounds: { x: 0, y: 105, w: 200, h: 35 } }
    ],
    'south-africa': [
      { id: 'top', path: 'rect', color: '#DE3831', bounds: { x: 0, y: 0, w: 200, h: 28 } },
      { id: 'top2', path: 'rect', color: 'white', bounds: { x: 0, y: 28, w: 200, h: 28 } },
      { id: 'middle', path: 'rect', color: '#007A4D', bounds: { x: 0, y: 56, w: 200, h: 28 } },
      { id: 'bottom2', path: 'rect', color: '#FFB612', bounds: { x: 0, y: 84, w: 200, h: 28 } },
      { id: 'bottom', path: 'rect', color: '#002395', bounds: { x: 0, y: 112, w: 200, h: 28 } }
    ],
    'morocco': [
      { id: 'bg', path: 'rect', color: '#C1272D', bounds: { x: 0, y: 0, w: 200, h: 140 } }
    ],
    
    // ===== 北美洲 =====
    'usa': [
      { id: 'bg', path: 'rect', color: '#FFFFFF', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'stripe1', path: 'rect', color: '#B22234', bounds: { x: 0, y: 0, w: 200, h: 10 } },
      { id: 'stripe3', path: 'rect', color: '#B22234', bounds: { x: 0, y: 20, w: 200, h: 10 } },
      { id: 'stripe5', path: 'rect', color: '#B22234', bounds: { x: 0, y: 40, w: 200, h: 10 } },
      { id: 'stripe7', path: 'rect', color: '#B22234', bounds: { x: 0, y: 60, w: 200, h: 10 } },
      { id: 'canton', path: 'rect', color: '#3C3B6E', bounds: { x: 0, y: 0, w: 80, h: 70 } }
    ],
    'canada': [
      { id: 'left', path: 'rect', color: '#FF0000', bounds: { x: 0, y: 0, w: 50, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 50, y: 0, w: 100, h: 140 } },
      { id: 'right', path: 'rect', color: '#FF0000', bounds: { x: 150, y: 0, w: 50, h: 140 } }
    ],
    'mexico': [
      { id: 'left', path: 'rect', color: '#006341', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#CE1126', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    
    // ===== 南美洲 =====
    'brazil': [
      { id: 'bg', path: 'rect', color: '#009c3b', bounds: { x: 0, y: 0, w: 200, h: 140 } },
      { id: 'diamond', path: 'diamond', color: '#FEDF00', bounds: { x: 100, y: 70, w: 150, h: 90 } },
      { id: 'circle', path: 'circle', color: '#002776', bounds: { x: 100, y: 70, r: 30 } }
    ],
    'argentina': [
      { id: 'top', path: 'rect', color: '#74ACDF', bounds: { x: 0, y: 0, w: 200, h: 46 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 0, y: 46, w: 200, h: 48 } },
      { id: 'bottom', path: 'rect', color: '#74ACDF', bounds: { x: 0, y: 94, w: 200, h: 46 } }
    ],
    'colombia': [
      { id: 'top', path: 'rect', color: '#FCD116', bounds: { x: 0, y: 0, w: 200, h: 56 } },
      { id: 'middle', path: 'rect', color: '#003583', bounds: { x: 0, y: 56, w: 200, h: 42 } },
      { id: 'bottom', path: 'rect', color: '#CE1126', bounds: { x: 0, y: 98, w: 200, h: 42 } }
    ],
    'peru': [
      { id: 'left', path: 'rect', color: '#D91023', bounds: { x: 0, y: 0, w: 66, h: 140 } },
      { id: 'middle', path: 'rect', color: 'white', bounds: { x: 66, y: 0, w: 68, h: 140 } },
      { id: 'right', path: 'rect', color: '#D91023', bounds: { x: 134, y: 0, w: 66, h: 140 } }
    ],
    'chile': [
      { id: 'top', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 70 } },
      { id: 'bottom', path: 'rect', color: '#D52B1E', bounds: { x: 0, y: 70, w: 200, h: 70 } },
      { id: 'canton', path: 'rect', color: '#0039A6', bounds: { x: 0, y: 0, w: 80, h: 70 } }
    ],
    
    // ===== 大洋洲 =====
    'australia': [
      { id: 'bg', path: 'rect', color: '#00008B', bounds: { x: 0, y: 0, w: 200, h: 140 } }
    ],
    'new-zealand': [
      { id: 'bg', path: 'rect', color: '#00247D', bounds: { x: 0, y: 0, w: 200, h: 140 } }
    ],
    
    // ===== 默认模板 =====
    'default': [
      { id: 'bg', path: 'rect', color: 'white', bounds: { x: 0, y: 0, w: 200, h: 140 } }
    ]
  },
  
  // 调色盘颜色（扩展到 16 种）
  palette: [
    { name: '红色', color: '#FF6B6B' },
    { name: '蓝色', color: '#4DABF7' },
    { name: '黄色', color: '#FFD43B' },
    { name: '绿色', color: '#69DB7C' },
    { name: '白色', color: '#FFFFFF' },
    { name: '黑色', color: '#212529' },
    { name: '橙色', color: '#FF922B' },
    { name: '紫色', color: '#9775FA' },
    { name: '粉色', color: '#F06595' },
    { name: '棕色', color: '#A0522D' },
    { name: '灰色', color: '#868E96' },
    { name: '青色', color: '#20C997' },
    { name: '深蓝', color: '#1864AB' },
    { name: '深红', color: '#C92A2A' },
    { name: '深绿', color: '#2F9E44' },
    { name: '金色', color: '#FAB005' }
  ],
  
  // 画笔粗细选项
  brushSizes: [8, 15, 25, 40],
  currentBrushIndex: 1,  // 默认中等粗细
  
  // DOM 元素
  elements: {},
  
  // 初始化
  init() {
    this.elements = {
      modal: document.getElementById('coloring-game-modal'),
      title: document.getElementById('coloring-game-title'),
      canvas: document.getElementById('coloring-canvas'),
      palette: document.getElementById('coloring-palette'),
      tools: document.getElementById('coloring-tools')
    };
    console.log('🎨 涂色创作游戏模块初始化完成');
  },
  
  // 开始游戏
  start(countryId, callback) {
    const country = getCountryById(countryId);
    if (!country) return false;
    
    this.targetCountry = country;
    this.isPlaying = true;
    this.callback = callback;
    this.history = [];
    this.historyIndex = -1;
    
    // 更新标题
    this.elements.title.innerHTML = `
      给 ${country.name.zh} 的国旗涂色
      <button class="voice-btn" onclick="VoiceManager.speak('给${country.name.zh}的国旗涂上颜色吧！')">🔊</button>
    `;
    
    // 初始化画布
    this.initCanvas();
    
    // 渲染调色盘
    this.renderPalette();
    
    // 绘制国旗轮廓
    this.drawFlagOutline();
    
    // 显示弹窗
    this.elements.modal.classList.add('active');
    this.elements.modal.style.display = 'flex';
    
    // 播放语音
    VoiceManager.speak(`给${country.name.zh}的国旗涂上颜色吧！`);
    
    return true;
  },
  
  // 初始化画布
  initCanvas() {
    this.canvas = this.elements.canvas;
    this.ctx = this.canvas.getContext('2d');
    
    // 设置画布尺寸
    this.canvas.width = 200;
    this.canvas.height = 140;
    
    // 清空画布
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绑定事件
    this.bindCanvasEvents();
  },
  
  // 绑定画布事件
  bindCanvasEvents() {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // 鼠标事件
    this.canvas.onmousedown = (e) => {
      isDrawing = true;
      const rect = this.canvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
      this.saveState();
    };
    
    this.canvas.onmousemove = (e) => {
      if (!isDrawing) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.draw(lastX, lastY, x, y);
      lastX = x;
      lastY = y;
    };
    
    this.canvas.onmouseup = () => isDrawing = false;
    this.canvas.onmouseout = () => isDrawing = false;
    
    // 触摸事件
    this.canvas.ontouchstart = (e) => {
      e.preventDefault();
      isDrawing = true;
      const rect = this.canvas.getBoundingClientRect();
      const touch = e.touches[0];
      lastX = touch.clientX - rect.left;
      lastY = touch.clientY - rect.top;
      this.saveState();
    };
    
    this.canvas.ontouchmove = (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      const rect = this.canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      this.draw(lastX, lastY, x, y);
      lastX = x;
      lastY = y;
    };
    
    this.canvas.ontouchend = () => isDrawing = false;
  },
  
  // 绘制
  draw(x1, y1, x2, y2) {
    if (this.isEraser) {
      // 橡皮擦模式：使用白色覆盖
      this.ctx.strokeStyle = '#FFFFFF';
      this.ctx.lineWidth = this.brushSize * 2;  // 橡皮擦更大
    } else {
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = this.brushSize;
    }
    
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  },
  
  // 保存状态（用于撤销）
  saveState() {
    // 限制历史记录数量
    if (this.history.length > 20) {
      this.history.shift();
    }
    this.history.push(this.canvas.toDataURL());
    this.historyIndex = this.history.length - 1;
  },
  
  // 撤销
  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const img = new Image();
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0);
      };
      img.src = this.history[this.historyIndex];
    }
  },
  
  // 清空画布
  clearCanvas() {
    this.saveState();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawFlagOutline();
  },
  
  // 绘制国旗轮廓
  drawFlagOutline() {
    const countryId = this.targetCountry.id;
    const regions = this.flagRegions[countryId] || this.flagRegions['default'];
    
    // 先填充浅灰色背景作为涂色区域
    this.ctx.fillStyle = '#F0F0F0';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绘制每个区域的轮廓
    regions.forEach(region => {
      this.ctx.beginPath();
      
      if (region.path === 'rect') {
        // 矩形区域：填充浅灰色
        this.ctx.fillStyle = '#E0E0E0';
        this.ctx.fillRect(region.bounds.x, region.bounds.y, region.bounds.w, region.bounds.h);
        // 绘制边框
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      } else if (region.path === 'circle') {
        // 圆形区域：填充浅灰色
        this.ctx.fillStyle = '#E0E0E0';
        this.ctx.arc(region.bounds.x, region.bounds.y, region.bounds.r, 0, Math.PI * 2);
        this.ctx.fill();
        // 绘制边框
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      } else if (region.path === 'star') {
        // 星形：绘制轮廓
        this.ctx.fillStyle = '#E0E0E0';
        this.drawStar(region.bounds.x, region.bounds.y, 5, region.bounds.size, region.bounds.size / 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      } else if (region.path === 'diamond') {
        // 菱形区域：绘制轮廓
        this.ctx.fillStyle = '#E0E0E0';
        const dx = region.bounds.x;
        const dy = region.bounds.y;
        const dw = region.bounds.w / 2;
        const dh = region.bounds.h / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(dx, dy - dh);
        this.ctx.lineTo(dx + dw, dy);
        this.ctx.lineTo(dx, dy + dh);
        this.ctx.lineTo(dx - dw, dy);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = '#999999';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      }
    });
    
    // 绘制国旗外框
    this.ctx.strokeStyle = '#666666';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  },
  
  // 绘制五角星
  drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;
    
    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
      
      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
    }
    
    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
  },
  
  // 渲染调色盘
  renderPalette() {
    const palette = this.elements.palette;
    palette.innerHTML = '';
    
    this.palette.forEach(color => {
      const colorBtn = document.createElement('button');
      colorBtn.className = 'color-btn';
      colorBtn.style.backgroundColor = color.color;
      colorBtn.title = color.name;
      colorBtn.dataset.color = color.color;
      
      if (color.color === this.currentColor && !this.isEraser) {
        colorBtn.classList.add('active');
      }
      
      colorBtn.addEventListener('click', () => {
        this.currentColor = color.color;
        this.isEraser = false;
        this.updateToolUI();
        audioManager.playSound('tap');
      });
      
      palette.appendChild(colorBtn);
    });
  },
  
  // 设置橡皮擦
  setEraser(isEraser) {
    this.isEraser = isEraser;
    this.updateToolUI();
    audioManager.playSound('tap');
  },
  
  // 设置画笔粗细
  setBrushSize(index) {
    this.currentBrushIndex = index;
    this.brushSize = this.brushSizes[index];
    this.updateToolUI();
    audioManager.playSound('tap');
  },
  
  // 更新工具栏 UI 状态
  updateToolUI() {
    // 更新颜色按钮状态
    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.color === this.currentColor && !this.isEraser);
    });
    
    // 更新橡皮擦按钮状态
    const eraserBtn = document.getElementById('eraser-btn');
    const brushBtn = document.getElementById('brush-btn');
    if (eraserBtn && brushBtn) {
      eraserBtn.classList.toggle('active', this.isEraser);
      brushBtn.classList.toggle('active', !this.isEraser);
    }
    
    // 更新画笔粗细按钮状态
    document.querySelectorAll('.brush-size-btn').forEach((btn, index) => {
      btn.classList.toggle('active', index === this.currentBrushIndex);
    });
    
    // 更新画布光标
    if (this.canvas) {
      this.canvas.style.cursor = this.isEraser ? 'cell' : 'crosshair';
    }
  },
  
  // 保存作品
  saveArtwork() {
    const dataUrl = this.canvas.toDataURL('image/png');
    const artwork = {
      id: Date.now(),
      countryId: this.targetCountry.id,
      countryName: this.targetCountry.name.zh,
      countryFlag: this.targetCountry.flag,
      image: dataUrl,
      date: new Date().toISOString()
    };
    
    // 保存到 localStorage
    let gallery = JSON.parse(localStorage.getItem('coloring_gallery') || '[]');
    gallery.unshift(artwork);
    
    // 限制保存数量（最多50幅）
    if (gallery.length > 50) {
      gallery = gallery.slice(0, 50);
    }
    
    localStorage.setItem('coloring_gallery', JSON.stringify(gallery));
    
    // 更新游戏统计
    updateColoringStats();
    
    // 播放音效
    audioManager.playSound('badge');
    VoiceManager.speak(VoiceManager.templates.coloringSaved());
    
    return artwork;
  },
  
  // 完成并保存
  finish() {
    const artwork = this.saveArtwork();
    this.isPlaying = false;
    this.close();
    
    if (this.callback) this.callback(true);
  },
  
  // 关闭游戏
  close() {
    this.isPlaying = false;
    this.elements.modal.classList.remove('active');
    this.elements.modal.style.display = 'none';
  }
};

// 导出
window.ColoringGame = ColoringGame;
