# python文档示例代码测试文件


print('下边是注释')
"""Container for VoxCad parameters."""

'''
这是多行注释
用三个单引号

郭公姓唐臣第一
菊境新开稚蝶西
锋天一色泊游客
赠下繁香不自持
'''
print('上边是注释')

name = '小石头:'
print(name,'2019', '12', '24')
print("平安夜，祝你一生平安。Merry Christmas！")

year = 2019
month = -12 # 可以为负数
day = -24 + 12
print('Today is',year,month,day)
# Today is 2019 -12 -12

print(20.19)
print(-12.25)
print(520.1314 + 07.11)

# 算术运算符
print(20+19)
# 39
print(2020-1993)
# 27
print(20191231*20200101)
# 407864905514331
print(2020/10)
# 202.0
print(23%45)
# 23
print(2**3)
# 8
print(11//2)
# 5

# 字符串拼接
a = '我'
b = '叫'
c = '小'
d = '石'
e = '头'

print(a+b+c+d+e) # 我叫小石头

# type
name = '俺是字符串'
value = 123
flr = 12.4
numberStr = '123'

print(type(name))
# <class 'str'>
print(type(value))
# <class 'int'>
print(type(flr))
# <class 'float'>
print(type(numberStr))
# <class 'str'>

# str()
who = '我'
age = 18
item = '岁'

print(who+str(age)+item)
# 我18岁
print(who+'18'+item)

# int
num1 = '1'
num2 = '8'
print(int(num1)+int(num2))

# int error
# print(int('1.8'))
# print(int(float('1.8')))
# print(int('非整数数字字符串'))


# float
weight = 43.2
print(float(weight))
# 43.2