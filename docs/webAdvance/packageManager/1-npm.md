# NPM

## NPM常用命令
> NPM命令合集

分类| 含义| 命令（们）|备注
-|-|-|-
镜像|	重新设置 registry 的地址为国内地址|	npm config set registry https://registry.npm.taobao.org
-|	检查镜像|	npm info underscore|
-|	检查|	npm config get registry|
初始化|	初始化package.json文件|	npm init|
-|	初始化-所有命令都用默认值	|npm init --yes<br/>或者<br/>npm init -y
安装|	全局安装 - 全拼	| npm install --global 包名|
-|	全局安装 - 简写	|npm i -g 包名|
-|	本地安装 - 全拼	|npm install 包名|
-|	本地安装 - 简写	|npm i 包名|
-|	安装指定版本	|npm i 包名@版本号	|npm i lodash@2.1.0
-|	安装 - 生产环境依赖	|npm i --production|
-|	安装依赖到生产环境	|npm i 包名<br/>npm i --save 包名<br/>npm i -S 包名|
-|	安装依赖到开发环境|	npm i --save-dev 包名<br/>npm i -D 包名
-|	安装依赖的精确版本|	npm i --save-exact 包名|	npm i jquery --save-exact<br/>安装出来后就是精确的版本
-|-|npm i -E 包名
查看|	全局安装的包的地址|	npm config  get prefix|
-|查看全局的包的安装路径|	npm root -g|
-|查看当前命令所在地的包的安装路径|	npm root
-|查看包的信息|	npm view 包名<br/>npm v 包名<br/>npm info 包名
-|查看包的子信息（packagejson里边的信息）	|npm view 包名 package.json里的字段名<br/>npm v 包名 package.json里的字段名<br/>npm info 包名 package.json里的字段名<br/>别名：view、v、info<br/>示例：npm v react versions(查看所有的版本)|
-|查询安装了什么包|	npm list [-g] [--depth=依赖深度]<br/>npm ls [-g] [--depth=依赖深度]<br/>npm la [-g] [--depth=依赖深度]<br/>npm ll [-g] [--depth=依赖深度]<br/>	别名：list、ls、la、ll|	中括号里边内容为可选，可写可不写，加上就多一项命令的功能。比如这里，加上“-g”表示查看全局的包安装了什么依赖。后边的命令同理。depth从0开始，可以查看依赖的层级
漏洞检查|查看包有啥漏洞|	npm audit	|官网：https://docs.npmjs.com/cli/audit淘宝镜像源不支持漏洞请求
更新|	检查哪些包需要更新|	npm outdated|wanted是需要更新到的目标版本，目标版本的计算是根据package.json里版本的语义自动算的。比如安装的依赖版本是^1.1.0，该依赖目前最新版本是1.5.7，那么wanted计算出来就可以更新到1.5.7；如果依赖目前最新版本是2.9.3，则wanted计算出来的可以更新的版本就是1.9.9（如果主版本开头以1开头的次版本和补丁版本最大都是9的话）。
-|更新包|npm update [-g] [包名]<br/>npm up [-g] [包名]	<br/>npm upgrade [-g] [包名]	<br/>别名：update、up、upgrade	|-g是可选的，加了就是更新全局包；包名也是可选的，加了就是更新指定包；不加包名，就是更新通过outdated检测出来的全部包
-|更新npm自身|	npm i -g npm|	直接重新安装npm、 全局安装最新版本的npm。实际原理使用旧的程序安装一个新的命令，新程序安装在就程序的node_modules目录下，启用新命令npx访问这个新程序所在的地址
-|更新全局npm（2）|	npm update -g	|更新全局的npm
缓存	|清空缓存|	npm cache clean|	npm为了下载速度，全局有缓存文件，记录下载过的包的信息，如要清除使用此命令
卸载|	卸载一个依赖	|npm uninstall [-g] 包名<br/>npm remove [-g] 包名<br/>npm rm [-g] 包名<br/>npm r [-g] 包名<br/>npm un [-g] 包名<br/>npm unlink [-g] 包名<br/>别名：remove、rm、r、un、unlink、uninstall|	不仅卸载自己，同时卸载跟自己有依赖的包、别人不依赖的包。
npm配置|	npm的配置会对其他命令产生或多或少的影响|安装好npm之后，最终会产生两个配置文件，一个是用户配置，一个是系统配置，当两个文件的配置项有冲突的时候，用户配置会覆盖系统配置	|通常，我们不关心具体的配置文件，而只关心最终生效的配置|
-|查询目前生效的各种配置|npm config ls|	linux中，分号开头表示注释：<br/>registry是用户的配置
-|查看全部的配置|	npm config ls -l|	-l 是以列表的形式查看
-|-|npm config ls --json|	--json 是以json对象的形式查看
-|获取 某个配置项|	npm config get 配置项名称	|配置项名称在上条命令得到的json中可以看，如“registry”，表示镜像
-|设置/添加 某个配置项|	npm config set |配置项名称=配置项值	如设置淘宝镜像源
-|移除 某个配置项	|npm config delete 配置项名称 |
发布|	登录	|npm login|
-|发布一个包	|npm publish|
-|检查当前登录账号	|npm whoami|
-|注销、退出账号	|npm logout|



<Vssue title="NPM" />


