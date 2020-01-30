
# python文档示例代码测试文件

# SyntaxError: 语法错误
# print(‘我左边的引号是中文的符号')
# print('我右边的引号是中文的符号‘)
# print(2019小石头)

# TypeError 类型错误
# a = 1
# b = '1'
# # print(a + b)
# print(a + int(b)) 
# # 2
# print(str(a) + b) 
# # 11

# numberValue = 2020
# for num in numberValue:
#   print(num)

# floatValue = 1.23
# for num in floatValue:
#   print(num)

# boolVal = True
# for b in boolVal:
#   print(b)

# noneVal = None
# for n in noneVal:
#   print(n)

# nameList = ['小石头', 'xing.org1^', '郭菊锋']
# # for index in range(nameList):
# for index in range(len(nameList)): # 0、1、2
#   print(index) 

# nameError 变量名错误
# print(xingorg1)

# ValueError 值异常
# print(int('1.8'))
# print(int('非整数数字字符串'))

# nameList = ['小石头', 'xing.org1^', '郭菊锋']
# for name,index in nameList: 
#   print(index) 

# IndexError 索引错误
# xingorg1 = ['小石头', 'xing.org1^', 181, True]
# print(xingorg1[4]) # 偏移量超出——IndexError: list index out of range 


# 作用域错误 - 局部变量在定义前使用
def UnboundLocalErrorTest():
  print(textVar)
  # textVar = 1

UnboundLocalErrorTest()

print(globalNameErrorVar) # 不同于这种未定义错误。
globalNameErrorVar = 12

