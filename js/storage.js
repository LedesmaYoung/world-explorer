// 世界环球旅行家 - 本地存储管理（支持多旅行家）

const STORAGE_KEY = 'world_explorer_data';
const MAX_TRAVELERS = 3; // 最多3个旅行家

// 印章类型
const STAMP_TYPES = {
  ENTRY: 'entry',      // 入境章 - 红色
  EXIT: 'exit',        // 出境章 - 蓝色
  SPECIAL: 'special',  // 纪念章 - 金色
  CREATIVE: 'creative' // 创作章 - 紫色
};

// 可选头像列表
const AVATARS = [
  '🧑‍✈️', '👨‍✈️', '👩‍✈️', '🧒', '👦', '👧', 
  '🦸', '🧙', '🧚', '🦹', 
  '🐨', '🐼', '🦊', '🐯', '🦁', 
  '🐸', '🐨', '🐻', '🐰', '🦄'
];

// 默认存档数据结构
const defaultSaveData = {
  collectedCountries: [],      // 已收集的国家ID列表
  countryStamps: {},           // 每个国家的印章 { countryId: { type: 'entry', date: '...' } }
  unlockedBadges: [],          // 已解锁的勋章ID列表
  lastVisit: null,             // 最后访问时间
  settings: {
    soundEnabled: true,        // 音效开关
    bgmEnabled: false          // 背景音乐开关
  },
  // 独立游戏统计
  gameStats: {
    tapGame: {
      totalCorrect: 0,         // 国旗点击游戏总答对数
      highScore: 0             // 最高分
    },
    puzzleGame: {
      totalPlays: 0,           // 拼图游戏总完成次数
      highScore: 0             // 最高关卡数
    },
    matchGame: {
      totalPlays: 0,           // 翻牌游戏总完成次数
      bestTime: null           // 最佳时间
    },
    coloring: {
      totalSaved: 0            // 涂色作品保存数量
    }
  }
};

// 默认全局数据结构
const defaultGlobalData = {
  travelers: [],               // 旅行家列表
  currentTravelerId: null,     // 当前登录的旅行家ID
  saves: {},                   // 各旅行家的存档数据
  tapGameLeaderboard: [],      // 国旗点击游戏天梯排行榜
  puzzleGameLeaderboard: [],   // 拼图游戏排行榜
  garbageGameLeaderboard: []   // 垃圾分类游戏天梯排行榜
};

// ==================== 基础存储操作 ====================

// 保存全局数据到本地存储
function saveGlobalData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('保存数据失败:', e);
    return false;
  }
}

// 从本地存储加载全局数据
function loadGlobalData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      // 合并默认值，确保所有字段都存在
      return { 
        travelers: parsed.travelers || [],
        currentTravelerId: parsed.currentTravelerId || null,
        saves: parsed.saves || {},
        tapGameLeaderboard: parsed.tapGameLeaderboard || [],
        puzzleGameLeaderboard: parsed.puzzleGameLeaderboard || [],
        garbageGameLeaderboard: parsed.garbageGameLeaderboard || []
      };
    }
    return { ...defaultGlobalData };
  } catch (e) {
    console.error('加载数据失败:', e);
    return { ...defaultGlobalData };
  }
}

// 清除所有数据（重置应用）
function clearAllData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error('清除数据失败:', e);
    return false;
  }
}

// ==================== 旅行家管理 ====================

// 获取所有旅行家
function getAllTravelers() {
  const data = loadGlobalData();
  return data.travelers || [];
}

// 获取当前旅行家
function getCurrentTraveler() {
  const data = loadGlobalData();
  if (!data.currentTravelerId) return null;
  return data.travelers.find(t => t.id === data.currentTravelerId) || null;
}

// 获取当前旅行家ID
function getCurrentTravelerId() {
  const data = loadGlobalData();
  return data.currentTravelerId;
}

// 检查是否可以创建新旅行家
function canCreateTraveler() {
  const travelers = getAllTravelers();
  return travelers.length < MAX_TRAVELERS;
}

// 获取剩余可创建旅行家数量
function getRemainingTravelerSlots() {
  return MAX_TRAVELERS - getAllTravelers().length;
}

// 创建新旅行家
function createTraveler(name, avatar) {
  const data = loadGlobalData();
  
  // 检查数量限制
  if (data.travelers.length >= MAX_TRAVELERS) {
    return { success: false, error: '已达到旅行家数量上限' };
  }
  
  // 检查名字是否重复
  if (data.travelers.some(t => t.name === name)) {
    return { success: false, error: '旅行家名字已存在' };
  }
  
  // 生成唯一ID
  const id = 'traveler_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  
  // 创建旅行家信息
  const traveler = {
    id: id,
    name: name,
    avatar: avatar || AVATARS[0],
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString()
  };
  
  // 添加到列表
  data.travelers.push(traveler);
  
  // 创建对应的存档数据
  data.saves[id] = { ...defaultSaveData, lastVisit: new Date().toISOString() };
  
  // 设置为当前旅行家
  data.currentTravelerId = id;
  
  // 保存
  saveGlobalData(data);
  
  return { success: true, traveler: traveler };
}

// 选择旅行家登录
function selectTraveler(travelerId) {
  const data = loadGlobalData();
  
  // 检查旅行家是否存在
  const traveler = data.travelers.find(t => t.id === travelerId);
  if (!traveler) {
    return { success: false, error: '旅行家不存在' };
  }
  
  // 更新最后登录时间
  traveler.lastLoginAt = new Date().toISOString();
  data.currentTravelerId = travelerId;
  
  // 保存
  saveGlobalData(data);
  
  return { success: true, traveler: traveler };
}

// 删除旅行家
function deleteTraveler(travelerId) {
  const data = loadGlobalData();
  
  // 检查旅行家是否存在
  const index = data.travelers.findIndex(t => t.id === travelerId);
  if (index === -1) {
    return { success: false, error: '旅行家不存在' };
  }
  
  // 删除旅行家
  data.travelers.splice(index, 1);
  
  // 删除对应的存档数据
  delete data.saves[travelerId];
  
  // 如果删除的是当前旅行家，清除当前旅行家ID
  if (data.currentTravelerId === travelerId) {
    data.currentTravelerId = data.travelers.length > 0 ? data.travelers[0].id : null;
  }
  
  // 保存
  saveGlobalData(data);
  
  return { success: true };
}

// 登出当前旅行家
function logoutCurrentTraveler() {
  const data = loadGlobalData();
  data.currentTravelerId = null;
  saveGlobalData(data);
  return true;
}

// 重命名旅行家
function renameTraveler(travelerId, newName) {
  const data = loadGlobalData();
  
  // 检查旅行家是否存在
  const traveler = data.travelers.find(t => t.id === travelerId);
  if (!traveler) {
    return { success: false, error: '旅行家不存在' };
  }
  
  // 检查名字是否重复
  if (data.travelers.some(t => t.id !== travelerId && t.name === newName)) {
    return { success: false, error: '旅行家名字已存在' };
  }
  
  // 更新名字
  traveler.name = newName;
  
  // 保存
  saveGlobalData(data);
  
  return { success: true };
}

// 更换旅行家头像
function changeTravelerAvatar(travelerId, newAvatar) {
  const data = loadGlobalData();
  
  const traveler = data.travelers.find(t => t.id === travelerId);
  if (!traveler) {
    return { success: false, error: '旅行家不存在' };
  }
  
  traveler.avatar = newAvatar;
  saveGlobalData(data);
  
  return { success: true };
}

// ==================== 存档数据操作 ====================

// 获取当前旅行家的存档数据
function loadCurrentSaveData() {
  const data = loadGlobalData();
  const travelerId = data.currentTravelerId;
  
  if (!travelerId) {
    return { ...defaultSaveData };
  }
  
  const save = data.saves[travelerId];
  if (!save) {
    return { ...defaultSaveData };
  }
  
  // 迁移旧格式的印章数据（单个对象 → 数组）
  const migratedStamps = {};
  if (save.countryStamps) {
    Object.keys(save.countryStamps).forEach(countryId => {
      const stamp = save.countryStamps[countryId];
      if (Array.isArray(stamp)) {
        // 新格式，已经是数组
        migratedStamps[countryId] = stamp;
      } else if (stamp && stamp.type) {
        // 旧格式，单个对象 → 转换为数组
        migratedStamps[countryId] = [stamp];
      }
    });
  }
  
  // 合并默认值，确保新增字段有默认值
  return { 
    ...defaultSaveData, 
    ...save, 
    countryStamps: migratedStamps,
    settings: { ...defaultSaveData.settings, ...save.settings },
    gameStats: { ...defaultSaveData.gameStats, ...save.gameStats }
  };
}

// 保存当前旅行家的存档数据
function saveCurrentSaveData(saveData) {
  const data = loadGlobalData();
  const travelerId = data.currentTravelerId;
  
  if (!travelerId) {
    console.error('没有当前旅行家，无法保存');
    return false;
  }
  
  saveData.lastVisit = new Date().toISOString();
  data.saves[travelerId] = saveData;
  
  return saveGlobalData(data);
}

// ==================== 兼容旧API（保持原有函数签名） ====================

// 保存数据到本地存储（兼容旧API）
function saveData(saveData) {
  return saveCurrentSaveData(saveData);
}

// 从本地存储加载数据（兼容旧API）
function loadData() {
  return loadCurrentSaveData();
}

// 检查国家是否已收集（拥有印章）
function isCountryCollected(countryId) {
  const saveData = loadCurrentSaveData();
  return !!saveData.countryStamps[countryId];
}

// 获取国家的印章信息
function getCountryStamp(countryId) {
  const saveData = loadCurrentSaveData();
  return saveData.countryStamps[countryId] || null;
}

// 为国家添加印章（通过游戏后调用）
function addStampToCountry(countryId) {
  const saveData = loadCurrentSaveData();
  
  // 获取该国家现有的印章数组
  if (!saveData.countryStamps[countryId]) {
    saveData.countryStamps[countryId] = [];
  }
  const stamps = saveData.countryStamps[countryId];
  
  // 如果已经有4个印章，该国家已收集完成，不再添加
  if (stamps.length >= 4) {
    return { alreadyCompleted: true, stamps: stamps };
  }
  
  // 确定下一个印章类型：第1次入境，第2次出境，第3次纪念，第4次创作
  const stampOrder = [STAMP_TYPES.ENTRY, STAMP_TYPES.EXIT, STAMP_TYPES.SPECIAL, STAMP_TYPES.CREATIVE];
  const stampType = stampOrder[stamps.length];
  
  // 创建新印章
  const stamp = {
    type: stampType,
    date: new Date().toISOString()
  };
  
  // 添加到数组（累积，不覆盖）
  stamps.push(stamp);
  
  // 同时更新已收集列表
  if (!saveData.collectedCountries.includes(countryId)) {
    saveData.collectedCountries.push(countryId);
  }
  
  saveCurrentSaveData(saveData);
  
  // 返回结果
  return {
    alreadyCompleted: false,
    newStamp: stamp,
    stamps: stamps,
    isCompleted: stamps.length >= 4 // 是否完成该国家收集（4个印章才算完成）
  };
}

// 获取国家的印章信息（返回数组）
function getCountryStamp(countryId) {
  const saveData = loadCurrentSaveData();
  const stamps = saveData.countryStamps[countryId];
  return stamps && stamps.length > 0 ? stamps : null;
}

// 检查国家是否已完成收集（3个印章）
function isCountryCompleted(countryId) {
  const stamps = getCountryStamp(countryId);
  return stamps && stamps.length >= 4;
}

// 获取国家当前印章数量
function getCountryStampCount(countryId) {
  const stamps = getCountryStamp(countryId);
  return stamps ? stamps.length : 0;
}

// 获取指定类型印章的数量
function getStampCountByType(stampType) {
  const saveData = loadCurrentSaveData();
  let count = 0;
  Object.values(saveData.countryStamps).forEach(stamps => {
    if (Array.isArray(stamps)) {
      count += stamps.filter(s => s.type === stampType).length;
    }
  });
  return count;
}

// 获取所有印章总数
function getTotalStampCount() {
  const saveData = loadCurrentSaveData();
  let count = 0;
  Object.values(saveData.countryStamps).forEach(stamps => {
    if (Array.isArray(stamps)) {
      count += stamps.length;
    }
  });
  return count;
}

// 获取所有印章
function getAllStamps() {
  const saveData = loadCurrentSaveData();
  return saveData.countryStamps;
}

// 获取已收集国家数量（至少有1个印章）
function getCollectedCount() {
  const saveData = loadCurrentSaveData();
  return Object.keys(saveData.countryStamps).length;
}

// 获取已完成国家数量（3个印章）
function getCompletedCount() {
  const saveData = loadCurrentSaveData();
  return Object.values(saveData.countryStamps).filter(stamps => 
    Array.isArray(stamps) && stamps.length >= 3
  ).length;
}

// 获取指定洲已收集国家数量
function getCollectedCountByContinent(continentId) {
  const saveData = loadCurrentSaveData();
  const countries = getCountriesByContinent(continentId);
  return countries.filter(c => saveData.countryStamps[c.id]).length;
}

// 获取指定洲的已收集国家列表
function getCollectedCountriesByContinent(continentId) {
  const saveData = loadCurrentSaveData();
  const countries = getCountriesByContinent(continentId);
  return countries.filter(c => saveData.countryStamps[c.id]);
}

// 检查勋章是否已解锁
function isBadgeUnlocked(badgeId) {
  const saveData = loadCurrentSaveData();
  return saveData.unlockedBadges.includes(badgeId);
}

// 解锁勋章
function unlockBadge(badgeId) {
  const saveData = loadCurrentSaveData();
  if (!saveData.unlockedBadges.includes(badgeId)) {
    saveData.unlockedBadges.push(badgeId);
    saveCurrentSaveData(saveData);
    return true;
  }
  return false;
}

// 获取音效开关状态
function isSoundEnabled() {
  const saveData = loadCurrentSaveData();
  return saveData.settings.soundEnabled;
}

// 设置音效开关
function setSoundEnabled(enabled) {
  const saveData = loadCurrentSaveData();
  saveData.settings.soundEnabled = enabled;
  saveCurrentSaveData(saveData);
}

// 获取背景音乐开关状态
function isBgmEnabled() {
  const saveData = loadCurrentSaveData();
  return saveData.settings.bgmEnabled;
}

// 设置背景音乐开关
function setBgmEnabled(enabled) {
  const saveData = loadCurrentSaveData();
  saveData.settings.bgmEnabled = enabled;
  saveCurrentSaveData(saveData);
}

// ==================== 导入/导出功能 ====================

// 导出所有数据为 JSON
function exportAllData() {
  const data = loadGlobalData();
  const exportData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    appName: '世界环球旅行家',
    data: data
  };
  return JSON.stringify(exportData, null, 2);
}

// 导出数据到文件（触发下载）
function exportToFile() {
  const jsonStr = exportAllData();
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  // 创建下载链接
  const a = document.createElement('a');
  a.href = url;
  a.download = `world-explorer-save-${formatDateForFilename(new Date())}.json`;
  document.body.appendChild(a);
  a.click();
  
  // 清理
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  
  return true;
}

// 从文件导入数据
function importFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        
        // 验证数据格式
        if (!imported.data || !imported.data.travelers) {
          reject(new Error('无效的存档文件格式'));
          return;
        }
        
        // 验证版本兼容性
        if (imported.version && imported.version !== '1.0') {
          console.warn('存档版本可能不兼容，尝试继续导入');
        }
        
        // 合并或替换数据
        const currentData = loadGlobalData();
        
        // 合并旅行家（避免 ID 冲突）
        const mergedData = mergeImportedData(currentData, imported.data);
        
        // 保存合并后的数据
        saveGlobalData(mergedData);
        
        resolve({ 
          success: true, 
          travelerCount: mergedData.travelers.length 
        });
      } catch (err) {
        reject(new Error('解析存档文件失败：' + err.message));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('读取文件失败'));
    };
    
    reader.readAsText(file);
  });
}

// 合并导入的数据
function mergeImportedData(currentData, importedData) {
  const merged = { ...currentData };
  
  // 合并旅行家列表（保留现有的，添加新的）
  const existingIds = new Set(currentData.travelers.map(t => t.id));
  
  importedData.travelers.forEach(traveler => {
    if (!existingIds.has(traveler.id)) {
      merged.travelers.push(traveler);
    }
  });
  
  // 合并存档数据（确保 gameStats 字段存在）
  importedData.saves = importedData.saves || {};
  Object.keys(importedData.saves).forEach(travelerId => {
    if (!merged.saves[travelerId]) {
      // 为旧存档数据添加 gameStats 字段
      const saveData = importedData.saves[travelerId];
      if (!saveData.gameStats) {
        saveData.gameStats = {
          tapGame: { totalCorrect: 0, highScore: 0 },
          puzzleGame: { totalPlays: 0, highScore: 0 },
          matchGame: { totalPlays: 0, bestTime: null },
          coloring: { totalSaved: 0 }
        };
      }
      merged.saves[travelerId] = saveData;
    }
  });
  
  // 合并排行榜数据（取最高分）
  merged.tapGameLeaderboard = mergeLeaderboards(
    currentData.tapGameLeaderboard || [],
    importedData.tapGameLeaderboard || []
  );
  
  merged.puzzleGameLeaderboard = mergeLeaderboards(
    currentData.puzzleGameLeaderboard || [],
    importedData.puzzleGameLeaderboard || []
  );
  
  // 如果当前没有选中旅行家，且导入的有旅行家，选中第一个
  if (!merged.currentTravelerId && merged.travelers.length > 0) {
    merged.currentTravelerId = merged.travelers[0].id;
  }
  
  return merged;
}

// 合并排行榜（保留每个旅行家的最高分）
function mergeLeaderboards(current, imported) {
  const map = new Map();
  
  // 先添加当前的
  current.forEach(record => {
    const key = record.travelerId;
    if (!map.has(key) || map.get(key).score < record.score) {
      map.set(key, record);
    }
  });
  
  // 再合并导入的
  imported.forEach(record => {
    const key = record.travelerId;
    if (!map.has(key) || map.get(key).score < record.score) {
      map.set(key, record);
    }
  });
  
  // 按分数排序返回
  return Array.from(map.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 50);
}

// 格式化日期用于文件名
function formatDateForFilename(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${y}${m}${d}_${h}${min}`;
}

// ==================== 国旗点击游戏天梯排行榜 ====================

// 保存天梯分数
function saveTapGameScore(score) {
  const data = loadGlobalData();
  const currentTraveler = getCurrentTraveler();
  
  if (!currentTraveler) {
    console.error('没有当前旅行家，无法保存分数');
    return -1;
  }
  
  // 初始化排行榜
  if (!data.tapGameLeaderboard) {
    data.tapGameLeaderboard = [];
  }
  
  // 创建新记录
  const record = {
    travelerId: currentTraveler.id,
    travelerName: currentTraveler.name,
    score: score,
    date: new Date().toISOString()
  };
  
  // 添加到排行榜
  data.tapGameLeaderboard.push(record);
  
  // 按分数降序排序
  data.tapGameLeaderboard.sort((a, b) => b.score - a.score);
  
  // 只保留前50名
  data.tapGameLeaderboard = data.tapGameLeaderboard.slice(0, 50);
  
  // 保存数据
  saveGlobalData(data);
  
  // 计算排名
  const rank = data.tapGameLeaderboard.findIndex(r => 
    r.travelerId === currentTraveler.id && 
    r.score === score && 
    r.date === record.date
  ) + 1;
  
  return rank;
}

// 获取天梯排行榜
function getTapGameLeaderboard() {
  const data = loadGlobalData();
  return data.tapGameLeaderboard || [];
}

// 获取旅行家最高分
function getTapGameHighScore(travelerId) {
  const leaderboard = getTapGameLeaderboard();
  const travelerRecords = leaderboard.filter(r => r.travelerId === travelerId);
  
  if (travelerRecords.length === 0) return 0;
  
  return Math.max(...travelerRecords.map(r => r.score));
}

// ==================== 拼图游戏挑战排行榜 ====================

// 保存拼图挑战分数
function savePuzzleGameScore(score) {
  const data = loadGlobalData();
  const currentTraveler = getCurrentTraveler();
  
  if (!currentTraveler) {
    console.error('没有当前旅行家，无法保存分数');
    return -1;
  }
  
  // 初始化排行榜
  if (!data.puzzleGameLeaderboard) {
    data.puzzleGameLeaderboard = [];
  }
  
  // 创建新记录
  const record = {
    travelerId: currentTraveler.id,
    travelerName: currentTraveler.name,
    score: score,
    date: new Date().toISOString()
  };
  
  // 添加到排行榜
  data.puzzleGameLeaderboard.push(record);
  
  // 按分数降序排序
  data.puzzleGameLeaderboard.sort((a, b) => b.score - a.score);
  
  // 只保留前50名
  data.puzzleGameLeaderboard = data.puzzleGameLeaderboard.slice(0, 50);
  
  // 保存数据
  saveGlobalData(data);
  
  // 计算排名
  const rank = data.puzzleGameLeaderboard.findIndex(r => 
    r.travelerId === currentTraveler.id && 
    r.score === score && 
    r.date === record.date
  ) + 1;
  
  return rank;
}

// 获取拼图排行榜
function getPuzzleGameLeaderboard() {
  const data = loadGlobalData();
  return data.puzzleGameLeaderboard || [];
}

// 获取旅行家拼图最高分
function getPuzzleGameHighScore(travelerId) {
  const leaderboard = getPuzzleGameLeaderboard();
  const travelerRecords = leaderboard.filter(r => r.travelerId === travelerId);
  
  if (travelerRecords.length === 0) return 0;
  
  return Math.max(...travelerRecords.map(r => r.score));
}

// ==================== 游戏统计更新 ====================

// 更新国旗点击游戏统计
function updateTapGameStats(correctCount) {
  const data = loadData();
  
  if (!data.gameStats) {
    data.gameStats = {
      tapGame: { totalCorrect: 0, highScore: 0 },
      puzzleGame: { totalPlays: 0, highScore: 0 },
      matchGame: { totalPlays: 0, bestTime: null },
      coloring: { totalSaved: 0 }
    };
  }
  
  data.gameStats.tapGame.totalCorrect += correctCount;
  if (correctCount > data.gameStats.tapGame.highScore) {
    data.gameStats.tapGame.highScore = correctCount;
  }
  
  saveData(data);
  checkAndUnlockBadges();
}

// 更新拼图游戏统计
function updatePuzzleGameStats(level) {
  const data = loadData();
  
  if (!data.gameStats) {
    data.gameStats = {
      tapGame: { totalCorrect: 0, highScore: 0 },
      puzzleGame: { totalPlays: 0, highScore: 0 },
      matchGame: { totalPlays: 0, bestTime: null },
      coloring: { totalSaved: 0 }
    };
  }
  
  data.gameStats.puzzleGame.totalPlays += 1;
  if (level > data.gameStats.puzzleGame.highScore) {
    data.gameStats.puzzleGame.highScore = level;
  }
  
  saveData(data);
  checkAndUnlockBadges();
}

// 更新翻牌游戏统计
function updateMatchGameStats() {
  const data = loadData();
  
  if (!data.gameStats) {
    data.gameStats = {
      tapGame: { totalCorrect: 0, highScore: 0 },
      puzzleGame: { totalPlays: 0, highScore: 0 },
      matchGame: { totalPlays: 0, bestTime: null },
      coloring: { totalSaved: 0 }
    };
  }
  
  data.gameStats.matchGame.totalPlays += 1;
  
  saveData(data);
  checkAndUnlockBadges();
}

// 更新涂色作品统计
function updateColoringStats() {
  const data = loadData();
  
  if (!data.gameStats) {
    data.gameStats = {
      tapGame: { totalCorrect: 0, highScore: 0 },
      puzzleGame: { totalPlays: 0, highScore: 0 },
      matchGame: { totalPlays: 0, bestTime: null },
      coloring: { totalSaved: 0 }
    };
  }
  
  data.gameStats.coloring.totalSaved += 1;
  
  saveData(data);
  checkAndUnlockBadges();
}

// 检查并解锁勋章
function checkAndUnlockBadges() {
  const data = loadData();
  const newBadges = [];
  
  BADGES.forEach(badge => {
    if (data.unlockedBadges.includes(badge.id)) return;
    
    const progress = getBadgeProgress(badge);
    
    if (progress.current >= progress.target) {
      data.unlockedBadges.push(badge.id);
      newBadges.push(badge);
    }
  });
  
  if (newBadges.length > 0) {
    saveData(data);
    // 显示勋章解锁通知
    showBadgeUnlockNotification(newBadges);
  }
}

// 显示勋章解锁通知
function showBadgeUnlockNotification(badges) {
  badges.forEach((badge, index) => {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'badge-unlock-notification';
      notification.innerHTML = `
        <div class="unlock-icon">${badge.icon}</div>
        <div class="unlock-text">
          <div class="unlock-title">🎉 解锁新勋章！</div>
          <div class="unlock-name">${badge.name}</div>
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }, index * 500);
  });
}

// 获取勋章进度（供外部调用）
function getBadgeProgress(badge) {
  const data = loadData();
  const gameStats = data.gameStats || {
    tapGame: { totalCorrect: 0, highScore: 0 },
    puzzleGame: { totalPlays: 0, highScore: 0 },
    matchGame: { totalPlays: 0, bestTime: null },
    coloring: { totalSaved: 0 }
  };
  
  if (typeof badge.condition === 'number') {
    const current = data.collectedCountries.length;
    return { current, target: badge.condition };
  }
  
  const type = badge.condition.type;
  const target = badge.condition.count;
  
  switch (type) {
    case 'continent':
      const continentCountries = getCountriesByContinent(badge.condition.value);
      const continentCurrent = continentCountries.filter(c => {
        const stamps = data.countryStamps[c.id] || [];
        return stamps.length > 0;
      }).length;
      return { current: continentCurrent, target };
      
    case 'stamps':
      let stampCount = 0;
      Object.values(data.countryStamps || {}).forEach(stamps => {
        stampCount += stamps.length;
      });
      return { current: stampCount, target };
      
    case 'complete-countries':
      let completeCount = 0;
      Object.values(data.countryStamps || {}).forEach(stamps => {
        if (stamps.length >= 4) completeCount++;
      });
      return { current: completeCount, target };
      
    case 'tap-game':
      return { current: gameStats.tapGame.totalCorrect || 0, target };
      
    case 'tap-game-highscore':
      return { current: gameStats.tapGame.highScore || 0, target };
      
    case 'puzzle-game':
      return { current: gameStats.puzzleGame.totalPlays || 0, target };
      
    case 'puzzle-game-highscore':
      return { current: gameStats.puzzleGame.highScore || 0, target };
      
    case 'match-game':
      return { current: gameStats.matchGame.totalPlays || 0, target };
      
    case 'coloring':
      return { current: gameStats.coloring.totalSaved || 0, target };
      
    default:
      return { current: 0, target: 0 };
  }
}

// ==================== 垃圾分类游戏天梯排行榜 ====================

// 保存垃圾分类天梯分数
function saveGarbageGameScore(score) {
  const data = loadGlobalData();
  const currentTraveler = getCurrentTraveler();
  
  if (!currentTraveler) {
    console.error('没有当前旅行家，无法保存分数');
    return -1;
  }
  
  // 初始化排行榜
  if (!data.garbageGameLeaderboard) {
    data.garbageGameLeaderboard = [];
  }
  
  // 创建新记录
  const record = {
    travelerId: currentTraveler.id,
    travelerName: currentTraveler.name,
    score: score,
    date: new Date().toISOString()
  };
  
  // 添加到排行榜
  data.garbageGameLeaderboard.push(record);
  
  // 按分数降序排序
  data.garbageGameLeaderboard.sort((a, b) => b.score - a.score);
  
  // 只保留前50名
  data.garbageGameLeaderboard = data.garbageGameLeaderboard.slice(0, 50);
  
  // 保存数据
  saveGlobalData(data);
  
  // 计算排名
  const rank = data.garbageGameLeaderboard.findIndex(r => 
    r.travelerId === currentTraveler.id && 
    r.score === score && 
    r.date === record.date
  ) + 1;
  
  console.log(`垃圾分类分数已保存: ${score}分, 排名: 第${rank}名`);
  
  return rank;
}

// 获取垃圾分类天梯排行榜
function getGarbageGameLeaderboard() {
  const data = loadGlobalData();
  return data.garbageGameLeaderboard || [];
}

// 获取旅行家垃圾分类最高分
function getGarbageGameHighScore(travelerId) {
  const leaderboard = getGarbageGameLeaderboard();
  const travelerRecords = leaderboard.filter(r => r.travelerId === travelerId);
  
  if (travelerRecords.length === 0) return 0;
  
  return Math.max(...travelerRecords.map(r => r.score));
}

// 更新垃圾分类游戏统计
function updateGarbageGameStats(correctCount) {
  const data = loadData();
  
  if (!data.gameStats) {
    data.gameStats = {
      tapGame: { totalCorrect: 0, highScore: 0 },
      puzzleGame: { totalPlays: 0, highScore: 0 },
      matchGame: { totalPlays: 0, bestTime: null },
      coloring: { totalSaved: 0 },
      garbageGame: { totalCorrect: 0, highScore: 0 }
    };
  }
  
  if (!data.gameStats.garbageGame) {
    data.gameStats.garbageGame = { totalCorrect: 0, highScore: 0 };
  }
  
  data.gameStats.garbageGame.totalCorrect += correctCount;
  if (correctCount > data.gameStats.garbageGame.highScore) {
    data.gameStats.garbageGame.highScore = correctCount;
  }
  
  saveData(data);
  checkAndUnlockBadges();
}
