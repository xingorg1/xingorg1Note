---
title: Python与JS对比
description: Python和JavaScript的对比语法和相似方法比较
---

# Python VS Javascript 写法与用法大全表

相同语法之间，python和js的写法对比。以及一些主要规范上不同的地方。方便吸收与学习，也防止学混了。

> 只是关注写法。有可能代码有问题的，请大佬指点。

## 注释

python：

``` py
# 丼号后边的内容会被 注释
```

javascript：

``` js
// 第一种：行注释  

/*
  第二种：块注释
  可以注释多行
  if('js'){
    console.log('哈哈哈')
  }
*/
```

## 打印

**重点关注其返回值**
python：

``` py
print('打印店') 
# [返回值None] 调用后返回None，如a = print(a) -> None
```

javascript：

``` js
console.log('打印店')[返回值undefined] 调用后返回undefined， 如a = console.log() - > undefined
```

## 数据类型

### 1、数据类型对比表
| 类别  | python | js  |
|-------|--------|-----|
| 字符串 | 【str】： `'demo'` | 【string】： `'demo'` |
| 数字 | 【int】： 整数 `1` <br/>【float】： 浮点数 `1.2` |【number】： 数字 `1` 或 `1.2` |
| 布尔值 | 【bool】： `True` 、 `False` | 【boolean】： `true` 、 `false` |
| 未定义 | -      | 【undefined】： `undefined` |
| 空值 | 【None】： `None` | 【null】： `null` |
| 对象<br>or<br>字典 | 【dict】：字典 <br/> `{'小明':95,'小刚':90}` | 【object】：对象 <br/> `{'小明':95,'小刚':90}` |
| 数组<br>or<br>列表 | 【list】：列表 <br/> `['小明','小刚']` | 【array】：数组 <br/> `['小明','小刚']` |
| 元祖 | 【tuple】：元组 <br> `('runoob',786,True)` | -<br>(ts有元祖) |
| set对象<br>or<br>集合 | 【set】： 集合： `set（）` | 【set】： set对象：<br> `new Set([1, 2, 3, 4, 5])` | 

### 2、类型判断

#### (1)、type()
python：

``` py
type('str')   # 打印：<class 'str'>
type(1)       # 打印：<class 'int'>
type(1.3)     # 打印：<class 'float'>
type(None)    # 打印：<class 'NoneType'>
type(True)    # 打印：<class 'bool'>
type({})      # 打印：<class 'dict'>
type([])      # 打印：<class 'list'>
type(('1'))   # 打印：<class 'str'>
def a():
	pass
type(a)       # 打印：<class 'function'> 
```

javascript：

``` js
typeof 'string' //打印：'string'
typeof 1 //打印：'number'
typeof 2.3 //打印：'number'
typeof true //打印：'boolean'
typeof undefined //打印：'undefined'
typeof null //打印：'object'
typeof {} //打印：'object'
typeof [] //打印：'object'
typeof new Set() //打印：'object'
typeof(function a() {}) //打印：'function'
```

#### (2)、instanceof 和 isinstance

python：**isinstance**

``` py
b = [1]
isinstance(b,list)    # 返回 True
isinstance(b,dict)    # 返回 False
```

javascript： **instanceof**

``` js
b = [1]
b instanceof Array // 返回true
b instanceof Object // 返回false
```

### 3、类型转换规则 

python：

``` py
无隐式类型转换
不同类型的数据进行算式运算会报错
字符串拼接数字也不可以
int('123.3') 报错
for循环 不能 遍历 整数、浮点数、布尔值
```

javascript：

``` js
有隐式类型转换
不同类型进行算式运算会先通过类型转换
字符串和数字相加是拼接字符串
```

### 4、类型转换方法

python：

``` py
# str(数字、浮点数)
# int(数字、字符串正数数字)
# float()
```

javascript：

``` js
// String()、 toString() 等不同数据类型的数据原型上有不同的用法规则
// Number()、 parseInt()
// parseFloat()
```

## 运算符

### 1、幂运算

python：

`**` : 返回x的y次幂

``` py
print(2**3) # 8
```

javascript：

`Math.pow(x,y)` : x的y次幂，x-底数，y-幂数。xy是数字

``` js
Math.pow(2, 3) // 8
```

### 2、取整除

python： 

`//` 返回商的整数部分

``` py
print(8//3) # 2
```

javascript：  
`parseInt(x/y)` 取整函数

``` js
parseInt(8 / 3) // 2 
```

### 3、递增

python：

``` py
# 第一种
x = x + 1

# 第2种
x += 1
```

javascript：

``` js
// 第一种
x++ // 每次递增1

// 第二种
x += 1 // 这点和py是相同的
```

## 表达式

### 1、全等判断
python：

`==` ： 没有三等，只有js特殊因为他有隐式类型转换

``` py
print(1 == '1') # False
```

javascript：

`===` ： 全等判断必须用三个等号，两个的会进行隐式类型转换

``` js
console.log(1 === '1') // false
```

## 语句写法

### if语句
python：

``` py
if 4 < 2:
	print('if')
elif 3 > 3: 
	print('elif')
else:
print('else')
```

javascript：

``` js
if (1 < 2) {
    console.log('if')
} else if (3 > 4) {
    console.log('else if')
} else {
    console.log('else')
}
```

### else

python：

``` py
# else可以用在if、for、while等后边
```

javascript：

``` js
// else只能用在if后边
```

### for循环

python：

``` py
# for遍历字符串
for i in '123':
	print('for循环可以遍历字符串',i) #1、2、3

# for遍历整数
for i in range(3):
	print(i) #0、1、2

# for遍历列表
myList = [1,2,3]
for i in range(len(myList)): 
	print(i) #0、1

# for + else的情况：
for i in [8,9]: 
	print(i,'==') #8、9
else:
	print('haha') #haha

```

javascript：

``` js
for (var i in [1, 2, 3]) {
    console.log(i)
}

for (var i = 0; i < 2; i++) {
    console.log(i)
} // 0、1、
```

### while语句

python：

``` py
# 无限死循环
while True:
	print('无限死循环')

# 非无限死循环
a = 0
while a < 2:
	print('不是无限死循环')
a += 1
```

javascript：

``` js
while (true) {
    console.log('无限死循环')
}

var a = 0
while (a < 2) {
    console.log('不是无限死循环')
    a++
}
```

## 函数

## 1、函数定义

python：

``` py
def hanshu(a,b):
	c = a * b
	return c
result = hanshu(1,2)
print(result)
```

javascript：

``` js
function hanshu(a, b) {
    var c = a * b
    return c
}
var result = hanshu(1, 2)
console.log(result)
```

### 2、参数类型

python：

* 位置参数

* 默认参数

* 不定长参数 - *定义

* 对应参数（配合默认参数使用）

``` py
# 示例
def etc(size=1,number=None,time=None):
  print(size,number,time)

etc(size=1.5,number=2) # 在多个参数的时候很好用
```

javascript：

* 位置参数
* 默认参数
* 不定长参数 - arguments接受
* 对应参数（也需要默认参数的支持）

``` js
// 示例：
function etc(size = 1, number = null, time = None) {
    console.log(size, number, time)
}
etc(1.5, null, 2) // 在多个默认参数的时候就必须一一对应
```

### return规则

python：
没有return语句的函数，Python也会在末尾隐性地加上return None，
即默认返回None值。

``` py
result = etc(1.5, null, 2)
print(result) # None
```

javascript：
没有return语句的函数，JavaScript也会在末尾隐性地加上return undefined，
即默认返回undefined值。

``` js
var result = etc(1.5, null, 2)
console.log(result) // undefined
```

## 类的创建

python：

``` py
class Person:

    mytype = '人类'#

父类的属性
def __init__(self): #初始化init函数， 不是constructor函数
pass
def eating(self): #是self指向实例化对象， 不是this
print(self.mytype + self.name + '生下来就会吃饭')
class Gjf(Person): #继承写法不一致， 不用extends， 直接括号继承
def __init__(self, name, age = 18):

    self.name = name

self.age = age
def greeting(self, yourName):

    print('%s岁的%s向%s说hello！' % (self.age, self.name, yourName))# 字符串的拼接写法不一致

gjf = Gjf('小石头')# 没有new构造函数， 直接调用构造函数即可
gjf.eating()
gjf.greeting('郭菊锋')
``` 

javascript：

``` js
// es5的面向对象与继承
function Person() {
    this.type = '人类'
}
Person.prototype.eating = function() {
    console.log(this.type + this.name + '生下来就会吃饭')
}

function Gjf(name, age = 18) {
    this.name = name
    this.age = age
}
Gjf.prototype.greeting = function(yourName) {
    console.log( `${this.age}岁的${this.name}向${yourName}说hello！` )
}
Gjf.prototype.__proto__ = new Person()
var gjf = new Gjf('guojufeng')
gjf.eating()
gjf.greeting('xing.org1^')
```

``` js
// es6的面向对象写法
class Person {
    constructor() {
        this.type = '人类'
    }
    eating() {
        console.log(this.type + this.name + '生下来就会吃饭')
    }
}
class Gjf extends Person {
    constructor(name, age = 18) {
        super()
        this.name = name
        this.age = age
    }
    greeting(yourName) {
        console.log( `${this.age}岁的${this.name}向${yourName}说hello！` )
    }
}
var gjf = new Gjf('guojufeng')
gjf.eating()
gjf.greeting('小石头')
```

## 异常捕获

python：

``` py
# 【待补充】
```

javascript：

``` js
// 【待补充】
```

## 模板字符串

python：

``` py
print('%s字符串%s' %('我是','哈哈'))
```

javascript：

``` js
// es6知识点
name = '我是'
hah = '哈哈'
console.log( `${name}字符串${hah}` )
```

## 模块

*持续补充中.*

> *注： python特点：这个时候，我们一般会选择用type()函数查看一下数据类型，因为Python是一门面向对象编程的语言，只有知道是什么对象，才能调用相关的对象属性和方法。

