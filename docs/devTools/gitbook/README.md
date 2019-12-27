# gitbookNote
学习gitbook时的相关笔记。


## gitbook安装教程

**基于nodejs，先安装nodejs**

**安装完后验证：**
$ node -v

**安装GitBook：**
$ npm i gitbook-cli -g

**安装完毕后验证：**
$ gitbook -V

打印出软件和版本号即可：
CLI version: 2.3.2
GitBook version: 3.2.3


**安装GitBook编辑器：**
[官网](https://www.gitbook.com/)下载

**安装插件：（book.json中配置完毕后，执行命令）**
$ gitbook install ./

## gitbook使用教程
进入项目目录  
**初始化项目：**
$ gitbook init

**启动项目：**
$ gitbook serve

**打印日志：**
$ gitbook serve --log=debug

**打包项目：**
$ gitbook build  
生成网页，而不开启服务器。类似于打包发布


## 目录结构
```
.
├── book.json  该文件主要用来存放配置信息
├── README.md
├── SUMMARY.md
├── chapter-1/
|   ├── README.md
|   └── something.md
└── chapter-2/
    ├── README.md
    └── something.md
```