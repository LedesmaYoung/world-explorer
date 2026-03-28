#!/bin/bash
# 小小环球旅行家 - 启动脚本

cd "$(dirname "$0")"

echo "🚀 启动小小环球旅行家..."
echo "📱 访问地址: http://192.168.31.152:50895"
echo "🛑 按 Ctrl+C 停止服务"
echo ""

# 杀死可能占用50895端口的进程
lsof -i :50895 > /dev/null 2>&1 && kill $(lsof -t -i :50895) 2>/dev/null

# 启动HTTP服务器
python3 -m http.server 50895
