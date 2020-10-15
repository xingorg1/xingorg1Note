// nav 菜单栏配置
module.exports = [
  // {
  //   text: '主页',
  //   link: '/'
  // },
  {
    text: '前端基础',
    items: [{
      text: 'HTTP',
      link: '/webNote/http/'
    },{
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
      text: 'Mobile',
      link: '/webNote/mobile/'
    }, {
      text: 'Browser',
      link: '/webNote/browser/'
    }]
  },
  {
    text: '前端进阶',
    items: [{
      text: '模块化',
      link: '/webAdvance/modularity/'
    }, {
      text: '包管理器',
      link: '/webAdvance/packageManager/'
    }, {
      text: 'Vue',
      link: '/webAdvance/vue/'
    }, {
      text: 'React',
      link: '/webAdvance/react/'
    },  {
      text: 'TS',
      link: '/webAdvance/typescript/'
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
          text: '小练习',
          link: '/backEnd/python/practice/00-base'
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
        text: '爱好',
        items: [
          {
            text: '绘画',
            link: '/hobby/painting/'
          }, {
            text: '音乐',
            link: '/hobby/music/'
          }, {
            text: '影视',
            link: '/hobby/movie/'
          }, {
            text: '英语',
            link: '/hobby/english/'
          }
        ]
      },
      {
        text: '文集',
        items: [
          {
            text: '日记',
            link: '/diarys/diary/'
          }, {
            text: '阅读',
            link: '/diarys/reading/'
          }, {
            text: '感悟',
            link: '/diarys/essays/'
          }, {
            text: '奇思',
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
      }
    ]
  },
  {
    text: '关于',
    items: [{
      text: '名称由来',
      link: '/about/'
    }, {
      text: '我的履历',
      link: '/about/aboutMe/'
    }, {
      text: '与我联系',
      link: '/about/contact/'
    }, {
      text: '我的博客',
      link: '/about/myblog/'
    }, {
      text: '模范灯塔',
      link: '/about/model/'
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
    }, {
      text: '语雀',
      link: 'https://www.yuque.com/xing.org1'
    }]
  }
]
