module.exports = {
  title: 'wiki.laranhee',
  base: '/wiki/',
  themeConfig: {
    nav: [
      { text: 'pages', link: '/pages/' },
      { text: 'blog', link: 'https://laranhee.github.io' },
    ],
    sidebar: { '/pages/': ['', 'prettier-with-githook'] },
    sidebarDepth: 3,
  },
};
