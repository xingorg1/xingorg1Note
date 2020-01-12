number = 1
if number=='1':
  print('1')
elif number=='2':
  print('2')
elif number=='3':
  print('3')
else:
  print('heihei')

number2=6
# 条件：如果number数量小于6，打印“我不爱你了”
if number2 < 6:
    print('我不爱你了222')

print('我没有错缩进，不是if的语句块，不受条件限制，我都要打印。')
# 我没有错缩进，不是if的语句块，不受条件限制，我都要打印。

bool = False
if bool:
  print('我爱你')
else:
  print('我不爱你了')

print('我没有错缩进，不是if的语句块，不受条件限制，我都要打印。')

score = 74
if score > 99:
  print('优秀')
elif score > 85:
  print('良好')
elif score > 66:
  print('及格')
else:
  print('好意思吗？！')


goal = 94
if goal > 99:
  if goal < 105:
    print('天才')
  else:
    print('人间精品')
elif goal > 85:
  if goal > 90:
    print('优秀')
  else:
    print('良好')
  print('是个人才！')
elif goal > 66:
  print('及格')
else:
  print('好意思吗？！')