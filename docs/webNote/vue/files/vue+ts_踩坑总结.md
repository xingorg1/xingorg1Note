---
title: Vue+TS踩坑记录与方案总结
description: Vue+TS 踩坑记录与方案总结
---

[[toc]]

vue 和 TypeScript 结合的情况下，很多写法和我们平时的写法都不太一样，这里总结我项目开发过程中遇到的问题和问题的解决方案  
**有些问题可能还没解决，欢迎各位大佬给与提点。**  
另外，使用本文前可以先看[vue 官方文档关于 typescript 的使用讲解](https://cn.vuejs.org/v2/guide/typescript.html)

# 整个 vue 项目的目录结构

- 大体用 vue-cli 创建的项目，结构基本不变。

这里只写我后来为了解决问题改动的地方

### main.ts 中，提示`import App from './App.vue'`处，找不到 App.vue 这个模块

解决方案：
1、将 shims-vue.d.ts 文件一分为二。  
2、在 shims-vue.d.ts 文件同级目录下新建 vue.d.ts（名字不一定叫 vue，如 xxx.d.ts 也可以），然后此文件包含代码如下

```js
// vue.d.ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

3、而原来的 shims-vue.d.ts 代码修改、新增如下：

```js
// shims-vue.d.ts
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $api: any;
    $mock: any;
    $configs: any;
  }
}

```

### main.ts 中，往 Vue 的原型 prototype 上挂载全局变量

1、main.ts 配置

```js
// main.ts
import api from "./api/request";
import mock from "./api/mock";
import configs from "./utils/config";

Vue.prototype.$api = api;
Vue.prototype.$mock = mock;
Vue.prototype.$configs = configs;
```

2、shims-vue.d.ts 配置

```js
// shims-vue.d.ts 新增如下
declare module 'vue/types/vue' {
  interface Vue {
    // ...
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $api: any;
    $mock: any;
    $configs: any;
  }
}

```

# 全局组件注册

注册

```js
// main.ts
import Page from "@/components/page.vue";
import AllComponent from "@/common/AllComponent.vue";
Vue.component("Page", Page);
Vue.component("all-component", AllComponent);
```

使用

```html
写法一：
<Page />
写法二：
<all-component />
```

# SFC 单 vue 文件组件的基本写法和结构

一個简陋的 demo，展示 ts 下的 vue 文件中，对于相关功能的使用，重点关注`<Script>`里的代码

```html
<template>
  <!-- 结构示例，指令基础用法同vue -->
  <div class="minos-system-setting" v-if="hideHeader">
    <h3>结构示例</h3>
    <span>{{ selfKey1 }}</span>
    <ul>
      <li :key="item" v-for="item in fatherKey">{{ item }}</li>
    </ul>
    <button @click="addText">追加文字</button>
    <AnotherVue
      :class="['default-class', selfKey1.length > 10 ? 'one' : 'two']"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator";
  import { Route } from "vue-router";
  import AnotherVue from "@/components/AnotherVue.vue";
  @Component({
    // 组件注册
    components: {
      AnotherVue
      // 'another-vue': AnotherVue
    },
    // 过滤器
    filters: {
      filterFn1() {}
    },
    // 属性传递
    props: {
      hideHeader: {
        type: Boolean,
        required: false,
        default: false // 默认属性的默认值
      }
    }
  })
  export default class ComponentName extends Vue {
    @Prop({
      type: Boolean,
      required: false,
      default: false // 默认属性的默认值
    })
    private hideHeader!: boolean | undefined;
    @Prop() private fatherKey: string[]; // 其他没有默认值的传值
    selfKey1: string = "自己的一个变量";
    // 生命周期
    created() {}
    mounted() {}
    // 计算属性
    get computedKey() {
      return this.selfKey1.length;
    }
    // 监听器
    @Watch("computedKey")
    getcomputedKey(newVal) {
      console.log(newVal);
    }
    // 导航守卫函数
    private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
      console.log("beforeRouteEnter", to, from, next);
      next();
    }
    // 方法
    addText() {
      this.selfKey1 += "，追加文字！";
    }
  }
</script>
<style lang="scss" scoped>
  @import "@/assets/styles/demo.scss";
</style>
```

# computed 计算属性的写法

```js
// 计算属性
get computedKey() {
  return this.selfKey1.length
}
```

# watch 监听器的使用

### 同一个 vue 页面中使用

```js
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Watch('boxHeight')
getboxHeight(val) { // get+上边括号里的名字
	// xxx
}
```

### 父子两个 vue 页面传值后使用 watch 监听

子组件监听从父组件传过来的值
1、父组件用属性传值【前提是父组件引入子组件、注册并调用了】

```js
<ziZuJian :oneKey="oneKeyObj" />
```

2、子组件要使用的工具引入工作

```js
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
```

3、子组件 Prop 接受

```js
export default class ZiZuJian extends Vue {
  @Prop() private oneKey: object
}
```

4、子组件 Watch 监听

```js
@Watch('oneKey')
getoneKey(newVal,oldVal) {
  // 监听成功后要做
  log(newVal)
  this.myfunction(newVal)
}
```

5、父组件（内部）改动值，会被子组件监听

```js
export default class FuZuJian extends Vue {
  oneKeyObj = {}
  ...
  mounted(){
    $.ajax().then(()=>{
      // 适时情况下改动props传递的值，就会被子组件监听到改变
      oneKeyObj = {
        name : '测试'
      }
      oneKeyObj.age = 18
    })
  }
}
```

# Watch 监听 store 中的数据改变

主要思路是计算属性获取 state 里的数据，watch 再监听计算属性

```js
import { Component, Vue, Prop, Watch } from 'vue-property-decorator' // 引入Watch
get stateSomeKey() { // 计算属性
  // 监听state下的stateSomeKey对象中的keyName属性，return返回该值
  return this['$store'].state.stateSomeKey.keyName
}
@Watch('stateSomeKey') // 与上边计算属性同名
getstateSomeKey(val) { // get+上边括号里的名字
  // 监听到变化后，执行对应的内容
  this.myFunction()
  ...
}
```

其中，第七行，监听器那里也可以這麽写

```js
@Watch('stateSomeKey') // 与上边计算属性同名
watchMenuState(val) { // 这里可以这么写：或用watch+上边括号里的名字也可以（虽然不太确定为什么，只是代码这么写成功了）
  // 下同
  // ...
}
```

# vue+ts 中，使用 filter 过滤器

定义：（在@Component 里边，写 filters，注意 s 单词）

```html
<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  @Component({
    filters: {
      filterValue(value) {
        return Number(value).toLocaleString();
      }
      // otherFilterFn(value) { 其他filter示例
      //   return ...
      // }
    },
    components: {}
  })
  export default class Container extends Vue {
    // ...
  }
</script>
```

使用：同之前，正常使用：

```html
<span v-if="showSpan">{{showValue | filterValue}}</span>
```

# 自定义指令 过滤器【待补充】

```js
// 待补充
```

# watch 监听 router 的变化

1、shims-vue.d.ts 的设置

```js
// shims-vue.d.ts
import Vue from 'vue'
import VueRouter, {Route} from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
  }
}
```

2、main.ts 的设置

```js
// main.ts
import { Component } from "vue-class-component";
Vue.config.productionTip = false;
Component.registerHooks([
  "beforeRouteEnter", //进入路由之前
  "beforeRouteLeave", //离开路由之前
  "beforeRouteUpdate"
]);
```

3、需要监听路由钩子的 SCF 组件：

```html
<script lang="ts">
  // xxx.vue 的script标签内
  import { Component, Vue, Prop, Watch } from "vue-property-decorator";
  import { Route, RawLocation } from 'vue-router';
  // # 下边两段，看你需要什么了：

  // 1/监听路由变化
  @Watch('$route',{ immediate: true })
  private changeRouter(route: Route){
    console.log(route)
  }

  // 2/定义路由钩子函数
  private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next)
    next(); // 没有next将不会进入路由内部，跟vue文档用法一致
  }
  private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate'); // 暂时不生效，版本问题
    next();
  }
  private beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
    next();
  }
</script>
```

监听路由的第二种写法 (如果只是想更新视图的话可以考虑监听路由)

```js
@Watch('$route')
routeWatch() {
	this.loadData();
}
```

# main.ts 中注册路由导航守卫并在组件中使用路由钩子函数

基本同上  
1、shims-vue.d.ts 的设置

```js
// shims-vue.d.ts
import Vue from 'vue'
import VueRouter, {Route} from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
  }
}
```

2、main.ts 的设置

```js
// main.ts
import { Component } from "vue-class-component";
Component.registerHooks([
  "beforeRouteEnter", //进入路由之前
  "beforeRouteLeave", //离开路由之前
  "beforeRouteUpdate"
]);
```

3、需要监听路由钩子的 SCF 组件：

```html
<script lang="ts">
  // xxx.vue 的script标签内
  import { Component, Vue, Prop, Watch } from "vue-property-decorator";
  import { Route, RawLocation } from 'vue-router';
  // # 下边两段，看你需要什么了：

  // 1/监听路由变化
  @Watch('$route',{ immediate: true })
  private changeRouter(route: Route){
    console.log(route)
  }

  // 2/定义路由钩子函数
  private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next)
    next(); // 没有next将不会进入路由内部，跟vue文档用法一致
  }
  private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate'); // 暂时不生效，版本问题
    next();
  }
  private beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
    next();
  }
</script>
```

# 父子传值 - 子组件修改触发父组件的方法执行

**父组件内部：**  
1、调用子组件、并绑定传值：

```html
<ZiZuJian @chuanDiGuoQu="FuQinZiJiYong"></ZiZuJian>
```

准备好一会会被子组件触发的函数：

```js
FuQinZiJiYong(){
  console.log('我是父亲内部待被触发的方法')
}
```

**子组件 ZiZuJian 内部**在需要触发的地方执行\$emit

```js
export default class Menu extends Vue {
  // 在需要触发的地方，执行如下代码
  this.$emit('chuanDiGuoQu', '')
}
```

最后还有另一种网友总结很麻烦的写法：[参见地址](https://blog.csdn.net/weixin_43713680/article/details/86708415)

# @Prop 默认参数

第一种：github 找到的 demo 这样。如下代码中`hideHeader`就是由默认参数的父组件传过来的属性

```js
export default class ComponentName extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false // 默认属性的默认值
  })
  private hideHeader!: boolean | undefined
}
```

第二种：vue 原生的写法，并写到了@component 构造器中就好了：
如果不传值此函数默认就是 true，传 false 就是 false 了。并且能严格判断只能传 Boolean 类型。挺好。

```js
@Component({
  props: {
    hideHeader: {
      type: Boolean,
      required: false,
      default: false // 默认属性的默认值
    }
  }
})
```

# 中央总线注册与使用

```js
// 待解决
```

# vue + ts 中使用 vue-echarts

安装

```bash
npm i -S vue-echarts echarts
```

main.ts 中引入并注册

```js
// main.ts
// 引用
import ECharts from "vue-echarts";
// 用到的模块要单独引用
import "echarts/lib/chart/line"; // 线图为例，其他图一样
import "echarts/lib/component/title.js"; // 标题
import "echarts/lib/component/legend"; // 图例
import "echarts/lib/component/tooltip"; // 提示框
import "echarts/lib/component/toolbox"; // 工具（如下载功能与按钮）

// 注册
Vue.component("v-chart", ECharts);
```

vue.config.js 中设置

```js
// vue.config.js
module.exports = {
  // For Vue CLI 3+, add vue-echarts and resize-detector into transpileDependencies in vue.config.js like this:
  transpileDependencies: ["vue-echarts", "resize-detector"]
};
```

tsconfig.json 中也要设置

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["webpack-env", "echarts"]
  }
}
```

SFC 应用

```html
<v-chart :options="echartsOptions" id="myCharts" ref="myCharts" />
```

# vue + ts 中使用 Element-ui

```js
// main.ts
import ElementUI from "element-ui";
Vue.use(ElementUI);
```

# 全局 scss 变量

在 assets/styles 下新建\_variable.scss 文件，用于存放 scss 变量。  
然后再 vue.config.js 中设置全局变量

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_variable.scss";
        `
      }
    }
  }
};
```

# alias 别名设置

同时解决问题`alias 配置的路径别名，在 vscode 中报错模块查找失败`和问题`vue-cli 配置了 resolve alias 来声明的路径别名，在引用了 ts 后，vscode 会报错不能识别、模块查找失败`。其中，vscode 报错在 win 环境还需要一个插件安装，解决方案见下边
vue.config.js 配置

```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set("comp", resolve("src/components"))
      .set("css", resolve("src/assets/styles"));
    // ...同上，路径核对好就行
  }
};
```

jsconfig.json 配置。注意这里的名字要和上边 set 后边的名字保持一致

```js
// jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "src/*" // 这个本来就有
      ],
      // 后边追加
      "comp/*": [
        "src/components/*"
      ],
      "css/*": [
        "src/assets/styles/*"
      ],
      // ... 同上，路径核对好就行
    },
  }
};
```

SCF 使用设定的别名

```js
// main.ts
import MyError from "view/error/Error.vue";
```

```css
/* SCF单页中scss路径引用 */
@import "css/_variable.scss";
```

# 请求接口的代理设置

vue.config.js 配置

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://11.11.11.111/", // 示例ip地址，也可以填域名，需要的是后端接口地址的相同部分
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
```

axios 请求地址时的写法：  
注意`/api`一定要有，且在路径的最前边，代替相同的路径。

```js
axios
  .get("/api/wo/de/di/zhi") // 前边的'/api'一定要有，它代表的就是vue.config.js中proxy.target的路径
  .then(() => {
    // 接口成功...
  });
```

# 本地服务域名修改

vue.config.js 配置

```js
// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: true, // 用域名代替localhost,禁用主机检查
    host: "www.haha.com"
    // 另外端口也可以在这里改，只不过我写到了package.json总，见下边
  }
};
```

package.json dev 命令的配置

```bash
{
  "scripts": {
    "dev": "npm run serve",
    "serve": "vue-cli-service serve --port 80 --open", # 端口设置为80，--open运行完毕后自动打开地址
  }
}
```

本地 host 配置

```bash
127.0.0.1 www.haha.com # 这里注意和vue.config.js中的host的值对应
```

此时，`npm run dev`成功后，浏览器跑项目输入地址`http://www.haha.com`即可

# vue + ts 在 vscode 中的问题

## vue-cli 配置了 resolve alias 来声明的路径别名，在引用了 ts 后，vscode 会报错不能识别、模块查找失败：

1、扩展商店安装插件 - Path Intellisense

2、配置代码（vscode setting.json 中设置）

```json
"path-intellisense.mappings": {
  "@": "\${workspaceRoot}/src"
}
```

3、在 package.json 统计目录下创建 jsconfig.json 文件，并填入下边代码

```json
// jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
