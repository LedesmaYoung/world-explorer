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
    if (!text) {
      if (callback) callback();
      return;
    }
    
    // 如果正在播放，取消之前的语音
    if (this.isPlaying) {
      this.synth.cancel();
    }
    
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
      if (callback) callback();  // 即使出错也调用回调
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
      const types = { entry: '入境章', exit: '出境章', special: '纪念章', creative: '创作章' };
      return `恭喜你获得了${countryName}的${types[stampType]}！`;
    },
    badgeEarned: (badgeName) => `太棒了！你获得了${badgeName}勋章！`,
    tryAgain: () => '再试试看！',
    correct: () => '答对了！真棒！',
    wrong: () => '不对哦，再想想！',
    playerTurn: (name) => `轮到${name}了！`,
    matchSuccess: () => '配对成功！',
    matchFail: () => '配对失败，换对方翻牌。',
    gameWin: (name) => `游戏结束！${name}获胜！`,
    
    // ===== 新增：多样化鼓励语 =====
    // 正确答案时的鼓励（随机选择）
    correctPraise: () => {
      const praises = [
        '答对了！真棒！',
        '太厉害了！你真聪明！',
        '完美！你真是个小天才！',
        '正确！继续加油！',
        '真棒！你越来越厉害了！',
        '太棒了！你真聪明！',
        '答对了！给你点赞！',
        '真聪明！继续保持！'
      ];
      return praises[Math.floor(Math.random() * praises.length)];
    },
    
    // 错误时的鼓励（随机选择）
    wrongEncourage: () => {
      const encourages = [
        '不对哦，再想想！',
        '没关系，再试一次！',
        '别灰心，你可以的！',
        '加油，再找找看！',
        '不着急，慢慢来！',
        '再看看，你可以的！'
      ];
      return encourages[Math.floor(Math.random() * encourages.length)];
    },
    
    // 连续正确时的特殊鼓励
    streakPraise: (count) => {
      if (count >= 5) return `太厉害了！连续${count}次正确！你是小天才！`;
      if (count >= 3) return `真棒！连续${count}次正确！继续保持！`;
      return `连续${count}次正确！真棒！`;
    },
    
    // 游戏完成时的鼓励（根据表现）
    completePraise: (score, total) => {
      const ratio = score / total;
      if (ratio >= 1) return '太完美了！全部正确！你真是个小天才！';
      if (ratio >= 0.8) return '太棒了！表现非常出色！';
      if (ratio >= 0.6) return '不错哦！继续努力会更好！';
      return '完成了！多练习就会越来越棒！';
    },
    
    // 拼图游戏特有反馈
    puzzlePlaced: () => {
      const messages = ['放对了！', '很好！', '继续！', '太棒了！'];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    
    // 涂色游戏特有反馈
    coloringSaved: () => {
      const messages = [
        '作品已保存到画廊！',
        '真漂亮！已保存你的作品！',
        '太美了！作品已保存！'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    
    // 配对游戏特有反馈
    matchFound: () => {
      const messages = [
        '配对成功！',
        '找到了！真棒！',
        '太厉害了！配对成功！'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    
    matchMissed: () => {
      const messages = [
        '配对失败，换对方翻牌。',
        '没找到，轮到对方了！',
        '再接再厉！换对方翻牌。'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    
    // 游戏开始时的鼓励
    gameStart: (gameType) => {
      const starts = {
        tap: '准备好了吗？找出正确的国旗！',
        puzzle: '来挑战吧！把国旗拼好！',
        match: '翻牌配对游戏开始！加油！',
        coloring: '发挥创意，开始涂色吧！'
      };
      return starts[gameType] || '游戏开始！加油！';
    },
    
    // 游戏结束时的总结
    gameEnd: (score, isGood) => {
      if (isGood) {
        const messages = [
          `太棒了！你答对了${score}道题！`,
          `真厉害！${score}题正确！你是小天才！`,
          `表现出色！${score}题答对了！`
        ];
        return messages[Math.floor(Math.random() * messages.length)];
      } else {
        const messages = [
          `游戏结束！你答对了${score}道题。继续加油！`,
          `不错哦！答对了${score}题。多练习会更好！`,
          `游戏结束！${score}题正确。下次会更好的！`
        ];
        return messages[Math.floor(Math.random() * messages.length)];
      }
    },
    
    // ===== 国旗点击游戏专用提示语 =====
    // 天梯挑战开始时的提示语（10 套）
    tapGameStart: () => {
      const messages = [
        '天梯挑战开始！看清楚题目，点击正确的国旗！',
        '挑战开始！仔细看，找出正确的国旗！',
        '准备好了吗？天梯挑战开始！加油！',
        '国旗大挑战开始！看准了再点哦！',
        '天梯挑战！看清楚国旗，点对得分！',
        '挑战时间到！找出正确的国旗，冲冲冲！',
        '天梯模式开启！仔细观察，点击正确答案！',
        '国旗识别挑战开始！看清楚再选择！',
        '天梯挑战！眼疾手快，找出正确国旗！',
        '挑战开始！认真看，点对国旗得分！'
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    
    // 每一题的提示语（10 套）
    tapGameQuestion: (questionNum, countryName) => {
      const templates = [
        `第${questionNum}题！${countryName}！`,
        `第${questionNum}题！找出${countryName}！`,
        `第${questionNum}题！${countryName}的国旗！`,
        `第${questionNum}题！看，${countryName}！`,
        `第${questionNum}题！${countryName}在哪里？`
      ];
      return templates[Math.floor(Math.random() * templates.length)];
    },
    
    // 护照模式开始时的提示语（10 套）
    tapGamePassport: (countryName) => {
      const messages = [
        `${countryName}！`,
        `找出${countryName}！`,
        `${countryName}的国旗！`,
        `看，${countryName}！`,
        `${countryName}在哪里？`
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
};

// 导出
window.VoiceManager = VoiceManager;
