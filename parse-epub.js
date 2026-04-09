#!/usr/bin/env node

// EPUB 解析脚本
// 用于从 EPUB 文件中提取文字和图片内容

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { DOMParser } = require('xmldom');

// 确保输出目录存在
const outputDir = path.join(__dirname, 'data', 'garbage');
const imagesDir = path.join(outputDir, 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// EPUB 文件路径
const epubPath = path.join(__dirname, 'data', '垃圾分类立体拼插游戏书.epub');

async function parseEpub() {
  try {
    console.log('=== 开始解析 EPUB 文件 ===');
    console.log('文件路径:', epubPath);
    
    // 读取 EPUB 文件
    const epubBuffer = fs.readFileSync(epubPath);
    
    // 使用 JSZip 解压 EPUB 文件
    const zip = new JSZip();
    await zip.loadAsync(epubBuffer);
    
    console.log('=== EPUB 文件解压完成 ===');
    
    // 提取 EPUB 内容
    const extractedData = await extractContent(zip);
    
    // 保存数据为 JSON 文件
    const dataPath = path.join(outputDir, 'garbage-data.json');
    fs.writeFileSync(dataPath, JSON.stringify(extractedData, null, 2));
    console.log('=== 数据保存完成 ===');
    console.log('数据文件路径:', dataPath);
    
    console.log('=== 解析完成 ===');
    console.log(`提取了 ${extractedData.items.length} 个垃圾物品`);
    console.log(`保存了 ${fs.readdirSync(imagesDir).length} 张图片`);
  } catch (error) {
    console.error('解析 EPUB 文件时出错:', error);
    process.exit(1);
  }
}

async function extractContent(zip) {
  try {
    // 查找 EPUB 的内容文件
    let contentFile = null;
    let basePath = '';
    
    // 检查 META-INF/container.xml
    const containerContent = await zip.file('META-INF/container.xml')?.async('string');
    if (containerContent) {
      console.log('找到 container.xml');
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(containerContent, 'application/xml');
      const rootfile = xmlDoc.getElementsByTagName('rootfile')[0];
      if (rootfile) {
        const contentPath = rootfile.getAttribute('full-path');
        if (contentPath) {
          contentFile = contentPath;
          basePath = path.dirname(contentPath);
          console.log('找到 content.opf:', contentPath);
          console.log('基础路径:', basePath);
        }
      }
    }
    
    if (!contentFile) {
      throw new Error('无法找到 content.opf 文件');
    }
    
    // 解析 content.opf
    const opfContent = await zip.file(contentFile)?.async('string');
    if (!opfContent) {
      throw new Error('无法读取 content.opf 内容');
    }
    
    console.log('解析 content.opf');
    const parser = new DOMParser();
    const opfDoc = parser.parseFromString(opfContent, 'application/xml');
    
    // 提取 manifest 和 spine
    const manifest = {};
    const spine = [];
    
    // 解析 manifest
    const manifestItems = opfDoc.getElementsByTagName('item');
    for (let i = 0; i < manifestItems.length; i++) {
      const item = manifestItems[i];
      const id = item.getAttribute('id');
      const href = item.getAttribute('href');
      const mediaType = item.getAttribute('media-type');
      manifest[id] = { href, mediaType };
    }
    console.log(`找到 ${Object.keys(manifest).length} 个 manifest 项目`);
    
    // 解析 spine
    const spineItems = opfDoc.getElementsByTagName('itemref');
    for (let i = 0; i < spineItems.length; i++) {
      const itemref = spineItems[i];
      const idref = itemref.getAttribute('idref');
      if (manifest[idref]) {
        spine.push(manifest[idref]);
      }
    }
    console.log(`找到 ${spine.length} 个 spine 项目`);
    
    // 提取图片
    console.log('开始提取图片...');
    const imageMap = {};
    for (const [id, item] of Object.entries(manifest)) {
      if (item.mediaType && item.mediaType.startsWith('image/')) {
        const imagePath = basePath ? `${basePath}/${item.href}` : item.href;
        const imageData = await zip.file(imagePath)?.async('nodebuffer');
        if (imageData) {
          const imageFileName = `${id}${path.extname(item.href)}`;
          const imageFilePath = path.join(imagesDir, imageFileName);
          fs.writeFileSync(imageFilePath, imageData);
          imageMap[item.href] = `data/garbage/images/${imageFileName}`;
          console.log(`提取图片: ${item.href} -> ${imageFileName}`);
        }
      }
    }
    
    // 提取文字内容和图片关联
    console.log('开始提取文字内容和图片关联...');
    const garbageItems = [];
    
    // 章节与垃圾类型的映射
    const chapterTypeMap = {
      'chapter3': 'recyclable',
      'chapter4': 'kitchen',
      'chapter5': 'other',
      'chapter6': 'hazardous'
    };
    
    for (const item of spine) {
      const filePath = basePath ? `${basePath}/${item.href}` : item.href;
      const content = await zip.file(filePath)?.async('string');
      if (content) {
        // 根据章节名称确定垃圾类型
        let garbageType = 'other';
        for (const [chapter, type] of Object.entries(chapterTypeMap)) {
          if (item.href.includes(chapter)) {
            garbageType = type;
            break;
          }
        }
        
        const items = parseHtmlContent(content, imageMap, basePath, garbageType);
        garbageItems.push(...items);
        console.log(`提取章节: ${item.href}, 找到 ${items.length} 个物品`);
      }
    }
    
    // 构建垃圾数据结构
    const garbageData = buildGarbageData(garbageItems, imageMap);
    
    return garbageData;
  } catch (error) {
    console.error('提取 EPUB 内容时出错:', error);
    throw error;
  }
}

function parseHtmlContent(html, imageMap, basePath, garbageType = 'other') {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const items = [];
  
  const body = doc.getElementsByTagName('body')[0];
  if (!body) {
    console.log('  无法找到 body 元素');
    return items;
  }
  
  const allElements = body.childNodes;
  const elementsArray = [];
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].nodeType === 1) {
      elementsArray.push(allElements[i]);
    }
  }
  
  console.log(`  找到 ${elementsArray.length} 个顶级元素`);
  
  for (let i = 0; i < elementsArray.length; i++) {
    const elem = elementsArray[i];
    
    const img = elem.getElementsByTagName('img')[0];
    if (!img) continue;
    
    const imgSrc = img.getAttribute('src');
    if (!imgSrc) continue;
    
    let itemName = '';
    let itemDesc = '';
    
    for (let j = i + 1; j < Math.min(i + 6, elementsArray.length); j++) {
      const nextElem = elementsArray[j];
      
      if (nextElem.tagName.toLowerCase() === 'p') {
        const pClass = nextElem.getAttribute('class') || '';
        const boldElem = nextElem.getElementsByTagName('b')[0];
        
        if (boldElem && pClass.includes('center')) {
          const text = boldElem.textContent?.trim() || '';
          if (text.length > 0 && text.length < 20 && 
              !text.includes('Recyclable') && !text.includes('Hazardous') && 
              !text.includes('Kitchen') && !text.includes('Other') &&
              !text.includes('Food Waste') && !text.includes('Waste') &&
              !text.includes('投放') && !text.includes('小贴士') &&
              !text.includes('Household') && !text.includes('Restaurant')) {
            itemName = text;
            console.log(`    找到物品: ${itemName} -> ${imgSrc}`);
            
            for (let k = j + 1; k < Math.min(j + 4, elementsArray.length); k++) {
              const descElem = elementsArray[k];
              if (descElem.tagName.toLowerCase() === 'p') {
                const descClass = descElem.getAttribute('class') || '';
                if (descClass.includes('left')) {
                  const descText = descElem.textContent?.trim() || '';
                  if (descText.length > 10 && !descText.includes('注：')) {
                    itemDesc = descText;
                    break;
                  }
                }
              }
            }
            break;
          }
        }
      }
    }
    
    if (itemName && itemName.length > 0 && itemName.length < 20) {
      let imagePath = '';
      if (imgSrc.startsWith('../Images/')) {
        const relativePath = imgSrc.replace('../', '');
        imagePath = imageMap[relativePath] || '';
      } else if (imgSrc.startsWith('Images/')) {
        imagePath = imageMap[imgSrc] || '';
      }
      
      items.push({
        name: itemName,
        desc: itemDesc,
        image: imagePath,
        type: garbageType
      });
    }
  }
  
  return items;
}

function buildGarbageData(garbageItems, imageMap) {
  // 初始化数据结构
  const garbageData = {
    types: {
      hazardous: {
        name: '有害垃圾',
        color: '#F94343',
        desc: '有害垃圾是指含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。',
        examples: [],
        icon: '⚠️',
        image: ''
      },
      kitchen: {
        name: '厨余垃圾',
        color: '#52C41A',
        desc: '厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。',
        examples: [],
        icon: '🍎',
        image: ''
      },
      recyclable: {
        name: '可回收物',
        color: '#4B9CD3',
        desc: '可回收物是指适宜回收循环使用和资源利用的废物。',
        examples: [],
        icon: '♻️',
        image: ''
      },
      other: {
        name: '其他垃圾',
        color: '#9E9E9E',
        desc: '其他垃圾是指危害较小，但无再次利用价值的垃圾。',
        examples: [],
        icon: '🗑️',
        image: ''
      }
    },
    items: []
  };
  
  // 定义垃圾物品及其类型
  const garbageItemsWithType = {
    '电池': { type: 'hazardous', icon: '🔋', defaultDesc: '电池中含有汞、镉等有害物质，随意丢弃会污染土壤和水源。废弃电池应投放到有害垃圾桶中。' },
    '灯泡': { type: 'hazardous', icon: '💡', defaultDesc: '灯泡中含有汞等有害物质，破碎后会释放有毒气体。废弃灯泡应小心包装后投放到有害垃圾桶中。' },
    '灯管': { type: 'hazardous', icon: '💡', defaultDesc: '荧光灯管含有汞蒸气，破碎后会释放有毒物质。废弃灯管应完整包装后投放到有害垃圾桶中。' },
    '药品': { type: 'hazardous', icon: '💊', defaultDesc: '过期药品含有有害成分，随意丢弃会污染环境。废弃药品宜连带包装一并投放到有害垃圾桶中。' },
    '油漆': { type: 'hazardous', icon: '🎨', defaultDesc: '油漆中含有挥发性有机化合物，对人体和环境有害。废弃油漆及其容器应投放到有害垃圾桶中。' },
    '温度计': { type: 'hazardous', icon: '🌡️', defaultDesc: '体温计中含有水银，破碎后会释放有毒物质。废弃体温计应小心包装后投放到有害垃圾桶中。' },
    '体温计': { type: 'hazardous', icon: '🌡️', defaultDesc: '体温计中含有水银，破碎后会释放有毒物质。废弃体温计应小心包装后投放到有害垃圾桶中。' },
    '杀虫剂': { type: 'hazardous', icon: '🐛', defaultDesc: '杀虫剂含有有毒化学成分，对人体和环境有害。废弃杀虫剂等压力罐装容器，应排空内容物后投放到有害垃圾桶中。' },
    '化妆品': { type: 'hazardous', icon: '💄', defaultDesc: '过期化妆品含有有害成分，随意丢弃会污染环境。废弃化妆品应投放到有害垃圾桶中。' },
    '苹果核': { type: 'kitchen', icon: '🍎', defaultDesc: '苹果核是有机废弃物，可以通过堆肥转化为肥料。应投放到厨余垃圾桶中。' },
    '剩菜': { type: 'kitchen', icon: '🍱', defaultDesc: '剩菜属于有机垃圾，可通过堆肥处理。应沥干水分后投放到厨余垃圾桶中。' },
    '蛋壳': { type: 'kitchen', icon: '🥚', defaultDesc: '蛋壳富含钙质，是良好的有机肥料原料。应投放到厨余垃圾桶中。' },
    '骨头': { type: 'kitchen', icon: '🍖', defaultDesc: '骨头是有机废弃物，可通过堆肥处理。大骨头难以降解，应投放到其他垃圾桶中。' },
    '蔬菜': { type: 'kitchen', icon: '🥬', defaultDesc: '蔬菜残渣是有机垃圾，可通过堆肥转化为肥料。应投放到厨余垃圾桶中。' },
    '水果': { type: 'kitchen', icon: '🍎', defaultDesc: '水果残渣是有机垃圾，可通过堆肥转化为肥料。应投放到厨余垃圾桶中。' },
    '茶叶': { type: 'kitchen', icon: '🍵', defaultDesc: '茶叶渣是有机垃圾，可通过堆肥转化为肥料。应投放到厨余垃圾桶中。' },
    '果皮': { type: 'kitchen', icon: '🍎', defaultDesc: '果皮是有机废弃物，可以通过堆肥转化为肥料。应投放到厨余垃圾桶中。' },
    '废纸': { type: 'recyclable', icon: '📄', defaultDesc: '废纸可以回收再利用，减少树木砍伐。废纸应保持平整，轻投轻放到可回收物桶中。' },
    '塑料瓶': { type: 'recyclable', icon: '🥤', defaultDesc: '塑料瓶可以回收再利用，减少塑料污染。应清空内容物，压扁后投放到可回收物桶中。' },
    '玻璃瓶': { type: 'recyclable', icon: '🍾', defaultDesc: '玻璃瓶可以多次回收利用，节约资源。应小心轻放，避免破碎，投放到可回收物桶中。' },
    '易拉罐': { type: 'recyclable', icon: '🥫', defaultDesc: '易拉罐可以回收再利用，节约金属资源。罐头盒的主要材质为金属，可以回收利用。' },
    '纸箱': { type: 'recyclable', icon: '📦', defaultDesc: '纸箱可以回收再利用，减少树木砍伐。应拆开压平后投放到可回收物桶中。' },
    '旧衣服': { type: 'recyclable', icon: '👕', defaultDesc: '旧衣服可以回收再利用，制作成新的纺织品。应清洗干净后投放到可回收物桶中。' },
    '电子产品': { type: 'recyclable', icon: '📱', defaultDesc: '电子产品含有贵重金属，可以回收再利用。应投放到可回收物桶中或专门的电子垃圾回收点。' },
    '轮胎': { type: 'recyclable', icon: '🚗', defaultDesc: '废轮胎可以回收再利用，制作成橡胶制品。应投放到专门的废轮胎回收点。' },
    '烟头': { type: 'other', icon: '🚬', defaultDesc: '烟头含有有害物质，无法回收利用。应熄灭后投放到其他垃圾桶中。' },
    '纸巾': { type: 'other', icon: '🧻', defaultDesc: '纸巾已被污染，无法回收利用。应投放到其他垃圾桶中。' },
    '尿布': { type: 'other', icon: '👶', defaultDesc: '尿布已被污染，无法回收利用。应投放到其他垃圾桶中。' },
    '陶瓷': { type: 'other', icon: '🍶', defaultDesc: '陶瓷无法回收利用，属于其他垃圾。应投放到其他垃圾桶中。' },
    '塑料袋': { type: 'other', icon: '🛍️', defaultDesc: '塑料袋难以降解，属于其他垃圾。应投放到其他垃圾桶中。' },
    '建筑垃圾': { type: 'other', icon: '🏗️', defaultDesc: '建筑垃圾无法回收利用，需要特殊处理。应投放到专门的建筑垃圾堆放点。' },
    '卫生间废纸': { type: 'other', icon: '🚽', defaultDesc: '卫生间废纸已被污染，无法回收利用。应投放到其他垃圾桶中。' }
  };
  
  // 处理提取的物品
  const processedItems = new Set();
  
  for (const item of garbageItems) {
    // 查找匹配的垃圾类型
    let matchedItem = null;
    for (const [name, info] of Object.entries(garbageItemsWithType)) {
      if (item.name.includes(name) || name.includes(item.name)) {
        matchedItem = { name, ...info };
        break;
      }
    }
    
    // 如果没有找到匹配的，使用物品自带的类型（从 EPUB 章节推断）
    if (!matchedItem) {
      let type = item.type || 'other';
      let icon = '🗑️';
      
      if (type === 'kitchen') {
        icon = '🍎';
      } else if (type === 'recyclable') {
        icon = '♻️';
      } else if (type === 'hazardous') {
        icon = '⚠️';
      }
      
      matchedItem = { name: item.name, type, icon, defaultDesc: item.desc || `${item.name}的相关描述` };
    }
    
    // 避免重复添加
    if (!processedItems.has(matchedItem.name)) {
      processedItems.add(matchedItem.name);
      
      garbageData.items.push({
        id: matchedItem.name.toLowerCase().replace(/\s+/g, '-'),
        name: matchedItem.name,
        type: matchedItem.type,
        icon: matchedItem.icon,
        desc: item.desc || matchedItem.defaultDesc,
        image: item.image
      });
    }
  }
  
  // 为每个垃圾类型分配代表性图片
  const typeImageMap = {
    'hazardous': ['red', 'hazard', '有害'],
    'kitchen': ['green', 'kitchen', '厨余', '湿垃圾'],
    'recyclable': ['blue', 'recycle', '可回收'],
    'other': ['grey', 'gray', 'other', '其他', '干垃圾']
  };
  
  for (const [type, keywords] of Object.entries(typeImageMap)) {
    // 首先尝试从已提取的物品中找到该类型的图片
    const typeItems = garbageData.items.filter(item => item.type === type && item.image);
    if (typeItems.length > 0) {
      garbageData.types[type].image = typeItems[0].image;
    } else {
      // 如果没有找到，从图片列表中随机选择一张
      for (const [href, path] of Object.entries(imageMap)) {
        const hrefLower = href.toLowerCase();
        if (keywords.some(keyword => hrefLower.includes(keyword.toLowerCase()))) {
          garbageData.types[type].image = path;
          break;
        }
      }
    }
  }
  
  // 更新垃圾类型示例
  for (const [type, info] of Object.entries(garbageData.types)) {
    const typeItems = garbageData.items.filter(item => item.type === type);
    if (typeItems.length > 0) {
      info.examples = typeItems.slice(0, 7).map(item => item.name);
    }
  }
  
  // 如果没有提取到任何物品，使用默认数据
  if (garbageData.items.length === 0) {
    console.log('未能从 EPUB 中提取到垃圾物品，使用默认数据');
    return getDefaultData();
  }
  
  return garbageData;
}

function getDefaultData() {
  // 默认垃圾分类数据
  return {
    types: {
      hazardous: {
        name: '有害垃圾',
        color: '#F94343',
        desc: '有害垃圾是指含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。',
        examples: ['电池', '灯管', '药品', '油漆及其容器', '温度计'],
        icon: '⚠️',
        image: ''
      },
      kitchen: {
        name: '厨余垃圾',
        color: '#52C41A',
        desc: '厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾。',
        examples: ['剩菜剩饭', '果皮', '蛋壳', '骨头', '菜叶'],
        icon: '🍎',
        image: ''
      },
      recyclable: {
        name: '可回收物',
        color: '#4B9CD3',
        desc: '可回收物是指适宜回收循环使用和资源利用的废物。',
        examples: ['纸类', '塑料', '玻璃', '金属', '织物'],
        icon: '♻️',
        image: ''
      },
      other: {
        name: '其他垃圾',
        color: '#9E9E9E',
        desc: '其他垃圾是指危害较小，但无再次利用价值的垃圾。',
        examples: ['烟头', '一次性餐具', '污损纸张', '砖瓦陶瓷'],
        icon: '🗑️',
        image: ''
      }
    },
    items: [
      { id: 'battery', name: '电池', type: 'hazardous', icon: '🔋', desc: '电池中含有汞、镉等有害物质。', image: '' },
      { id: 'light-bulb', name: '灯泡', type: 'hazardous', icon: '💡', desc: '灯泡中含有汞等有害物质。', image: '' },
      { id: 'medicine', name: '药品', type: 'hazardous', icon: '💊', desc: '过期药品含有有害成分。', image: '' },
      { id: 'apple-core', name: '苹果核', type: 'kitchen', icon: '🍎', desc: '苹果核是有机废弃物。', image: '' },
      { id: 'leftovers', name: '剩菜', type: 'kitchen', icon: '🍱', desc: '剩菜属于有机垃圾。', image: '' },
      { id: 'paper', name: '废纸', type: 'recyclable', icon: '📄', desc: '废纸可以回收再利用。', image: '' },
      { id: 'plastic-bottle', name: '塑料瓶', type: 'recyclable', icon: '🥤', desc: '塑料瓶可以回收再利用。', image: '' },
      { id: 'cigarette', name: '烟头', type: 'other', icon: '🚬', desc: '烟头含有有害物质。', image: '' },
      { id: 'tissue', name: '纸巾', type: 'other', icon: '🧻', desc: '纸巾已被污染。', image: '' }
    ]
  };
}

// 运行解析脚本
parseEpub();
