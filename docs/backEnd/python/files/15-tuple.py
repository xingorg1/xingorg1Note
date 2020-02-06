# 元祖的样子
tupleVal = ('a',1,True)
print(tupleVal) # ('a', 1, True)
print(type(tupleVal)) # <class 'tuple'>

# 用法
# print(tupleVal(0)) # TypeError: 'tuple' object is not callable
print(tupleVal[0]) # a

print(len(tupleVal)) # 3

for item in range(len(tupleVal)):
  print(item) # 三次分别打印0、1、2
  print(tupleVal[item]) # 三次分别打印'a'、1、True

for tupleItem in tupleVal:
  print(tupleItem) # 三次分别打印'a'、1、True

# 不定长参数
def tupleFn(*tupleArgs):
  print(tupleArgs)
  print(type(tupleArgs))
  # ('第一个参数', '2', '哈哈哈', '不定长参数', '愿意写几个参数就写几个')
  # <class 'tuple'>

tupleFn('第一个参数','2','哈哈哈','不定长参数','愿意写几个参数就写几个')

# return
def returnmore(a,b,c):
  return a,b,c
returnResult = returnmore(1,3,4)

print(returnResult) # (1, 3, 4)
print(type(returnResult)) # <class 'tuple'>

def returnmore1(a):
  return a
returnResult1 = returnmore1(1)

print(returnResult1) # 1
print(type(returnResult1)) # <class 'int'>

# 元祖中的运算符
plusTuple = (2-1, 3-2, 4-3)
print(plusTuple)

plusList = [2-1, 3-2, 4-3]
print(plusList)

# 元祖的嵌套与嵌套获取


# 元组是不可修改类型
程序运行过程中，元组的元素是不能被插入和删除的。
但是可以再构造一个新的元组，替换原来的。

# 元组合并
多个元组合并为一个新的元组。

# 元组遍历