---
title: 我的博客
---
## 快速起步

安装：

```bash
npm i
# OR
cnpm i
```

运行：

```bash
npm run dev
# OR
npm run serve
```

打包：

```bash
npm run build
```

自动发布：

```bash
npm run push "git commit提交文案，不能有空格"
```

## 待优化点

:white_check_mark: ~~滚动条与主题插件~~  
:white_check_mark: ~~sidebar 侧边栏~~  
:white_check_mark: ~~上下翻页~~  
:white_check_mark: ~~评论功能~~  
:white_check_mark: ~~vue 组件支持~~  
:o: vue 主题模板文件  
:o: 整体样式美化  
:o: 全局滚动条美化  
:o: 阅读进度条  
:o: ~~返回顶部按钮美化(20200124)~~【需要改动现用插件，放弃】  
:o: 开发一个vuepress模版插件(20200125)  

## 待改进bug
:white_check_mark: ~~mac每次运行npm都需要sudo，否则就没权限。怎么去除(20200125)~~

【已解决。[点击查看改进方案](../../devTools/npm/mac命令需要输入sudo的问题)】
```sh
npm run dev

> xingorg1_note@1.0.0 dev /Users/guojufeng/Documents/GitHub/xingorg1Note
> vuepress dev docs

wait Extracting site metadata...
Error: EACCES: permission denied,
```

:white_check_mark: ~~每次发布都要配置公钥（再已经配置好的基础上）(20200124)~~

【修改目录的权限后，自动解决了。】
```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
```

:white_check_mark: ~~改版后的首页，图片需要一个最小高度和未加载成功的展位图
（初步想用背景色，渐变色，伪类添加文字的形式实现）(20200124)~~

【添加图片的背景渐变色和固定宽高进行占位】

:o: 左侧sidebar的滚动条和代码区的滚动条、样式美化。(20200123)

[最后，填写留言评论，欢迎帮我提bug～]()
<Vssue title="【About】我的博客" />