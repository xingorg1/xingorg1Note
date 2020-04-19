# 自动化部署
# 输入命令“ npm run push "提交说明文案" ”（提交说明文案不能使用空格隔开（本人对 shell 脚本不熟悉，查找了也没明白，希望有大神指点一下），使用了空格，就会导致只提交了空格前的消息）
# mac 用 sudo npm run push "没有空格的提交文案"
# 如果报public key权限错误，先根目录下打开git bash命令面板执行"bash publickey.sh"脚本，两次回车，到github粘贴SSH key。
# 通过后再运行：sudo npm run push "没有空格的提交内容说明"
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 源代码提交到 master 分支
git add .

git commit -m $1

git pull

git push

# 生成静态文件
npm run docs:build

# 进入生成的dist文件夹
cd ./dist

git init
git add -A
git commit -m $1 # 提交到历史区，$1 为运行 sh 时的第一个参数

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:xingorg1Note/xingorg1Note.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xingorg1/xingorg1Note.git master:gh-pages

# 将 dist 文件提交到 gh-pages 分支
# git subtree push --prefix dist origin gh-pages

# 退出命令
cd -
