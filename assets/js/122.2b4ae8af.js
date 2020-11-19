(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{449:function(t,e,r){"use strict";r.r(e);var a=r(1),v=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("¶")]),t._v(" 生命周期")]),t._v(" "),r("p",[r("a",{attrs:{name:"3Cteh"}})]),t._v(" "),r("h1",{attrs:{id:"_16版本以前的："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16版本以前的："}},[t._v("¶")]),t._v(" "),r("strong",[t._v("16版本以前的：")])]),t._v(" "),r("p",[r("a",{attrs:{name:"vix42"}})]),t._v(" "),r("h2",{attrs:{id:"生命周期流程图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期流程图"}},[t._v("¶")]),t._v(" 生命周期流程图")]),t._v(" "),r("p",[r("a",{attrs:{name:"7LMPJ"}})]),t._v(" "),r("h3",{attrs:{id:"组件从生成到被挂在到页面上的一系列过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件从生成到被挂在到页面上的一系列过程"}},[t._v("¶")]),t._v(" 组件从生成到被挂在到页面上的一系列过程")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594644849526-784def5f-8db1-441a-812f-711a040363ea.png#align=left&display=inline&height=1436&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1436&originWidth=1478&size=209925&status=done&style=none&width=1478",alt:"image.png"}}),r("br"),t._v(" "),r("a",{attrs:{name:"LR0U7"}})]),t._v(" "),r("h3",{attrs:{id:"根据流程图打印的执行顺序图："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根据流程图打印的执行顺序图："}},[t._v("¶")]),t._v(" 根据流程图打印的执行顺序图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594644851101-6b29710b-f2a0-45f0-abab-82c961013d01.png#align=left&display=inline&height=1600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1600&originWidth=1884&size=890297&status=done&style=none&width=1884",alt:"image.png"}}),r("br"),t._v(" "),r("a",{attrs:{name:"IMfoc"}})]),t._v(" "),r("h2",{attrs:{id:"流程讲解："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程讲解："}},[t._v("¶")]),t._v(" 流程讲解：")]),t._v(" "),r("p",[r("a",{attrs:{name:"46Ycf"}})]),t._v(" "),r("h3",{attrs:{id:"初始化流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化流程"}},[t._v("¶")]),t._v(" 初始化流程")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("start")]),t._v(" "),r("th",[t._v("开始创建组件")]),t._v(" "),r("th",[t._v("在这个周期中做的事情")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("检查")]),t._v(" "),r("td",[t._v("检查组件中是否有默认的属性、是否有属性校验")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("constructor")]),t._v(" "),r("td",[t._v("开始执行constructor构造函数"),r("br"),t._v("（👩‍🏫讲解：constructor是生命周期的一部分。react.component就是一个抽象类，官方文档就是这么定义的。）")]),t._v(" "),r("td",[t._v("构造类。在这里可以写一些状态"),r("br"),t._v("可以进行ajax数据请求")])]),t._v(" "),r("tr",[r("td",[t._v("componentWillMount")]),t._v(" "),r("td",[t._v("执行componentWillMount生命周期函数。此时组件即将挂载到页面上。"),r("br"),t._v("（类似vue的beforeMounte）"),r("br"),t._v("会有关于componentWillMount更名的信息提示"),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594646241614-7dccf9fa-ed0e-4ea0-a837-7047c4babde0.png#align=left&display=inline&height=358&margin=%5Bobject%20Object%5D&name=image.png&originHeight=358&originWidth=1354&size=129711&status=done&style=none&width=1354",alt:"image.png"}})]),t._v(" "),r("td",[t._v("可以进行ajax请求"),r("br"),r("strong",[t._v("（但是react官方不建议。因为可能后期会使用react Native时会与之发生冲突。而且官方特强硬的把这个周期函数给移除了。16.3版本以后移除了）")]),r("br"),t._v("也可以setState一下")])]),t._v(" "),r("tr",[r("td",[t._v("render")]),t._v(" "),r("td",[t._v("执行render函数渲染页面。")]),t._v(" "),r("td",[t._v("没必要进行ajax请求"),r("br"),r("strong",[t._v("不能调用setState，否则会死循环。因为setState会触发shouldComponentUpdate，触发后如果返回true，又会走到render里。所以，render里只做数据渲染、展示就行，别进行setState")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("componentDidMount")]),t._v(" "),r("td",[t._v("执行componentDidMount生命周期函数。此时组件已经被挂载到页面中。"),r("br"),t._v("（类似vue的mounted）")]),t._v(" "),r("td",[t._v("可以发送ajax、设置状态（setState）的"),r("strong",[t._v("最好的地方")])])])])]),t._v(" "),r("p",[r("a",{attrs:{name:"sDjo9"}})]),t._v(" "),r("h3",{attrs:{id:"组件运行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件运行流程"}},[t._v("¶")]),t._v(" 组件运行流程")]),t._v(" "),r("p",[r("a",{attrs:{name:"YysAo"}})]),t._v(" "),r("h4",{attrs:{id:"state值被改变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state值被改变"}},[t._v("¶")]),t._v(" state值被改变")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("state被更改")]),t._v(" "),r("th",[t._v("组间运行中，state被更改")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("进行提问"),r("br"),t._v("是否继续？")]),t._v(" "),r("td",[t._v("触发"),r("strong",[t._v("shouldComponentUpdate")]),t._v("函数。提问组件是否要进行更新。"),r("br"),t._v("该函数接收两个参数：nextProps、nextStates"),r("br"),t._v("该函数需要返回布尔值来"),r("strong",[t._v("回答")]),t._v("是否更新："),r("br"),t._v("return false不更改 - 流程回到state被更改前。"),r("br"),t._v("return true进行更改 - state更改，流程继续。")]),t._v(" "),r("td",[t._v("可以在参数里边知道将要更新的值"),r("br"),r("strong",[t._v("可以比较值，发现需要更改的值与更改前后一致时，返回false，不触发更新。")]),r("br"),t._v("因为react没有vue那么智能，不知道要更改的内容是否真的发生了改变。"),r("strong",[t._v("只要setState就会触发更新、只要触发了更新就会走剩下的流程。还会去对比虚拟dom、耗费性能 。其内部的子组件的生命周期也会触发一遍。")]),r("br"),t._v("shouldComponentUpdate(nextProps,nextStates){"),r("br"),t._v("return nextStates.count !== this.state.count"),r("br"),t._v("}")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【回答】：是")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("componentWillUpdate")]),t._v(" "),r("td",[t._v("执行conponentWillUpdate生命周期函数。告知组件即将开始进行更新。")]),t._v(" "),r("td",[t._v("千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。"),r("br"),t._v("没必要做ajax请求，即使做了也不能重新setState"),r("br"),t._v("基本上没什么用")])]),t._v(" "),r("tr",[r("td",[t._v("render")]),t._v(" "),r("td",[t._v("组间更新完毕，执行render函数重新渲染页面。")]),t._v(" "),r("td",[t._v("（同上边的render。）")])]),t._v(" "),r("tr",[r("td",[t._v("componentDidUpdate")]),t._v(" "),r("td",[t._v("执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。")]),t._v(" "),r("td",[t._v("千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。"),r("br"),t._v("没必要做ajax请求，即使做了也不能重新setState"),r("br"),t._v("基本上没什么用")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【往复】：回到组件运行状态（等待）")]),t._v(" "),r("td")])])]),t._v(" "),r("p",[r("a",{attrs:{name:"RIQVn"}})]),t._v(" "),r("h4",{attrs:{id:"props改变，重新render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#props改变，重新render"}},[t._v("¶")]),t._v(" props改变，重新render")]),t._v(" "),r("p",[t._v("props属性是从父组件传过来的。当父组件改变了传递给子组件的数据时，子组件内部就会触发该函数。"),r("br"),t._v("以下流程发生在子组件内部：子组件内部")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("componentWillReceiveProps")]),t._v(" "),r("th",[t._v("执行componentWillReciveProps生命周期函数。告知父组件改变了props的值。"),r("br"),t._v("接受参数：nextProps"),r("br"),t._v(" "),r("br"),t._v("初始化不执行，只有当props改变时才会执行")]),t._v(" "),r("th",[t._v("可以进行状态的设置："),r("br"),t._v("因为其可以接受一个参数nextProps，然后把参数的属性值setState到this.state身上"),r("br"),t._v("可以发送ajax请求："),r("br"),t._v("同上"),r("br"),r("strong",[t._v("但是官方不建议这么做，认为是不合理的。所以在16.3以后的版本中移除了，该函数不能使用了。")])])])]),t._v(" "),r("tbody",[r("tr",[r("td"),t._v(" "),r("td",[t._v("【循环】：重走state值被更改的流程如下：")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("进行提问"),r("br"),t._v("是否继续？")]),t._v(" "),r("td",[t._v("触发shouldComponentUpdate函数。提问组件是否要进行更新。"),r("br"),t._v("该函数接收两个参数：nextProps、nextStates"),r("br"),t._v("该函数需要返回布尔值来"),r("strong",[t._v("回答")]),t._v("是否更新："),r("br"),t._v("return false不更改 - 流程回到state被更改前。"),r("br"),t._v("return true进行更改 - state更改，流程继续。")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【回答】：是")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("componentWillUpdate")]),t._v(" "),r("td",[t._v("执行conponentWillUpdate生命周期函数。告知组件即将开始进行更新。")]),t._v(" "),r("td",[r("strong",[t._v("在16.3以后的版本中移除了")])])]),t._v(" "),r("tr",[r("td",[t._v("render")]),t._v(" "),r("td",[t._v("组间更新完毕，执行render函数重新渲染页面。")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("componentDidUpdate")]),t._v(" "),r("td",[t._v("执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【往复】：回到组件运行状态（等待）")]),t._v(" "),r("td")])])]),t._v(" "),r("p",[r("a",{attrs:{name:"b6EfU"}})]),t._v(" "),r("h4",{attrs:{id:"组件被移除、销毁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件被移除、销毁"}},[t._v("¶")]),t._v(" 组件被移除、销毁")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("componentWillUnmount")]),t._v(" "),r("th",[t._v("执行componentWillUnmount生命周期函数。告知即将销毁组件。")]),t._v(" "),r("th",[t._v("销毁组件前，可以先告知用户之类的。")])])]),t._v(" "),r("tbody",[r("tr",[r("td"),t._v(" "),r("td",[t._v("【销毁】：组件销毁完毕。")]),t._v(" "),r("td")])])]),t._v(" "),r("p",[r("a",{attrs:{name:"92kVM"}})]),t._v(" "),r("h2",{attrs:{id:"代码演示："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码演示："}},[t._v("¶")]),t._v(" 代码演示：")]),t._v(" "),r("p",[t._v("见github (https://github.com/xingorg1/JuFengGuo/tree/master/advanceCourse/react/3-react_lifecycle/src/components/before_16.3)"),r("br"),t._v(" "),r("a",{attrs:{name:"HYr1J"}})]),t._v(" "),r("h2",{attrs:{id:"生命周期钩子函数的功能："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数的功能："}},[t._v("¶")]),t._v(" 生命周期钩子函数的功能：")]),t._v(" "),r("p",[t._v("每个生命周期都可以用来干什么？详见上述表格中各对应列"),r("br")]),t._v(" "),r("h1",{attrs:{id:"_16-3版本以后的："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16-3版本以后的："}},[t._v("¶")]),t._v(" "),r("strong",[t._v("16.3版本以后的：")])]),t._v(" "),r("p",[r("br"),r("strong",[t._v("基本把‘xxWillxxx’等，带“Will”的钩子函数都删掉了")]),r("br"),t._v(" "),r("a",{attrs:{name:"7EQbU"}})]),t._v(" "),r("h2",{attrs:{id:"生命周期流程图-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期流程图-2"}},[t._v("¶")]),t._v(" 生命周期流程图")]),t._v(" "),r("p",[r("a",{attrs:{name:"4aB8L"}})]),t._v(" "),r("h3",{attrs:{id:"组件从生成到被挂在到页面上的一系列过程。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件从生成到被挂在到页面上的一系列过程。"}},[t._v("¶")]),t._v(" 组件从生成到被挂在到页面上的一系列过程。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594644849550-92532930-2374-49a4-95e7-a5d6e31ae278.png#align=left&display=inline&height=1646&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1646&originWidth=1218&size=160782&status=done&style=none&width=1218",alt:"image.png"}}),t._v(" "),r("a",{attrs:{name:"jdLRr"}})]),t._v(" "),r("h3",{attrs:{id:"根据流程图打印的执行顺序图：-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根据流程图打印的执行顺序图：-2"}},[t._v("¶")]),t._v(" 根据流程图打印的执行顺序图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594644851155-8e5f53ae-0f53-4d30-9952-60d49126710a.png#align=left&display=inline&height=1832&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1832&originWidth=1770&size=961433&status=done&style=none&width=1770",alt:"image.png"}}),r("br"),t._v(" "),r("a",{attrs:{name:"wE8Tc"}})]),t._v(" "),r("h2",{attrs:{id:"流程讲解：-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程讲解：-2"}},[t._v("¶")]),t._v(" 流程讲解：")]),t._v(" "),r("p",[r("a",{attrs:{name:"PdxtH"}})]),t._v(" "),r("h3",{attrs:{id:"初始化流程-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化流程-2"}},[t._v("¶")]),t._v(" 初始化流程")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("start")]),t._v(" "),r("th",[t._v("开始创建组件")]),t._v(" "),r("th",[t._v("在这个周期中做的事情")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("检查")]),t._v(" "),r("td",[t._v("检查组件中是否有默认的属性、是否有属性校验")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("constructor")]),t._v(" "),r("td",[t._v("开始执行constructor构造函数"),r("br"),t._v("（👩‍🏫讲解：constructor是生命周期的一部分。react.component就是一个抽象类，官方文档就是这么定义的。）")]),t._v(" "),r("td",[t._v("构造类。在这里可以写一些状态"),r("br"),t._v("可以进行ajax数据请求（"),r("a",{attrs:{href:"https://segmentfault.com/q/1010000008133309",target:"_blank",rel:"noopener noreferrer"}},[t._v("要不要在constructor里获取数据"),r("OutboundLink")],1),t._v("）")])]),t._v(" "),r("tr",[r("td",[t._v("static getDerivedStateFromProps(props,state)")]),t._v(" "),r("td",[t._v("执行一个静态的方法。从属性中去获得状态**。**"),r("br"),r("strong",[t._v("初始化就会执行")]),r("br"),r("strong",[t._v("这样，更改state和更改props，就不会走两套路线了，而是都走这一个。")]),r("br"),r("strong",[t._v("必须返回一个state的对象。否则报错如下")]),r("br"),t._v("Warning: Father.getDerivedStateFromProps(): A valid state object   (or null) must be returned. You have returned undefined."),r("br"),r("strong",[t._v("return的返回值，就会放到组件的state状态中")]),r("br"),t._v(" "),r("br"),t._v("参数：props、state，就是当前组件的属性状态值和属性值")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("render")]),t._v(" "),r("td",[t._v("执行render函数渲染页面。")]),t._v(" "),r("td",[t._v("没必要进行ajax请求"),r("br"),r("strong",[t._v("不能调用setState，否则会死循环。因为setState会触发shouldComponentUpdate，触发后如果返回true，又会走到render里。所以，render里只做数据渲染、展示就行，别进行setState")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("componentDidMount")]),t._v(" "),r("td",[t._v("执行componentDidMount生命周期函数。此时组件已经被挂载到页面中。"),r("br"),t._v("（类似vue的mounted）")]),t._v(" "),r("td",[t._v("可以发送ajax、设置状态（setState）的"),r("strong",[t._v("最好的地方")])])])])]),t._v(" "),r("p",[r("a",{attrs:{name:"p9C9q"}})]),t._v(" "),r("h3",{attrs:{id:"组件运行流程-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件运行流程-2"}},[t._v("¶")]),t._v(" 组件运行流程")]),t._v(" "),r("p",[r("a",{attrs:{name:"3LaLJ"}})]),t._v(" "),r("h4",{attrs:{id:"state-或-props其中任意一个被改变后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state-或-props其中任意一个被改变后"}},[t._v("¶")]),t._v(" state 或 props其中任意一个被改变后")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("static getDerivedStateFromProps(props,state)")]),t._v(" "),r("th",[t._v("state或props更改，都会执行这个静态的方法。从属性中去获得状态**。**"),r("br"),r("strong",[t._v("这样，更改state和更改props，就不会走两套路线了，而是都走这一个。")]),r("br"),r("strong",[t._v("必须返回一个state的对象。否则报错如下")]),r("br"),t._v("Warning: Father.getDerivedStateFromProps(): A valid state object   (or null) must be returned. You have returned undefined.")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("进行提问"),r("br"),t._v("是否继续？")]),t._v(" "),r("td",[t._v("触发shouldComponentUpdate函数。提问组件是否要进行更新。"),r("br"),t._v("该函数接收两个参数：nextProps、nextStates"),r("br"),t._v("该函数需要返回布尔值来"),r("strong",[t._v("回答")]),t._v("是否更新："),r("br"),t._v("return false不更改 - 流程回到state被更改前。"),r("br"),t._v("return true进行更改 - state更改，流程继续。")]),t._v(" "),r("td",[t._v("可以在参数里边知道将要更新的值"),r("br"),r("strong",[t._v("可以比较值，发现需要更改的值与更改前后一致时，返回false，不触发更新。")]),r("br"),t._v("因为react没有vue那么智能，不知道要更改的内容是否真的发生了改变。"),r("strong",[t._v("只要setState就会触发更新、只要触发了更新就会走剩下的流程。还会去对比虚拟dom、耗费性能 。其内部的子组件的生命周期也会触发一遍。")]),r("br"),t._v("shouldComponentUpdate(nextProps,nextStates){"),r("br"),t._v("return nextStates.count !== this.state.count"),r("br"),t._v("}")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【回答】：是")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("render")]),t._v(" "),r("td",[t._v("组件更新完毕，执行render函数重新渲染页面。")]),t._v(" "),r("td",[t._v("（同上边的render。）")])]),t._v(" "),r("tr",[r("td",[t._v("getSnapshotBeforeUpdate(prevProps,prevState)")]),t._v(" "),r("td",[t._v("执行这个函数，获取之前状态的一个快照。"),r("br"),r("strong",[t._v("需要有返回值。其返回值供下边的钩子函数componentDidUpdate中接受并使用。")]),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594646205248-df5829a2-36b1-4e06-891e-6287328f9c64.png#align=left&display=inline&height=388&margin=%5Bobject%20Object%5D&name=image.png&originHeight=388&originWidth=932&size=90581&status=done&style=none&width=932",alt:"image.png"}}),r("br"),r("strong",[t._v("所以该函数必须和componentDidUpdate函数写在一起。")])]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("componentDidUpdate")]),t._v(" "),r("td",[t._v("执行componentDidUpdate生命周期函数。告知组件更新并渲染完毕。此时更新过的组件已经渲染到页面中。"),r("br"),r("strong",[t._v("可支持接受三个参数。分别是prevProps、prevState、snapShot")]),r("br"),r("strong",[t._v("其中，snapShot是getSnapshotBeforeUpdate的返回值")]),r("br"),t._v("**"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/269022/1594646184087-766b698c-c5aa-4fb1-a460-d72dd20d7e7a.png#align=left&display=inline&height=176&margin=%5Bobject%20Object%5D&name=image.png&originHeight=176&originWidth=2068&size=89811&status=done&style=none&width=2068",alt:"image.png"}})]),t._v(" "),r("td",[t._v("千万不能设置状态，因为会又回到shouldComponentUpdate的死循环中。"),r("br"),t._v("没必要做ajax请求，即使做了也不能重新setState"),r("br"),t._v("基本上没什么用")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("【往复】：回到组件运行状态（等待）")]),t._v(" "),r("td")])])]),t._v(" "),r("p",[r("a",{attrs:{name:"Eyoir"}})]),t._v(" "),r("h4",{attrs:{id:"组件被移除、销毁-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件被移除、销毁-2"}},[t._v("¶")]),t._v(" 组件被移除、销毁")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("componentWillUnmount")]),t._v(" "),r("th",[t._v("执行componentWillUnmount生命周期函数。告知即将销毁组件。")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td"),t._v(" "),r("td",[t._v("【销毁】：组件销毁完毕。")]),t._v(" "),r("td")])])]),t._v(" "),r("p",[r("a",{attrs:{name:"semyH"}})]),t._v(" "),r("h2",{attrs:{id:"代码演示：-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码演示：-2"}},[t._v("¶")]),t._v(" 代码演示：")]),t._v(" "),r("p",[t._v("见github (https://github.com/xingorg1/JuFengGuo/tree/master/advanceCourse/react/3-react_lifecycle/src/components/after_16.3)"),r("br"),t._v(" "),r("a",{attrs:{name:"JCM70"}})]),t._v(" "),r("h2",{attrs:{id:"生命周期钩子函数的功能：-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数的功能：-2"}},[t._v("¶")]),t._v(" 生命周期钩子函数的功能：")]),t._v(" "),r("p",[t._v("每个生命周期都可以用来干什么？详见上述表格中各对应列")])])},[],!1,null,null,null);e.default=v.exports}}]);