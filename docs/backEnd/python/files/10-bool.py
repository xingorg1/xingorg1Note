print(3>1) # True

print(3<1) # False

print(3 == '3') # False

# 假值
if False:
  print('False值为假，这句话不会被执行。')
if 0:
  print('整数0为假，这句话不会被执行。')
if None:
  print('空值None为假，这句话不会被执行。')
if '':
  print('空串为假，这句话不会被执行。')
if []:
  print('空列表为假，这句话不会被执行。')
if {}:
  print('空字典为假，这句话不会被执行。')

# 特殊真值
if 'False':
  print('字符串"False"值为真，这句话会被执行。')
if '0':
  print('字符串"0"值为真，这句话会被执行。')
if -1:
  print('非0数字皆为真，这句话会被执行')  
if 'None':
  print('字符串"None"为真，这句话会被执行。')
if ' ':
  print('空格字符串，不是空串！特别注意。空格字符串是真，这句话会被执行。')
# 可见，只要字符串不为空串，都为真。
if [0]:
  print('列表不为空，条件为真，这句话会被执行。')
if {'boolVal': False}:
  print('字典不为空，条件为真，这句话会被执行。')

# type
print(type(True))

print(type(False))

# 以下皆打印False
print(1, bool(False))
print(2, bool(0))
print(3, bool(''))
print(4, bool(None))
print(5, bool([]))
print(6, bool({}))

# 以下皆打印True
print(1, bool('False'))
print(2, bool('0'))
print(3, bool(' '))
print(4, bool('None'))
print(5, bool([0]))
print(6, bool({'boolVal': False}))
print(7, bool('字符串除了空串都为真'))
print(8, bool(-1))
print(9, bool(1.3))
print(10, bool([False]))

# and
if 1 and 2:
  print('真真返回结果：',1 and 2) # 真真才为真 - 2
if 2 and None:
  print('不成立')
else:
  print('真假返回结果：',2 and None) # 有假不算他 - None
if 0 and False:
  print('条件不成立，这里不打印')
else:
  print('假假返回结果：',0 and False) # 有假不算他 - 0

a = 1
b = 2
c = 3
d = 4
if a > b and c < d:
  print('条件不成立')
else:
  print('真假表达式返回结果：', a > b and c < d) # False

# or
# 有真即为真 案例：
if 1 or 2:
  print('真真返回结果：',1 or 2)  # 真真返回结果： 1(返回第一个遇到的真值)

if 2 or None:
  print('真假返回结果：',2 or None) # 真假返回结果： 2(返回第一个遇到的真值)

if None or 3:
  print('真假返回结果：',None or 3) # 真假返回结果： 3(返回第一个遇到的真值)


# 假假才算假 案例：
if 0 or False:
  print('条件不成立，这里不打印')
else:
  print('假假返回结果：',0 or False) # 假假返回结果： False(返回最后的那个假值)

# not
print(not True) # False
print(not False) # True

# in
print('===in===')
myName = ['小石头', 'xing.org1^', 181, True]
dictName = {
  'name': '小石头',
  'age': 19,
  'hobby': {
    'it': ['css','js','python'],
    'daily': [['music','tv'],['apple','pear']],
    'sports': 'sleep'
  },
  'married': True
}

print('小石头' in myName) # True
print('gjf' in myName) # False

print('小石头' not in myName) # False
print('gjf' not in myName) # True
print('==dict==')
print('hobby' in dictName) # True
print('sex' in dictName) # False
print('hobby' not in dictName) # False
print('sex' not in dictName) # True

# 思考题 - 打印3遍我真棒
a = 1
while a < 4:
  print('++实现，我真棒')
  a += 1

b = 3
while b:
  print('--实现，我真棒')
  b -= 1
