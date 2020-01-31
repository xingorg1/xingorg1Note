// nav 菜单栏配置
module.exports = [
  // {
  //   text: '主页',
  //   link: '/'
  // }, 
  {
    text: '前端',
    items: [{
      text: 'Html',
      link: '/webNote/web/'
    }, {
      text: 'Css',
      link: '/webNote/css/'
    }, {
      text: 'JS',
      link: '/webNote/js/'
    }, {
      text: 'ES',
      link: '/webNote/es/'
    }, {
      text: 'Vue',
      link: '/webNote/vue/'
    }, {
      text: 'React',
      link: '/webNote/react/'
    }, {
      text: 'Mobile',
      link: '/webNote/mobile/'
    }]
  }, 
  {
    text: '后端',
    items: [{
      text: 'Python',
      // link: '/backEnd/python/'
      items: [
        {
          text: '基础语法',
          link: '/backEnd/python/'
        }, {
          text: '模块',
          link: '/backEnd/python/modules/01-time'
        }, {
          text: '编程思维',
          link: '/backEnd/python/thinking/01-problem'
        }, {
          text: '小游戏',
          link: '/backEnd/python/games/01-KOF'
        }, {
          text: '大项目',
          link: '/backEnd/python/project/01-email'
        }, {
          text: '爬虫',
          link: '/backEnd/python/spider/'
        }
      ]
    }, {
      text: 'MySQL',
      // link: '/backEnd/MySQL/'
      items: [
        {
          text: '基础',
          link: '/backEnd/MySQL/'
        }
      ]
    }, {
      text: 'Java',
      // link: '/backEnd/Java/'
      items: [
        {
          text: '基础',
          link: '/backEnd/Java/'
        }
      ]
    }]
  },
  {
    text: '工具',
    items: [{
        text: 'VuePress',
        link: '/devTools/vuepress/'
      },
      {
        text: 'GitBook',
        link: '/devTools/gitbook/'
      },
      {
        text: 'GitHub',
        link: '/devTools/github/'
      },
      {
        text: 'NPM',
        link: '/devTools/npm/'
      }
    ]
  },
  {
    text: '生活',
    ariaLabel: '记录生活',
    items: [
      {
        text: '文集',
        items: [
          {
            text: '日记',
            link: '/diarys/diary/'
          }, {
            text: '感悟随笔',
            link: '/diarys/essays/'
          }, {
            text: '创意想法',
            link: '/diarys/creative/'
          }, {
            text: '小说',
            link: '/diarys/novel/'
          }
        ]
      },
      {
        text: '摄影',
        items: [
          {
            text: '生活',
            link: '/photograph/dailyLife/'
          }, {
            text: '风景',
            link: '/photograph/scenery/'
          }
        ]
      },
      {
        text: '爱好',
        items: [
          {
            text: '绘画',
            link: '/hobby/painting/'
          }, {
            text: '音乐',
            link: '/hobby/music/'
          }, {
            text: '电影',
            link: '/hobby/movie/'
          }
        ]
      }
    ]
  },
  {
    text: '关于',
    items: [{
      text: '关于我',
      link: '/about/'
    }, {
      text: '与我联系',
      link: '/about/contact/'
    }, {
      text: '我的博客',
      link: '/about/myblog/'
    }, {
      text: '博客园',
      link: 'http://www.cnblogs.com/padding1015/'
    }, {
      text: 'Github',
      link: 'https://github.com/xingorg1'
    }, {
      text: 'NPM',
      link: 'https://www.npmjs.com/~xing.org1'
    }, {
      text: '掘金',
      link: 'https://juejin.im/user/58e704a02f301e0062343c10'
    }]
  }
]
