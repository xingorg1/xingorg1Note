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
