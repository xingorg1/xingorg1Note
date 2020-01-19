# develop 合并 master
# git bash中启动：bash mergeMaster.sh
# 确保脚本抛出遇到的错误
set -e

git pull

git merge master

git add .

git commit -m "[&]merge master to develop"

git pull

git push
