// 世界环球旅行家 - 音频管理

class AudioManager {
  constructor() {
    this.sounds = {};
    this.currentVoice = null;
    this.soundEnabled = true;
    this.bgmEnabled = false;
    this.bgmAudio = null;
  }

  // 初始化音效
  init() {
    this.soundEnabled = isSoundEnabled();
    this.bgmEnabled = isBgmEnabled();
    
    // 预加载基础音效
    this.preloadSound('tap', 'assets/audio/tap.mp3');
    this.preloadSound('collect', 'assets/audio/collect.mp3');
    this.preloadSound('badge', 'assets/audio/badge.mp3');
    this.preloadSound('bgm', 'assets/audio/bgm.mp3');
  }

  // 预加载音效
  preloadSound(name, src) {
    const audio = new Audio();
    audio.src = src;
    audio.preload = 'auto';
    audio.addEventListener('error', () => {
      console.log(`音效 ${name} 加载失败，已忽略`);
    });
    this.sounds[name] = audio;
  }

  // 播放音效
  playSound(name) {
    if (!this.soundEnabled) return;
    
    const audio = this.sounds[name];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('音效播放失败:', e));
    }
  }

  // 播放国家名称语音（中英文依次播放）
  playCountryVoice(countryId) {
    if (!this.soundEnabled) return;
    
    // 停止当前播放的语音
    this.stopCurrentVoice();
    
    const country = getCountryById(countryId);
    if (country && country.audioZh && country.audioEn) {
      // 创建中文音频
      const zhAudio = new Audio(country.audioZh);
      // 创建英文音频
      const enAudio = new Audio(country.audioEn);
      
      this.currentVoice = zhAudio;
      
      // 播放中文，结束后播放英文
      zhAudio.play().catch(e => console.log('中文语音播放失败:', e));
      
      zhAudio.onended = () => {
        this.currentVoice = enAudio;
        enAudio.play().catch(e => console.log('英文语音播放失败:', e));
      };
    }
  }

  // 停止当前语音
  stopCurrentVoice() {
    if (this.currentVoice) {
      this.currentVoice.pause();
      this.currentVoice = null;
    }
  }

  // 设置音效开关
  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
    setSoundEnabled(enabled);
    if (!enabled) {
      this.stopCurrentVoice();
    }
  }

  // 播放背景音乐
  playBgm() {
    if (!this.bgmEnabled || !this.sounds['bgm']) return;
    
    this.bgmAudio = this.sounds['bgm'];
    this.bgmAudio.loop = true;
    this.bgmAudio.volume = 0.3;
    this.bgmAudio.play().catch(e => console.log('背景音乐播放失败:', e));
  }

  // 停止背景音乐
  stopBgm() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio.currentTime = 0;
    }
  }

  // 设置背景音乐开关
  setBgmEnabled(enabled) {
    this.bgmEnabled = enabled;
    setBgmEnabled(enabled);
    if (enabled) {
      this.playBgm();
    } else {
      this.stopBgm();
    }
  }
}

// 创建全局音频管理实例
const audioManager = new AudioManager();
