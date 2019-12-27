---
title: VuePress 使用方法
description: VuePress 使用方法
---

# VuePress 使用方法

[VuePress 官网](https://www.vuepress.cn/)

[VuePress 文檔](https://v1.vuepress.vuejs.org/zh/guide/)

[git](https://github.com/vuejs/vuepress)

## 使用过程与关键知识点

### 将 VuePress 作为一个本地依赖安装

```bash
yarn add -D vuepress # 或者：npm install -D vuepress
```

### 新建一个 docs 文件夹

```bash
mkdir docs
```

### 新建一个 markdown 文件

```bash
echo '# Hello VuePress!' > docs/README.md
```

### package.json 里添加内容

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 开始写作

```bash
npx vuepress dev docs
```

```bash
npm run docs:dev
```

### 结束

```bash
npm run docs:build
```

### 添加静态图片

```md
![imageName](imgUrl)
```

### 添加指定样式

1、 不使用预编译，直接在 md 底部添加 style 标签

```html
<style lang="stylus"></style>
```

2、使用预编译处理，首先需要安装所需的模块。举例：stylus

```bash
npm i stylus stylus-loader -D
```

### 在 md 文件中直接写 js

```html
<script>
  export default {
    //...do something
  };
</script>
```

### 路径

```bash
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
```

假设你现在在 foo/one.md 中：

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

### deploy

根据已经配置好的 deploy.sh 脚本，在项目根目录打开 git base，如果是 windows 用户就可以直接运行：

```bash
npm run push "提交说明文案"
```
