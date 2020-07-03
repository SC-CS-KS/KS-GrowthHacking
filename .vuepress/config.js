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
        title: '《硅谷增长黑客实战笔记》',   // 必要的
        path: '/a-books/GH-practice-notes/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/a-books/GH-practice-notes/notes/01.md',
          '/a-books/GH-practice-notes/notes/02.md',
          '/a-books/GH-practice-notes/notes/03.md',
          '/a-books/GH-practice-notes/notes/04.md',
          '/a-books/GH-practice-notes/notes/05.md',
          '/a-books/GH-practice-notes/notes/06.md',
          '/a-books/GH-practice-notes/notes/07.md',
          '/a-books/GH-practice-notes/notes/08.md',
        ]
      },
      {
        title: '《用户增长方法论：找到产品长盛不衰的增长曲线》',   // 必要的
        path: '/a-books/user-growth-methodology/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/a-books/user-growth-methodology/notes/01.md',
          '/a-books/user-growth-methodology/notes/02.md',
          '/a-books/user-growth-methodology/notes/03.md',
          '/a-books/user-growth-methodology/notes/04.md',
          '/a-books/user-growth-methodology/notes/05.md',
          '/a-books/user-growth-methodology/notes/06.md',
          '/a-books/user-growth-methodology/notes/07.md',
          '/a-books/user-growth-methodology/notes/08.md',
          '/a-books/user-growth-methodology/notes/09.md',
          '/a-books/user-growth-methodology/notes/10.md',
          '/a-books/user-growth-methodology/notes/11.md',
          '/a-books/user-growth-methodology/notes/12.md',
          '/a-books/user-growth-methodology/notes/13.md',
          '/a-books/user-growth-methodology/notes/14.md',
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
        children: [
          '/a-books/user-profile/notes/01.md',
          '/a-books/user-profile/notes/02.md',
          '/a-books/user-profile/notes/03.md',
          '/a-books/user-profile/notes/04.md',
          '/a-books/user-profile/notes/05.md',
          '/a-books/user-profile/notes/06.md',
          '/a-books/user-profile/notes/07.md',
          '/a-books/user-profile/notes/08.md',
          '/a-books/user-profile/notes/09.md',
        ]
      },
      {
        title: '《超级转化率》',   // 必要的
        path: '/a-books/super-conversion-rates/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/a-books/super-conversion-rates/notes/01.md',
          '/a-books/super-conversion-rates/notes/02.md',
          '/a-books/super-conversion-rates/notes/03.md',
          '/a-books/super-conversion-rates/notes/04.md'
        ]
      },
    ]
  }
}
