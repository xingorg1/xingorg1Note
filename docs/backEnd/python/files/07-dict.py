"""
列表变量名 = {
  '字符串键名key1': 对应key1的值value1, 
  '字符串键名key2': 对应key2的值value2, 
  ...(更多key、value对儿)
}
"""

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

print(dictName) # {'name': '小石头', 'age': 19, 'hobby': {'it': ['css', 'js', 'python'], 'daily': ['music', 'tv'], 'sports': 'sleep'}, 'married': True}

# 长度
print(len(dictName)) # 4

# 提取元素
item = dictName['name']
print(item) # 小石头

# 提取嵌套列表中的数据
listdemo = [['music','tv'],['apple','pear']]
print(listdemo[1][1]) # pear

# 提取嵌套字典中的数据
print(dictName['hobby']['sports']) # sleep

# 提取列表与字典互相嵌套的数据
print(dictName['hobby']['daily'][0][0]) # music
# 增加
dictName['homeland'] = 'china'
print(dictName) # {'name': '小石头', 'age': 19, 'hobby': {'it': ['css', 'js', 'python'], 'daily': ['music', 'tv'], 'sports': 'sleep'}, 'married': True, 'homeland': 'china'}

# 删除
del(dictName['married'])
print(dictName) # {'name': '小石头', 'age': 19, 'hobby': {'it': ['css', 'js', 'python'], 'daily': ['music', 'tv'], 'sports': 'sleep'}, 'homeland': 'china'}


# errorDict = {
#   name: 'xing.org1^'
# }

# print(errorDict) # 因为没有给键名“name”添加引号，所以当变量名读取了。因为作用域内找不到name变量，故报错`NameError: name 'name' is not defined`

# 键名重复问题
keyNameOnly = {
  'age': 29,
  'age': 19,
  'name': '小石头'
}
print(keyNameOnly) 
# {'age': 19, 'name': '小石头'}

# 值重复问题
valueNameRepeat = {
  'name': '小石头',
  'like': '小石头',
  'realTalk': True
}
print(valueNameRepeat)
# {'name': '小石头', 'like': '小石头', 'realTalk': True}

# 与list比较异同
students1 = ['小明','小红','小刚']
students2 = ['小明','小红','小刚']
print(students1 == students2) # True 必须元素顺序、个数、内容皆一致则相同

students3 = ['小明','小红','小刚']
students4 = ['小明','小刚','小红']
print(students3 == students4) # False 改变了一下顺序就不相等了


scores1 = {'小明':95,'小红':90,'小刚':100}
scores2 = {'小刚':100,'小明':95,'小红':90}
print(scores1 == scores2) # True 只要两个字典中，键名及其分别对应的值都一一相等，则整个字典相等。

scores3 = {'小明':95,'小红':90,'小刚':100}
scores4 = {'小明':9,'小红':90,'小刚':100}
print(scores3 == scores4) # False 这样，即使键名一一对应，键名所对应的值不同，最终结果不相等。

