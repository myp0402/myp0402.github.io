---
layout: post
title: 解决pnpm找不到GLOBAL_BIN_DIR问题
date: 2024-07-18 15:39:16
---

时隔半年 又来更新博客

然而 Valaxy 命令找不到了 遂直接重装

```bash
sudo pnpm i -g valaxy
```

不出意外 直接报错

```bash
 ERR_PNPM_NO_GLOBAL_BIN_DIR  Unable to find the global bin directory

Run "pnpm setup" to create it automatically, or set the global-bin-dir setting, or the PNPM_HOME env variable. The global bin directory should be in the PATH.
```

~~（原地升天）~~

于是把pnpm也重装一遍

```bash
sudo npm rm -g pnpm
sudo npm i -g pnpm
```

然而 还是不行

之后百般尝试 发现用pnpm全局安装的时候不需要`sudo`

加上之后 应该是在`root`那里找`global bin dir`去了

去掉`sudo` 问题解决 也就是`pnpm i -g valaxy`