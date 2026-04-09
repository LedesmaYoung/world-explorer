// 垃圾分类游戏功能

class GarbageGame {
  static garbageData = null;
  static isLoading = false;
  
  static init() {
    console.log('=== 初始化垃圾分类游戏 ===');
    this.loadGarbageData();
  }
  
  static async loadGarbageData() {
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
  }

  static async showDifficultySelect() {
    await this.loadGarbageData();
    
    if (!this.garbageData || !this.garbageData.types) {
      alert('数据加载失败，请刷新页面重试');
      return;
    }

    const modal = document.createElement('div');
    modal.className = 'garbage-game-modal active';
    modal.id = 'garbage-game-modal';
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    };

    modal.innerHTML = `
      <div class="garbage-game-content">
        <div class="garbage-game-header">
          <h2>垃圾分类挑战</h2>
          <button class="close-btn" onclick="document.getElementById('garbage-game-modal').remove()">✕</button>
        </div>
        <div class="difficulty-select">
          ${Object.entries(GARBAGE_GAME_LEVELS).map(([level, config]) => `
            <div class="difficulty-option" onclick="GarbageGame.start('${level}')">
              <div class="difficulty-name">${config.name}</div>
              <div class="difficulty-info">
                <span>物品数量: ${config.itemCount}</span>
                <span>时间限制: ${config.timeLimit}秒</span>
                <span>每题得分: ${config.scorePerItem}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    
    if (typeof audioManager !== 'undefined') {
      audioManager.playSound('tap');
    }
  }

  static async start(level) {
    const config = GARBAGE_GAME_LEVELS[level];
    if (!config) return;

    const modal = document.getElementById('garbage-game-modal');
    if (modal) {
      modal.remove();
    }

    const gameModal = document.createElement('div');
    gameModal.className = 'garbage-game-modal active';
    gameModal.id = 'garbage-game-play-modal';

    const items = await this.generateGameItems(config.itemCount);
    
    if (!items || items.length === 0) {
      alert('无法生成游戏物品，请刷新页面重试');
      return;
    }

    const types = this.garbageData.types;
    
    gameModal.innerHTML = `
      <div class="garbage-game-content">
        <div class="garbage-game-header">
          <h2>垃圾分类挑战 - ${config.name}</h2>
          <div class="game-stats">
            <span class="score">得分: <span id="garbage-score">0</span></span>
            <span class="time">时间: <span id="garbage-time">${config.timeLimit}</span>秒</span>
          </div>
        </div>
        <div class="garbage-game-play-area">
          <div class="garbage-items-container" id="garbage-items-container">
            ${items.map(item => `
              <div class="garbage-item" draggable="true" data-type="${item.type}" data-id="${item.id}">
                <img class="garbage-item-image" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <span class="garbage-item-icon" style="display:none;">${item.icon || '🗑️'}</span>
                <span class="garbage-item-name">${item.name}</span>
              </div>
            `).join('')}
          </div>
          <div class="garbage-bins">
            ${[
              { type: 'hazardous', info: types.hazardous },
              { type: 'kitchen', info: types.kitchen },
              { type: 'recyclable', info: types.recyclable },
              { type: 'other', info: types.other }
            ].map(({ type, info }) => `
              <div class="garbage-bin" style="border-color: ${info.color}" data-type="${type}">
                <div class="garbage-bin-icon" style="background-color: ${info.color}">
                  ${info.icon}
                </div>
                <div class="garbage-bin-name">${info.name}</div>
                <div class="garbage-bin-items"></div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="game-message" id="game-message"></div>
      </div>
    `;

    document.body.appendChild(gameModal);
    
    this.bindDragEvents();
    
    this.startGame(config, items);
  }

  static async generateGameItems(count) {
    await this.loadGarbageData();
    
    if (!this.garbageData || !this.garbageData.items) {
      console.error('垃圾分类数据未加载');
      return [];
    }
    
    const allItems = this.garbageData.items;
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  static bindDragEvents() {
    const items = document.querySelectorAll('.garbage-item');
    const bins = document.querySelectorAll('.garbage-bin');
    let draggedItem = null;

    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.type);
        e.dataTransfer.setData('text/id', item.dataset.id);
        draggedItem = item;
        item.classList.add('dragging');
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        draggedItem = null;
      });
    });

    bins.forEach(bin => {
      bin.addEventListener('dragover', (e) => {
        e.preventDefault();
        bin.classList.add('hover');
      });

      bin.addEventListener('dragleave', () => {
        bin.classList.remove('hover');
      });

      bin.addEventListener('drop', (e) => {
        e.preventDefault();
        bin.classList.remove('hover');
        
        const itemType = e.dataTransfer.getData('text/plain');
        const itemId = e.dataTransfer.getData('text/id');
        const binType = bin.dataset.type;
        
        this.checkAnswer(itemType, binType, draggedItem);
      });
    });
  }

  static startGame(config, items) {
    let score = 0;
    let timeLeft = config.timeLimit;
    let itemsLeft = items.length;
    
    const scoreElement = document.getElementById('garbage-score');
    const timeElement = document.getElementById('garbage-time');
    const messageElement = document.getElementById('game-message');

    // 倒计时
    const timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        this.endGame(score, false);
      }
    }, 1000);

    // 保存游戏状态
    this.gameState = {
      config,
      score,
      timeLeft,
      itemsLeft,
      timer,
      scoreElement,
      timeElement,
      messageElement
    };
  }

  static checkAnswer(itemType, binType, draggedItem) {
    const isCorrect = itemType === binType;
    const messageElement = this.gameState.messageElement;
    
    if (isCorrect) {
      this.gameState.score += this.gameState.config.scorePerItem;
      this.gameState.scoreElement.textContent = this.gameState.score;
      this.gameState.itemsLeft--;
      
      if (draggedItem) {
        const itemImage = draggedItem.querySelector('.garbage-item-image');
        const itemIcon = draggedItem.querySelector('.garbage-item-icon');
        const itemName = draggedItem.querySelector('.garbage-item-name').textContent;
        
        draggedItem.remove();
        
        const bin = document.querySelector(`.garbage-bin[data-type="${binType}"]`);
        if (bin) {
          const itemsContainer = bin.querySelector('.garbage-bin-items');
          if (itemsContainer) {
            const newItem = document.createElement('div');
            newItem.className = 'garbage-bin-item';
            
            if (itemImage && itemImage.style.display !== 'none') {
              newItem.innerHTML = `
                <img src="${itemImage.src}" alt="${itemName}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;" />
                <div style="font-size: 10px; margin-top: 2px; text-align: center; max-width: 50px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${itemName}</div>
              `;
            } else {
              newItem.innerHTML = `
                <div style="font-size: 24px;">${itemIcon ? itemIcon.textContent : '🗑️'}</div>
                <div style="font-size: 10px; margin-top: 2px; text-align: center; max-width: 50px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${itemName}</div>
              `;
            }
            itemsContainer.appendChild(newItem);
          }
        }
      }
      
      messageElement.textContent = '✅ 分类正确！';
      messageElement.className = 'game-message correct';
      
      if (typeof audioManager !== 'undefined') {
        audioManager.playSound('badge');
      }
      
      if (this.gameState.itemsLeft === 0) {
        clearInterval(this.gameState.timer);
        this.endGame(this.gameState.score, true);
      }
    } else {
      messageElement.textContent = '❌ 分类错误，再试一次！';
      messageElement.className = 'game-message error';
      
      if (typeof audioManager !== 'undefined') {
        audioManager.playSound('error');
      }
    }
    
    setTimeout(() => {
      messageElement.textContent = '';
      messageElement.className = 'game-message';
    }, 3000);
  }

  static endGame(score, isComplete) {
    // 关闭游戏弹窗
    const modal = document.getElementById('garbage-game-play-modal');
    if (modal) {
      modal.remove();
    }
    
    // 创建结果弹窗
    const resultModal = document.createElement('div');
    resultModal.className = 'garbage-game-modal active';
    resultModal.id = 'garbage-game-result-modal';
    resultModal.onclick = (e) => {
      if (e.target === resultModal) {
        resultModal.remove();
      }
    };

    const message = isComplete ? '🎉 挑战完成！' : '⏰ 时间到！';

    resultModal.innerHTML = `
      <div class="garbage-game-content">
        <div class="garbage-game-header">
          <h2>游戏结果</h2>
          <button class="close-btn" onclick="document.getElementById('garbage-game-result-modal').remove()">✕</button>
        </div>
        <div class="game-result">
          <div class="result-message">${message}</div>
          <div class="result-score">得分：<span>${score}</span></div>
          <div class="result-buttons">
            <button class="play-again-btn" onclick="GarbageGame.showDifficultySelect(); document.getElementById('garbage-game-result-modal').remove()">再玩一次</button>
            <button class="back-btn" onclick="document.getElementById('garbage-game-result-modal').remove()">返回</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(resultModal);
    
    // 播放结束音效
    if (typeof audioManager !== 'undefined') {
      audioManager.playSound('badge');
    }
  }
}