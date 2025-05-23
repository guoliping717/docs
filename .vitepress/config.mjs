import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gordon.Guo全栈编程-开发文档",
  description: "this is gordon.guo code docs",
  themeConfig: {
    outlineTitle: "文章索引",
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', items: [
          { text: 'Vue', link: '/front-end/vue' },
        ]  }
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      "/front-end/vue": set_sidebar("/front-end/vue")
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: 'Copyright © 2025 Gordon.Guo'
    }
  }
})
