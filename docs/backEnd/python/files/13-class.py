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