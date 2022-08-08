


距离的两个实体需要按原文中出现顺序排序



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
> 同指信息（主办方内部参考，参赛者无需提交）：
>
> ```json
> { "qid":"3-train-21",
>   "corefs":[
>     [ {"text":"老妇人","idxes":[0,1,2]},
>       {"text":"她","idxes":[21]},
>       {"text":"她","idxes":[33]},
>       {"text":"她","idxes":[46]}],
>     [ {"text":"死者","idxes":[59,60]},
>       {"text":"他","idxes":[67]}]],
>   "non_corefs":[]  }
> ```
