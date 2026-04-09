#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { DOMParser } = require('xmldom');

const epubPath = path.join(__dirname, 'data', '垃圾分类立体拼插游戏书.epub');

async function debugEpub() {
  try {
    const epubBuffer = fs.readFileSync(epubPath);
    const zip = new JSZip();
    await zip.loadAsync(epubBuffer);
    
    const content = await zip.file('OEBPS/Text/chapter4.xhtml')?.async('string');
    
    if (content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      
      console.log('doc.body:', doc.body);
      console.log('doc.documentElement:', doc.documentElement);
      console.log('doc.documentElement.tagName:', doc.documentElement?.tagName);
      console.log('doc.documentElement.children:', doc.documentElement?.children);
      console.log('doc.documentElement.childNodes:', doc.documentElement?.childNodes);
      
      const body = doc.getElementsByTagName('body')[0];
      console.log('\nbody element:', body);
      console.log('body children:', body?.children);
      console.log('body childNodes:', body?.childNodes);
    }
    
  } catch (error) {
    console.error('错误:', error);
  }
}

debugEpub();
