---
layout: post
title: OI备忘
date: 2024-07-18 15:13:14
---

1. 关闭同步流后不能 `scanf` `printf` 但可以`puts`
2. 不是全局变量记得初始化
3. 三目运算符使用 `cout` 输出时 要加最外层括号

例：
```cpp
cout << ((find(i)==find(j))?(abs(pd[i]-pd[j])-1):(-1)) << endl;
```
4. 检查输入时 `g[i].u g[i].v g[i].w`

二叉树深度：$\left \lfloor \log_2 n \right \rfloor + 1$

$2^n - 1$是整棵树的节点数 $2^{n-1}$是深度为$n$的节点数

二叉树性质：$n_0 = n_2 + 1$

完全二叉树，顺序存储

先序遍历，`dfs`第一次

中序遍历，向上投影顺序

后序遍历，`dfs`第二次