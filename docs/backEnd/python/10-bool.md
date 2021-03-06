---
title: 数据类型 - 布尔值(bool)
description: python的数据类型有好多个，前边写过字符串、整数和浮点数这三种。本节来整理另一种简单数据类型--布尔值
---
## 前言
python的数据类型有好多个，前边写过字符串、整数和浮点数这三种。本节来整理另一种简单数据类型--布尔值

## 布尔值(bool)
### 布尔值和其数据值
计算机可以用数据进行判断，若判断为真则执行特定条件中的代码块。若不为真则执行相反的指定条件内的代码块或不执行任何内容。  

这种数据就是`布尔值`。其数据类型在python中标记为`bool`。

布尔值其值比较特殊，不像字符串、整数那些，是用户自定的、无固定值的。他有固定的值，且只有两个：`True`、`False`(⚠️首字母大写)。  

### 示例代码
下列代码分别打印`True`和`False`
```py
print(3>1) # True

print(3<1) # False
```
其中，`True表示真`，说明**条件成立**。正如上例中，数字3是大于1的，判断的结果为“真”

相反，`False表示假`，说明**条件不成立**。正如上例中，数字3不小于1，判断的结果为“假”

而**只有当条件判断为True(即条件成立)时，if和while后面的子句才会执行下去**。  
比如下边的代码
```py
if True:
  print('这句话肯定会被执行')

if False:
  print('这句话肯定不会被执行')
```

**⚠️特别的，在使用while时，如果当条件永远正确，那么就会出现循环一直执行停不下来、造成死循环现象**。如下边的代码（千万不要轻易运行）

```py
while 3 > 1:
  print('糟了，是死循环的感觉！') 
```
`3>1`的判断永远成立，得到True后，while一直执行出现死循环。

## 布尔运算
### 什么是布尔运算
根据布尔值数据所做的逻辑判断，叫做`布尔运算`。   
下例中，`3>1`就是布尔运算。
```py
print(3>1)
```

### 布尔运算产生布尔值
试想一下，为什么我们这么写，if条件就执行了呢？

```py
if 5 > 3:
  print('布尔运算产生布尔值')
```
if语句后边条件判断语句需要一个布尔值，来指定判断后的逻辑，如果判断为真，则将执行if后的代码块。

计算机会先做一次布尔运算，判断5是否大于3。判断结果是`5>3`这个布尔运算返回了布尔值——`True`，条件成立if语句运行。

## 布尔运算的三种方式
数值比较 - 比较运算符  
数值运算 - 真假判断  
布尔值运算 - 逻辑运算符
### 数值比较 - 比较运算符
python中的比较运算符
比较运算符 | 含义| 备注
-|-|-
等于| ==| 判断数据和类型
不等于| !=| 英文感叹号
大于| > |
小于| <|
大于等于| >=|
小于等于| <= |

基本上就是小学数学！

::: tip ⚠️等于运算符(==)
1、需要两个等于号。**一个等于号(`=`)是赋值**的作用  
2、不仅仅只判断左右两边的**值**是否相等，还会判断符号左右的**数据类型**是否一致。  
比如`print(3 == '3')`就会因为两边数据类型不一致，进而返回`False`
:::

### 数值运算 - 真假判断
除了用数值比较作为语句的判断条件外，我们可以用一个数据/数值本身作为一个条件，直接进行真假判断。如下：
```py
if 'False':
  print('这段你觉得会打印吗？')
```

最后执行结果，就是打印了'这段你觉得会打印吗？'这句话。  
原因是，字符串'False'在这里就是作为一个条件，被判断为真（True）。


**在Python中被判定为假的数据是有限的**，官方文档规定的。如下：
#### python中的假值表
序号|认定为假的值|含义|备注
:-:|:-:|-|-
1|False| 布尔值中的`假`|
2|0| 整数`0`|
3|None| 数据类型`NoneType`|
4|''| 空字符串`空串`|里边有内容就为真  注意区别空串和空格字符串`‘ ’`
5|[]|空列表|里边有内容就为真，如`[0]`
6|{}|空字典|里边有内容就为真，如`{boolVal: Flase}`

除了上述“假”值，其他值都会被判断为“真”。
```py
if False:
  print('False值为假，这句话不会被执行。')
if 0:
  print('整数0为假，这句话不会被执行。')
if None:
  print('空值None为假，这句话不会被执行。')
if '':
  print('空串为假，这句话不会被执行。')
if []:
  print('空列表为假，这句话不会被执行。')
if {}:
  print('空字典为假，这句话不会被执行。')
```
以上案例显示，各个数据本身作为一个条件时，会被判定为假，if后面的条件为假，计算机就都不会执行if的下一行代码。

⚠️相反的，注意区分下边这些值，看上去和假值很像，但是他们都是`真`
```py
if 'False':
  print('字符串"False"值为真，这句话会被执行。')
if '0':
  print('字符串"0"值为真，这句话会被执行。')
if -1:
  print('非0数字皆为真，这句话会被执行')  
if 'None':
  print('字符串"None"为真，这句话会被执行。')
if ' ':
  print('空格字符串，不是空串！特别注意。空格字符串是真，这句话会被执行。')
# 可见，只要字符串不为空串，都为真。
if [0]:
  print('列表不为空，条件为真，这句话会被执行。')
if {'boolVal': False}:
  print('字典不为空，条件为真，这句话会被执行。')
```
**⚠️特别注意。空格字符串不是空串！他的布尔值是真**
### 布尔值运算 - 逻辑运算符
逻辑运算符有以下五种运算：
运算符|含义|备注
-|-|-
and| 与|并且
or| 或 |或者
not| 非 | 取反
in| 属于 | 判断数据是否属于一个字典或列表
not in| 不属于 |同上，取反。判断不属于
篇幅比较大，整理到下边一个大模块中。
## 逻辑运算符
### and - 与
#### and的计算逻辑
我自己学习js的并且(`&&`)时总结的顺口溜，同样适用于python中的并且(`and`)：
```py
# 关于判断规则
真真才为真
有假不算他

# 关于返回结果
真真得末尾
遇假返回假
```
解释：and左右的条件，都为真时，总的判断结果就为真。否则一旦左边或右边有假值，则整个结果都是假的。

如果两边都是真值，返回结果为最后的那个真值。  
如果两边有假值，则返回第一个遇到的假值。

#### and案例
```py
# 真真才为真 案例：
if 1 and 2:
  print('真真返回结果：',1 and 2)  # 真真返回结果： 2(返回最后的那个真值)

# 有假不算他 案例：
if 2 and None:
  print('不成立')
else:
  print('真假返回结果：',2 and None) # 真假返回结果： None(返回第一个遇到的假值)
if 0 and False:
  print('条件不成立，这里不打印')
else:
  print('假假返回结果：',0 and False) # 假假返回结果： 0(返回第一个遇到的假值)

# 两边表达式，左边有假，则返回结果是第一个假表达式的执行结果：
a = 1
b = 2
c = 3
d = 4
if a > b and c < d:
  print('条件不成立')
else:
  print('真假表达式返回结果：', a > b and c < d) # False (a>b的结果)
```
and对价值是零容忍的，只要有假、立马判定为假，谁说都不好使！
### or - 或
#### or的计算逻辑
同样来一段我学习时的顺口溜：
```py
# 关于判断规则
有真即为真
假假才算假

# 关于返回结果
有真返回真
假假返末尾
```
解释：or左右的条件，只要有一个为真时，总的判断结果就为真。  
必须左、右两边都是假值时，整个结果才是假的。

如果两边都是真值、或者两边其中一边有一个真值，则返回结果为第一个遇到的真值。
如果两边都是假值，则返回最后的那个假值。
#### or的案例：  
```py
# 有真即为真 案例：
if 1 or 2:
  print('真真返回结果：',1 or 2)  # 真真返回结果： 1(返回第一个遇到的真值)

if 2 or None:
  print('真假返回结果：',2 or None) # 真假返回结果： 2(返回第一个遇到的真值)

if None or 3:
  print('真假返回结果：',None or 3) # 真假返回结果： 3(返回第一个遇到的真值)


# 假假才算假 案例：
if 0 or False:
  print('条件不成立，这里不打印')
else:
  print('假假返回结果：',0 or False) # 假假返回结果： False(返回最后的那个假值)
```
可以想象成or是对假值的容忍度很高，不监测到最后一个都为假，她是不会死心并直接判断为假值的。

### not - 非
`not`表示`翻转`的意思。所谓取反，就是颠倒真假的意思。  
not True就等于False，not False就等于True。
```py
print(not True) # False
print(not False) # True
```
### in - 属于
`in`用来判断一个元素是否在一堆数据之中
数据集合是列表的话，【in】和【not in】就可以用来判断变量在不在列表list里面（in在、not in不在）。  
数据集合是字典的话，【in】和【not in】就可以用来判断字典中是否存在某个【键】（in在、not in不在）：
```py
myName = ['小石头', 'xing.org1^', 181, True]
dictName = {
  'name': '小石头',
  'age': 19,
  'hobby': {
    'it': ['css','js','python'],
    'daily': [['music','tv'],['apple','pear']],
    'sports': 'sleep'
  }
}

print('小石头' in myName) # True 该字符串存在于列表中
print('gjf' in myName) # False

print('hobby' in dictName) # True
print('sex' in dictName) # False
```
### not in - 不属于
与`in`相反，用来判断一个元素是否不在一堆数据之中
```py
# 变量沿用in案例中的

print('小石头' not in myName) # False 该字符串存在于列表中，非要说不在那是错误的，返回假值。
print('gjf' not in myName) # True

print('hobby' not in dictName) # False
print('sex' not in dictName) # True
```
### 优先级
三者之间的优先级：() > not > and > or
## 类型查询 type()
[数据类型和类型转换](http://localhost:8080/xingorg1Note/backEnd/python/02-dataType.html)章节，提过type函数，他主要用于类型查询。

布尔类型作为数据类型中的一种，同样可以用type函数进行类型查询：
```py
print(type(True)) # <class 'bool'>

print(type(False)) # <class 'bool'>
```
可以从打印结果看出来，布尔值的类型返回为`<class 'bool'>`。
## 布尔值判断 bool()
虽然我们有[python中的假值表](#python中的假值表), 肉眼就能辨别真假值。

不过python也提供了`bool()`函数来帮助我们判断数据的真假。下边是使用案例：
### 以下皆打印False
```py
print(1, bool(False))
print(2, bool(0))
print(3, bool(''))
print(4, bool(None))
print(5, bool([]))
print(6, bool({}))
```
### 以下皆返回True
```py
print(1, bool('False'))
print(2, bool('0'))
print(3, bool(' '))
print(4, bool('None'))
print(5, bool([0]))
print(6, bool({'boolVal': False}))
print(7, bool('字符串除了空串都为真'))
print(8, bool(-1))
print(9, bool(1.3))
print(10, bool([False]))
```
## 思考题
### 一百遍“我真棒”
用布尔运算实现while循环重复执行100遍打印“我真棒”的任务

```py
# 参考代码位于源代码files文件夹下对应章节的py文件中
```

<Vssue title="【Python】数据类型之布尔值" />