
# 评测指标
对于某一个样本$x_i$, 我们有:

真实标签（$N_i$个18元组）： $(g_1^1, g_1^2, ..., g_1^{18})$, $(g_2^1, g_2^2, ..., g_2^{18})$, $(g_3^1, g_3^2, ..., g_3^{18})$, ..., $(g^1_{N_i}, g^2_{N_i}, ..., g^{18}_{N_i})$

模型预测（$M_i$个18元组）： $(p_1^1, p_1^2, ..., p_1^{18})$, $(p_2^1, p_2^2, ..., p_2^{18})$, $(p_3^1, p_3^2, ..., p_3^{18})$, ..., $(g^1_{M_i}, g^2_{M_i}, ..., g^{18}_{M_i})$

---

令$K=min(N_i, M_i)$

给定一个标签-预测的配对结果： $T=\{(G_1, P_1)$, $(G_2, P_2)$, ..., $(G_K, P_K)\}$,

我们计算 $T$ 下的正确预测元组数量 $C_T$ :

$C_T = \sum_{i=1}^Kcount(G_i, P_i)$

$count(G_i, P_i) = \frac{\sum_{j\in I}\frac{|G_i^j \cap P_i^j|}{|G_i^j \cup P_i^j|}}{\sum_{j\in I}}$

其中 $I$ 为非双 $null$ 的下标集合（两个都为 $null$ ： 没办法计算
$\frac{|G_i^j \cap P_i^j|}{|G_i^j \cup P_i^j|}$ ；其中一个为 $null$ ： $\frac{|G_i^j \cap P_i^j|}{|G_i^j \cup P_i^j|}=0$ ）。


对于 $x_i$ ，遍历所有可能的匹配，取最大的正确数量为 $x_i$ 的最终正确数量 $C_i$

---
例如， 假定为 $2$ 元组, 对于数据 $x_i$ , 有:

真实标签：$(abc, 123)$, $(def, 456)$

模型预测：$(aef, 156)$, $(def, 123)$


共有两种标签-预测的匹配方案：

$T_1=\{[(abc, 123),(aef, 156)], [(def, 456), (def, 123)]\}$

$T_2=\{[(abc, 123),(def, 123)], [(def, 456), (aef, 156)]\}$

匹配$T_1$的正确数量为
$C_{T_1} = \frac{\frac{|abc \cap aef|}{|abc \cup aef|} + \frac{|123 \cap 156|}{|123 \cup 156|}}{2} + \frac{\frac{|def \cap def|}{|def \cup def|} + \frac{|456 \cap 123|}{|456 \cup 123|}}{2} = \frac{\frac{1}{5} + \frac{1}{5}}{2} + \frac{\frac{3}{3} + \frac{0}{6}}{2}=\frac{7}{10}$

匹配$T_2$的正确数量为
$C_{T_2} = \frac{\frac{|abc \cap def|}{|abc \cup def|} + \frac{|123 \cap 123|}{|123 \cup 123|}}{2} + \frac{\frac{|def \cap aef|}{|def \cup aef|} + \frac{|456 \cap 156|}{|456 \cup 156|}}{2} = \frac{\frac{0}{6} + \frac{3}{3}}{2} + \frac{\frac{2}{4} + \frac{2}{4}}{2}=1$

所以最终 $x_i$ 的正确预测数量为 $1$ （预测数量为2，标签数量为2）。

---

数据集最终的 $F1$ 值定义为：


$F1 = \frac{2 * Precision * Recall}{Presion + Recall}$


$Precison$ = $\frac{\sum_{i=1}C_i}{\sum_{i=1}M_i}$

$Recall$ = $\frac{\sum_{i=1}C_i}{\sum_{i=1}N_i}$

---

遍历所有匹配复杂度太高。
带权二分图匹配
KM算法
费用流算法

---

<!-- # Baseline
使用生成模型，$Bart$+指针网络，生成key+index。 -->
