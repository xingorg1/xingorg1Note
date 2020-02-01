---
title: 数据类型 - 元祖(tuple)
description: 记得学习函数的时候，遇到了一种新的数据类型“元祖”，我说下表。这次单独说一下他。
---
# 数据类型 - 元祖(tuple)
记得学习函数的时候，遇到了一种新的数据类型“元祖”，我说下表。这次单独说一下他。
## 写法
元组的写法是将数据放在小括号()中
```py
# 元祖的样子
tupleVal = ('a',1,True)
print(tupleVal) # ('a', 1, True)
print(type(tupleVal)) # <class 'tuple'>
```

## 用法
它的用法和列表用法类似，主要区别在于**列表中的元素可以随时修改，但元组中的元素不可更改。**
### 偏移量获取元祖内各项数据
偏移量即索引值，从0开始，用中括号包裹。

元组和列表一样，可以通过索引来提取当中的某个元素，
如下代码：
```py
print(tupleVal[0]) # a
```
### 元祖长度获取
用len函数获取：
```py
print(len(tupleVal)) # 3
```
### 循环遍历元祖
和列表一样，元组是可迭代对象，这意味着我们可以用for循环来遍历它以获取元祖各项值，这时候的代码就可以写成：
```py
for tupleItem in tupleVal:
  print(tupleItem) # 三次分别打印'a'、1、True
```
### 循环配合偏移量
获取元祖各项值
```py
for item in range(len(tupleVal)):
  print(item) # 三次分别打印0、1、2
  print(tupleVal[item]) # 三次分别打印'a'、1、True
```
## 之前知识用到元祖的情况

### isinstance
该方法的第二个参数是元祖类型时
```py
isinstance(实例名, (类名1, 类名2...)) # 第二个参数是类名组成的元祖类型数据。
```
### return
函数返回值为多个时，调用函数后拿到的返回值类型是元祖类型
```py
def returnmore(a,b,c): # 要返回多个值，只需将返回的值写在return语句后面，用英文逗号隔开：
  return a,b,c
returnResult = returnmore(1,3,4)
print(returnResult)

# 返回结果
# (1, 3, 4) 
```
可见返回结果也是`元祖`类型的
### 不定长参数
不定长参数可以接收任意数量的值，接收的结果就是一个元祖：
```py
# 不定长参数
def tupleFn(*tupleArgs):
  print(tupleArgs)
  print(type(tupleArgs))

# 调用函数并传递不定量参数
tupleFn('第一个参数','2','哈哈哈','不定长参数','愿意写几个参数就写几个')

# 打印结果如下：
# ('第一个参数', '2', '哈哈哈', '不定长参数', '愿意写几个参数就写几个')
# <class 'tuple'>
```
### print
我们常用的print()函数，它可以接收多个参数。

其完整的参数：
```py
print(*objects, sep = ' ', end = '\n', file = sys.stdout, flush = False)
```
其中，`*objects`就是**不定长参数**。后边四个就是**默认参数**，我们可以通过修改默认值来改变参数，[详见这里](https://xingorg1.github.io/xingorg1Note/backEnd/python/01-print.html)，

因为`*objects`接收不定量参数，所以我们调用print时，可以传递很多个不限量的参数。

而`*objects`就会是元祖类型的数据。