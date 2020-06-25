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
        path: '/a-books/GrowthHacker/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/a-books/GrowthHacker/notes/01.md',
          '/a-books/GrowthHacker/notes/02.md',
          '/a-books/GrowthHacker/notes/03.md',
          '/a-books/GrowthHacker/notes/04.md',
          '/a-books/GrowthHacker/notes/05.md',
          '/a-books/GrowthHacker/notes/06.md',
          '/a-books/GrowthHacker/notes/07.md',
          '/a-books/GrowthHacker/notes/08.md',
        ]
      },
      {
        title: 'GrowingIO',   // 必要的
        path: '/a-books/GrowingIO/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/a-books/GrowingIO/CGO/',
          '/a-books/GrowingIO/growth-hacking-handbook/',
          '/a-books/GrowingIO/UBDA/',
        ]
      },
      {
        title: '《用户画像》',   // 必要的
        path: '/a-books/user-profile/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
    ]
  }
}
