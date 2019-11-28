# VuePress使用方法
[官网](https://www.vuepress.cn/)

### 将 VuePress 作为一个本地依赖安装
``````yarn add -D vuepress # 或者：npm install -D vuepress``````

### 新建一个 docs 文件夹
```mkdir docs```

### 新建一个 markdown 文件
```echo '# Hello VuePress!' > docs/README.md```

### package.json里添加内容
```json
  {
    "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
    }
  }
```
### 开始写作
```npx vuepress dev docs```
```npm run docs:dev```

### 结束
```npm run docs:build```

### 添加静态图片
```![imageName](imgUrl)```

### 添加指定样式
1、 不使用预编译，直接在md底部添加style标签  
2、使用预编译处理，首先需要安装所需的模块。举例：stylus  
```npm i stylus stylus-loader -D```  
<style lang="stylus"></style>

### 在md文件中直接写js
```html
<script>
  export default{
    //...do something
  }
</script>
```

### 路径
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
假设你现在在 foo/one.md 中：
```
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```
### deploy
如果是windows用户就可以直接运行
```
./deploy.sh
```