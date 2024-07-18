---
layout: post
title: 图论中的DFS和BFS及其应用
date: 2024-07-18 15:48:02
---

> 约定 本文中$n$为节点数量 $m$为边的数量

## 图的存储

树与图的存储方式相同 有邻接矩阵和邻接表两种方式

注：$G$是一张有$n-1$条边的图 $\Leftrightarrow$ $G$是一棵二叉树

### 邻接矩阵

```cpp
int u, v;
cin >> n >> m;
for (int i = 1; i <= m; i++) {
        cin >> u >> v;
        g[u][v] = 1;
}
```

显然 空间复杂度是$O(n^2)$的 只要$n$的规模稍大（如$10^5$）就会MLE

一般用于稠密图

### 邻接表

直接告知节点$u$与$v$相连的情况：

```cpp
vector<int> g[N]

cin >> n >> m;

for (int i = 1; i <= m; i++) {
        int u, v;
        g[u].push_back(v);
        // 双向建边对于树而言没有区别 但对于有向图需要注意
        g[v].push_back(u);
}
```

采用「根-左子-右子」的方式

```cpp
for (int i = 1; i <= m; i++) {
        int w, u, v;
        cin >> w >> u >> v;
        if (u) {
                g[w].push_back(u);
                g[u].push_back(w);
        }
        if (v) {
                g[w].push_back(v);
                g[v].push_back(w);
        }
}
```

#### 带有边权时
使用
```cpp
vector< pair<int, int> > g[N];
```
将边权和子节点均存储到二元组即可 使用`v.first`和`v.second`访问

好了 接下来该说DFS了

## 深度优先搜索（DFS）

这里使用邻接表存储

在需要求距离时 可以去除$\texttt{vis}$数组

### 基本框架

```cpp
bool vis[N];
void dfs(int u, int fa)
{
        for (auto v : g[u]) {
                if (vis[v]) continue;
                vis[v] = 1;
                dfs(v, u);
        }
}
```

### 对于求距离

```cpp
int dis[N];

void dfs(int u, int fa)
{
        for (auto v : g[u]) {
                if (dis[v] != INF) {
                        dis[v] = dis[u] + 1;
                        vis[v] = 1;
                        dfs(v, u);
                }
        }
}

int main()
{
        something_to_do

        fill(dis + 1, dis + n + 1, INF);
        // 根节点到自身距离为 0
        dis[1] = 0;
        // 节点 1 的父亲节点为 0
        dfs(1, 0);
}
```

## 广度优先搜索（BFS）

> 备忘：BFS**不是**递归函数

仍然使用邻接表存储

### 基本框架

```cpp
queue<int> q;

void bfs()
{
        vis[1] = 1;
        q.push(1);
        while (!q.empty()) {
                int u = q.front();
                q.pop();
                for (auto v : g[u]) {
                        if (vis[v]) continue;
                        vis[v] = 1;
                        q.push(v);
                }
        }
}
```

### 求距离

注：BFS中$\texttt{vis}$数组**不可省略**

```cpp
queue<int> q;

void bfs()
{
        vis[1] = 1;
        q.push(1);
        while (!q.empty()) {
                int u = q.front();
                q.pop();
                for (auto v : g[u]) {
                        if (vis[v]) continue;
                        vis[v] = 1;
                        q.push(v);
                        dis[v] = dis[u] + 1;
                }
        }
}
```

## 跋

## 使用vector传引用

考虑到函数的复用 可在参数位置传递图数组的引用
```cpp
template<typename T, size_t SIZE>
void dfs(T u, T fa, T (&_g)[SIZE]);

// 调用
dfs(1, 0, g);
```

## 清洗数组
在存在多组数据或需要对多个节点进行搜索时 需要清洗数组

对于BFS 不需要清空队列 因为BFS在队列不为空时 会持续循环

```cpp
// 清空邻接表
for (int i = 1; i <= n; i++) {
        vector<int>().swap(g[i]);
}

//清空 vis 和 dis
memset(vis, 0, sizeof(vis));
memset(vis, 0, sizeof(dis));
```
