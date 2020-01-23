---
title: for循环
---

## for简介
【循环】：就是依照某些我们编写的特定规则，重复的做一件事。

当你需要重复的“搬砖”的时候，可以用for循环进行遍历，让机器循环的帮你去“搬砖”，彻底解放我们的双手。

【遍历】：所谓遍历，就是一遍一遍的经历。放到程序中，就是让程序一遍又一遍的经历重跑同一段代码程序的场景。和循环一个意思。


## 代码格式
```py
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for name in nameList:
  print(name) # 3次循环依次打印出'小石头', 'xing.org1^', '郭菊锋'
else:
  print('else情况') # else每次都会经过，当for循环执行完毕后执行else的代码块
print('===for循环完毕===')
print(name) # 郭菊锋
```
以上代码中，我们定义了一个列表数据nameList，并且使用for循环，依次遍历将列表中的每一项都迭代出来。

每次循环时，我们定义的变量name就会被重新赋值为nameList的对应元素，第1次循环name被赋值为第一个元素、第2次循环name又被赋值成第二个元素。以此类推，直到nameList被循环完成或者出现跳出循环的指令（下表）后就会停止。

而停止循环后，**变量name就是最后一个被赋值的元素**，这里为`郭菊锋`。

观察上述代码，for循环的语法格式也有一定的规律。
## 语法格式
```py
for 元素变量 in 迭代对象:
  【for子句】在代码块中，位于【缩进】后边。for子句里的内容会被循环执行。
else:
  else里边的内容都会被执行。在for循环完毕之后执行。
```

## 可被迭代的数据类型
有哪些数据类型可以被for循环遍历呢？

结论：列表、字典、字符串。用例子说明：
### 列表
for循环遍历列表数据，可以依次打印出列表中的每一项。

打印循环的次数取决于列表中元素的个数。也就是列表的长度。
```py
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for name in nameList:
  print(name) # 3次循环依次打印出'小石头', 'xing.org1^', '郭菊锋'
```
### 字典
for循环遍历字典数据，可以依次打印出字典中的每一个键（key）名。

我们可以在利用`字典名[key]`的方式，获取key所对应的值。

打印循环的次数取决于字典中键名key的个数。
```py
dictName = {'name': '小石头', 'nameEn': 'xing.org1^'}
for name in dictName:
  print(name) # 2次循环依次打印出'name', 'nameEn'
  print(dictName[name]) # 2次循环依次打印出'小石头', 'xing.org1^'
```

### 字符串
字符串也可以被for循环遍历，打印的将是每一个字符。

打印循环的次数取决于字符串的字符个数。
```py
strName = 'xing.org1^'
for s in strName:
  print(s)
# 循环依次打印结果如下:
# x
# i
# n
# g
# .
# o
# r
# g
# 1
# ^
```
## 不可被迭代的数据类型
整数、浮点数皆不可被迭代，如果强行遍历会发生错误：

### 整数
整数对象不是可迭代的：
```py
numberValue = 2020
for num in numberValue: # TypeError: 'int' object is not iterable
  print(num)
```

### 浮点值
浮点数对象不是可迭代的：
```py
floatValue = 1.23
for num in floatValue: # TypeError: 'float' object is not iterable
  print(num)
```

### 布尔值
布尔对象不可迭代：
```py
boolVal = True
for b in boolVal: # TypeError: 'bool' object is not iterable
  print(b)
```
### 空值
空值对象不可被迭代：
```py
noneVal = None
for n in noneVal: # TypeError: 'NoneType' object is not iterable
  print(n)
```
## 整数转化为范围后可被迭代
虽然直接for循环整数，会发生错误。

但是如果我们利用`range`函数，将整数转化为一个数字范围，再去进行for遍历，就可以了。
### range(y)
```py
numValue = 5
for index in range(numValue):
  print('5的迭代：', index)

# 五次循环打印结果如下 
# 5的迭代： 0
# 5的迭代： 1
# 5的迭代： 2
# 5的迭代： 3
# 5的迭代： 4
```
观察可知，**range范围迭代时，从“0”开始**，且不包含“5”。
### range(x, y)
从上边例子中可以看出来，**若x不填则会默认从0开始。**

如果不想从0开始呢？**我们可以指定从几开始。**代码上可以这么写：
```py
rangeValue1 = 5
for index in range(1, rangeValue1): # 明确指定从1开始
  print('range：', index)

# 循环打印结果如下
# range： 1
# range： 2
# range： 3
# range： 4
```
可以看到另一个**规律，在range括号里，逗号前边的数字被迭代时是包含的，右边的不包含。即取逗号左边而不取右边的数字。**

所以上例中，你如果想打印出“5”，那么括号最右边的数字你应该至少填写的比5大1。
### range(x, y, i)
x和y，跟上边例子一致。均是从x开始，到y但是不包括y的迭代。而**i是interval的缩写。表示间隔**。既从x开始循环后，下一次的循环与上一次循环间隔多少。

文字空洞，代码奉上：
```py
for index in range(0,10,3):
  print('interval:', index)

# 循环打印结果如下：
# interval: 0
# interval: 3
# interval: 6
# interval: 9
```
从代码和打印结果观察得知，依旧是从0开始循环打印。不过0打印完了以后，1、2不打印。从3开始又有打印。依次规律类推...


### Peace && Love
最后，尝尝人类复读机的力量吧
```py
rangeValue2 = 5
for index in range(rangeValue2):
  print('''
    病毒消失，病人痊愈。武汉加油，天佑中华！
  ''')

#   病毒消失，病人痊愈。武汉加油，天佑中华！


#   病毒消失，病人痊愈。武汉加油，天佑中华！


#   病毒消失，病人痊愈。武汉加油，天佑中华！


#   病毒消失，病人痊愈。武汉加油，天佑中华！


#   病毒消失，病人痊愈。武汉加油，天佑中华！


#   病毒消失，病人痊愈。武汉加油，天佑中华！
```

## 迭代列表时获取索引
我们通过上边迭代列表和字典的代码中可以看出来，for后边的变量在迭代列表的时候是列表内的元素、迭代字典的时候则是字典里边的键名。

那么如果我想迭代字典时，有个变量存放列表中各项所对应的偏移量（索引）呢？

通过range函数的搭配，我们不仅可以迭代整数，还能迭代列表的索引。

于是我就试了下边的写法，但是他报错了。

```py
# 迭代时传两个参数会报错：
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for name,index in nameList: # ValueError: too many values to unpack (expected 2)
  print(index) 
```
错误内容`ValueError: too many values to unpack (expected 2)`。表示了这里不应该有两个参数。

**那么我们想用索引来携带列表时该怎么写呢？**
一开始我给自己写了一个bug：
```py
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for index in range(nameList): # TypeError: 'list' object cannot be interpreted as an integer
  print(index) 
```
range内部只能接受整数。而列表转化不成整数，出点类型错误。

改正后，写法如下：
```py
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for index in range(len(nameList)):
  print(index) # 三次循环分别打印0、1、2
```
思路是：先用len获取列表的长度，然后将计算的长度这个数字，放到range内部。
## continue 跳过本次循环
continue跳过本次循环，for循环跳过后继续执行下一次循环。
```py
for i in range(5):
  if(i == 3):
    continue
  else:
    print('continue跳过循环', i)
else:
  print('有continue的for循环的else')

# 打印结果如下：
# continue跳过循环 0
# continue跳过循环 1
# continue跳过循环 2
# continue跳过循环 4
# 有continue的for循环的else
```
可以看打印结果得知，在满足i==3的条件之后，直接跳出了当次的循环没有打印3这个数字。而是进入到下次循环，打印出4后，循环完毕。

然后执行了for后边的else语句。
## break 跳出循环
break跳出循环，for循环不管是否完成将直接结束。甚至for后边的else都不会再执行。
```py
for i in range(5):
  if(i == 3):
    break 
  else:
    print('break跳过循环', i)
else:
  print('有break的for循环的else')

# 打印结果如下：
# break跳过循环 0
# break跳过循环 1
# break跳过循环 2
```
可以看打印结果得知，在满足i==3的条件之后，直接跳出了循环。

for循环后边的else都没执行。所以只打印了0、1、2。

## 思考题

### 创建一个从1到100的整数列表
用for循环打印1-100

### 九九乘法表
用for循环打印一个九九乘法表。就是小学时候我们铅笔盒盖子内部上印刷的那种，表格形式的。
<Vssue title="【Python】循环for" />