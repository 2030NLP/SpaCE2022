
<br/>

# 第二届中文空间语义理解评测<small>（SpaCE2022）</small>

- 主办单位：北京大学
- 组织者：詹卫东，穗志方
- 工作人员：孙春晖，李楠，邢丹，王诚文，岳朋雪，王希豪，邱晓枫，祝方韦 等
- 联系方式：sc_eval@163.com

<a target="_blank" href="https://2030nlp.github.io/SpaCE2022/register"><span style="color:var(--notice-red)">👉 **点我立即报名** 👈</span></a>

> - [任务简介](#intro)
> - [数据概况](#data-overview)
>   - [任务要求与数据样例](#subtask-overview)
>     - [子任务1：中文空间语义正误判断](#sub-task-1)
>     - [子任务2：中文空间语义异常归因与异常文本识别](#sub-task-2)
>     - [子任务3：中文空间实体识别与空间方位关系标注](#sub-task-3)
>   - [数据规模与分布](#distribution)
>   - [标注结果示例和标注规范文档](#examples)
> - [评测指标](#eval)
> - [比赛日程](#schedule)
> - [报名方式](#register)
> - [奖项设置](#award)
> - [附录](#appendix)



<br/><span id="intro"></span>

### 1.  任务内容

#### 1.1  任务简介

<!-- 空间范畴是人类认知中重要的基础范畴。理解文本中的空间信息不仅需要掌握字词含义，还需要具有常识或背景知识，要调动语言范畴之外的空间想象等认知能力。

空间语义理解在NLP领域也长期受到关注，是NLP评测的重要内容之一，但以往相关评测任务主要关注语言中正确的空间语义信息的分析。人类在能够识别常规、正确的空间信息的同时，还能够识别异常、错误的空间信息。如对于“在四面签一个名字”，人类能够意识到其中存在异常，因为“一个名字”通常不会签在“四面”；又如“跳进山洞外”，“跳进”搭配的必须是表达一个空间内部方位的成分，如“山洞中、山洞里”，无法搭配“山洞外”。显然，空间方位表达的异常存在不同的类型，如词语搭配问题、上下文语义冲突问题、违反常识或背景信息的问题等。

基于以上认识，我们于2021年首次提出中文空间语义理解评测任务（SpaCE，Spatial Cognition Evaluation）。在SpaCE2021的基础上，现组织第二届中文空间语义理解评测（SpaCE2022）， -->

空间范畴是人类认知中重要的基础范畴。理解文本中的空间信息不仅需要掌握字词含义，还需要具有常识或背景知识，要调动语言范畴之外的空间想象等认知能力。

空间语义理解在NLP领域也长期受到关注，是NLP评测的重要内容之一，但以往相关评测任务主要关注语言中正确的空间语义信息的分析。人类在能够识别常规、正确的空间信息的同时，还能够识别异常、错误的空间信息。如对于“在四面签一个名字”，人类能够意识到其中存在异常，因为“一个名字”通常不会签在“四面”；又如“跳进山洞外”，“跳进”搭配的必须是表达一个空间内部方位的成分，如“山洞中、山洞里”，无法搭配“山洞外”。显然，空间方位表达的异常存在不同的类型，如词语搭配问题、上下文语义冲突问题、违反常识或背景信息的问题等。

基于以上认识，我们于2021年依托 <a target="_blank" href="http://cips-cl.org/static/CCL2021/cclEval/taskEvaluation/index.html">CCL2021</a> 成功举办了首届中文空间语义理解评测任务（SpaCE，Spatial Cognition Evaluation）。

今年，我们依托 <a href="http://cips-cl.org/static/CCL2022/index.html" target="_blank">CCL2022</a> ，继续推出<span style="color:var(--notice-red)">**第二届中文空间语义理解评测（SpaCE2022）**</span>。

<a target="_blank" href="https://2030nlp.github.io/SpaCE2022/register"><span style="color:var(--notice-red)">👉 **点我立即报名** 👈</span></a>

本届评测分为如下3个子任务：

**子任务1，中文空间语义正误判断**：判断给定的中文文本中是否存在空间语义异常。

**子任务2，中文空间语义异常归因与异常文本识别**：识别给定中文文本中空间语义异常的片段及其类型。

**子任务3，中文空间实体识别与空间方位关系标注**：基于给定的空间关系标注规范，对给定中文文本进行空间实体的识别与空间方位关系标注。

#### 1.2  与 SpaCE2021 的比较

SpaCE2022 与 SpaCE2021 相比，扩大了数据规模，拓宽了语料类型，改进了任务形式，提高了标注质量，具体变化如 表1 所示：

**表1 两届中文空间语义理解评测对比**

|          | SpaCE2021                                                    | SpaCE2022                                                    |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 子任务   | 子任务1：中文空间语义正误判断<br />子任务2：中文空间语义异常归因合理性判断<br />子任务3：中文空间语义判断与归因联合任务 | 子任务1：中文空间语义正误判断<br />子任务2：中文空间语义异常归因与异常文本识别<br />子任务3：中文空间实体识别与空间方位关系标注任务 |
| 归因类型 | 搭配问题、语义问题、语境问题、常识问题                       | 搭配不当、语义冲突、不符合常识或背景信息                     |
| 语料来源 | 主要来源于CCL语料库，涵盖小说、散文、词典等文体              | 来源更加丰富，涉及文学、体育、新闻、地理、交通等多种领域     |
| 数据规模 | 约 18k 段文本，约 86 万字符                                     | 约 **25k** 段文本，约 285 万字符                             |

<!-- - ① 使用新的语料资源，制作了<span style="color:var(--notice-red)">**全新**</span>的数据集，扩大了数据规模。SpaCE2022 在语料筛选上更加严格，增加了更多更适用于空间语义理解的语料（来自体育、地理、交通等领域），减少了不适合的语料（如武侠小说、散文等）。同时，在制作数据集时引入了更严格的质量控制机制，提高了数据质量。
- ② 调整了子任务2（归因任务）的形式。SpaCE2021 中以判断题的形式来评估机器对空间异常的归因能力，其评估意义不够充分、直接；SpaCE2022 要求参赛系统直接给出存在异常的文本片段及归因类型，能够更直观地体现其归因能力。同时，也调整了归因任务中的归因类型，从先前的 4 种类型凝练为 3 种，更具归纳性。
- ③ 取消了联合任务，增加了标注任务。SpaCE2021 中的子任务3是前两个任务的联合，因此与前两个任务考察的能力有所重复；SpaCE2022 则引入标注型任务，相较于判断和归因，对参赛系统的空间语义理解能力提出了更高要求，与前两个子任务形成层层递进，从而对参赛系统实现更全方位的考察。 -->

> 注：第一届中文空间语义理解评测（SpaCE2021）的相关资源可访问以下链接获取：
>
> - Github 仓库： <a target="_blank" href="https://github.com/2030NLP/SpaCE2021">https://github.com/2030NLP/SpaCE2021</a>
> - 评测网站： <a target="_blank" href="http://ccl.pku.edu.cn:8084/SpaCE2021/">http://ccl.pku.edu.cn:8084/SpaCE2021/</a>
> - CCL2021 评测研讨会资讯： <a target="_blank" href="http://cips-cl.org/static/CCL2021/cclEval/taskEvaluation/index.html">http://cips-cl.org/static/CCL2021/cclEval/taskEvaluation/index.html</a>
<!-- > - Github 仓库： https://github.com/2030NLP/SpaCE2021 -->
<!-- > - 评测网站： http://ccl.pku.edu.cn:8084/SpaCE2021/ -->
<!-- > - 研讨会资讯： http://cips-cl.org/static/CCL2021/cclEval/taskEvaluation/index.html -->



<br/><span id="data-overview"></span>

### 2.  评测数据

<br/><span id="subtask-overview"></span>

#### 2.1  任务要求与数据样例

各子任务的要求说明及样例如下。

<span id="sub-task-1"></span>

##### 2.1.1  子任务1：中文空间语义正误判断

子任务1（中文空间语义正误判断）的数据包含3个部分：① qid：试题编号；② context：待判断的文本材料内容；③ judge：对材料空间语义正误的判断结果（正常为 1 ，异常为 0 ）。该任务要求参赛系统对于输入的 context 返回 judge 。

样例如下：

> 输入：
>
> ```json
> { "qid": "1-train-841",
>   "context": "斯石英可以在实验室里制造，但它们在自然界下存在吗？回答是肯定的。然而它们只出现在沙子被强烈挤压的地方。"  }
> ```
>
> 输出：
>
> ```json
> { "qid": "1-train-841",
>   "judge": 0  }
> ```
>
> 解释： 根据上下文，应该说“在自然界中存在吗”，而不是“在自然界下存在”，因此存在异常，输出 0

关于task1数据的内容，可参考： [SpaCE2022 数据标注文档](https://2030nlp.github.io/Sp22AnnoOL/menu) 。



<br/><span id="sub-task-2"></span>

##### 2.1.2  子任务2：中文空间语义异常归因与异常文本识别

子任务2（中文空间语义异常归因与异常文本识别）的数据包含以下内容：

- ① qid：试题编号；
- ② context：存在空间语义异常的文本；
- ③ reasons：由若干文本片段（fragments）和一个类型标记（type）构成。
  - 每个文本片段（fragment）包含 3 个字段，分别是角色（role）、文本内容（text）和字序数组（idxes）。其中 role 与归因的类型（type）有关。

每个 reason 可能的 type 有以下 3 种：

- `A` **搭配不当**，对应 2 个文本片段，其角色 role 分别为 `text1` 和 `text2` （顺序以在 context 中的出现顺序为准）。此归因的含义是：text1 与 text2 对应的文本片段通常不会搭配在一起。如 `“text1 空气”与“text2 旁”搭配不当`、`“text1 地面”与“text2 边”搭配不当` 等。
- `B` **语义冲突**，对应 6 个文本片段，涵盖两组“空间实体-空间方位-事件”（S-P-E）的三元组，其 role 分别为 `S1 P1 E1 S2 P2 E2` 。此归因的含义是：两组 S-P-E 三元组彼此冲突，不可能同时成立。如 `“[S1 手臂, P1 垂直于地面, E1 举]”与“[S2 手臂, E2 平行于地面, E2 举]”语义冲突`、`“[S1 钥匙, P1 在桌下, E1 放]”与“[S2 钥匙, P2 桌上, E2 捡起]语义冲突”`等。
- `C` **不符合常识或背景信息**，对应 3 个文本片段，即一组 S-P-E 三元组，其 role 分别为 `S P E` 。此归因的含义是：这组 S-P-E 三元组在常识中或在上下文所描述的情境中是不合理的。如 `“[S 双手, P 在裤子口袋外, E 插]”不符合常识或背景信息`、`“[S 项圈, P 脖子旁, E 戴]”不符合常识或背景信息` 等。

该任务要求参赛系统对于输入的 context 返回 reasons 数组。评价时取提交答案与参考答案中匹配程度最高的单个 reason 进行计分。

数据样例如下：

> 输入：
>
> ```json
> { "qid": "2-train-221",
>   "context": "我国著名学者童第周在1978年成功地进行了黑斑蛙的克隆试验。他将黑斑蛙的红细胞的核移入事先除去了核的黑斑蛙卵前，这种换核卵最后长成能在水中自由游泳的蝌蚪。"  }
> ```
>
> 输出：
>
> ```json
> { "qid": "2-train-221",
>   "reasons": [
>     { "fragments": [
>        { "role": "text1", "text": "移入", "idxes": [41,42]},
>        { "role": "text2", "text": "卵前", "idxes": [53,54]}],
>       "type": "A" },
>     { "fragments": [
>        { "role": "S", "text": "黑斑蛙的红细胞的核", "idxes": [32,33,34,35,36,37,38,39,40]},
>        { "role": "P", "text": "除去了核的黑斑蛙卵前", "idxes": [45,46,47,48,49,50,51,52,53,54]},
>        { "role": "E", "text": "移入", "idxes": [41,42]}],
>       "type": "C" },
>     { "fragments": [
>        { "role": "S", "text": "红细胞的核", "idxes": [36,37,38,39,40]},
>        { "role": "P", "text": "黑斑蛙卵前", "idxes": [50,51,52,53,54]},
>        { "role": "E", "text": "移入", "idxes": [41,42]}],
>       "type": "C" },
>     { "fragments": [
>        { "role": "S", "text": "核", "idxes": [40]},
>        { "role": "P", "text": "卵前", "idxes": [53,54]},
>        { "role": "E", "text": "移入", "idxes": [41,42]}],
>       "type": "C" }  ]  }
> ```

特别说明：

1. 文本片段 fragment 的字序号数组 idxes 描述了 text 中每个字符在 context 中的序号。序号从 0 开始计。请特别注意： <span class="fw-bold" style="color:var(--notice-red)">idxes 不一定连续</span> 。如描述空间方位的 P P1 P2 角色的文本可能将 context 中分离的“从北京”和“到上海”拼接在一起。
2. 在单个 reason 中，<span class="fw-bold" style="color:var(--notice-red)">每个文本内容或者具体字符不一定只出现一次</span>。比如：对于 B 类（语义冲突）的归因，S1 与 S2、P1 与 P2 以及 E1 与 E2 都有可能具有相同的 text 和/或 idxes 。
3. 对于 B 类和 C 类的 reason ，<span style="color:var(--notice-red)">文中不一定出现某些特定的 role 内容，此时该 role 可以缺省</span>。
4. 对于A, B, C 三类reason，允许参赛系统提交答案中各类的数量为 0-1 个。评分时会取三类中得分最高的 1 个答案。<span style="color:var(--notice-red)">如果提交的 reasons 数组中包含同一类型的多条归因，那么评分时仅以此类型中的第 1 条归因为准，进行计分</span>。

关于task2数据的内容含义，可参考： [SpaCE2022 数据标注文档](https://2030nlp.github.io/Sp22AnnoOL/menu) 。



<br/><span id="sub-task-3"></span>

##### 2.1.3  子任务3：中文空间实体识别与空间方位关系标注

子任务3（中文空间实体识别与空间方位关系标注）的数据包含以下内容：

- ① qid：试题编号；
- ② context：待标注的文本；
- ③ outputs：若干描述空间实体及其空间方位信息构成的18元组，描述了“某空间实体在某时，经由某事件，满足某种空间方位关系，这一命题的事实性为真/假”的信息。
  - 元组中的元素有“文本片段”和“标签”两种类型。对于文本片段类元素，通过文本内容（text）和字序数组（idxes）这 2 个字段来描述；对于标签类元素，其值为特定的标签字符串。对这些元素的详细介绍请看 表3 。
- ④ corefs：列出了文中不同形但同指的文本片段。（**仅供评分使用，无需参赛者提交**）
<!-- - ⑤ non_corefs：列出了文中同形但不同指的文本片段。（**仅供评分使用，无需参赛者提交**） -->

**表3 子任务3：18元组中各元素说明**

|序号|名称|语义类型|数据类型|含义|
|---|---|-------|-------|---|
| `[0]` | 空间实体 | 非空间方位元素 | 文本片段 | 对应于被描述空间方位的空间实体。 |
| `[1]` | 空间实体2 | 非空间方位元素 | 文本片段 | 对应于与 `[0]`号元素形成距离关系的另一个空间实体。 |
| `[2]` | 事件 | 非空间方位元素 | 文本片段 | 与空间实体的空间方位直接关联的事件。 |
| `[3]` | 事实性 | 非空间方位元素 | 标签 | 如果元组所述的空间方位命题是假的，则该字段为 `"假"`（否则为 `null`）。 |
| `[4]` | 时间（文本） | 非空间方位元素 | 文本片段 | 描述了空间实体处于某种空间方位关系的时间。 |
| `[5]` | 时间（标签）的参照事件 | 非空间方位元素 | 文本片段 | 如果空间实体处于某种空间方位关系的时间在文中并未写明但可以判断，则可通过此元素和 `[6]`号元素共同描述。此元素描述了 `[6]`号元素所参照的事件。 |
| `[6]` | 时间（标签） | 非空间方位元素 | 标签 | 当文中未出现描述空间方位关系的具体时间，且该时间可以判断时，通过此元素描述空间方位关系的时间。可能的值有 `"说话时" / "过去" / "将来" / "之时" / "之前" / "之后" / "之间"` 。<sub>注：在实际数据中未出现值为“之间”的情况。</sub> |
| `[7]` | 处所 | 空间方位元素 | 文本片段 | 描述静态空间实体相对某外部参照物的位置。 |
| `[8]` | 起点 | 空间方位元素 | 文本片段 | 描述动态空间实体的方位发生变化的场景下，变化开始时实体的处所。 |
| `[9]` | 终点 | 空间方位元素 | 文本片段 | 描述动态空间实体的方位发生变化的场景下，变化结束时实体的处所。 |
| `[10]` | 方向 | 空间方位元素 | 文本片段 | 描述动态空间实体的位移方向。（空间实体在动态中才有方向特征） |
| `[11]` | 朝向 | 空间方位元素 | 文本片段 | 描述空间实体某一侧面所朝向的位置。 |
| `[12]` | 部件处所 | 空间方位元素 | 文本片段 | 描述空间实体作为一个部件在整体中的位置。 |
| `[13]` | 部位 | 空间方位元素 | 文本片段 | 描述了空间实体的某个部位。此元素出现时，当前的18元组描述的是此部位的位置而非整个空间实体的位置。 |
| `[14]` | 形状 | 空间方位元素 | 文本片段 | 描述了空间实体的形状。 |
| `[15]` | 路径 | 空间方位元素 | 文本片段 | 描述了空间实体位移时经过的轨迹。 |
| `[16]` | 距离（文本） | 空间方位元素 | 文本片段 | 描述了 `[0]` 和 `[1]` 之间的距离关系。 |
| `[17]` | 距离（标签） | 空间方位元素 | 标签 | 描述了 `[0]` 和 `[1]` 之间的距离关系，可能的值为 `"远" / "近" / "变远" / "变近"`。 |

> 注：上述元素满足以下约束关系：
>
> - `[0]`号元素“空间实体”是整个元组的核心，必定存在，不会为空（其余元素皆可能为空，即 `null`，但不会同时全部为空）。
> - `[1]`号元素“空间实体2”必定且仅与描述距离的 `[16]` 或 `[17]`号元素之一同时出现，否则必为 `null`；其与 `[0]`号元素应按文中出现顺序排序。
> - `[4]`号元素“时间（文本）”不会与 `[5]` 或 `[6]`号元素同时出现。
> - `[5]`号元素“时间（标签）的参照事件”不会与 `[4]`号元素同时出现；必定伴随 `[6]`号元素出现。
> - `[6]`号元素“时间（标签）”：当 `[5]`号元素**为空**，此元素可能的值仅限 `"说话时" / "过去" / "将来"` 。当 `[5]`号元素**不为空**，此元素可能的值仅限 `"之时" / "之前" / "之后" / null` ；不会与 `[4]`号元素同时出现。
> - `[7~15]`号空间方位元素不会与 `[16]` 或 `[17]`号元素同时出现。
> - `[16]` 或 `[17]`号元素必定与 `[1]`号元素同时出现；不会与其他空间方位元素同时出现；这两个元素本身也不会同时出现。

该任务要求参赛系统对于输入的 context ，识别其中的空间方位关系命题，组织为上述元组形式，最终返回 outputs 数组。

数据样例如下：

> 输入：
>
> ```json
> { "qid":"3-train-21",
>   "context":"老妇人跪在那坑里，用手舀出那些水。舀几下，她就得休息一会儿。到底，她把坑里的水全舀干了。于是她回到那死者旁边，两手抄在死者的腋窝下，把他拖走。"  }
> ```
>
> 输出：
>
> ```json
> { "qid":"3-train-21",
>   "outputs":[
>     [{"text":"老妇人","idxes":[0,1,2]},null,{"text":"跪","idxes":[3]},null,null,null,null,{"text":"在那坑里","idxes":[4,5,6,7]},null,null,null,null,null,null,null,null,null,null],
>     [{"text":"那些水","idxes":[13,14,15]},null,{"text":"舀","idxes":[11]},null,null,null,null,null,{"text":"在那坑里","idxes":[4,5,6,7]},null,{"text":"出","idxes":[12]},null,null,null,null,null,null,null],
>     [{"text":"水","idxes":[38]},null,{"text":"舀","idxes":[40]},"假",null,null,null,{"text":"坑里","idxes":[35,36]},null,null,null,null,null,null,null,null,null,null],
>     [{"text":"她","idxes":[46]},null,null,null,null,{"text":"舀","idxes":[40]},"之后",null,null,{"text":"到那死者旁边","idxes":[48,49,50,51,52,53]},{"text":"回","idxes":[47]},null,null,null,null,null,null,null],
>     [{"text":"她","idxes":[46]},null,{"text":"抄","idxes":[57]},null,null,null,null,{"text":"在死者的腋窝下","idxes":[58,59,60,61,62,63,64]},null,null,null,null,null,{"text":"两手","idxes":[55,56]},null,null,null,null]]  }
> ```
>
> 同指信息（仅供评分使用，无需参赛者提交）：
>
> ```json
> { "qid":"3-train-21",
>   "corefs":[
>     [ {"text":"老妇人","idxes":[0,1,2]},
>       {"text":"她","idxes":[21]},
>       {"text":"她","idxes":[33]},
>       {"text":"她","idxes":[46]}],
>     [ {"text":"死者","idxes":[59,60]},
>       {"text":"他","idxes":[67]}]]  }
> ```

特别说明：

1. 文本片段类元素的字序号数组 idxes 描述了 text 中每个字符在 context 中的序号。序号从 0 开始计。请特别注意： <span class="fw-bold" style="color:var(--notice-red)">idxes 不一定连续</span> 。如 `[7]`号“处所”元素的文本可能将 context 中分离的“在”和“家里”拼接在一起。
2. 在单个元组中，每个文本内容或者具体字符不一定只出现一次<!-- （但这类情况在此任务中出现的概率很小） -->。比如：`[0]`号“空间实体”元素“小明”与 `[7]`号“处所”元素“小明家里”的 text 和/或 idxes 可能有所重合。

关于task3数据的内容含义，可参考： [SpaCE2022 数据标注文档](https://2030nlp.github.io/Sp22AnnoOL/menu) 。




<br/><span id="distribution"></span>

#### 2.2  数据规模与分布

各子任务各子集数据规模如 表2 所示：

**表2 各子任务各子集数据规模**

|任务|训练集|验证集|测试集|总计|
|----|-----|---|----|----|
|子任务1| 10993 | 1602 | 3152 | 15747 |
|子任务2| 4966 | 700 | 1402 | 7068 |
|子任务3| 1529 | 207 | 396 | 2132 |

语料共计 285.2 万字符，每段语料字符数均值为 114.24，标准差为 49.57。语料涉及多种不同类型和来源，各类语料比例为：报刊语料（37%）、文学作品语料（25%）、中小学课本语料（20%）、交通事故判决书语料（9%），体育动作语料（6%）、地理百科语料（2%）、以及其他语料（1%）。




<br/><span id="examples"></span>



#### 2.3 标注结果示例和标注规范文档

<a href="https://2030nlp.github.io/Sp22AnnoOL/examples" target="_blank">👉标注结果示例👈</a >

<a href="https://2030nlp.github.io/Sp22AnnoOL/menu" target="_blank">👉标注规范文档👈</a >



<br/><span id="eval"></span>

### 3.  评价标准

#### 3.1  子任务1的评价标准

子任务1使用准确率（ *`Acc`* ，Accuracy）作为评价指标，公式如下：

```python
Acc = 命中正确答案的题数 / 题目总数
```

#### 3.2  子任务2的评价标准

子任务2指标分为用于研究的分项指标和用于评测排名的综合指标。

##### 3.2.1 子任务2分项指标

子任务2分项指标为 ① **异常类型分类准确性** 和 ② **异常文本识别准确性** 。计算过程如下：

1. 取出提交结果的 reasons 中 A/B/C 每类的第 1 个 reason 作为待检查的答案。
2. 对于每个待检查的 reason （称为“待检项”），与参考答案中的 reasons （称为“参考项”）进行逐个比较。对于待检项中的每个字符（依据：idxes字段），只要在参考项的任意 role 中找到了该字符，则视为该字符是正确检出的字符。
3. 按上述标准计算待检项与参考项文本的 *`F1`* 值，公式为 `F1 = 2 * P * R / (P + R)` ，其中 *`P = 正确检出字符数/待检项总字符数`* 、 *`R = 正确检出字符数/参考项总字符数`* ，分别代表精确率（Precision）和召回率（Recall）。
4. 找到得分最高的待检项，以此项得分计为该题在 指标② 异常文本识别准确性 上的得分。对所有题目计算平均值 作为参赛者在 指标② 上的最终得分。
5. 然后，对于每道题 指标② 得分最高的待检项，进一步判断其 type 类型与对应的参考项是否相同，如果 type 相同，计为正确，否则计为错误，由此计算参赛者在所有题目上的准确率，作为 指标① 异常类型分类准确性 的得分。

上述指标旨在帮助分析模型表现，并不作为排名依据。

##### 3.2.1 子任务2综合指标

子任务2综合指标为 ③ **异常元素识别准确性** 。计算过程如下：

1. 取出提交结果的 reasons 中 A/B/C 每类的第 1 个 reason 作为待检查的答案。
2. 对于每个待检查的 reason （称为“待检项”），与参考答案中的 reasons （称为“参考项”）进行逐个比较。对于待检项中的每个 role 中的每个字符（依据：idxes字段），仅当参考项的相同 role 中找到了该字符，才视为该字符是正确检出的字符。
3. 按上述标准计算待检项与参考项文本的 *`F1`* 值，公式同 指标② 。
4. 找到得分最高的待检项，以此项得分计为该题在 指标③ 异常元素识别准确性 上的得分。对所有题目计算平均值 作为参赛者在 指标③ 上的最终得分。

指标③ 综合了 指标①、② 的信息，是最终排名时使用的指标。

<!-- 子任务2按照以下步骤计算得分，作为评价指标： -->

<!-- 1. 取出提交结果的 reasons 中 A/B/C 每类的第 1 个 reason 作为待检查的答案。
1. 对于每个待检查的 reason （称为“待检项”），与参考答案中的 reasons （称为“参考项”）进行逐个比较，分别计算以下 3 个指标：
   - ① 异常类型分类准确性：即待检项与参考项的 type 是否相同。
   - ② 异常文本识别准确性：即待检项与参考项整个 reason 中全部文本 idxes 的 *`F1`* 值，公式为 `F1 = 2 * P * R / (P + R)` ，其中 *`P`* 、 *`R`* 分别代表精确率（Precision）和召回率（Recall）。此时不考虑 type 和 role 。
   - ③ 异常元素识别准确性：即仅取出待检项与参考项在各个特定 role 中重合的文本的 idxes 相对于所有参考项文本的 *`F1`* 值（公式同上）。
2. 按三种指标分别找到得分最高的待检项，以此项得分计为该题在这一指标上的最终得分。
3. 最后，对所有题目计算 指标①的准确率 以及 指标②③的平均值 作为参赛者在各指标上的最终得分。**评测将以 指标③ 作为最终排名依据**。 -->

<!-- 第 3 步，导致指标①其实没有意义了 -->
<!-- 一种方案是：当提交答案出现参考答案中没有的类型时，计0分 -->

<!-- 对于指标①，如果所有待检项的 type 集合与所有参考项的 type 集合完全相同，则得分，否则不得分。 -->

<!-- 1. 取出提交结果的 reasons 中 A/B/C 每类的第 1 个 reason 作为待检查的答案。
2. 对于每个待检查的 reason （称为“待检项”），与参考答案中的 reasons （称为“参考项”）进行逐个比较，分别计算以下 2 个指标：
   - ① **异常文本识别准确性**：即待检项与参考项整个 reason 中全部文本 idxes 的 *`F1`* 值，公式为 `F1 = 2 * P * R / (P + R)` ，其中 *`P`* 、 *`R`* 分别代表精确率（Precision）和召回率（Recall）。此时不考虑 type 和 role 。
   - ② **异常元素识别准确性**：即仅取出待检项与参考项在各个特定 role 中重合的文本的 idxes 相对于所有参考项文本的 *`F1`* 值（公式同上）。
3. 对于上述 2 个指标，分别找到得分最高的待检项，以此项得分计为该题在这一指标上的最终得分。
4. 然后，在这 2 个指标上对所有题目计算平均值 作为参赛者在该指标上的最终得分。
5. 为了帮助参赛者考察指标① 得分细节，进而优化模型，另指标③ **异常类型分类准确性** 作为参考：对于每道题指标① 得分最高的待检项，进一步判断其 type 类型与对应的参考项是否相同，如果 type 相同，计为正确，否则计为错误，由此计算参赛者在所有题目上的准确率，作为指标③ 的最终得分。
6. 请注意，**评测将以 指标② 异常元素识别准确性 作为最终排名依据**。 -->

<!-- 1. 取出提交结果的 reasons 中 A/B/C 每类的第 1 个 reason 作为待检查的答案。
2. 对于每个待检查的 reason （称为“待检项”），与参考答案中的 reasons （称为“参考项”）进行逐个比较，分别计算以下 2 个指标：
   - ① **异常元素识别准确性**：即仅取出待检项与参考项在各个特定 role 中重合的文本的 idxes 相对于所有参考项文本的 *`F1`* 值（公式同上）。
   - ② **异常文本识别准确性**：即待检项与参考项整个 reason 中全部文本 idxes 的 *`F1`* 值，公式为 `F1 = 2 * P * R / (P + R)` ，其中 *`P`* 、 *`R`* 分别代表精确率（Precision）和召回率（Recall）。此时不考虑 type 和 role 。
3. 对于上述 2 个指标，分别找到得分最高的待检项，以此项得分计为该题在这一指标上的最终得分。
4. 然后，在这 2 个指标上对所有题目计算平均值 作为参赛者在该指标上的最终得分。
5. 为了帮助参赛者考察指标② 得分细节，进而优化模型，另指标③ **异常类型分类准确性** 作为参考：对于每道题指标② 得分最高的待检项，进一步判断其 type 类型与对应的参考项是否相同，如果 type 相同，计为正确，否则计为错误，由此计算参赛者在所有题目上的准确率，作为指标③ 的最终得分。
6. 请注意，**评测将以 指标① 异常元素识别准确性 作为最终排名依据**。 -->

#### 3.3  子任务3的评价标准

子任务3按照以下步骤计算得分，作为评价指标：

1. 分别从参考答案和提交答案中获取 outputs 元组数组，称为参考数组和待检数组，其中的每个元组分别称为参考元组和待检元组，元组中的元素分别称为参考元素和待检元素。
2. 对待检元组和参考元组进行匹配。对于每个元组对，按照以下程序计算待检元组的得分：
   1. 对于“空间实体”和“空间实体2”，计算 idxes 字段的 *`F1`* 值；对于其他文本片段类的元素，计算 text 字段的 *`F1`* 值；对于标签类的元素，相同计 1 分，不同计 0 分。
      - 其中，空间实体类元素（`[0~1]`号元素）的匹配将会参考 corefs 数组，求其可能获得的最高得分。
      - 当参考元素和待检元素皆为 null ，此元素不计分。
   2. 如果空间实体类元素（`[0~1]`号元素）完全不匹配，则整个待检元组得 0 分，否则对所有待检元素的得分求和，作为此待检元组的得分。
3. 对于所有待检数组和参考数组，遍历所有可能的匹配方式，使得待检数组中的所有待检元组能够得到最高总分。以此得分作为此题最终得分。
4. 对于数据集中所有题目计算 *`F1`* 值，作为子任务3的最终得分。

更详细的说明请看： [task3-eval.md](https://github.com/2030NLP/SpaCE2022/blob/main/eval/task3-eval.md)

<!-- <mark>（将于子任务3正式发布时一同公布）</mark> -->

#### 3.4  最终排名

在所有参赛队伍的评测结果产生之后，计算每个任务下各个队伍的标准分数（Z-score），对三个任务的标准分数取平均，作为最终排名的依据。标准分数计算公式如下，其中 *`X̄`* 为平均数， *`s`* 为标准差：

```python
Z = (X - X̄) / s
```



<br/><span id="schedule"></span>

### 4.  评测赛程

**表4 评测赛事日程**

| 时间 | 事项 |
| :--: | :--: |
| 6月1日~8月20日 | 开放报名 |
| 8月8日 | 发布子任务1和子任务2的训练集及无答案验证集，开放结果提交 |
| 8月12日 | 发布子任务3的训练集及无答案验证集 |
| 8月18日 | 发布验证集答案 |
| <span style="color:var(--notice-red)">9月15日 09:00</span> | 发布无答案的测试集，开始提交测试集结果 |
| <span style="color:var(--notice-red)">9月18日 22:00</span> | 测试集结果提交截止 |
| <span style="color:var(--notice-red)">9月25日 22:00</span> | 提交最终版本的模型及技术报告 |
| 10月14日~10月16日 | 评测研讨会 |

<!-- （以上时间均为暂定，请关注 [CCL 2022](http://cips-cl.org/static/CCL2022/index.html) 官方网站。） -->
（以上时间可能还会有调整，请关注网站[最新消息](./news.html)）




<br/><span id="register"></span>

### 5.  报名方式

请仔细阅读《<a target="_blank" href="https://github.com/2030NLP/SpaCE2022/blob/main/Agreement.md">第二届中文空间语义理解评测 SpaCE2022 参赛协议</a>》和《<a target="_blank" href="https://github.com/2030NLP/SpaCE2022/blob/main/data/LICENSE.md">第二届中文空间语义理解评测 SpaCE2022 数据集使用许可</a>》，

然后点击进入 <a target="_blank" href="https://2030nlp.github.io/SpaCE2022/register">报名链接</a> 进行报名。



<br/><span id="award"></span>

### 6.  奖项设置

**评测奖金由华为公司赞助**，奖池共计 50000 元人民币。

一等奖 0-2名 ，奖金合计 20000 元<!-- （如 1*20000, 2*10000） -->

二等奖 0-2名 ，奖金合计 15000 元<!-- （如 1*15000, 2*7500） -->

三等奖 0-4名 ，奖金合计 15000 元<!-- （如 1*15000, 2*7500, 3*5000, 4*3500） -->

由中国中文信息学会为本次评测获奖队伍提供荣誉证书。



<br/><span id="appendix"></span>

### 附录

- <a target="_blank" href="https://github.com/2030NLP/SpaCE2022/blob/main/Agreement.md">第二届中文空间语义理解评测 SpaCE2022 参赛协议</a>
- <a target="_blank" href="https://github.com/2030NLP/SpaCE2022/blob/main/data/LICENSE.md">第二届中文空间语义理解评测 SpaCE2022 数据集使用许可</a>
<!-- - [第二届中文空间语义理解评测 SpaCE2022 参赛协议](https://github.com/2030NLP/SpaCE2022/blob/main/Agreement.md) -->
<!-- - [第二届中文空间语义理解评测 SpaCE2022 数据集使用许可](https://github.com/2030NLP/SpaCE2022/blob/main/data/LICENSE.md) -->

