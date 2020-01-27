# # while True 与 break
# breakVal = 1
# while True:
#   if breakVal == 5:
#     print('if条件成立,循环被打破。')
#     break
#   else:
#     print('breakVal的值：',breakVal)
#     breakVal += 1
# else:
#   print('循环结束')
# # 人机交互
# resultVal = input('你要结束循环吗？yes/no:')
# while True:
#   if resultVal == 'Y' or resultVal == 'yes' or resultVal == 'y':
#     print('if条件成立,循环被打破。至此结束无限循环。')
#     break
#   else:
#     resultVal = input('你要结束循环吗？yes/no:')
# else:
#   print('循环结束')

# # 密码校验功能
# while True:
#     passwordVal = input('请输入正确的密码：');
#     if passwordVal == '123456':
#       break
#     else:
#       print('密码输入错误，请重新输入。')
# print('密码输入正确。通过啦！')

# continueVal = 1
# while continueVal <= 5:
#   if continueVal == 3:
#     print('if条件中，循环跳过')
#     continueVal += 1
#     continue
#   print('continueVal的值：',continueVal)
#   continueVal += 1
# else:
#   print('循环结束')

# # pass
# for i in range(5):
#   if i == 3:
#     pass
#     print('pass后的内容')
#   print('当前是:', i)
# else:
#   print('for循环的else')

# print('--第二段--')
# for i in range(5):
#   if i == 3:
#     print('pass后的内容')
#   print('当前是:', i)
# else:
#   print('for循环的else')
# # 不用pass就报错了
# for i in range(5):
#   if i == 3:

#   print('当前是:', i)
# else:
#   print('for循环的else')

# else
# for i in range(3):
#   print('i的值为：',i)
# else:
#   print('else中，i的值为：',i)

# elseVal = 1
# while elseVal < 3:
#   print('elseVal的值：',elseVal)
#   elseVal += 1
# else:
#   print('else中，elseVal的值：',elseVal)

# 猜数小游戏
resultNum = 30
while True:
  guessNum = int(input('请输入你猜测的结果：'))
  if resultNum == guessNum:
    print('congratulation！猜测成功！')
    break
  elif resultNum >= guessNum:
    print('猜小了～')
  else:
    print('猜大了～')