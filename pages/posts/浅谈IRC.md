---
title: 浅谈IRC历史和使用
date: 2022-06-07 15:15:04
tags:
- IRC
- 聊天
- 教程
---

# 浅谈IRC历史和使用

*特别声明：本文章使用CC BY-SA 3.0条款，请勿参考其他文章的CC BY-NC-SA 4.0条款！

> 题记：目前像微信、QQ等等聊天软件充斥着互联网聊天环境，是否还有一股聊天的清流？

## 关于IRC
IRC全称为Internet Relay Chat，互联网中继聊天

IRC（Internet Relay Chat）是一种应用层的协议。其主要用于群体聊天，但同样也可以用于个人对个人的聊天。IRC使用的服务器端口有6667（明文传输，如irc://irc.libera.chat）、6697（SSL加密传输，如ircs://irc.libera.chat:6697）等。[^1]

可能对于目前而言，IRC这种方式的聊天可能让人觉得非常落后，而且十分不便，的确如此，但IRC诞生于1988年~~（我还没出生）~~，也就是文字互联网时代，这样看的话，似乎也还可以接受，对吧

目前的IRC服务器并不多了，主要有以下几个：

- Libera Chat
- OFTC
- IRCnet
- Undernet
- Rizon
- DFnet
- Freenode
- QuakeNet
- DALnet

目前最为活跃的是Libera Chat，之前是Freenode，但Freenode被一位名为[安德鲁·李](https://zh.wikipedia.org/wiki/安德魯·李)的韩裔美国企业家使用模糊的法律程序“夺走”（甚至Frenode在网站上宣布成为’朝鲜帝国‘的数字领土），从而导致大部工作者集体辞职以及不当管理（无故封禁聊天频道），大多聊天频道迁移至[LiberaChat](https://libera.chat)（由离职员工创建的开源聊天服务器）

## IRC使用

说了一堆~~没用的~~介绍，接下来就来说说具体的使用

### IRC客户端

想要连接IRC服务器需要客户端，IRC客户端非常多，而且支持大多平台，下面介绍几种常用的

#### GUI客户端

##### [mIRC](https://www.mirc.com)

Windows下最受欢迎的IRC客户端，历史悠久，闭源，收费

##### [Hexchat](https://hexchat.github.io/)

兼容Windows和Linux，免费，开源

##### [LimeChat](http://limechat.net/mac/)

仅支持MacOS和IOS，不过使用体验很好，个人推荐，免费开源

##### [Konversation](https://konversation.kde.org/)

支持Windows和Linux，是KDE制作的IRC客户端，包含在KDE桌面的附加软件包组里

##### [Adium](https://www.adium.im)

仅支持MacOS，开源免费

##### [Textual](https://www.codeux.com/textual/)

仅支持MacOS，收费

##### [Palaver](https://apps.apple.com/us/app/palaver/id538073623)

IOS下的收费IRC客户端

##### RevolutionIRC（[Google Play](https://play.google.com/store/apps/details?id=io.mrarm.irc)、[Fdroid](https://f-droid.org/packages/io.mrarm.irc/)）

Android下的免费IRC客户端，开源免费

顺带一提，RevolutionIRC作者[MrARM](https://mrarm.io)同时是Toolbox的作者，没错，Minecraft的那个Toolbox

#### 终端客户端

##### [Weechat](https://weechat.org)

不是WeChat，人家比微信早了好久，03年就有了，微信那时候还没有嘞

开源、免费，在好多软件源都有，brew也是有的（MacOS用户狂喜）

##### [Irssi](https://irssi.org/)

一个支持特别宽泛的终端客户端，（Linux, BSD, Solaris, Haiku, Apple, Cygwin），连Solaris都支持是什么鬼

#### 在线客户端

##### [KiwiIRC](https://web.libera.chat/)

LiberaChat上有，界面现代，体验良好

##### [gamja](https://web.libera.chat/gamja)

LiberaChat上也有

### 客户端的使用

不可能事无巨细的说，话说用IRC的人应该都不用教吧，小白建议直接用在线客户端，简单好使

#### LimeChat

安装不讲了，打开之后长这样

![image-20220609145252209](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220609145252209.png)

输入昵称（Nickname），填入IRC服务器，Channels可以提前加上

比如这样：

![image-20220609150851883](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220609150851883.png)

~~我好像暴露了真名~~，算了不管了

然后，点OK直接就可以登进去了，没有密码，简单吧

![image-20220609151133924](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220609151133924.png)

不过呢，简单也是会有问题的，比如你叫A，随后别人随便拿A这个名字登陆冒充你，这是不太美好的，因此我们可以为昵称设置密码，这样别人也就无法冒充你了

![image-20220610085055546](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220610085055546.png)

点击你的IRC服务器，在输入框内输入`/nick YourNickName`，注册昵称

![image-20220610091033528](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220610091033528.png)

随后再输入`/msg NickServ REGISTER YourPassword email@example.com`，设置密码和邮箱，随后会有一封验证邮件发送至邮箱中，大概长这样：

> ```
> YourNickName,
> 
> In order to complete your account registration, you must type the following
> command on IRC:
> 
> /msg NickServ VERIFY REGISTER YourNickName VERIFY_CODE
> 
> Thank you for registering your account on the Libera.Chat IRC network!
> 
> --
> This e-mail was sent due to a command from YourNickName[WHOIS]
> at Mon, 23 May 2022 05:48:36 +0000.  If this message is unsolicited, please contact support@libera.chat
> with a full copy.
> ```

随后输入邮件中提示的命令，通过验证码即可验证账户，否则会在24小时之内删除，之后，你就占用了这个昵称，别人无法使用

以后再登录的时候，要验证密码，使用命令：`/msg NickServ IDENTIFY YourNickName <password>`即可

#### Adium

这个IRC客户端我同样用过，只不过会有一些问题，就是聊天无法滚动，你要自己向下托，很烦

![image-20220610092659395](https://raw.githubusercontent.com/myp0402/BlogComment/main/imagesimage-20220610092659395.png)

界面就长这样，有点类似于早年的QQ界面，具体使用不讲了，都差不多

## 结语

不难发现，IRC客户端的历史基本都十分悠久~~（低情商：UI太丑）~~，不过呢，也一直存在到了现在，也是有理由的

并且，现在的一些聊天频道也是在电报同步消息的，所以大可不必担心不会使用

部分内容参考维基百科：

https://zh.wikipedia.org/wiki/IRC

https://zh.wikipedia.org/wiki/Freenode

[https://zh.wikipedia.org/wiki/安德魯·李/](https://zh.wikipedia.org/wiki/安德魯·李)

<a href="./%E6%91%98%E8%87%AA%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91" target="_blank" rel="noreferrer">./%E6%91%98%E8%87%AA%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91</a>