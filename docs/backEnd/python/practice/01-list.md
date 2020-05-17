# 列表各项练习
```py
# 有以下列表：
list1 = [91, 95, 97, 99]
list2 = [92, 93, 96, 98]
```
## append合并两个列表
将两个列表合并为一个列表，使用`append`
```py
list3 = list1 # 把结果赋值给一个新列表，用来存合并的结果。
list3.extend(list2)
print(list3)
# [91, 95, 97, 99, 92, 93, 96, 98]
```
## sort列表排序
从低到高的顺序排序，使用`sort`
```py
list3.sort()
print(list3)
# [91, 92, 93, 95, 96, 97, 98, 99]
```
## 求列表中的平均数
### 方法一：通过len做除法
```py
scores1 =  [91, 95, 97, 99, 92, 93, 96, 98]
sum = 0

for score in scores1:
    sum = sum + score
    average = sum/len(scores1) # 通过len方法获取数组长度
print('平均成绩是：{}'.format(average))
# 平均成绩是：95.125
```
### 方法二：通过`numpy`库
```py
import numpy as np  # 导入 numpy库，下面出现的 np 即 numpy库

scores1 =  [91, 95, 97, 99, 92, 93, 96, 98]
average = np.mean(scores1)  # 一行解决。
print('平均成绩是：{}'.format(average))
```
## 判断比较，取出符合条件的数
### 方法一：通过遍历
```py
scores1 =  [91, 95, 97, 99, 92, 93, 96, 98]
scores2 = []

for score in scores1:
    if score < average:
        scores2.append(score) # 少于平均分的成绩放到新建的空列表中
print(' 低于平均成绩的有：{}'.format(scores2)) # format()函数: “格式化字符串”的方法
```

### 方法二：通过numpy库
```py
import numpy as np  # 导入 numpy库，下面出现的 np 即 numpy库

scores1 =  [91, 95, 97, 99, 92, 93, 96, 98]

average = np.mean(scores1)  # 一行得到平均数
scores3 = np.array(scores1) # 一种NumPy数组的操作
print(' 低于平均成绩的有：{}'.format(scores3[scores3<average]))
```
