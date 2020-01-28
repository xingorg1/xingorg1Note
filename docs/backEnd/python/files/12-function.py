a = '这是第一个示例变量'
print(len(a)) # 9，得到字符串的长度为9
b = ['小石头','xing.org1^','郭菊锋']
print(len(b)) # 3，得到数组的长度为3

def summation(a,b):
  return a + b # return返回值、返回的是a+b的和。

result = summation(1,2) 
print(result) # 3

def summation2(a,b):
  a + b 
  # 没有return返回值

result = summation2(1,2) 
print(result) # None
print(type(result)) # <class 'NoneType'>

def haha():
  print('只打印一句话，不用参数。')

haha()

def you(name,age,sex):
  print('your name is:', name)
  print('your age is:', age)
  print('your sex is:', sex)

you('小石头','19','female')
you('female','小石头','19')


def newYou(name,age,sex='female'):
  print("your's name:", name)
  print("your's age:", age)
  print("your's sex:", sex)

newYou('小石头','10')
newYou('大石头','29', 'male')

# 不定长参
def noLen(*variables):
    return variables

noLenResult = noLen('参数1','参数2','参数3')
#括号里的这几个值都会传递给参数variables

print(noLenResult) # ('参数1', '参数2', '参数3')
print(type(noLenResult)) # <class 'tuple'>

def noLenDefault(*variables, defaultVar = 123):
  print(variables)
  print(defaultVar)
  return variables
noLenDefault('a',15,6)

# 返回多个值
def returnmore(a,b,c):
  return a,b,c
returnResult = returnmore(1,3,4)
print(returnResult)

# oneReturn
def oneReturn():
  return 1
  print('这句不会执行')
  return 2

oneResult = oneReturn()
print(oneResult) # 1

# 局部变量 与全局变量
quanjuVar = '我是全局变量'
def jubuFn1():
  jubuVar1 = '我是局部变量1'
  print(quanjuVar,jubuVar1) # 我是全局变量 我是局部变量1

def jubuFn2():
  jubuVar2 = '我是局部变量2'
  print(quanjuVar,jubuVar2) # 我是全局变量 我是局部变量2
  # print(jubuVar1) # 这段代码放开就会报错：NameError: name 'jubuVar1' is not defined

jubuFn1()
jubuFn2()

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

# 函数调用嵌套
def one(a):
  return a

def two(a,b):
  return one(a) + b

andResult = two(1,2)
print(andResult) # 3
# 仿写len函数
def myLen(str):
  num = 0
  for i in str:
    num += 1
  return num

test = '这是一个测试字符串'
print(myLen(test))
print(len(test))
