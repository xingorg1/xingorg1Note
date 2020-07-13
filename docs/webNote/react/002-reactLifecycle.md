# 生命周期

<a name="3Cteh"></a>
# **16版本以前的：**
<a name="vix42"></a>
## 生命周期流程图
<a name="7LMPJ"></a>
### 组件从生成到被挂在到页面上的一系列过程
![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594644849526-784def5f-8db1-441a-812f-711a040363ea.png#align=left&display=inline&height=1436&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1436&originWidth=1478&size=209925&status=done&style=none&width=1478)<br /> 
<a name="LR0U7"></a>
### 根据流程图打印的执行顺序图：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594644851101-6b29710b-f2a0-45f0-abab-82c961013d01.png#align=left&display=inline&height=1600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1600&originWidth=1884&size=890297&status=done&style=none&width=1884)<br /> 
<a name="IMfoc"></a>
## 流程讲解：
<a name="46Ycf"></a>
### 初始化流程
| start | 开始创建组件 | 在这个周期中做的事情 |
| --- | --- | --- |
| 检查 | 检查组件中是否有默认的属性、是否有属性校验 |   |
| constructor | 开始执行constructor构造函数<br />（👩‍🏫讲解：constructor是生命周期的一部分。react.component就是一个抽象类，官方文档就是这么定义的。） | 构造类。在这里可以写一些状态<br />可以进行ajax数据请求 |
| componentWillMount | 执行componentWillMount生命周期函数。此时组件即将挂载到页面上。<br />（类似vue的beforeMounte）<br />会有关于componentWillMount更名的信息提示<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594646241614-7dccf9fa-ed0e-4ea0-a837-7047c4babde0.png#align=left&display=inline&height=358&margin=%5Bobject%20Object%5D&name=image.png&originHeight=358&originWidth=1354&size=129711&status=done&style=none&width=1354) | 可以进行ajax请求<br />**（但是react官方不建议。因为可能后期会使用react Native时会与之发生冲突。而且官方特强硬的把这个周期函数给移除了。16.3版本以后移除了）**<br />也可以setState一下 |
| render | 执行render函数渲染页面。 | 没必要进行ajax请求<br />**不能调用setState，否则会死循环。因为setState会触发shouldComponentUpdate，触发后如果返回true，又会走到render里。所以，render里只做数据渲染、展示就行，别进行setState**<br />  |
| componentDidMount | 执行componentDidMount生命周期函数。此时组件已经被挂载到页面中。<br />（类似vue的mounted） | 可以发送ajax、设置状态（setState）的**最好的地方** |

 
<a name="sDjo9"></a>
### 组件运行流程
<a name="YysAo"></a>
#### state值被改变
| state被更改 | 组间运行中，state被更改 |   |
| --- | --- | --- |
| 进行提问<br />是否继续？ | 触发**shouldComponentUpdate**函数。提问组件是否要进行更新。<br />该函数接收两个参数：nextProps、nextStates<br />该函数需要返回布尔值来**回答**是否更新：<br />return false不更改 - 流程回到state被更改前。<br />return true进行更改 - state更改，流程继续。 | 可以在参数里边知道将要更新的值<br />**可以比较值，发现需要更改的值与更改前后一致时，返回false，不触发更新。**<br />因为react没有vue那么智能，不知道要更改的内容是否真的发生了改变。**只要setState就会触发更新、只要触发了更新就会走剩下的流程。还会去对比虚拟dom、耗费性能 。其内部的子组件的生命周期也会触发一遍。**<br />shouldComponentUpdate(nextProps,nextStates){<br />return nextStates.count !== this.state.count<br />} |
|   | 【回答】：是 |   |
| componentWillUpdate | 执行conponentWillUpdate生命周期函数。告知组件即将开始进行更新。 | 千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。<br />没必要做ajax请求，即使做了也不能重新setState<br />基本上没什么用 |
| render | 组间更新完毕，执行render函数重新渲染页面。 | （同上边的render。） |
| componentDidUpdate | 执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。 | 千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。<br />没必要做ajax请求，即使做了也不能重新setState<br />基本上没什么用 |
|   | 【往复】：回到组件运行状态（等待） |   |

 
<a name="RIQVn"></a>
#### props改变，重新render
props属性是从父组件传过来的。当父组件改变了传递给子组件的数据时，子组件内部就会触发该函数。<br />以下流程发生在子组件内部：子组件内部

| componentWillReceiveProps | 执行componentWillReciveProps生命周期函数。告知父组件改变了props的值。<br />接受参数：nextProps<br /> <br />初始化不执行，只有当props改变时才会执行 | 可以进行状态的设置：<br />因为其可以接受一个参数nextProps，然后把参数的属性值setState到this.state身上<br />可以发送ajax请求：<br />同上<br />**但是官方不建议这么做，认为是不合理的。所以在16.3以后的版本中移除了，该函数不能使用了。** |
| --- | --- | --- |
|   | 【循环】：重走state值被更改的流程如下： |   |
| 进行提问<br />是否继续？ | 触发shouldComponentUpdate函数。提问组件是否要进行更新。<br />该函数接收两个参数：nextProps、nextStates<br />该函数需要返回布尔值来**回答**是否更新：<br />return false不更改 - 流程回到state被更改前。<br />return true进行更改 - state更改，流程继续。 |   |
|   | 【回答】：是 |   |
| componentWillUpdate | 执行conponentWillUpdate生命周期函数。告知组件即将开始进行更新。 | **在16.3以后的版本中移除了** |
| render | 组间更新完毕，执行render函数重新渲染页面。 |   |
| componentDidUpdate | 执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。 |   |
|   | 【往复】：回到组件运行状态（等待） |   |

 
<a name="b6EfU"></a>
#### 组件被移除、销毁
| componentWillUnmount | 执行componentWillUnmount生命周期函数。告知即将销毁组件。 | 销毁组件前，可以先告知用户之类的。 |
| --- | --- | --- |
|   | 【销毁】：组件销毁完毕。 |   |

 
<a name="92kVM"></a>
## 代码演示：
见github (https://github.com/xingorg1/JuFengGuo/tree/master/advanceCourse/react/3-react_lifecycle/src/components/before_16.3)<br /> 
<a name="HYr1J"></a>
## 生命周期钩子函数的功能：
每个生命周期都可以用来干什么？详见上述表格中各对应列<br /> 

# **16.3版本以后的：**
 <br />**基本把‘xxWillxxx’等，带“Will”的钩子函数都删掉了**<br /> 
<a name="7EQbU"></a>
## 生命周期流程图
<a name="4aB8L"></a>
### 组件从生成到被挂在到页面上的一系列过程。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594644849550-92532930-2374-49a4-95e7-a5d6e31ae278.png#align=left&display=inline&height=1646&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1646&originWidth=1218&size=160782&status=done&style=none&width=1218)
<a name="jdLRr"></a>
### 根据流程图打印的执行顺序图：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594644851155-8e5f53ae-0f53-4d30-9952-60d49126710a.png#align=left&display=inline&height=1832&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1832&originWidth=1770&size=961433&status=done&style=none&width=1770)<br /> 
<a name="wE8Tc"></a>
## 流程讲解：
<a name="PdxtH"></a>
### 初始化流程
| start | 开始创建组件 | 在这个周期中做的事情 |
| --- | --- | --- |
| 检查 | 检查组件中是否有默认的属性、是否有属性校验 |   |
| constructor | 开始执行constructor构造函数<br />（👩‍🏫讲解：constructor是生命周期的一部分。react.component就是一个抽象类，官方文档就是这么定义的。） | 构造类。在这里可以写一些状态<br />可以进行ajax数据请求（[要不要在constructor里获取数据](https://segmentfault.com/q/1010000008133309)） |
| static getDerivedStateFromProps(props,state) | 执行一个静态的方法。从属性中去获得状态**。**<br />**初始化就会执行**<br />**这样，更改state和更改props，就不会走两套路线了，而是都走这一个。**<br />**必须返回一个state的对象。否则报错如下**<br />Warning: Father.getDerivedStateFromProps(): A valid state object   (or null) must be returned. You have returned undefined.<br />**return的返回值，就会放到组件的state状态中**<br /> <br />参数：props、state，就是当前组件的属性状态值和属性值 |   |
| render | 执行render函数渲染页面。 | 没必要进行ajax请求<br />**不能调用setState，否则会死循环。因为setState会触发shouldComponentUpdate，触发后如果返回true，又会走到render里。所以，render里只做数据渲染、展示就行，别进行setState**<br />  |
| componentDidMount | 执行componentDidMount生命周期函数。此时组件已经被挂载到页面中。<br />（类似vue的mounted） | 可以发送ajax、设置状态（setState）的**最好的地方** |

 
<a name="p9C9q"></a>
### 组件运行流程
<a name="3LaLJ"></a>
#### state 或 props其中任意一个被改变后
| static getDerivedStateFromProps(props,state) | state或props更改，都会执行这个静态的方法。从属性中去获得状态**。**<br />**这样，更改state和更改props，就不会走两套路线了，而是都走这一个。**<br />**必须返回一个state的对象。否则报错如下**<br />Warning: Father.getDerivedStateFromProps(): A valid state object   (or null) must be returned. You have returned undefined. |   |
| --- | --- | --- |
| 进行提问<br />是否继续？ | 触发shouldComponentUpdate函数。提问组件是否要进行更新。<br />该函数接收两个参数：nextProps、nextStates<br />该函数需要返回布尔值来**回答**是否更新：<br />return false不更改 - 流程回到state被更改前。<br />return true进行更改 - state更改，流程继续。 | 可以在参数里边知道将要更新的值<br />**可以比较值，发现需要更改的值与更改前后一致时，返回false，不触发更新。**<br />因为react没有vue那么智能，不知道要更改的内容是否真的发生了改变。**只要setState就会触发更新、只要触发了更新就会走剩下的流程。还会去对比虚拟dom、耗费性能 。其内部的子组件的生命周期也会触发一遍。**<br />shouldComponentUpdate(nextProps,nextStates){<br />return nextStates.count !== this.state.count<br />} |
|   | 【回答】：是 |   |
| render | 组件更新完毕，执行render函数重新渲染页面。 | （同上边的render。） |
| getSnapshotBeforeUpdate(prevProps,prevState) | 执行这个函数，获取之前状态的一个快照。<br />**需要有返回值。其返回值供下边的钩子函数componentDidUpdate中接受并使用。**<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594646205248-df5829a2-36b1-4e06-891e-6287328f9c64.png#align=left&display=inline&height=388&margin=%5Bobject%20Object%5D&name=image.png&originHeight=388&originWidth=932&size=90581&status=done&style=none&width=932)<br />**所以该函数必须和componentDidUpdate函数写在一起。** |   |
| componentDidUpdate | 执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。<br />**可支持接受三个参数。分别是prevProps、prevState、snapShot**<br />**其中，snapShot是getSnapshotBeforeUpdate的返回值**<br />**![image.png](https://cdn.nlark.com/yuque/0/2020/png/269022/1594646184087-766b698c-c5aa-4fb1-a460-d72dd20d7e7a.png#align=left&display=inline&height=176&margin=%5Bobject%20Object%5D&name=image.png&originHeight=176&originWidth=2068&size=89811&status=done&style=none&width=2068) | 千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。<br />没必要做ajax请求，即使做了也不能重新setState<br />基本上没什么用 |
|   | 【往复】：回到组件运行状态（等待） |   |



<a name="Eyoir"></a>
#### 组件被移除、销毁
| componentWillUnmount | 执行componentWillUnmount生命周期函数。告知即将销毁组件。 |   |
| --- | --- | --- |
|   | 【销毁】：组件销毁完毕。 |   |

 
<a name="semyH"></a>
## 代码演示：
见github (https://github.com/xingorg1/JuFengGuo/tree/master/advanceCourse/react/3-react_lifecycle/src/components/after_16.3)<br /> 
<a name="JCM70"></a>
## 生命周期钩子函数的功能：
每个生命周期都可以用来干什么？详见上述表格中各对应列
