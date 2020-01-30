# 类与对象

# 数字类型的类
strs = '字符串'
ints = 1
floats = 2.3

print(type(strs))
print(type(ints))
print(type(floats))

""" 小测验

狗、秋田犬、忠犬八公、list、[1,2]

类（狗类）、类（狗类一种，秋田种）、实例（狗的一种）、类（列表类）、实例(列表实例)
"""

listObject = [1,3,'列表实例里的第三个元素'] 
listObject.append('我是列表实例利用类上的append方法添加进来的元素')
print(listObject)

class MyBoyfriend:
  sex = 'male'
  def caring(self):
    print('好了，不哭了~')
  
boyfriend = MyBoyfriend()
print(type(MyBoyfriend)) # <class 'type'>
print(boyfriend) # <__main__.MyBoyfriend object at 0x109922400>
print(type(boyfriend)) # <class '__main__.MyBoyfriend'>

print(boyfriend.sex)
boyfriend.caring()

# self
class SelfMean:
  content = '类SelfMean中的属性'
  def oneFn(self):
    # print(content) # 不用self调用类属性，就会报错NameError: name 'content' is not defined
    print(self.content) # self在此指向实例化的对象"selfMean"
    self.twoFn('哈哈哈哈哈~')
  def twoFn(self, txt):
    print('实例化对象的第二个方法，打印内容：', txt)
selfMean = SelfMean()
selfMean.oneFn() # 打印类中content的值 - "类SelfMean中的属性"


# self传参时被忽略
class SelfParams:
  content = '类SelfParams中的属性'
  def twoFn(self,name,sex,age,weight):
    print(self.content)
    print(name,sex,age,weight) # 2、依次打印传递过来的位置参数的值：小石头 female 19 91
selfParams = SelfParams()
selfParams.twoFn('小石头','female',19,91) # 1、调用方法时忽略self参数，依次按位置传递name,sex,age,weight的参数

# init
# class InitTest:
#   def __init__(self):
#     a = 321
#     b = 345

#     print("初始化就会执行这段代码: ", a+b)
# initTest = InitTest()
class InitTest:
  def __init__(self):
    self.a = 321 # 为类属性设置初始值，注意self的存在。
    self.b = 345 # 同上
    print("初始化就会执行init里的代码")
    self.plusAd()

  def plusAd(self):
    print(self.a + self.b) # 使用类属性

initTest = InitTest()
# 运行后直接打印：
# 初始化就会执行这段代码:  666

# 初始化方法接收参数
class InitParams:
  def __init__(self,aP,bP):
    self.a = aP
    self.b = bP

    print('初始化执行并设置属性、把参数aP和bP的值给了属性a和b')
    self.plusAd()

  def plusAd(self):
    print(self.a + self.b)
    self.sub()

  def sub(self):
    print(self.a - self.b)

initParams1 = InitParams(12, 4) # __init__需要的参数在类调用时传递
# 打印
# 初始化执行并设置属性、把参数aP和bP的值给了属性a和b
# 16
# 8

initParams2 = InitParams(30, 5) # __init__需要的参数在类调用时传递，可以多次调用，传不同的参数，进而得到不一样的结果
# 打印
# 初始化执行并设置属性、把参数aP和bP的值给了属性a和b
# 35
# 25 

""" 一个题目
先求加法
再求减法

"""
# 面向过程
# 全局变量定义
globalA = 12
globalB = 20
globalCount = 0

# 加
def plus():
  global globalCount
  globalCount = globalA + globalB
  sub()

# 减
def sub():
  global globalCount
  globalCount = globalCount - globalA/2
  print(globalCount)

def main():
  plus()

main()

# 面向对象
class Calculator:
  def __init__(self,a,b):
    # 公共属性定义
    self.globalA = a
    self.globalB = b
    self.globalCount = 0

  # 加方法
  def plus(self):
    self.globalCount = self.globalA + self.globalB
    print(self.globalCount)

  # 减方法
  def sub(self):
    self.globalCount = self.globalCount - self.globalA/2
    print(self.globalCount)

calculator = Calculator(12,20)
calculator.plus()
calculator.sub()
