module.exports = {
  title: 'wiki.laranhee',
  base: '/wiki/',
  themeConfig: {
    nav: [
      { text: 'pages', link: '/pages/' },
      { text: 'blog', link: 'https://laranhee.github.io' },
    ],
    sidebar: {
      '/pages/': [
        {
          title: '목록',
          collapsable: false,
          children: ['prettier-with-githook', 'git-delete-remote-branch'],
        },
      ],
    },
    sidebarDepth: 3,
  },
};
