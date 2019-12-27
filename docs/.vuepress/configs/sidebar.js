
const {
  fs,
  path
} = require('@vuepress/shared-utils')
function getMenusChildren(address, site) {
  const menusList = []
   fs.readdirSync(path.resolve(__dirname, address)) // 获取指定目录下的所有文件和文件夹名称列表
    .filter(filename => {
      if(filename.indexOf('.')>0){
        let filesName = filename.slice(0, -3).replace('README','')
        menusList.push(site + filesName)
      }
    })
  menusList.sort()
  return menusList
}
module.exports = {
  getWebNoteSidebar(titleName) {
    return [['', titleName],{
        title: 'Html',
        collapsable: false,
        children: getMenusChildren('../../webNote/web', 'web/')
      },
      {
        title: 'Css',
        collapsable: false,
        children: getMenusChildren('../../webNote/css', 'css/')
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: getMenusChildren('../../webNote/js', 'js/')
      },
      {
        title: 'ESMAScript 6',
        collapsable: false,
        children: getMenusChildren('../../webNote/es', 'es/')
      },
      {
        title: 'Vue',
        collapsable: false,
        children: getMenusChildren('../../webNote/vue', 'vue/')
      },
      {
        title: 'React',
        collapsable: false,
        children: getMenusChildren('../../webNote/react', 'react/')
      },
      {
        title: '移动端',
        collapsable: false,
        children: getMenusChildren('../../webNote/mobile', 'mobile/')
      }
    ]
  },
  getDevToolsSidebar() {
    return [
      'gitbook/',
      'vuepress/',
      'github/'
    ]
  },
  getBackEndSidebar() {
    return [{
      title: 'Python',
      collapsable: false,
      children: getMenusChildren('../../backEnd/python', 'python/')
    },{
      title: 'MySQL',
      collapsable: false,
      children: getMenusChildren('../../backEnd/MySQL', 'MySQL/')
    },{
      title: 'Java',
      collapsable: false,
      children: getMenusChildren('../../backEnd/Java', 'Java/')
    }]
  },
  getDiarysSidebar() {
    return [
      'diary/',
      'essays/',
      'creative/',
      'novel/'
    ]
  },
  getPhotographSidebar() {
    return [
      'dailyLife/',
      'scenery/'
    ]
  },
  getHobbySidebar() {
    return [
      'painting/',
      'music/',
      'movie/'
    ]
  },
  getAboutSidebar(titleName) {
    return [
      ['',titleName],{
        collapsable: false,
        children: getMenusChildren('../../about/aboutMe', 'aboutMe/')
      },{
        collapsable: false,
        children: getMenusChildren('../../about/contact', 'contact/')
      }
    ]
  }
}