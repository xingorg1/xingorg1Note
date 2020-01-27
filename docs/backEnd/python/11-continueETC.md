---
title: 循环语句里的F4
descrition: 深入了解下四个新语句，以及他们搭配for、while循环等语句时，所产生的化学反应。
---
# 循环语句里的F4
深入了解下四个新语句，分别是：`continue`、`break`、`pass`、`else`以及他们搭配for、while循环等语句时，所产生的化学反应。

## else
由于continue、break都会和else有一定的规则，所以先来说else。

在python中，else不但可以和if配合使用，它还能跟for循环和while循环配合使用。

### 伪代码
else用在循环代码的后边，如果循环可以正常结束、即没有遇到break语句。  
那么else里的代码块也会在循环结束后被正常执行。
```py
for...in...:
    ...
else:
    ...
```

```py
while...(条件):
    ...
else:
    ...
```
### 示例代码
for循环执行完毕后，else代码就会执行。【前提是for循环中不存在`break`语句】
```py
for i in range(3):
  print('i的值为：',i)
else:
  print('else中，i的值为：',i)

# 打印结果如下：
# i的值为： 0
# i的值为： 1
# i的值为： 2
# else中，i的值为： 2
```

while循环执行完毕后，else代码再执行：【前提是while循环中不存在`break`语句】
```py
elseVal = 1
while elseVal < 3:
  print('elseVal的值：',elseVal)
  elseVal += 1
else:
  print('else中，elseVal的值：',elseVal)

# 打印结果如下：
# elseVal的值： 1
# elseVal的值： 2
# else中，elseVal的值： 3
```



## continue
用来跳过本轮循环、继续执行下次循环。
### 伪代码
continue语句搭配for循环
```py
for...in...:
    ...
    if ...:
        continue # 如果满足了条件，则跳过本次循环进入下一轮循环
    ...
```
continue语句搭配while循环
```py
while...(条件):
    ...
    if ...:
        continue # 如果满足了条件，则跳过本次循环进入下一轮循环
    ...
```
### 示例代码
#### continue语句搭配for循环  
continue跳过本次循环，for循环跳过后继续执行下一轮循环。
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
可以看打印结果得知，在满足i==3的条件之后，直接跳出了当次的循环没有打印3这个数字。而是进入到下一轮循环，打印出4后，循环才正式完毕。

然后执行了for后边的else语句，说明只是跳出了本轮循环。

#### continue语句搭配while循环  
同for，continue语句在while中的使用作用一样是跳出本轮的循环、继续下一轮的循环。  
不再赘述，直接上代码：
```py
continueVal = 1
while continueVal <= 5:
  if continueVal == 3:
    print('if条件中，循环跳过')
    continueVal += 1
    continue
  print('continueVal的值：',continueVal)
  continueVal += 1
else:
  print('循环结束')

# 打印结果：
# continueVal的值： 1
# continueVal的值： 2
# if条件中，循环跳过
# continueVal的值： 4
# continueVal的值： 5
# 循环结束
```
因为变量"continueVal==3"时if条件成立，执行了`continue`。跳过了if语句后边代码的执行，也就没打印"continueVal的值: 3"那句话。

但是还打印了后边的“continueVal的值： 4”代码，说明遇到continue后跳回循环开头，继续执行了剩下的循环了。  

并且打印了while语句所对应的else语句中“循环结束”这句话。


## break
### 作用
用来打断循环、结束循环
### 伪代码
break语句搭配for循环
```py
for...in...:
    ...
    if ...:
        break # 如果满足了某一个条件，就提前结束循环
else:
  ... # 如果break执行后，这里的代码不会被执行
```
break语句搭配while循环
```py
while...(条件):
    ...
    if ...:
        break # 如果满足了某一个条件，就提前结束循环
else:
  ... # 如果break执行后，这里的代码不会被执行
```
### 示例
#### break语句搭配for循环的示例：
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
#### break语句搭配while循环的示例：
同for，break语句在while中的使用作用一样是跳出循环。 

而break语句常和`while True`搭配使用，可以打破无限循环：
```py
breakVal = 1
while True:
  if breakVal == 5:
    print('if条件成立,循环被打破。')
    break
  else:
    print('breakVal的值：',breakVal)
    breakVal += 1
else:
  print('循环结束')

# 打印结果：
# breakVal的值： 1
# breakVal的值： 2
# breakVal的值： 3
# breakVal的值： 4
# if条件成立,循环被打破。
```
条件==5时，直接结束循环，并且不再打印while语句所对应的else语句了。
### 案例-while True搭配使用
案例2，**根据用户的输入来决定是否结束循环：**
```py
resultVal = input('你要结束循环吗？yes/no:')
while True:
  if resultVal == 'Y' or resultVal == 'yes' or resultVal == 'y': # 代码中，只要输入'Y'、'yes'、'y'都可以结束死循环
    print('if条件成立,循环被打破。至此结束无限循环。')
    break
  else:
    resultVal = input('你要结束循环吗？yes/no:')
else:
  print('循环结束')
```
*这个案例将会在日后很频繁的被使用。*

我的人机交互流程打印如下：
- 你要结束循环吗？yes/no: n
- 你要结束循环吗？yes/no: 1
- 你要结束循环吗？yes/no: 哈哈
- 你要结束循环吗？yes/no: -1
- 你要结束循环吗？yes/no: y
- if条件成立,循环被打破。至此结束无限循环。

只有我输入了'Y'、'yes'或'y'三者中的一个，才可以结束死循环。否则输入其他的，都会继续循环并走到else条件中让你重新输入信息。
### 案例-密码输入与校验功能
案例3，**输入密码并校验准确性功能：**
```py
while True:
  passwordVal = input('请输入正确的密码：');
  if passwordVal == '123456':
    break
  else:
    print('密码输入错误，请重新输入。')
print('密码输入正确。通过啦！')
```
我的人机交互流程打印如下：
- 请输入正确的密码：236
- 密码输入错误，请重新输入。
- 请输入正确的密码：235
- 密码输入错误，请重新输入。
- 请输入正确的密码：123456
- 密码输入正确。通过啦！

## pass
顾名思义，即使他的英文意思，`跳过`。
### 示例代码
有pass的代码：
```py
for i in range(5):
  if i == 3:
    pass
    print('pass后的内容')
  print('当前是:', i)
else:
  print('for循环的else')

# 打印结果：
# 当前是: 0
# 当前是: 1
# 当前是: 2
# pass后的内容
# 当前是: 3
# 当前是: 4
# for循环的else
```
没pass的代码：
```py
for i in range(5):
  if i == 3:
    print('pass后的内容')
  print('当前是:', i)
else:
  print('for循环的else')

# 打印结果：
# 当前是: 0
# 当前是: 1
# 当前是: 2
# pass后的内容
# 当前是: 3
# 当前是: 4
# for循环的else
```
可以发现有pass和没pass没啥区别。打印结果都是一样的。

这样观察不出来pass的作用啊！
### pass用途
接下来再看一段代码来了解下**pass的用途**：
```py
for i in range(5):
  if i == 3:
    
  print('当前是:', i)
else:
  print('for循环的else')
```
本意是if条件成立的时候、即i为3的时候，啥也不做。

但是不开心的是，打印结果报错了：
```py
#     print('当前是:', i)
#         ^
# IndentationError: expected an indented block
```
虽然指向了print这一行，说“预期print应该有一个缩进块”。  
但实际情况是，希望if语句后边的代码块中应该有代码，不能为空。

那我们真的不想在i等于3的时候，if代码块里写多余的print之类的任何代码时咋办呢？  
这时候`pass`就派上用场了！
```py
for i in range(5):
  if i == 3:
    pass # 直接用pass跳过这里就行了。
  print('当前是:', i)
else:
  print('for循环的else')
```
综上，这就是pass的用途。

## 思考题
### 1、猜数小游戏
- 先定一个变量值，然后让用户输入，猜你的值是多少。  
- 如果猜大了，就告知大了重新填写。  
- 反之如果猜小了，就告知小了重新填写。  
- 如果猜对了就结束游戏。
```py
# 示例答案见源码同名的python文件中～仅供参考。
```
### 2、猜数小游戏 - 升级版
在游戏1的基础上，设定用户可猜词的次数。猜错一次提示他少一次。  
在有限的次数中如果都没猜对，最后游戏失败。如果次数内猜对了，就游戏成功。

### 3、猜数小游戏 - 高级版
在2的基础上，加入游戏的属性，可以记录多个用户的猜测总次数，然后pk、做排行榜。

### 4、猜数小游戏 - 超级版
再可以3的基础上，记录用户的猜测所用时间，同样次数、同样猜对的情况下，用时间进行pk来做排行榜（需要用到python的`time`模块）。