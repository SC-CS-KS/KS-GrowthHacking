// .vuepress/config.js
module.exports = {
  title: '增长黑客知识库',  // 设置网站标题
  description : "",
  base : '/KS-GrowthHacking/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: '《增长黑客-创业公司的收入和增长秘籍》',   // 必要的
        path: '/_books/GrowthHacker/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/_books/GrowthHacker/notes/01.md',
          '/_books/GrowthHacker/notes/02.md',
          '/_books/GrowthHacker/notes/03.md',
          '/_books/GrowthHacker/notes/04.md',
          '/_books/GrowthHacker/notes/05.md',
          '/_books/GrowthHacker/notes/06.md',
          '/_books/GrowthHacker/notes/07.md',
          '/_books/GrowthHacker/notes/08.md',
        ]
      },
      {
        title: 'GrowingIO',   // 必要的
        path: '/_books/GrowingIO/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/_books/GrowingIO/CGO/',
          '/_books/GrowingIO/growth-hacking-handbook/',
          '/_books/GrowingIO/UBDA/',
        ]
      },
      {
        title: '《用户画像》',   // 必要的
        path: '/_books/user-profile/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
    ]
  }
}
