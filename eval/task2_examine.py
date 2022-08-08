import os
import argparse
import json


def intersection(input, target):
    _input, _target = set(input), set(target) 
    intersection = _input & _target
    return len(intersection), len(_input), len(_target)


def f1_score(n_inter, n_input, n_target):
    if (n_input == 0) or (n_target == 0) or (n_inter == 0):
        return 0.0, 0.0, 0.0

    precision = n_inter / n_input
    recall = n_inter / n_target
    f1 = 2*(precision*recall)/(precision+recall)
    return precision, recall, f1


def main(params):
    answers = []
    with open(params['answer_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            answers.append(json.loads(line))

    predictions = []
    with open(params['prediction_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            predictions.append(json.loads(line))

    prediction_level = params['prediction_level']
    if (len(answers) != len(predictions)):
        status, final_result = 'Length dismatch', None
    else:
        precisions, recalls, f1s = [], [], []
        correct_type_num = 0
        for x, y in zip(answers, predictions):
            if (x['context'] != y['context']):
                continue 
            
            max_precision, max_recall, max_f1 = 0.0, 0.0, 0.0
            predicted_type = [0, 0, 0]
            golden_type = [0, 0, 0]
            type_map = {
                'A': 0,
                'B': 1,
                'C': 2,
            }
            for golden in x['reasons']:
                type_id = type_map[golden['type']]
                golden_type[type_id] = 1

            for prediction in y['reasons']:
                type_id = type_map[prediction['type']]
                if (predicted_type[type_id] == 1):
                    continue
                else:
                    predicted_type[type_id] = 1
                    
                for golden in x['reasons']:
                    tag_golden, tag_prediction = golden['fragments'], prediction['fragments']
                    if (prediction_level == 'loose'): # 按文本重合度打分（不要求类别相同）
                        input_set, target_set = set(), set()
                        for t in tag_prediction:
                            input_set |= set(t['idxes'])
                        for t in tag_golden:
                            target_set |= set(t['idxes'])

                        n_inter, n_input, n_target = intersection(input_set, target_set)
                        precision, recall, f1 = f1_score(n_inter, n_input, n_target)
                    
                    elif (prediction_level == 'strict'): # 按元素重合度打分（要求类别相同）
                        if (golden['type'] != prediction['type']):
                            continue

                        local_intersection, local_input_len, local_target_len = 0, 0, 0
                        for t1 in tag_prediction:
                            found = False
                            for t2 in tag_golden:
                                if (t1['role'] == t2['role']):
                                    found = True
                                    n_inter, n_input, n_target = intersection(t1['idxes'], t2['idxes'])
                                    local_intersection += n_inter
                                    local_input_len += n_input
                                    local_target_len += n_target

                            if not(found):
                                local_input_len += len(t1['idxes'])

                        precision, recall, f1 = f1_score(local_intersection, local_input_len, local_target_len)

                    if (f1 > max_f1):
                        max_precision, max_recall, max_f1 = precision, recall, f1
            
            precisions.append(max_precision)
            recalls.append(max_recall)
            f1s.append(max_f1)
            if (predicted_type == golden_type):
                correct_type_num += 1

        status = 'Accepted'
        type_accuracy = correct_type_num/len(answers)
        avg_precision = sum(precisions)/len(answers)
        avg_recall = sum(recalls)/len(answers)
        micro_f1 = 2*(avg_precision*avg_recall)/(avg_precision+avg_recall)
        macro_f1 = sum(f1s)/len(answers)

        final_result = {
            'type_accuracy': type_accuracy,
            'micro_f1': micro_f1,
            'macro_f1': macro_f1,
            'avg_precision': avg_precision,
            'avg_recall': avg_recall,
        }

    print(status)
    if (final_result is not None):
        print('Result on %s prediction level:' %prediction_level)
        print('Type accuracy: %f' %(final_result['type_accuracy']))
        print('Micro F1 score: %f' %(final_result['micro_f1']))
        print('Macro F1 score: %f' %(final_result['macro_f1']))
        print('Average precision: %f' %(final_result['avg_precision']))
        print('Average recall: %f' %(final_result['avg_recall']))

    return status, final_result

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--answer_path', type=str, default='./data/input/task2/task2_dev.jsonl')
    parser.add_argument('--prediction_path', type=str, default='./data/input/task2/task2_dev.jsonl')
    parser.add_argument('--prediction_level', type=str, choices=['loose', 'medium', 'strict'], default='strict')

    args = parser.parse_args()
    params = args.__dict__
    print(params)
    
    main(params)