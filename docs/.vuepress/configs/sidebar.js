const {
  fs,
  path
} = require('@vuepress/shared-utils')

function getMenusChildren(address, site) {
  const menusList = []
  fs.readdirSync(path.resolve(__dirname, address)) // 获取指定目录下的所有文件和文件夹名称列表
    .filter(filename => {
      if (filename.indexOf('.') > 0) {
        let filesName = filename.slice(0, -3).replace('README', '')
        menusList.push(site + filesName)
      }
    })
  menusList.sort()
  return menusList
}
module.exports = {
  getWebNoteSidebar(titleName) {
    return [
      ['', titleName],
      {
        title: 'HTTP',
        collapsable: true,
        children: getMenusChildren('../../webNote/http', 'http/')
      },{
        title: 'Html',
        collapsable: true,
        children: getMenusChildren('../../webNote/web', 'web/')
      },
      {
        title: 'Css',
        collapsable: true,
        children: getMenusChildren('../../webNote/css', 'css/')
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [{
          title: '合集',
          collapsable: true,
          children: getMenusChildren('../../webNote/js', 'js/')
        },{
          title: '语法',
          collapsable: true,
          children: getMenusChildren('../../webNote/js/api', 'js/api/')
        }]
      },
      {
        title: 'ESMAScript 6',
        collapsable: true,
        children: getMenusChildren('../../webNote/es', 'es/')
      },
      {
        title: '移动端',
        collapsable: true,
        children: getMenusChildren('../../webNote/mobile', 'mobile/')
      },
      {
        title: '浏览器',
        collapsable: true,
        children: getMenusChildren('../../webNote/browser', 'browser/')
      }
    ]
  },
  getWebAdvanceSidebar(titleName) {
    return [
      ['', titleName],
      {
        title: '模块化',
        collapsable: true,
        children: getMenusChildren('../../webAdvance/modularity', 'modularity/')
      },
      {
        title: '包管理器',
        collapsable: true,
        children: getMenusChildren('../../webAdvance/packageManager', 'packageManager/')
      },
      {
        title: 'Vue',
        collapsable: true,
        children: getMenusChildren('../../webAdvance/vue', 'vue/')
      },
      {
        title: 'React',
        collapsable: true,
        children: getMenusChildren('../../webAdvance/react', 'react/')
      },
      {
        title: 'TS',
        collapsable: true,
        children: getMenusChildren('../../webAdvance/typescript', 'typescript/')
      }
    ]
  },
  getDevToolsSidebar() {
    return [
      'vuepress/',
      'gitbook/',
      {
        title: 'github',
        collapsable: true,
        children: getMenusChildren('../../devTools/github', 'github/')
      },
      {
        title: 'npm',
        collapsable: true,
        children: getMenusChildren('../../devTools/npm', 'npm/')
      }
    ]
  },
  getBackEndSidebar() {
    return [{
      title: 'Python',
      collapsable: true,
      children: [{
        title: '基础语法',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python', 'python/')
      },{
        title: '模块',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/modules', 'python/modules/')
      },{
        title: '编程思维',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/thinking', 'python/thinking/')
      },{
        title: '小练习',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/practice', 'python/practice/')
      },{
        title: '小游戏',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/games', 'python/games/')
      },{
        title: '大项目',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/project', 'python/project/')
      },{
        title: '爬虫',
        collapsable: true,
        children: getMenusChildren('../../backEnd/python/spider', 'python/spider/')
      }]
    }, {
      title: 'MySQL',
      collapsable: true,
      children: getMenusChildren('../../backEnd/MySQL', 'MySQL/')
    }, {
      title: 'Java',
      collapsable: true,
      children: getMenusChildren('../../backEnd/Java', 'Java/')
    }]
  },
  getDiarysSidebar() {
    return [{
        title: '日记',
        collapsable: true,
        children: getMenusChildren('../../diarys/diary', 'diary/')
      },
      {
        title: '阅读',
        collapsable: true,
        children: [{
          title: '假如给我三天光明',
          collapsable: true,
          children: getMenusChildren('../../diarys/reading/three_days_to_see', 'reading/three_days_to_see/')
        },{
          title: '你不该输在情绪上',
          collapsable: true,
          children: getMenusChildren('../../diarys/reading/emotion', 'reading/emotion/')
        }]
      },
      {
        title: '随笔',
        collapsable: true,
        children: getMenusChildren('../../diarys/essays', 'essays/')
      },
      {
        title: '奇特想法',
        collapsable: true,
        children: getMenusChildren('../../diarys/creative', 'creative/')
      },
      {
        title: '小说',
        collapsable: true,
        children: getMenusChildren('../../diarys/novel', 'novel/')
      }
    ]
  },
  getPhotographSidebar() {
    return [
      'dailyLife/',
      'scenery/'
    ]
  },
  getHobbySidebar() {
    return [{
        title: '绘画',
        collapsable: true,
        children: getMenusChildren('../../hobby/painting', 'painting/')
      },
      {
        title: '音乐',
        collapsable: true,
        children: getMenusChildren('../../hobby/music', 'music/')
      },
      {
        title: '影视',
        collapsable: true,
        children: getMenusChildren('../../hobby/movie', 'movie/')
      },
      {
        title: '英语',
        collapsable: true,
        children: [{
          title: '英语学习',
          collapsable: true,
          children: getMenusChildren('../../hobby/english', 'english/')
        },{
          title: '英语思维',
          collapsable: true,
          children: getMenusChildren('../../hobby/english/englishThinking', 'english/englishThinking/')
        }]
      }
    ]
  },
  getAboutSidebar(titleName) {
    return [
      ['', titleName], {
        collapsable: false,
        children: getMenusChildren('../../about/aboutMe', 'aboutMe/')
      }, {
        collapsable: false,
        children: getMenusChildren('../../about/contact', 'contact/')
      }, {
        collapsable: false,
        children: getMenusChildren('../../about/myblog', 'myblog/')
      }, {
        collapsable: false,
        children: getMenusChildren('../../about/model', 'model/')
      }
    ]
  }
}
