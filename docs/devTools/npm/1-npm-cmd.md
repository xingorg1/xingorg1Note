# NPM 命令合集
分类|含义|指令代码
:-|-|-
镜像|重新设置 registry <br/>的地址为国内地址|`npm config set registry https://xxx`
-|检查镜像|`npm info underscore`
-|检查|`npm config get registry`
初始化|初始化<br/>package.json文件|`npm init`
-|初始化<br/>所有命令都用默认值|全写：`npm init --yes`<br/>简写：`npm init -y`
安装|全局安装 - 全拼|`npm install --global 包名`
-|全局安装 - 简写|`npm i -g 包名`
-|本地安装 - 全拼|`npm install 包名`
-|本地安装 - 简写|`npm i 包名`
-|安装 - 生产环境依赖|`npm i --production`
-|安装依赖到生产环境|`npm i 包名` <br/>全写：`npm i --save 包名` <br/>简写：`npm i -S 包名`
-|安装依赖到开发环境|全写：`npm i --save-dev 包名`<br/>简写：`npm i -D 包名`
查看|全局安装的包的地址|`npm config  get prefix`


* 淘宝镜像地址  `npm config set registry https://registry.npm.taobao.org`
