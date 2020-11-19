(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{274:function(s,a,t){s.exports=t.p+"assets/img/whileDemo.1cb7c4bf.png"},404:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"while"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#while"}},[s._v("¶")]),s._v(" while")]),s._v(" "),n("p",[s._v("和for一样，while也是实现循环代码的一种。")]),s._v(" "),n("h2",{attrs:{id:"伪代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[s._v("¶")]),s._v(" 伪代码")]),s._v(" "),n("p",[s._v("先来看一段while的伪代码，了解下其语法格式。")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 伪代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" 条件语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  条件成立执行的"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v("子句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，位于缩进后边\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  循环完毕执行的代码块，位于缩进后边\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("学过js的能从上边的代码中看出来，这和js的while基本无差。"),n("br"),s._v("\n将代码直译过来都是：当XXX条件成立的时候，执行XXX语句。直到条件不成立，就跳过while语句。")]),s._v(" "),n("p",[s._v("只不过python的特色是循环语句最后都会有自己的else语句。"),n("br"),s._v("\n当while条件语句为“假”、循环执行完毕过后，流程都会走到else里边执行缩进后的任务。就好像出关口、必经之路的意思。")]),s._v(" "),n("h2",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[s._v("¶")]),s._v(" 示例代码")]),s._v(" "),n("p",[s._v("来看一段示例代码")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("whileVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" whileVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'while子句：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" whileVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  whileVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'while执行完毕，跳出循环后执行了我'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" whileVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印结果")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while子句： 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while子句： 2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while子句： 3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while执行完毕，跳出循环后执行了我 4")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("在上边的代码中，其执行流程大致如下：")]),s._v(" "),n("p",[s._v("whileVal变量一开始是1。while的循环条件是变量小于等于3。\n此时1小于3条件成立，执行while子句的代码。打印“while子句： 1”"),n("br"),s._v("\n然后变量whileVal递增一位，变成2。")]),s._v(" "),n("p",[s._v("再次返回去判断条件，2<=3条件成立，继续执行while子句，打印“while子句： 2”"),n("br"),s._v("\n然后变量whileVal递增一位，变成3。")]),s._v(" "),n("p",[s._v("再次返回去判断条件，3<=3条件成立，继续执行while子句，打印“while子句： 3”"),n("br"),s._v("\n然后变量whileVal递增一位，变成4。")]),s._v(" "),n("p",[s._v("再次返回去判断条件，4<=3条件"),n("strong",[s._v("不成立")]),s._v("，不执行while子句结束循环并跳出")]),s._v(" "),n("p",[s._v("于是代码向下，执行else里的代码块，打印“while执行完毕，跳出循环后执行了我 4”"),n("br"),s._v("\n并且我们可以通过打印明确得知，whileVal此时为4了。")]),s._v(" "),n("h2",{attrs:{id:"和for循环的不同"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#和for循环的不同"}},[s._v("¶")]),s._v(" 和for循环的不同")]),s._v(" "),n("p",[s._v("while的知识点很简单，应用起来也很简单。"),n("br"),s._v("\n不过同样作为循环，他和for循环有什么不同的呢？语法里为什么有了for还要有个while呢？")]),s._v(" "),n("p",[s._v("我们先来想想。上边的代码用for实现怎么写呢？"),n("br"),s._v("\n下边是我的写法")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" forVal "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'for子句：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" forVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'for执行完毕，跳出循环后执行了我'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" forVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印结果如下：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for子句： 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for子句： 2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for子句： 3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for执行完毕，跳出循环后执行了我 3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("观察发现，for最后的变量值为3。"),n("br"),s._v("\n也就是for在特定循环次数内，在你指定循环次数的情况下进行的迭代。")]),s._v(" "),n("p",[s._v("而while是你可以指定一个已经确定的临界值，只要在临界值里边的，都会执行while。即当while语句一直成立的时候，while子句就会一直执行。"),n("br"),s._v("\n而更厉害的是，这个临界值可以是我们知道的（比如上边限制小于等于3，就是我们设定的已知临界值）。"),n("br"),s._v("\n当然，这个临界值也可以是我们不知道的。比如让用户输入的情况，也比如无限循环的情况。代码分别如下。")]),s._v(" "),n("h2",{attrs:{id:"根据用户输入判断条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据用户输入判断条件"}},[s._v("¶")]),s._v(" 根据用户输入判断条件")]),s._v(" "),n("p",[s._v("以下代码，是条件根据用户输入进行判断的例子。")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("myAge "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请猜一下我的年龄：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" myAge "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'不对！'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  myAge "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请再猜一下我的年龄：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'猜对啦！恭喜你！'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("img",{attrs:{src:t(274),alt:"我的人机对话过程"}})]),s._v(" "),n("p",[s._v("只要用户输入的不是20，这个循环中while子句的内容就会一直执行。")]),s._v(" "),n("p",[s._v("而当用户输入20时，条件不成立（myAge=20，而不是!=20），则跳出循环。执行else内容。")]),s._v(" "),n("h2",{attrs:{id:"无限循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无限循环"}},[s._v("¶")]),s._v(" 无限循环")]),s._v(" "),n("p",[s._v("利用while，我们还可以写一段死循环代码。")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请谨慎尝试！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我停不下来了～'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("在条件语句那里，可以填表达式，同样也可以填写布尔值。")]),s._v(" "),n("p",[s._v("当我们填写布尔值"),n("code",[s._v("True")]),s._v("时，因为条件一直成立。循环永远不停，就形成了我们常说的死循环代码。")]),s._v(" "),n("h2",{attrs:{id:"continue跳过本次循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#continue跳过本次循环"}},[s._v("¶")]),s._v(" continue跳过本次循环")]),s._v(" "),n("p",[s._v("同for，continue语句在while中的使用作用一样是跳出本次单轮的循环、继续下次的循环。"),n("br"),s._v("\n不再赘述，直接上代码：")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("continueVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" continueVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  continueVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" continueVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'if条件中'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'continueVal的值：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("continueVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'循环结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印结果：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# continueVal的值： 2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if条件中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# continueVal的值： 4")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# continueVal的值： 5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# continueVal的值： 6")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环结束")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("跳过了==3时的循环，"),n("br"),s._v("\n并且打印了while语句所对应的else语句的内容。")]),s._v(" "),n("h2",{attrs:{id:"break跳出循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#break跳出循环"}},[s._v("¶")]),s._v(" break跳出循环")]),s._v(" "),n("p",[s._v("同for，break语句在while中的使用作用一样是跳出循环。"),n("br"),s._v("\n不再赘述，直接上代码：")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("breakVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" breakVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  breakVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" breakVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'if条件中'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'breakVal的值：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("breakVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'循环结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印结果：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# breakVal的值： 2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if条件中")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("条件==3时，直接结束循环，"),n("br"),s._v("\n并且不再打印while语句所对应的else语句了。")]),s._v(" "),n("h2",{attrs:{id:"练习题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[s._v("¶")]),s._v(" 练习题")]),s._v(" "),n("h3",{attrs:{id:"实现1到10的数分别乘以100"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现1到10的数分别乘以100"}},[s._v("¶")]),s._v(" 实现1到10的数分别乘以100")]),s._v(" "),n("p",[s._v("分别用for循环和while循环俩种方案实现")]),s._v(" "),n("Vssue",{attrs:{title:"【Python】循环while"}})],1)},[],!1,null,null,null);a.default=e.exports}}]);