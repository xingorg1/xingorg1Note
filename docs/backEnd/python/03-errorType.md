
# 错误类型与可能原因分析
## A、语法错误：
### 1、```syntaxError:invalid syntax```   
无效的语法
```py
print(2019小石头)
#     print(2019小石头)
#                 ^
# SyntaxError: invalid syntax
```
### 2、```syntaxError:invalid character in identifier```  
标识符中有无效的字符
  
```py
print(‘我左边的引号是中文的符号')
#     print(‘我左边的引号是中文的符号')
#                       ^
# SyntaxError: invalid character in identifier
```
**出错场景：**
这通常是因为在python中用了中文符号造成的。

在Python中，默认所有正确的语法，包括标点符号都是【英文】。不小心用了中文标点的话，计算机会无法识别，然后报错。

下边也是这种情况

### 3、```SyntaxError: EOL while scanning string literal```
扫描字符串文字终止
```py
print('我右边的引号是中文的符号‘)

# print('我右边的引号是中文的符号‘)
#                          ^
# SyntaxError: EOL while scanning string literal
```

## B、类型错误(数据类型不同导致): 
### ```TypeError: unsupported operand type(s) for ...```

**出错场景：**
不同类型的数据进行结合计算或处理，就会发生错误。
```py
a = 1
b = '1'
print(a + b)
# Traceback (most recent call last):
#   print(a + b)
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Python是强类型语言，不同类型的数据之间需要进行类型转换才能一起“共事”。

比如，```1+'1'```这么写，在js中肯定没问题，因为会进行类型转换，把数字1变成字符串1，然后就变成了字符串拼接，最后的到11。

但是python不会进行隐式类型转换，他发现你用数字1+字符串1，就会报类型错误，也就是syntaxError:invalid syntax，告诉你这么写是无效的。

改正：
```py
a = 1
b = '1'
# print(a + b) 
# # 这么写报错。改正如下：
print(a + int(b)) 
# 2，将字符串转换为int类型，进行加法运算
print(str(a) + b) 
# 11，将整数转为字符串类型，进行字符串拼接。
```


## C、名称错误(变量未声明就使用): 
### ```NameError: name 'xingorg1' is not defined```

**出错场景：**
直接使用一个没有声明的变量，当在本作用域和全局作用域中找不到时，就会发生错误。
```py
print(xingorg1)
#     print(xingorg1)
# NameError: name 'xingorg1' is not defined
```

