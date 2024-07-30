import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonTwikoo } from 'valaxy-addon-twikoo'
import { addonBangumi } from 'valaxy-addon-bangumi'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  
  themeConfig: {
    banner: {
      enable: true,
      title: ['myp','の','小','窝'],
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-iconamoon-comment-dots',
        color: '#4783ff',
      },
    ],

    footer: {
      since: 2022,
      icon: {
        enable: true,
        name: 'i-mdi-github',
        animated: false,
        color: '#0078E7',
        url: 'https://github.com/myp0402',
        title: '只是为了填上这个位置'
      },
      powered: true,
      beian: {
        enable: true,
        icp: '萌ICP备20222306号',
      },
    },

    bg_image: {
      enable: true,
      url: '/images/aharen_bg.jpg',
      opacity: 1,
    },
  },

  unocss: { safelist },

  addons: [
    addonTwikoo({
      envId: 'https://myp0402-twikoo.hf.space',
    }),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bilibiliEnabled: false,
      bilibiliUid: '452052550',
      bgmUid : '900675'
    }),
  ],
})
