// function integrateGitalk(router) {
//   const linkGitalk = document.createElement('link');
//   linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
//   linkGitalk.rel = 'stylesheet';
//   document.body.appendChild(linkGitalk);
//   const scriptGitalk = document.createElement('script');
//   scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
//   document.body.appendChild(scriptGitalk);

//   router.afterEach((to) => {
//     if (scriptGitalk.onload) {
//       loadGitalk(to);
//     } else {
//       scriptGitalk.onload = () => {
//         loadGitalk(to);
//       }
//     }
//   });

//   function loadGitalk(to) {
//     let commentsContainer = document.getElementById('gitalk-container');
//     if (!commentsContainer) {
//       commentsContainer = document.createElement('div');
//       commentsContainer.id = 'gitalk-container';
//       commentsContainer.classList.add('content');
//     }
//     const $page = document.querySelector('.page');
//     if ($page) {
//       $page.appendChild(commentsContainer);
//       if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
//         renderGitalk(to.fullPath);
//       }
//     }
//   }
//   function renderGitalk(fullPath) {
//     const gitalk = new Gitalk({
//       clientID: '****', // 在github上生成的
//       clientSecret: '****', // 在github上生成的 come from github development
//       repo: 'xingorg1Note', // 你的博客的仓库名称
//       owner: 'xingorg1', // 你在githug上的用户名称
//       admin: ['xingorg1'], // 管理成员
//       id: 'comment',
//       distractionFreeMode: false,
//       language: 'zh-CN',
//     });
//     gitalk.render('gitalk-container');
//   }
// }

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  //   try {
  //     document && integrateGitalk(router)
  //   } catch (e) {
  //     console.error(e.message)
  // }
}
