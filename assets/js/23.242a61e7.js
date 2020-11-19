(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{278:function(s,a,t){s.exports=t.p+"assets/img/createRepository.17e35270.png"},429:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"建好的项目上传到-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建好的项目上传到-github"}},[s._v("¶")]),s._v(" 建好的项目上传到 github")]),s._v(" "),n("h2",{attrs:{id:"准备本地仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备本地仓库"}},[s._v("¶")]),s._v(" 准备本地仓库")]),s._v(" "),n("p",[s._v("本地建好的项目，事先没有建立 git 仓库。项目搞完了想传到 github，怎么弥补？")]),s._v(" "),n("p",[s._v("我的一次经历，遇见以下问题、一步一步用了以下步骤：")]),s._v(" "),n("p",[s._v("在当前项目根目录下检测 git 配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("检测如果不争取，就配置一下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的 username"')]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的 useremail"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("确定无误，就执行 init 初始化一个 git 仓库")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("出现如下信息。标识成功建立本地仓库:")]),s._v(" "),n("blockquote",[n("p",[s._v("Reinitialized existing Git repository in E:/github/xingorg1-js-utils/.git/")])]),s._v(" "),n("h2",{attrs:{id:"尝试上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试上传"}},[s._v("¶")]),s._v(" 尝试上传")]),s._v(" "),n("p",[s._v("上传到远端")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交说明"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" pull\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" push\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这里失败了！")]),s._v(" "),n("h2",{attrs:{id:"失败流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#失败流程"}},[s._v("¶")]),s._v(" 失败流程")]),s._v(" "),n("p",[s._v("当我执行 git pull 时就报错了")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("失败提示信息:")]),s._v(" "),n("blockquote",[n("p",[s._v("git fatal: No remote repository specified. Please, specify either a URL or a"),n("br"),s._v("\nremote name from which new revisions should be fetched.")])]),s._v(" "),n("p",[s._v("不死心的执行 git push:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("失败提示信息:")]),s._v(" "),n("blockquote",[n("p",[s._v("fatal: No configured push destination.")]),s._v(" "),n("p",[s._v("Either specify the URL from the command-line or configure a remote repository using")]),s._v(" "),n("pre",[n("code",[s._v("git remote add <name> <url>\n")])]),s._v(" "),n("p",[s._v("and then push using the remote name")]),s._v(" "),n("pre",[n("code",[s._v("git push <name>\n")])])]),s._v(" "),n("h2",{attrs:{id:"尝试添加远程仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试添加远程仓库"}},[s._v("¶")]),s._v(" 尝试添加远程仓库")]),s._v(" "),n("p",[s._v("于是我执行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/xingorg1/xingorg1-js-utils.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("再进行 pull")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("报错如下")]),s._v(" "),n("blockquote",[n("p",[s._v("git push origin masteremote: Repository not found."),n("br"),s._v("\nfatal: repository 'https://github.com/xingorg1/xingorg1-js-utils.git/' not found")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("报错如下")]),s._v(" "),n("blockquote",[n("p",[s._v("remote: Repository not found.\nfatal: repository 'https://github.com/xingorg1/xingorg1-js-utils.git/' not found")])]),s._v(" "),n("h2",{attrs:{id:"远程仓库没有的情况下自查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库没有的情况下自查"}},[s._v("¶")]),s._v(" 远程仓库没有的情况下自查")]),s._v(" "),n("p",[s._v("于是我检查 ssh key")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("没有异常。")]),s._v(" "),n("p",[s._v("继续，cd 到项目目录。从新走流程")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("返回：")]),s._v(" "),n("blockquote",[n("p",[s._v("Reinitialized existing Git repository in E:/github/xingorg1-js-utils/.git/")])]),s._v(" "),n("p",[s._v("正常。")]),s._v(" "),n("p",[s._v("检查 git 状态：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("返回：")]),s._v(" "),n("blockquote",[n("p",[s._v("On branch master"),n("br"),s._v("\nnothing to commit, working tree clean")])]),s._v(" "),n("p",[s._v("正常")]),s._v(" "),n("p",[s._v("执行无聊且无意义的暂存和提交：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[+]"')]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("返回：")]),s._v(" "),n("blockquote",[n("p",[s._v("On branch master\nnothing to commit, working tree clean")])]),s._v(" "),n("p",[s._v("正常。")]),s._v(" "),n("p",[s._v("终于鼓足勇气执行 push：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("失败！")]),s._v(" "),n("p",[s._v("返回：")]),s._v(" "),n("blockquote",[n("p",[s._v("fatal: The current branch master has no upstream branch."),n("br"),s._v("\nTo push the current branch and set the remote as upstream, use")]),s._v(" "),n("pre",[n("code",[s._v("git push --set-upstream origin master\n")])])]),s._v(" "),n("p",[s._v("按照神的指示，输入提示的命令。继续执行：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("依旧不行~")]),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("blockquote",[n("p",[s._v("remote: Repository not found."),n("br"),s._v("\nfatal: repository 'https://github.com/xingorg1/xingorg1-js-utils.git/' not found")])]),s._v(" "),n("p",[s._v("直到现在，我才反应过来，说我"),n("strong",[s._v("没有远端仓库!!!")])]),s._v(" "),n("h2",{attrs:{id:"官网创建远程仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#官网创建远程仓库"}},[s._v("¶")]),s._v(" 官网创建远程仓库")]),s._v(" "),n("p",[s._v("于是去"),n("a",{attrs:{href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个网址"),n("OutboundLink")],1),s._v("上，创建跟项目名同名的仓库名\n"),n("img",{attrs:{src:t(278),alt:"创建仓库"}})]),s._v(" "),n("h2",{attrs:{id:"finish"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#finish"}},[s._v("¶")]),s._v(" finish")]),s._v(" "),n("p",[s._v("终于，再次执行 push 就正常了")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("返回：")]),s._v(" "),n("blockquote",[n("p",[s._v("Counting objects: 37, done."),n("br"),s._v("\nDelta compression using up to 4 threads."),n("br"),s._v("\nCompressing objects: 100% (34/34), done."),n("br"),s._v("\nWriting objects: 100% (37/37), 152.22 KiB | 4.61 MiB/s, done."),n("br"),s._v("\nTotal 37 (delta 1), reused 0 (delta 0)"),n("br"),s._v("\nremote: Resolving deltas: 100% (1/1), done."),n("br"),s._v("\nTo https://github.com/xingorg1/xingorg1-js-utils.git")]),s._v(" "),n("ul",[n("li",[s._v("[new branch] master -> master"),n("br"),s._v("\nBranch 'master' set up to track remote branch 'master' from 'origin'.")])])]),s._v(" "),n("p",[s._v("真实一场与 bug 磕个头破血流的挣扎史啊！")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("¶")]),s._v(" 总结")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 设置")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的 username"')]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的 useremail"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化本地git仓库")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建远程仓库（官网可视化界面操作）")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地仓库修改内容后")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地仓库添加了github上的git仓库作为远程仓库，起名origin；")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/xingorg1/xingorg1-js-utils.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程与本地建立联系")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin/master master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取+合并两个独立启动仓库的历史")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master --allow-unrelated-histories\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送本地master分支到远程master分支")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master:master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("Vssue",{attrs:{title:"【github】本地上传项目"}})],1)},[],!1,null,null,null);a.default=e.exports}}]);