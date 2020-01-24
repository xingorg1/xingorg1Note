# # 伪代码
# while 条件语句:
#   条件成立执行的代码块
# else:
#   循环完毕执行的代码块

whileVal = 1
while whileVal <= 3:
  print('while子句：', whileVal)
  whileVal += 1
else:
  print('while执行完毕，跳出循环后执行了我', whileVal)

for forVal in range(1, 4):
  print('for子句：', forVal)
else:
  print('for执行完毕，跳出循环后执行了我', forVal)

# while True:
#   print('我停不下来了～')

continueVal = 1
while continueVal <= 5:
  continueVal += 1
  if continueVal == 3:
    print('if条件中')
    continue
  else:
    print('continueVal的值：',continueVal)
else:
  print('循环结束')

breakVal = 1
while breakVal <= 5:
  breakVal += 1
  if breakVal == 3:
    print('if条件中')
    break
  else:
    print('breakVal的值：',breakVal)
else:
  print('循环结束')

myAge = input('请猜一下我的年龄：')
while myAge != '20':
  print('不对！')
  myAge = input('请再猜一下我的年龄：')
else: 
  print('猜对啦！恭喜你！')