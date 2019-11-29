# 自动化部署 
# 输入命令“ npm run deploy "提交说明文案" ”（提交说明文案不能使用空格隔开（本人对 shell 脚本不熟悉，查找了也没明白，希望有大神指点一下），使用了空格，就会导致只提交了空格前的消息）

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m $1 # 提交到历史区，$1 为运行 sh 时的第一个参数

# 提交到 master 分支
# git pull

# git push origin master

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:xingorg1Note/xingorg1Note.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xingorg1/xingorg1Note.git master:gh-pages

# 将 dist 文件提交到 gh-pages 分支
# git subtree push --prefix dist origin gh-pages

# 退出命令
cd -

# 曲折的发布之路
# 问题一：fatal: No remote repository specified.  Please, specify either a URL or a remote name from which new revisions should be fetched.
# 问题二：
# The authenticity of host 'github.com (52.74.223.119)' can't be established.
# RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
# Are you sure you want to continue connecting (yes/no)? y
# Please type 'yes' or 'no': yes
# Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
# git@github.com: Permission denied (publickey).
# fatal: Could not read from remote repository.

# 问题三
# Connection reset by 140.82.113.3 port 22
# fatal: Could not read from remote repository.

# Please make sure you have the correct access rights
