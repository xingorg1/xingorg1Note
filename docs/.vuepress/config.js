module.exports = {
  title: '小石头的前端学习笔记 ', // 设置网站标题
  description: 'xing.org1^',
  base: '/xingorg1Note/',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }], //  这个是标签页 logo
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  // 主题
  theme: 'vuepress-theme-yilia-plus',
  // 主题配置
  themeConfig: {
    // 顶部导航
    nav: [{
        text: '主页',
        link: '/'
      }, {
        text: '技术笔记',
        items: [{
            text: 'js',
            link: '/webNote/js/'
          }, {
            text: 'react',
            link: '/webNote/react/'
          },
          {
            text: 'gitbook',
            link: '/webNote/gitbook/'
          },
          {
            text: 'vuepress',
            link: '/webNote/vuepress/'
          },
        ]
      },
      {
        text: '文集',
        link: '/diary/'
      },
      {
        text: '摄影',
        link: '/photograph/'
      },
      {
        text: '爱好',
        link: '/hobby/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    // 侧边栏
    slidebar: 'auto',
    // sidebar: [
    //   '/',
    //   '/webNote/',
    //   '/diary/'
    // ],
    // sidebar: [
    //   {
    //     title: '主页',
    //     children: ['/components/button']
    //   },{
    //     title: '技术笔记',
    //     children: [
    //       '/diary/',
    //       '/hobby/',
    //     ]
    //   }
    // ],
    // sidebar: {
    //   '/': [
    //     "/" //指的是根目录的md文件 也就是 README.md 里面的内容
    //   ],
    //   '/webNote/': [
    //     "/webNote/",
    //     "/diary/",
    //     "/photograph/",
    //     "/hobby/",
    //     "/about/",
    //   ]
    // },
    sidebarDepth: 3, // 默认 1 提取到 h2，0 为禁用，2 为 h2，3 为 h3...
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    repo: 'username/repo', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    editLinks: true,
    editLinkText: '编辑此页面', // 默认为 "Edit this page"

    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2019,
        // 网站作者(关闭请设置为false)
        author: '<a href="https://github.com/xingorg1" target="_blank">xing.org1^ 小石头</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      }
    }
  },
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  plugins: [
    ['@vuepress/last-updated'], // 最后更新时间
    ['@vuepress/nprogress'], // 进度条
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus', {
        // 是否在移动设备上显示(default: true)
        mobileShow: false,
        // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
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
