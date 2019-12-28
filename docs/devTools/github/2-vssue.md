# 评论工具 vssue
[官网](https://vssue.js.org/zh/)
## 与其他项目比较
Vssue 的灵感来自于 Gitment 和 Gitalk，但是和它们有些区别：

Vssue 支持 Github、Gitlab 和 Bitbucket，并且很容易扩展到其它平台。Gitment 和 Gitalk 仅支持 Github。
Vssue 可以发表、编辑、删除评论。Gitment 和 Gitalk 仅能发表评论。
Vssue 是基于 Vue.js 开发的，可以集成到 Vue 项目中，并且提供了一个 VuePress 插件。 Gitment 基于原生JS，而 Gitalk 基于 Preact。

## 安装
```bash
sudo npm install @vssue/vuepress-plugin-vssue @vssue/api-github-v4
```

具有的插件
```bash
"@vssue/api-bitbucket-v2": "^1.2.1",
"@vssue/api-gitee-v5": "^1.2.1",
"@vssue/api-github-v3": "^1.1.2",
"@vssue/api-github-v4": "^1.2.1",
"@vssue/api-gitlab-v4": "^1.2.1",
"@vssue/vuepress-plugin-vssue": "^1.2.2",
```

## 创建github OAuth App
[指导网站](https://vssue.js.org/zh/guide/github.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-oauth-app)

## 在vuepress中使用
[指导网站](https://vssue.js.org/zh/guide/vuepress.html#vuepress-%E6%8F%92%E4%BB%B6)

<Vssue title="Vssue评论" />