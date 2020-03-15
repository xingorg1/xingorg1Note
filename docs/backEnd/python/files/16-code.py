print('一天打鱼两个月晒网的小石头'.encode('utf-8'))
print('====')
print('I Love U'.encode('gbk'))

print('小石头'.encode('utf-8'))
# b'\xe5\xb0\x8f\xe7\x9f\xb3\xe5\xa4\xb4'

print(type(b'\xe5\xb0\x8f\xe7\x9f\xb3\xe5\xa4\xb4'))
# <class 'bytes'>

# print(b'\xe5\xb0\x8f\xe7\x9f\xb3\xe5\xa4\xb4'.decode('GBK'))
# UnicodeDecodeError: 'gbk' codec can't decode byte 0xb4 in position 8: incomplete multibyte sequence

print(b'\xe5\xb0\x8f\xe7\x9f\xb3\xe5\xa4\xb4'.decode('UTF-8'))
# 小石头
