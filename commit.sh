# 自动提交源码
#!/bin/bash sh

# set -e
ssh -v git@github.com

git add .

git commit -m $1

git pull

git push
