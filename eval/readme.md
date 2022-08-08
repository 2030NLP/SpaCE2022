评分脚本参数说明（以task2为例）：
python eval/task2_examine.py \
    --prediction_path ./data/model/task2/test_prediction.jsonl \
    --answer_path ./data/input/task2/task2_test.jsonl \
    --prediction_level strict

其中"eval/task2_examine.py" 为评分脚本的绝对或相对路径
"--prediction_path" 后为模型预测结果的绝对或相对路径
"--answer_path" 后为标准答案的绝对或相对路径
"--prediction_level" （仅task2任务中包含）为评分方式，"strict"代表逐元素计算相似度，"loose"代表计算元组整体相似度
注意：评分脚本的参数需与task对应