import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "XH'BLOG",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/avator.png",
    author: "reco_luan",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "面试题", children:[
        { text: "Vue2", link: "/docs/vue3/vue3基础.md" },
        { text: "Vue3", link: "/docs/vue3/vue3基础.md" },
        { text: "React", link: "/docs/vue3/vue3基础.md" },
      ]},
      // { text: "JS", children:[] },
      {
        text: "框架",
        children: [
          { text: "Vue3", link: "/docs/vue3/vue3基础.md" },
          { text: "REACT", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
    },
  }),
  // debug: true,
});
