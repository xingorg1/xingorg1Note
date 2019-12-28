---
title: VuePress
tags: VuePress 静态博客
description: 本文介绍应该VuePress搭建一个博客，据官网说：VuePress 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
---

# VuePress 使用方法与关键知识点

[VuePress 官网](https://www.vuepress.cn/)

[VuePress 文檔](https://v1.vuepress.vuejs.org/zh/guide/)

[git](https://github.com/vuejs/vuepress)

## 安装
将 VuePress 作为一个本地依赖安装

```bash
yarn add -D vuepress # 或者：npm install -D vuepress
```

## 目录结构
新建一个 docs 文件夹

```bash
mkdir docs
```

新建一个 markdown 文件

```bash
echo '# Hello VuePress!' > docs/README.md
```


## 路径

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

## 项目运行配置
package.json
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 开始写作

项目开发
```bash
npx vuepress dev docs
```

```bash
npm run docs:dev
```

项目打包

```bash
npm run docs:build
```


## deploy自动部署

根据已经配置好的 deploy.sh 脚本，在项目根目录打开 git base，如果是 windows 用户就可以直接运行：

```bash
npm run push "提交说明文案"
```


## vuepress在md中的一些语法
### 特殊 格式

::: tip 提示
This is a tip
:::

::: warning 警告
This is a warning
:::

::: danger 危险
This is a dangerous warning
:::

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
### 代码中的行高亮

语言后面使用{数字} 例如 js{4} 表示第四行高亮

```js{2}
var a = 1;
var b = 2;
var c = 3;
```

### 表格的写法 o(_￣︶￣_)o

|   1   |   2   |
| :---: | :---: |
| ![]() | ![]() |

### emoji 小图标

:avocado:
:tomato:
:eggplant:
:cucumber:
:carrot:
:corn:
:hot_pepper:
:potato:
:sweet_potato:
:chestnut:
:peanuts:
:honey_pot:
:croissant:
:bread:
:baguette_bread:
:cheese:
:egg:
:fried_egg:
:bacon:
:pancakes:
:fried_shrimp:
:poultry_leg:
[...更多](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

<Vssue title="VuePress 使用方法整理" />