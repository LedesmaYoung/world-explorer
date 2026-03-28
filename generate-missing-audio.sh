#!/bin/bash

# 缺失音频的国家列表（中文名,英文名,文件名ID）
missing=(
  # 亚洲新增
  "朝鲜,North Korea,north-korea"
  "蒙古,Mongolia,mongolia"
  "巴基斯坦,Pakistan,pakistan"
  "孟加拉国,Bangladesh,bangladesh"
  "斯里兰卡,Sri Lanka,sri-lanka"
  "尼泊尔,Nepal,nepal"
  "柬埔寨,Cambodia,cambodia"
  "老挝,Laos,laos"
  "缅甸,Myanmar,myanmar"
  "文莱,Brunei,brunei"
  "东帝汶,Timor-Leste,timor-leste"
  "哈萨克斯坦,Kazakhstan,kazakhstan"
  "乌兹别克斯坦,Uzbekistan,uzbekistan"
  "土库曼斯坦,Turkmenistan,turkmenistan"
  "吉尔吉斯斯坦,Kyrgyzstan,kyrgyzstan"
  "塔吉克斯坦,Tajikistan,tajikistan"
  "伊朗,Iran,iran"
  "伊拉克,Iraq,iraq"
  # 欧洲新增
  "爱尔兰,Ireland,ireland"
  "比利时,Belgium,belgium"
  "卢森堡,Luxembourg,luxembourg"
  "葡萄牙,Portugal,portugal"
  "波兰,Poland,poland"
  "捷克,Czech Republic,czech-republic"
  "斯洛伐克,Slovakia,slovakia"
  "匈牙利,Hungary,hungary"
  "罗马尼亚,Romania,romania"
  "保加利亚,Bulgaria,bulgaria"
  "塞尔维亚,Serbia,serbia"
  "克罗地亚,Croatia,croatia"
  "斯洛文尼亚,Slovenia,slovenia"
  "丹麦,Denmark,denmark"
  "芬兰,Finland,finland"
  "冰岛,Iceland,iceland"
  "乌克兰,Ukraine,ukraine"
  "土耳其,Turkey,turkey"
  # 非洲新增
  "阿尔及利亚,Algeria,algeria"
  "利比亚,Libya,libya"
  "苏丹,Sudan,sudan"
  "马里,Mali,mali"
  "科特迪瓦,Ivory Coast,ivory-coast"
  "喀麦隆,Cameroon,cameroon"
  "刚果金,DR Congo,democratic-republic-congo"
  "乌干达,Uganda,uganda"
  "卢旺达,Rwanda,rwanda"
  "津巴布韦,Zimbabwe,zimbabwe"
  # 北美洲新增
  "巴哈马,Bahamas,bahamas"
  "多米尼加,Dominican Republic,dominican-republic"
  "海地,Haiti,haiti"
  "特立尼达,Trinidad and Tobago,trinidad"
  "巴拿马,Panama,panama"
  # 南美洲新增
  "玻利维亚,Bolivia,bolivia"
  "巴拉圭,Paraguay,paraguay"
  "乌拉圭,Uruguay,uruguay"
  "圭亚那,Guyana,guyana"
  "苏里南,Suriname,suriname"
  # 大洋洲新增
  "塔希提,Tahiti,tahiti"
)

OUTPUT_DIR="/Users/ledesmayoung/CodeBuddy/Claw/world-explorer/assets/audio/voices"
mkdir -p "$OUTPUT_DIR"

echo "开始生成缺失的音频文件..."
echo "共计: ${#missing[@]} 个国家"
echo ""

for country in "${missing[@]}"; do
  IFS=',' read -r zh en filename <<< "$country"
  
  zh_file="$OUTPUT_DIR/${filename}_zh.aiff"
  en_file="$OUTPUT_DIR/${filename}_en.aiff"
  zh_m4a="$OUTPUT_DIR/${filename}_zh.m4a"
  en_m4a="$OUTPUT_DIR/${filename}_en.m4a"
  
  echo "生成: $zh ($en) -> $filename"
  
  # 生成中文语音
  say -v "Ting-Ting" "$zh" -o "$zh_file" 2>/dev/null
  
  # 生成英文语音
  say -v "Samantha" "$en" -o "$en_file" 2>/dev/null
  
  # 转换为 m4a 格式
  afconvert -f mp4f -d aac "$zh_file" "$zh_m4a" 2>/dev/null
  afconvert -f mp4f -d aac "$en_file" "$en_m4a" 2>/dev/null
  
  # 清理临时文件
  rm -f "$zh_file" "$en_file"
done

echo ""
echo "✅ 音频生成完成！"
echo "生成的文件数量: $((${#missing[@]} * 2)) 个 m4a 文件"
