
const sidebarConf = require('./configs/sidebar')
console.log(sidebarConf)
module.exports = {
  title: '小石头的笔记本 ', // 设置网站标题
  description: 'xing.org1^ 小石头的前端学习笔记汇总',
  base: '/xingorg1Note/', // 要部署的路径
  dest: './dist', // 打包后的dist存放路径，相对路径从根目录开始
  cache: false,
  head: [
    ['link', {
      rel: 'icon', // 这个是标签页 logo
      href: `/favicon.ico`
    }]
  ],
  // 主题
  theme: 'vuepress-theme-yilia-plus',
  // 主题配置
  themeConfig: {
    // 顶部导航
    // navbar: false, // 禁用导航栏
    nav: require('./configs/nav'),
    //搜索
    // search: true,
    searchMaxSuggestions: 10, // 默认搜索框显示的搜索结果数量(内置搜索只会为页面的标题、h2 和 h3 构建搜索索引)
    smoothScroll: true,

    // 侧边栏
    sidebarDepth: 1, //嵌套的标题链接深度，默认的深度为1（h1）。0 为禁用，2 为 h2，3 为 h3...
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题
    sidebar: {
      '/webNote/': sidebarConf.getWebNoteSidebar('前端开发'),
      '/devTools/': sidebarConf.getDevToolsSidebar(),
      '/backEnd/': sidebarConf.getBackEndSidebar(),
      '/diarys/': sidebarConf.getDiarysSidebar(),
      '/photograph/': sidebarConf.getPhotographSidebar(),
      '/hobby/': sidebarConf.getHobbySidebar(),
      '/about/': sidebarConf.getAboutSidebar('关于我')
    },

    // Git 仓库
    repo: 'xingorg1/xingorg1Note', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    // 编辑链接
    editLinks: true,
    editLinkText: '帮助我来改善此页面！', // 默认为 "Edit this page"
    docsDir: 'docs', // 编辑文档的所在目录
    docsBranch: 'develop', // 编辑文档的所在分支
    lastUpdated: '最后更新于', // 最后更新时间

    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      github: false,
      footer: {
        since: 2019, // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        author: '<a href="https://github.com/xingorg1" target="_blank">xing.org1^ 小石头</a>', // 网站作者(关闭请设置为false)
        busuanzi: { // 访问量统计功能(不蒜子)
          enable: true // 是否启用(关闭请设置为false)
        }
      }
    },

    //////////  PWA配置 ///////////
    // serviceWorker: true
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
    anchor: {
      // 标题头有一个¶图标
      permalink: true,
      level: 1,
      permalinkSymbol: '¶'
    },
    toc: {
      // 包含的层级
      includeLevel: [1, 2, 3, 4, 5],
      // true表示在TOC中呈现所有标题
      forceFullToc: true
    },
    // config: md => {
    //   md.set({ breaks: true })
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  plugins: [
    ['@vuepress/last-updated'], // 最后更新时间
    ['@vuepress/nprogress'], // 进度条
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus', { // 是否在移动设备上显示(default: true)
        mobileShow: false,
        threshold: 50 // 回到页首元素显示触发的高度阈值(default: 50)
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}

