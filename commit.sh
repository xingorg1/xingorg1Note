# 自动提交源码
# set -e

git add .

git commit -m $1

git pull

git push
