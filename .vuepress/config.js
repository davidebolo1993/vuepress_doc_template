module.exports = {
  title: 'Manual',
  base: '/manual/',
  dest: 'public',
  theme: 'vt',
  themeConfig: {
    enableDarkMode: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact/contact.md' },
      { text: 'GitHub', link: 'https://github.com/davidebolo1993/vuepress_doc_template' }
    ],
    sidebar: ['/contact/contact.md'],
  }
}

