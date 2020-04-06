site = 'F:\\xingorg1Note\\docs\\backEnd\\python\\files\\'
# site2 = r'F:\xingorg1Note\docs\backEnd\python\files\'
print(site)
# 读取文件
openResult = open(site + '17-file.txt','r',encoding='utf-8') # 1、打开
readResult = openResult.read() # 2、读取
print(readResult)
openResult.close() # 3、关闭

# 写入文件
openResult2 = open(site + '17-file.txt', 'w', encoding='utf-8')
openResult2.write('杜鹃啼血猿哀鸣，\n')
openResult2.write('犹抱琵琶半遮面。')

print(openResult2)

openResult2.close() 
# 此时可以观察txt文件里的内容已经被修改

# 追加内容
openResult3 = open(site + '17-file.txt', 'a', encoding='utf-8')
openResult3.write('\n若佛说，\n')
openResult3.write('放下执着，\n')
openResult3.write('我才能不轻易附和\n')
openResult3.writelines(['左手一式太极拳，\n', '右手一剑刺身前！'])
# openResult3.write(181) # must be str, not int

openResult3.close()
print(3, openResult3)

# with
# with open(site + '17-file.txt', 'a') as openResult4:
#     openResult4.write('\n我是with写的')

# print(4, openResult4)

# 练习题
# 读取文件
openResult5 = open(site + '17-exce.txt', 'r', encoding='utf-8')
readResult5 = openResult5.readlines() # 得到形式：['小石头 100 93 83\n', '郭菊锋 89 67 9\n', 'xing.org1^ 23 48 100']
countStr = '\n总分:' # 用于 存放结果
for item in readResult5:
    personScore = item.split() # 使用split切割字符串成为更细的字符串，得到['小石头', '100', '93', '83']这种形式
    print(item.split())
    personScoreCount = 0
    countStr += '\n' + personScore[0]
    for personScoreAdd in personScore[1:]: # 从第2项（下标为1）开始遍历，绕过第一项的中文名字
        personScoreCount += int(personScoreAdd) # 字符串需要转为数字才能做运算
    print(personScoreCount)
    countStr += '：' + str(personScoreCount) # 拼接字符串，记得转换格式
print(readResult5)
print(countStr)
openResult5.close()
# 写入计算结果
openResult6 = open(site + '17-exce.txt', 'a', encoding='utf-8')
openResult6.write(countStr)
openResult6.close()