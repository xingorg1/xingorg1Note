# 公钥配置
ssh-keygen -t rsa -C "xingorg1@outlook.com" # 生成密钥 指定邮箱

ssh -v git@github.com # 查看调试信息

ssh-agent  -s

ssh-add ~/.ssh/id_rsa

cat  ~/.ssh/id_rsa.pub # （生成密钥）

pbcopy < ~/.ssh/id_rsa.pub # （复制密钥到剪切板）

ssh -T git@github.com
