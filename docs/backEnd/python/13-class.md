# 类(class)与对象(object)
## 类(class)和实例
### 类
整数、字符串、浮点数等，不同的数据类型就属于不同的类。  
想想看当初学数据类型，我们用type验证数据类型后打印的结果

忘了就再来看看：
```py
strs = '字符串'
ints = 1
floats = 2.3

print(type(strs)) # <class 'str'>
print(type(ints)) # <class 'int'>
print(type(floats)) # <class 'float'>
```
以上，class就是类。

顾名思义class 'str'就表示是字符串类。  
同理，剩下俩个就是整数类、浮点数类...

> 类之所以为类，是因为每一个类之下都包含无数相似的不同个例。  
类，是对某个群体的统称。
比如：人类、犬类

### 实例
> 在Python的术语里，我们把类的个例就叫做实例 (instance)，可理解为“实际的例子”。  

比如上边代码中的'字符串'、1、2.3。这三个就分别是字符串类的实例、整数类的实例、浮点数类的实例。

> 类是某个群体，实例是群体中某个具体的个体。  
群体里的每个个体都有着相同/相似的特征和行为。也就是说实例之间会有相同/相似的特征和行为。

比如，字符串中的实例举几个例子：
```py
str1 = '我是字符串'
str2 = '1'
str3 = '2.3'
str4 = 'True'
```
以上四个都是字符串，因为他们都是用英文引号包裹。这就是他们的相同特征。

即使他们四个的内容值完全不一样。

而也因此，值不一样就是他们实例之间的区别、是区别于其他实例个体的特征。
### 小测试
请问：狗、秋田犬、忠犬八公、list、[1,2]  
以上这五个元素，哪个是类、哪个是实例？
```md
答案见源码同目录下files中同名py文件
```

## 对象(object)
> 佛说：万事万物，皆可为对象。

咳咳，佛说，我说的不是男女对象那个对象！
> 这里所谓Python中的对象，等于类和实例的集合：类可以看作是对象，实例也可以看作是对象。

比如列表list是个类对象，[1,2]是个实例对象，它们都是对象。

再比如说人类是个类对象，也可以说小红是个实例对象（这里小红依旧不是你的女对象！！！清醒点！！蚂蚁竞走了十年了！！！）。
## 属性和方法
区别于其他类的依据，细分可以分成两种：
1. 第一种是描述事物是怎样的，有什么特征 - 这就是所说的【属性】
2. 第二种是描述事物能做什么，有哪些行为和作用 - 也就是所说的【方法】


Python中每个类都有自己独特的属性(attribute)和方法(method)，是这个类的所有实例都共享的。换言之，每个实例都可以调用类中所有的属性和方法。  
不过各个类的属性和方法，是需要我们自行创建的。除了python中已有的数据类型其属性和方法是内置建好的。
<!-- 列表的内置属性有中括号包裹、元素用逗号隔开。而 -->
比如：列表的内置方法有append、pop等。而这些方法任何列表实例值都可以使用
```py
listObject = [1,3,'列表实例里的第三个元素']  # 一个列表实例
listObject.append('我是列表实例利用类上的append方法添加进来的元素') # 调用列表类的内置方法append
print(listObject) # [1, 3, '列表实例里的第三个元素', '我是列表实例利用类上的append方法添加进来的元素']
```

## 类的创建
上节，函数用`def`关键字定义。

本节，类的创建用`class`关键字定义。

### 伪代码
```py
class 首字母大写的类变量名:
  自定义属性名 = 属性值
  def 自定义方法名(self,参数1,可以没有参数2):
    方法函数体内容
```
具体的含义:
1. 用`class`关键字创建，class+类名+英文冒号
2. 类名首字母大写，是自定义命名，大写字母开头，不能和python关键字冲突。
3. 类的代码体要放在缩进里。
4. 属性名自定义，不能和python关键字冲突。属性值直接用等号赋值给自定义属性名即可
5. 实例方法名自定义，不能和python关键字冲突。方法（也就是函数）通过`def`关键字定义，和函数的定义语句很类似，
6. 实例方法的第一个参数必须传`self`，固定值。（下详）
7. 类中创建的属性和方法可以被其所有的实例调用
8. 实例的数目在理论上是无限的。我们可以同时“新建”多个实例【类被称为“实例工厂”的由来】

### 示例代码
```py
# 创建一个男朋友类对象
class MyBoyfriend:
  sex = 'male'
  def caring(self):
    print('好了，不哭了~')
  
boyfriend = MyBoyfriend() # 调用类对象，得到男朋友实例对象。
print(type(MyBoyfriend)) # <class 'type'>
print(boyfriend) # <__main__.MyBoyfriend object at 0x109922400> MyBoyfriend类的是一个实例对象。后面的一串字符(0x109922400)表示这个对象的内存地址。
print(type(boyfriend)) # <class '__main__.MyBoyfriend'> 表示boyfriend类属于MyBoyfriend类。
```
### 属性(attribute)
在类中赋值的变量叫做这个类的“属性”

### 方法(method)
在类中定义的函数叫做这个类的“方法”。

类中带`self`的参数的方法是实例方法，是类方法的一种形式，也是最常用的一种方法。
## 类的实例化
还是以上边创建男朋友类的代码为例，类的实例化过程就是`MyBoyfriend()`这句。
最后创建的实例对象被赋值给变量`boyfriend`。

调用类对象的过程叫作**类的实例化**，即用某个类创建一个实例对象。

实现形式/伪代码是
```py
实例变量名 = 类名() # 类名后+小括号调用
```

## 实例对象调用类属性和方法
实例化类对象后，得到一个实例对象。因为类的方法和属性，实例对象都有。所以实例对象`boyfriend`可以调用类中的属性`sex`和方法`caring`。
### 调用类的属性
```py
实例名.属性
```
### 调用类的方法
```py
实例名.方法(传参) # 参数不用考虑self
```
### 示例代码
```py
# 调用类的属性
print(boyfriend.sex) # 打印"male"

# 调用类的方法
boyfriend.caring() # 打印“好了，不哭了~”
```
值得说明的是，调用类方法时，传参不用考虑self参数的存在。
fa
## 特殊参数：self
可以看到上例，为什么实例调用方法时不用传参，在定义时那个参数self又是什么意思呢？
> 这个参数self的特殊之处：“在定义时不能丢，在调用时要忽略。”
### 1、代指实例化对象的作用
其实这个`self`有点像JS中构造函数内部的`this`。self是所有实例化对象的替身。指的是任何用这个类生成的实例化对象：
```py
# self
class SelfMean:
  content = '类SelfMean中的属性'
  def oneFn(self):
    print(self.content) # self在此指向实例化的对象"selfMean"
selfMean = SelfMean()
selfMean.oneFn() # 打印类中content的值 - "类SelfMean中的属性"
```
注意上例中，在oneFn函数内部，使用类中的属性content时，不能直接当变量使用，否则如下写法就会报错：
```py
class SelfMean:
  content = '类SelfMean中的属性'
  def oneFn(self):
    print(content) # 不用self调用类属性，就会报错NameError: name 'content' is not defined
selfMean = SelfMean()
selfMean.oneFn()
```
变量未经定义就使用，就会报这种`NameError`的问题。详见[第三章错误类型总结篇](https://xingorg1.github.io/xingorg1Note/backEnd/python/03-errorType.html#nameerror-name-xingorg1-is-not-defined)。

有人会疑问，代码中oneFn上边不是定义了content还给她赋值了吗？怎么能说未定义呢？  
函数的作用域中也说了，自己oneFn函数内部找不到的变量，会向上找父级作用域、层层向上查询乃至全局作用域的变量啊，他自己虽然没有、但是他爸爸有啊！为啥还说未定义呢？

同志啊，醒醒。这里是类啊！不是函数。类内部的变量是定义给实例化对象的属性的啊。换句话说，上述代码实例化对象转换成字典的模样长下边这样：
```py
selfMean = {
  'content': '类SelfMean中的属性',
  'oneFn': 一个函数体在这里~
}
```
所以你如果不用字典的方式(1、selfMean.content；2、selfMean['content'])调用这个属性，他是拿不出来的。

而在类内部，实例化对象还没出生，你不知道他未来的名字叫selfMean1、还是叫selfMean37。也就没有办法用selfMean.content或selfMean37['content']的方式去调用它。  
所以在这之前，需要**有一个统一的`self`，来代指未来的实例化对象，并达到提前在`类内部`使用实例化对象的属性和方法的目的**。  
使用方式就是`self.属性`、`self.方法名`(除self以外的传参)。看下例：
```py
class SelfMean:
  content = '类SelfMean中的属性'
  def oneFn(self):
    print(self.content) # 提前在类中使用了实例化对象的属性 content，等价于selfMean.content
    self.twoFn('哈哈哈哈哈~') # 提前在类中使用了实例化对象的方法 twoFn、并传参
  def twoFn(self, txt):
    print('实例化对象的第二个方法，打印内容：', txt)
selfMean = SelfMean()
selfMean.oneFn()
```
### 2、定义方法必传self
看上边的代码中，oneFn和twoFn都有`self`参数，并且都是第一个参数，这并不是巧合。

**只要在类中定义的方法，第一个参数就必须是`self`。不过调用方法时，可以忽略它，不用给self传参。**
### 3、调用方法传参时self可忽略
我们调用实例方法的时候，传参不用考虑`self`。以此往后类推就行：
```py
class SelfParams:
  content = '类SelfParams中的属性'
  def twoFn(self,name,sex,age,weight):
    print(self.content)
    print(name,sex,age,weight) # 2、依次打印传递过来的位置参数的值：小石头 female 19 91
selfParams = SelfParams()
selfParams.twoFn('小石头','female',19,91) # 1、调用方法时忽略self参数，依次按位置传递name,sex,age,weight的参数
```
## 初始化方法(构造函数)

### 1、定义初始化方法
定义初始化方法的格式是`def __init__(self)`，是由`init`关键字加左右两边的【双】下划线(__)组成。

双下划线是英文输入法下，shift + 0右边的那个键打出来的。
### 2、初始化方法的作用
#### 无需调用自执行
一、当每个实例对象创建时（即类调用时），该方法内的代码无须调用就会自动运行。无需"实例名.__init__"的方式调用
```py
# init
class InitTest:
  def __init__(self):
    a = 321
    b = 345

    print("初始化就会执行init里的代码: ", a+b)
initTest = InitTest()

# 运行后直接打印：初始化就会执行init里的代码:  666
```
可见 ，触发类对象的调用时，就直接触发了__init__方法的调用。
#### 为类属性设置初始值
一般情况下，我们都会在初始化方法内部完成类属性的创建，为类属性设置初始值，这样类中的其他方法就能直接、随时调用。

上述代码改写如下：
```py
class InitTest:
  def __init__(self):
    # 为类属性设置初始值，要写在__init__函数内部的最上方，否则会报错
    self.a = 321 # 注意self的存在。
    self.b = 345 # 同上

    # 定义完属性的初始值以后，才能在下变写__init__里边要处理的其他逻辑
    print("初始化就会执行__init__里的代码")
    self.plusAd()

  def plusAd(self):
    print(self.a + self.b) # 使用类属性

initTest = InitTest()
# 打印结果如下
# 初始化就会执行init里的代码
# 666
```

### 3、初始化方法接收其他参数
除了设置固定常量，初始化方法同样可以接收其他参数，并把这些参数赋值给类的属性并被类中其他方法使用：
```py
# 初始化方法接收参数
class InitParams:
  def __init__(self,aP,bP):
    self.a = aP
    self.b = bP

    print('初始化执行并设置属性、把参数aP和bP的值给了属性a和b')
    self.plusAd()

  def plusAd(self):
    print(self.a + self.b) # 其他方法也能用同一个属性

  def sub(self):
    print(self.a - self.b) # 其他方法也能用公用的属性

initParams1 = InitParams(12, 4) # __init__需要的参数在类调用时传递
# 打印结果：
# 初始化执行并设置属性、把参数aP和bP的值给了属性a和b
# 16
# 8

initParams2 = InitParams(30, 5) # __init__需要的参数在类调用时传递，可以多次调用，传不同的参数，进而得到不一样的结果
# 打印结果：
# 初始化执行并设置属性、把参数aP和bP的值给了属性a和b
# 35
# 25 
```
当初始化方法__init__有多个参数的时候，在实例化（类调用）的时候就要传入相应的值。

上例第一次调用，12传给了aP、4传给了bP。  
上例第二次调用，30传给了aP、5传给了bP。

这也是初始化方法的好处，传参一次可被多次调用，

## 番外 - 面向对象
### 面向过程
面向过程编程：首先分析出解决问题所需要的步骤（即“第一步做什么，第二步做什么，第三步做什么”），然后用函数实现各个步骤，再依次调用。一个示例：
```py
# 全局变量定义
globalA = 12
globalB = 20
globalCount = 0

# 加
def plus():
  global globalCount
  globalCount = globalA + globalB
  sub()

# 减
def sub():
  global globalCount
  globalCount = globalCount - globalA/2
  print(globalCount)

# 主流程
def main():
  plus()

# 启动流程
main()
```
我们根据“全局变量数据整理——主流程——加法计算——减法计算”这个过程封装了三个函数，再依次调用，按规定顺序执行程序。

### 面向对象
面向对象编程，会将程序看作是一组对象的集合。通过调用对象的属性和方法，来拼凑完成一段功能。
```py
# 面向对象
class Calculator:
  def __init__(self,a,b):
    # 公共属性定义
    self.globalA = a
    self.globalB = b
    self.globalCount = 0

  # 是加法方法，能做加法
  def plus(self):
    self.globalCount = self.globalA + self.globalB
    print(self.globalCount)

  # 是减法方法，能做减法
  def sub(self):
    self.globalCount = self.globalCount - self.globalA/2
    print(self.globalCount)

calculator = Calculator(12,20)
calculator.plus()
calculator.sub()
```
用这种思维设计代码时，考虑的不是程序具体的执行过程（即先做什么后做什么），而是考虑先创建某个类，在类中设定好属性和方法，即是什么，和能做什么。

接着，再以类为模版创建一个实例对象，用这个实例去调用类中定义好的属性和方法（plus、sub）即可。


### 面向对象的好处
1. 参数的传递会比普通函数要省事很多。(不必考虑全局变量和局部变量，因为类中的方法可以直接调用属性。）
2. 代码的可复用性也更高。（类能封装更多的东西，既能包含操作数据的方法，又能包含数据本身。）
3. 代码结构会更清晰。（代码的可读性、可拓展性和可维护性这几个方面都会优于面向过程编程。）
4. 一目了然。（面向对象编程将代码具体的数据和处理方法都封装在类中，不用完全了解过程也可以调用类中的各种方法。并且还可以分开调用）
5. 可以在 Python 中轻松地调用各种标准库、第三方库和自定义模块（别人写好的类框架代码）

<Vssue title="【Python】类和对象" />
