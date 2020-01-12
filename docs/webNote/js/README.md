---
title: JS模块 知识点合集
description: JS模块 知识点合集 knowledge Point
---

# knowledge Point
知识点啊！朋友们。知识点！画起来，要考的。
## resize只能绑定一个？
对的，用下边这种写法，一个页面中，resize只能绑定一个。

下边的代码，就永远只会打印出“2”，而没有“1”。
```js
// resize只能绑定、执行一个。此时只执行后边那个。
window.onresize = function(){
    console.log("1")
}
window.onresize = function(){
    console.log("2")
}
```
但是用下边这种写法，俩都可以执行了。
```js
// addEventListener绑定，就可以两次都执行
window.addEventListener("resize", function(){
    console.log("3")
});
window.addEventListener("resize", function(){
    console.log("4")
});
```