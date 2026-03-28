#!/bin/bash

# 音频输出目录
OUTPUT_DIR="/Users/ledesmayoung/CodeBuddy/Claw/world-explorer/assets/audio/voices"
mkdir -p "$OUTPUT_DIR"

# 国家列表（中文名,英文名,文件名）
countries=(
  "中国,China,china"
  "日本,Japan,japan"
  "韩国,South Korea,south-korea"
  "印度,India,india"
  "泰国,Thailand,thailand"
  "新加坡,Singapore,singapore"
  "越南,Vietnam,vietnam"
  "马来西亚,Malaysia,malaysia"
  "印度尼西亚,Indonesia,indonesia"
  "菲律宾,Philippines,philippines"
  "沙特阿拉伯,Saudi Arabia,saudi-arabia"
  "阿联酋,UAE,uae"
  "英国,United Kingdom,united-kingdom"
  "法国,France,france"
  "德国,Germany,germany"
  "意大利,Italy,italy"
  "西班牙,Spain,spain"
  "荷兰,Netherlands,netherlands"
  "瑞士,Switzerland,switzerland"
  "俄罗斯,Russia,russia"
  "希腊,Greece,greece"
  "奥地利,Austria,austria"
  "瑞典,Sweden,sweden"
  "挪威,Norway,norway"
  "埃及,Egypt,egypt"
  "南非,South Africa,south-africa"
  "肯尼亚,Kenya,kenya"
  "摩洛哥,Morocco,morocco"
  "坦桑尼亚,Tanzania,tanzania"
  "尼日利亚,Nigeria,nigeria"
  "埃塞俄比亚,Ethiopia,ethiopia"
  "突尼斯,Tunisia,tunisia"
  "加纳,Ghana,ghana"
  "塞内加尔,Senegal,senegal"
  "美国,United States,united-states"
  "加拿大,Canada,canada"
  "巴西,Brazil,brazil"
  "墨西哥,Mexico,mexico"
  "阿根廷,Argentina,argentina"
  "智利,Chile,chile"
  "秘鲁,Peru,peru"
  "哥伦比亚,Colombia,colombia"
  "古巴,Cuba,cuba"
  "牙买加,Jamaica,jamaica"
  "委内瑞拉,Venezuela,venezuela"
  "厄瓜多尔,Ecuador,ecuador"
  "澳大利亚,Australia,australia"
  "新西兰,New Zealand,new-zealand"
  "斐济,Fiji,fiji"
  "巴布亚新几内亚,Papua New Guinea,papua-new-guinea"
  "萨摩亚,Samoa,samoa"
  "汤加,Tonga,tonga"
  "瓦努阿图,Vanuatu,vanuatu"
  "所罗门群岛,Solomon Islands,solomon-islands"
  "密克罗尼西亚,Micronesia,micronesia"
)

# 生成音频
for country in "${countries[@]}"; do
  IFS=',' read -r zh en filename <<< "$country"
  
  zh_file="$OUTPUT_DIR/${filename}_zh.aiff"
  en_file="$OUTPUT_DIR/${filename}_en.aiff"
  output_file="$OUTPUT_DIR/${filename}.mp3"
  
  echo "生成: $zh，$en"
  
  # 生成中文语音
  say -v "Ting-Ting" "$zh" -o "$zh_file" 2>/dev/null
  
  # 生成英文语音
  say -v "Samantha" "$en" -o "$en_file" 2>/dev/null
  
  # 使用 sox 或 ffmpeg 合并
  if command -v sox &> /dev/null; then
    sox "$zh_file" "$en_file" "$output_file"
  elif command -v ffmpeg &> /dev/null; then
    temp_concat="$OUTPUT_DIR/concat.txt"
    echo "file '$zh_file'" > "$temp_concat"
    echo "file '$en_file'" >> "$temp_concat"
    ffmpeg -y -f concat -safe 0 -i "$temp_concat" -c:a libmp3lame -q:a 2 "$output_file" 2>/dev/null
    rm -f "$temp_concat"
  else
    # 使用 afconvert 转换为 m4a (iOS 支持)
    combined_file="$OUTPUT_DIR/${filename}_combined.aiff"
    # 使用 sox 不存在时的替代方案：直接转换中文
    afconvert -f mp4f -d aac "$zh_file" "${output_file%.mp3}.m4a"
    # 更新文件扩展名
    mv "${output_file%.mp3}.m4a" "${output_file%.mp3}.aac"
  fi
  
  # 清理临时文件
  rm -f "$zh_file" "$en_file"
done

echo "✅ 音频生成完成！"
