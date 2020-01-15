# result = input(520)
# result = input(True)
# result = input([1,2,3])
result = input('你爱我吗？请输入：')
print(result)
if result == '不':
  print('哼！你个大猪蹄子！')
else:
  print('me too！！！')

print(type(result))

# age = input('石头，你今年多大啦！')
# # if age > 24:
# if int(age) > 24: 
#   marryBu = input('哎呀！那你有对象了吗？打算啥时候结婚啊！')
# # elif age < 24:
# elif int(age) < 24:
#   whereWork = input('工作啦！那你年薪多少啊现在！')
# else:
#   print('哎吆，24不小了！我儿子24岁那年，他儿子都出生啦！')
# print('允许这里有个白眼！🙄️')

age = int(input('石头，你今年多大啦！'))
# if age > 24: # 注释掉错误的，改进如下
if age > 24: 
  marryBu = input('哎呀！那你有对象了吗？打算啥时候结婚啊！')
# elif age < 24: # 注释掉错误的，改进如下
elif age < 24:
  whereWork = input('工作啦！那你年薪多少啊现在！')
else:
  print('哎吆，24不小了！我儿子24岁那年，他儿子都出生啦！')
print('允许这里有个白眼！🙄️')

