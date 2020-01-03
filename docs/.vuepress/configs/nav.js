// nav 菜单栏配置
module.exports = [{
    text: '主页',
    link: '/'
  }, {
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
      text: '移动端',
      link: '/webNote/mobile/'
    }]
  }, {
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
      }
    ]
  },
  {
    text: '后端',
    items: [{
      text: 'Python',
      link: '/backEnd/python/'
    }, {
      text: 'MySQL',
      link: '/backEnd/MySQL/'
    }, {
      text: 'Java',
      link: '/backEnd/Java/'
    }]
  },
  {
    text: '文集',
    items: [{
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
    }]
  },
  {
    text: '摄影',
    items: [{
      text: '风景',
      link: '/photograph/scenery/'
    }, {
      text: '生活',
      link: '/photograph/dailyLife/'
    }]
  },
  {
    text: '爱好',
    items: [{
      text: '绘画',
      link: '/hobby/painting/'
    }, {
      text: '音乐',
      link: '/hobby/music/'
    }, {
      text: '电影',
      link: '/hobby/movie/'
    }]
  },
  {
    text: '关于',
    items: [{
      text: '关于我',
      link: '/about/aboutMe/'
    }, {
      text: '与我联系',
      link: '/about/contact/'
    }, {
      text: '我的博客',
      link: 'http://www.cnblogs.com/padding1015/'
    }]
  }
]
