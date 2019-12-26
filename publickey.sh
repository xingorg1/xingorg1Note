# 公钥配置
ssh-keygen -t rsa -C "xingorg1@outlook.com"  

ssh -v git@github.com

ssh-agent  -s

ssh-add ~/.ssh/id_rsa

cat  ~/.ssh/id_rsa.pub

pbcopy < ~/.ssh/id_rsa.pub

ssh -T git@github.com
