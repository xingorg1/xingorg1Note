# 子类和父类
# class Father:
#   familyName = '郭' # 表示姓氏
#   nativePlace = '河北省' # 表示籍贯
    
#   def language(self): # 表示说母语的能力
#     print('说中国话')

# class Son(Father): # 子类Son继承父类Father
#   def __init__(self, name):
#     self.name = name
#   def secondLanguage(self):
#     self.language()
#     print('学说了英语')

# # 父类可以被无限个子类所继承
# class Son2(Father): # 子类Son2继承父类Father
#   def __init__(self):
#     print('这里自己想象点Son2特色的代码吧，我绞尽脑汁了~')
#   def characterFn(self):
#     self.language()
#     pass

# # 多层继承
# class Grand:
#   familyName = '郭' # 表示姓氏
# class Father(Grand):
#   fatherName = '明爸'
 
# class Son(Father):
#   def __init__(self,name):
#     self.sonName = name
#     print(self.fatherName) # 拿到父类的属性
#     print(self.familyName+self.sonName) # 拿到父类的父类 的属性

# son = Son('小明')
# # 执行后打印
# # 明爸
# # 郭小明

# # 多重继承
# class Grand1:
#   name = '大爷爷'
#   grand1 = '我是老大'
#   age = 60
# class Grand2:
#   name = '亲爷爷'
#   grand2 = '我是老二'
#   age = 59
# class Grand3:
#   name = '小爷爷'
#   grand3 = '我是老三'
#   age = 58
#   hobby = '只有小爷爷有hobby属性'
# class Father(Grand2, Grand1, Grand3):
#   name = '爸爸'
#   father = '我是爸爸'

# son = Father()
# # 说明先在直接爸爸中找属性
# print(son.name) # 爸爸
# # 以下说明实例可以拿到其他重继承类内部的属性
# print(son.father) # 我是爸爸
# print(son.grand1) # 我是老大
# print(son.grand2) # 我是老二
# print(son.grand3) # 我是老三
# # 以下说明多重继承的就近原则 - 就近取最近的爷爷的属性
# print(son.age) # 59
# # 以下说明前几重父类都没有，取第一个有该属性的父类，哪怕这个父类时最后一重继承的
# print(son.hobby) # 只有小爷爷有hobby属性

# 多层继承和多重继承结合
class GrandFather:
  name = '爷爷的爸爸-太爷爷'
  age = 102
class Grand1:
  name = '大爷爷'
class Grand2(GrandFather):
  name = '亲爷爷'
class Grand3:
  name = '小爷爷(又名二爷爷)'
  age = 62
class Father(Grand2, Grand1, Grand3):
  name = '爸爸'

son = Father() # 实例儿子
print(son.name)
print(son.age) # 102，虽然Grand2中没有，但是Grand2的多层继承GrandFather中有，所以顺序是先从多层中找，最后才考虑多重继承的Grand3中的变量


# 子类实例
# class Father:
#   familyName = '郭' # 表示姓氏
#   nativePlace = '河北省' # 表示籍贯
    
#   def language(self): # 表示说母语的能力
#     print('说中国话')

# class Son(Father): # 子类Son继承父类Father
#   def __init__(self, name):
#     self.name = name
#   def secondLanguage(self):
#     self.language()
#     print('学说了英语')

# son1 = Son('小菊')
# print(son1.name + '姓' + son1.familyName)
# print(son1.name + '籍贯是' + son1.nativePlace)

# # 实例归属判断 isinstance()
# class Father:
#   pass
# class Son(Father):
#   pass
# class Son2:
#   pass

# son1 = Son()
# print(1,isinstance(son1,Son)) # True

# print(2,isinstance(son1,Father)) # True

# print(3,isinstance(son1,object)) # True

# print(4,isinstance(son1,(Son,Father))) # True，son1属于Son的实例
# print(4,isinstance(son1,(Father,Son))) # True，son1属于Son的实例

# print(5,isinstance(son1,Son2)) # False, son1不是Son2的实例

# print(6,isinstance(Son,Father)) # False, 这俩都是类

# print(7,isinstance(Son,object)) # True

# print(8,isinstance(Father,object)) # True

# print(9,isinstance(Son,(Father,object))) # True, Son不属于Father，但他是object的实例

# 具体值与基本类型的归属判断
print(isinstance(1,int)) # True
# 判断1是否为整数类的实例

print(isinstance(1,str)) # False

print(isinstance(1,(int,str))) # True

print(isinstance(1,object)) # True
# 判断实例是否属于元组里几个类中的一个

# 子类继承父类并做自我创新
class Father:
  familyName = '郭' # 姓氏
  nativePlace = '河北省' # 籍贯
  def language(self):
    print('%s家，母语说中国话' %(self.familyName))

class Son(Father): # 子类Son继承父类Father
  def __init__(self, name, presentAddress):
    self.name = name # 子类创新自己的属性name
    self.presentAddress = presentAddress # 子类创新自己的属性presentAddress

  def secondLanguage(self, languageName): # 子类创新自己的方法secondLanguage
    self.language()
    print('%s单独学说了%s' %(self.name, languageName))
    
  def resume(self): # 子类创新自己的方法resume
    print('%s姓%s,籍贯是%s。现居住在%s' %(self.name, self.familyName,self.nativePlace, self.presentAddress))

# 子类的第一个实例
son1 = Son('小菊', '北京')
son1.secondLanguage('英语')
son1.resume()

# 子类的第二个实例
son2 = Son('小锋', '杭州')
son2.secondLanguage('韩语')
son2.resume()

# 实例既可以用子类的属性和方法，也可以调用父类的属性和方法
print(son1.familyName)
print(son1.nativePlace)

# # 二儿子，从小生下来被过继给了日本的舅舅。虽然是爸爸的儿子，但是因为在日本长大，所以母语说日语，于是我们重写了继承来自爸爸类的方法language
# class Son2(Father): # 被过继给叔叔的二儿子类Son2
#   languageTxt = '日语' # 自己的属性，属新增的创新
#   nativePlace = '北海道' # 修改的属性，属重写的创新
#   def language(self): # 修改的方法，属重写的创新
#     print('我的母语说：', self.languageTxt)
  
# son2 = Son2()
# son2.language()
# # 我的母语说： 日语

# 优雅的重写
class Father:
  familyName = '郭'
  nativePlace = '河北省'
  def language(self, languageTxt = '中国话'):
    print('%s家，母语说%s' %(self.familyName, languageTxt))

# class Son(Father): # 子类Son继承父类Father
#   # ...代码同上一段里的

class Son2(Father): # 继承父类Father，不过被过继给叔叔的二儿子类Son2
  languageTxt = '日语' # 自己的属性，属新增的创新
  nativePlace = '北海道' # 修改的属性，属重写的创新
  def language(self): # 修改的方法，属重写的创新
    Father.language(self, self.languageTxt) # 里边的代码有自己定制的内容，属于重写。
  
son2 = Son2()
son2.language()
# 我的母语说： 日语