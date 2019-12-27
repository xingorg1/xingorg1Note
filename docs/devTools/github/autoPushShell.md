# 自动发布脚本
一段网上看到的代码，觉得写的很完整还有注释。待研究。
```shell
#!/bin/bash
cd "$(dirname "$BASH_SOURCE")"
 
# 读取父级目录
preName=`pwd | awk -F "/" '{print $NF}'`
echo $preName
 
# 在a.js查看当前要运行的项目，匹配const fileName = *
# filename=$(grep '^[ ]*const fileName' ./a.js)
# echo $filename
# name1=${filename#*[\'\"\`]}
# name=${name1%[\'\"\`]*} 
name='A'
# 进去预发代码库拉取代码B
cd ../
if [ -d "./B/" ];then  
echo '存在B代码库'
cd B
else 
echo "不存在B代码库，拉取代码库到您的项目同级目录y/n"
read submit 
if [ $submit == 'y' ]; then
git clone ***
cd B
else 
echo "终止操作"
exit 1
fi
fi  
git pull
git checkout dev
git pull
# 将打包后的文件放到预发仓库
cd ../$preName
cp -rf ./$name/build/* ../B/
# 删除打包生成的html文件
rm -rf ../B/*.html 
cd ../plus-h5-static
git add .
git status
echo -e "\033[32m 请确认是否提交 y/n"
read submit 
if [ $submit == 'y' ]; then
git commit -m "feat"
git push
else 
echo "终止提交"
```

> ————————————————
> 版权声明：本文为CSDN博主「爱coding的小蕾蕾」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
> 原文链接：https://blog.csdn.net/zhaileilei1/article/details/98750066