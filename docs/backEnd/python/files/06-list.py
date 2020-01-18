myName = ['小石头', 'xing.org1^', 181, True]

print(myName[4]) # 偏移量超出——IndexError: list index out of range 

# 切片提取元素
# print(myName[:])
# print(myName[2:])
# print(myName[:2])
# print(myName[1:3])

# 删除片段
# del(myName[:2])
# del(myName[2:])
# del(myName[1:3])
# del(myName[:])
# print(myName)

# 删除整个
del(myName)
print(myName)