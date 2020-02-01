---
title: 函数(function)
---
# 函数
函数是一堆组织好的、可重复利用的、用来实现某一功能的代码。

python中的input()、print()、type()、bool()、len()等都是函数。且是python的内置函数。

我们也可以封装自己的函数。

## 作用
将常用的一段代码组织好封装到一个函数中重复利用
通过传入不同的参数、经过相同的计算，得到不同的结果。

可以将一个程序拆分成多个不同的函数，某些函数可以重复利用。在代码复用上看，极大的减少了代码的冗余量。


## 函数定义
我们来尝试定义自己独一无二的函数：
### 伪代码
形参是函数参数的变量。
函数参数可以有多个、不限量
```py
def 函数名(形参1,形参2...):
  函数体（要执行的内容）
  return 返回值
```
### 示例代码
```py
# 函数定义
def summation(a,b):
  return a + b
```
### 注意事项
#### 一、定义：
def的意思是定义(define)，用来声明定义一个函数。

#### 二、函数名：
1. `summation`是函数名，是自定义的变量。
2. 名字最好能体现函数的功能，一般用小写字母和单下划线、数字等组合
3. 不可与内置函数重名（内置函数不需要定义即可直接使用）
#### 三、参数：
1. 函数名后是英文的括号，括号内部定义参数变量。
2. 括号里可以有多个参数，也可以不带参数。
3. 参数的命名规则与函数名相同
4. 括号后边是英文冒号

#### 四、函数体：
1. 冒号下边是缩进后的代码块，即是函数的函数体。
2. 函数体是函数的执行过程，体现函数功能的语句，要缩进，一般是四个空格
3. 函数体内部的代码是调用函数时才会被执行的代码。不调用不会执行
#### 五、返回值：
1. 函数体内部的return是用来返回值的。可以指定函数执行完毕后最终会返回什么值或表达式
2. return语句：后面可以接多种数据类型，如果函数不需要返回值的话，可以省略
3. 函数在执行过程中遇到第一个return语句就会停止执行，return后边的第二个return永远不会被执行。
## 函数调用
我们定义了函数后，想要使用这个函数就是调用函数。

比如我们常用的`print()`函数，我们传入参数后就能帮我们打印出参数部分的内容，这就是函数调用了。
### 伪代码
函数名+括号+可能的参数。
```py
函数名(函数参数1,...更多参数)
```
### 示例代码
```py
# 函数定义
def summation(a,b):
  return a + b

# 函数调用
summation(1,2) 
```
函数调用后将得到函数内部的返回值。

## 函数参数
参数可以有多个，也可以没有。视参数功能的情况而定。
### 参数传递
在函数调用时在括号中传入的不同的值，这个值就是参数。

函数在接受到参数后，对其进行处理，并经过一定计算后返回不同的值。

如下，比如`len()`函数会根据括号里放的参数的不同，输出（返回）不同的值。
```py
var1 = '这是第一个示例变量'
print(len(var1)) # 9，得到字符串的长度为9
var2 = ['小石头','xing.org1^','郭菊锋']
print(len(var2)) # 3，得到数组的长度为3
```
上例中，len后边括号里的var1、var2就是参数传递。
### 参数接收
函数调用时将参数传递过去、则函数定义时，也要准备好接收的变量，那就是`形参`。
```py
def summation(a,b): # a,b就是对应接收的变量，是函数的形参。
  return a + b # 接收数据后，在函数内部被运用。

summation(1,2) # 1，2就是传递参数
```
### 无参函数
有的函数其功能不需要参数，就没有参数预定和传递了。
```py
def haha():
  print('只打印一句话，不用参数。')

haha()
```
### 参数类型
#### 位置参数
当有多个参数的时候，我们就必须按照顺序和数量传递，这也是最常见的参数类型。

如下案例：
```py
def you(name,age,sex):
  print('your name is:', name)
  print('your age is:', age)
  print('your sex is:', sex)

you('小石头','19','female')

# 打印结果如下：
# your name is: 小石头
# your age is: 19
# your sex is: female
```
我们传递的三个参数必须和形参需要的内容一一对应，这就是`位置参数`。

一旦不对应就搞笑了
```py
you('female','小石头','19')

# 打印结果如下：
# your name is: female
# your age is: 小石头
# your sex is: 19
```
#### 默认参数
有时候我们有的参数多数情况下就用一个固定的值，有他的默认值。只有特殊情况下调用时才会需要不同的值，这时我们就可以定义默认参数。而不用每次都传递相同的参数了：


```py
def newYou(name,age,sex='female'): # sex='female'就是默认参，参数的默认值是'female'。
  print("your's name:", name)
  print("your's age:", age)
  print("your's sex:", sex)

# 当不传递第三个参数时，取默认值'female'
newYou('小石头','10')
# 打印结果：
# your's name: 小石头
# your's age: 10
# your's sex: female

# 当传递了第三个参数时，取传递的参数male。
newYou('大石头','29', 'male') 
# 打印结果
# your's name: 大石头
# your's age: 29
# your's sex: male
```
sex='female'就是默认参，参数的默认值是'female'。
当不传参数时，第三个参数默认取值为'female'。当传递了第三个参数时，取传递的参数。

⚠️需要注意的是：**默认参数必须放在位置参数之后。**

#### 不定长度参数
顾名思义，就是传递给参数的数量是可选的、不确定的。

不定长参数可以接收任意数量的值。
它的格式比较特殊，是一个星号`*`加上参数名，它的返回值也比较特殊，
```py
def noLen(*variables):
    return variables

noLenResult = noLen('参数1','参数2','参数3')
#括号里的这几个值都会传递给参数variables

print(noLenResult) # ('参数1', '参数2', '参数3')
print(type(noLenResult)) # <class 'tuple'>
```
`<class 'tuple'>`这种数据类型叫作元组(tuple)。[见该篇章](https://xingorg1.github.io/xingorg1Note/backEnd/python/15-tuple.html)

在不定长参数后边还可以放默认参
```py
def noLenDefault(*variables, defaultVar = 123):
  print(variables)
  print(defaultVar)
  return variables
noLenDefault('a',15,6)

# ('a', 15, 6)
# 123
```

## 函数返回值
### 定义返回值
函数一定要有返回值，返回值写在`return`后边

有返回值的案例：
```py
def summation(a,b):
  return a + b # return返回值、返回的是a+b的和。

result = summation(1,2) 
print(result) # 3。就是1+2的结果
```
### 没有返回值
如果没有明确写`return 返回值`,那么Python也会在末尾隐性地加上return None，那么函数默认就会返回`None`值  

没有返回值的案例：
```py
def summation(a,b):
  a + b 
  # 没有return返回值

result = summation(1,2) 
print(result) # None
print(type(result)) # <class 'NoneType'>
```
调用函数之后，得到的结果是None。且结果的数据类型是`'NoneType'`

### 返回多个值
用return语句来返回多个值。

要返回多个值，只需将返回的值写在return语句后面，用英文逗号隔开：
```py
def returnmore(a,b,c):
  return a,b,c
returnResult = returnmore(1,3,4)
print(returnResult)

# 返回结果
# (1, 3, 4) 
```
可见返回结果也是`元祖`类型的

### 多个return
函数在执行过程中遇到第一个return语句就会停止执行，return后边的第二个return永远不会被执行。
```py
def oneReturn():
  return 1
  print('这句不会执行')
  return 2

oneResult = oneReturn()
print(oneResult) # 1
```
可见，return返回值 不是2，而是1。这是因为第一个return后边的内容不会再执行了。包括print和return 2

## 作用域
程序中的变量并不是在哪个位置都可以被使用的，使用权限决定于这个变量是在哪里赋值的。
### 局部变量与全局变量
1. 一个在函数内部赋值的变量仅能在该函数内部使用（局部作用域），它们被称作【局部变量】
2. 在所有函数之外赋值的变量，可以在程序的任何位置使用（全局作用域），它们被称作【全局变量】
3. 使用不在该函数作用域也不在全局作用域内的变量时，就会报错“变量名未定义”
```py
quanjuVar = '我是全局变量'
def jubuFn1():
  jubuVar1 = '我是局部变量1'
  print(quanjuVar,jubuVar1) # 我是全局变量 我是局部变量1

def jubuFn2():
  jubuVar2 = '我是局部变量2'
  print(quanjuVar,jubuVar2) # 我是全局变量 我是局部变量2
  print(jubuVar1) # 这段代码放开就会报错：NameError: name 'jubuVar1' is not defined

jubuFn1()
jubuFn2()
```

### 将局部变量全局化
怎么解决“局部变量”和”全局变量“之间的矛盾，实现函数间变量的相互传递呢？
1. 把局部变量都放在函数外，变成全局变量。
2. 使用`global`语句将局部变量声明为全局变量
3. 函数嵌套

```py
# 局部变量全局化
quanjuVar2 = '我是全局变量2'
jubuVar3 = '局部变量全局化，第一种方法'
def jubuFn3():
  # 在顶部将其全局化
  global jubuVar4
  jubuVar1 = '我是局部变量1'
  # 在下边赋值全局化后的局部变量
  jubuVar4 = '我是局部变量4，我被global全局化了'
  print(quanjuVar,jubuVar1,jubuVar3) # 我是全局变量 我是局部变量1 局部变量全局化，第一种方法

def jubuFn4():
  jubuVar2 = '我是局部变量222'
  print(quanjuVar,jubuVar2) # 我是全局变量 我是局部变量222
  print(jubuVar3) # 局部变量全局化，第一种方法
  print(jubuVar4) # 这段代码这次就能正常执行了，因为jubuVar4这个变量被全局化了。打印：我是局部变量4，我被global全局化了

jubuFn3()
jubuFn4()
```
global语句一般写在函数体的第一行，它会告诉Python，“我希望jubuVar4是个全局变量，所以请不要用这个名字创建一个局部变量”。

所以jubuFn4()函数内部现在可以直接使用声明后的全局变量jubuVar4。

## 函数嵌套
函数嵌套也可以实现函数间变量的相互传递
```py
# 函数嵌套
quanjuVar3 = '我是全局变量3'
def jubuFn5():
  jubuVar5 = '我是局部变量5'
  print(quanjuVar,jubuVar5) # 我是全局变量 我是局部变量5
  def jubuFn6():
    jubuVar6 = '我是局部变量666'
    print(quanjuVar3,jubuVar6) # 我是全局变量3 我是局部变量666
    print(jubuVar5) # 我是局部变量5 (因为嵌套，内部的函数可以用全局的变量、也可以用父级函数内部的变量)
  jubuFn6()

jubuFn5()
```
以上是函数定义的嵌套。

下边还有函数调用的嵌套
```py
# 函数调用的嵌套
def one(a):
  return a

def two(a,b):
  return one(a) + b

andResult = two(1,2)
print(andResult) # 3
```
在函数two中，调用了one函数之后的结果，与b参数相加后再return出去

## 练习题
### 仿写len()函数
实现具有相同功能的函数
思路：
1. 设置一个初始为0的计数器；
2. 遍历字符串，每遍历一次，计数器加一；
3. 返回计数器的值。
<Vssue title="【Python】函数" />
