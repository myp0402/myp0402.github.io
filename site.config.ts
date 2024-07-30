import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  mode: "light",
  lang: 'zh-CN',
  title: 'mypの小窝',
  subtitle: '上帝保佑emoji正常显示',
  description: '一只高中生的博客',
  author: {
    name: 'Ma Yuanpeng',
    avatar: '/images/avatar.jpg',
    status: {
      emoji: '🫥',
    },
  },
  url: 'https://myp0402.github.io/',
  mediumZoom: { enable: true },
  lastUpdated: false,
  license: {
    enabled: true,
    type: 'by-nc-nd',
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/myp0402',
      icon: 'i-ri-github-line',
      color: '#181717',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/452052550',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:mayuanpeng0402@126.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '追番列表',
      link: '/bangumi',
      icon: 'i-material-symbols-bookmark-heart-outline',
      color: '#FF8EB3',
    },
    {
      name: '异次元之旅',
      link: 'https://travel.moe/go.html?travel=on',
      icon: 'i-ri-planet-line',
      color: '#E77C8E',
    },
  ],

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  search: {
    enable: false,
    type: 'fuse',
  },

  comment: {
    enable: true,
  },

  statistics: {
    enable: true,
  },
  encrypt: {
    enable: true,
  },
})