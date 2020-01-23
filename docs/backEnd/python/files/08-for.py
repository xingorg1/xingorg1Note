nameList = ['小石头', 'xing.org1^', '郭菊锋']
for name in nameList:
  print(name) # 3次循环依次打印出'小石头', 'xing.org1^', '郭菊锋'
else:
  print('else情况') # else每次都会经过，当for循环执行完毕后执行else的代码块

print('===for循环完毕===')
print(name) # 郭菊锋

dictName = {'name': '小石头', 'nameEn': 'xing.org1^'}
for name in dictName:
  print(name) # 2次循环依次打印出'name', 'nameEn'
  print(dictName[name]) # 2次循环依次打印出'小石头', 'xing.org1^'


strName = 'xing.org1^'
for s in strName:
  print(s) # 3次循环依次打印出'小石头', 'xing.org1^', '郭菊锋'

# numberValue = 2020
# for num in numberValue: # TypeError: 'int' object is not iterable
#   print(num)


# floatValue = 1.23
# for num in floatValue: # TypeError: 'float' object is not iterable
#   print(num)

# boolVal = True
# for b in boolVal: # TypeError: 'bool' object is not iterable
#   print(b)

# noneVal = None
# for n in noneVal: # TypeError: 'NoneType' object is not iterable
#   print(n)

# nameList = ['小石头', 'xing.org1^', '郭菊锋']
# for name,index in nameList: # ValueError: too many values to unpack (expected 2)
#   print(index) 

# nameList = ['小石头', 'xing.org1^', '郭菊锋']
# for index in range(nameList): # range内部只能接受整数。而列表转化不成整数，出点类型错误。TypeError: 'list' object cannot be interpreted as an integer
#   print(index) 

numValue = 5
for index in range(numValue):
  print('5的迭代：', index)

# 5的迭代： 0
# 5的迭代： 1
# 5的迭代： 2
# 5的迭代： 3
# 5的迭代： 4

rangeValue1 = 5
for index in range(1, rangeValue1):
  print('range：', index)
# range： 1
# range： 2
# range： 3
# range： 4


for index in range(0,10,3):
    print('interval:', index)

rangeValue2 = 5 + 1
for index in range(rangeValue2):
  print('''
    病毒消失，病人痊愈。武汉加油，天佑中华！
  ''')
nameList = ['小石头', 'xing.org1^', '郭菊锋']
for index in range(len(nameList)): # 先用len获取列表的长度，然后将计算的长度这个数字，放到range内部。
  print(index) 

for i in range(5):
  if(i == 3):
    continue
  else:
    print('continue跳过循环', i)
else:
  print('有continue的for循环的else')

for i in range(5):
  if(i == 3):
    break 
  else:
    print('break跳过循环', i)
else:
  print('有break的for循环的else')

# for i in range(5):
#   if(i == 3):
#     return # SyntaxError: 'return' outside function