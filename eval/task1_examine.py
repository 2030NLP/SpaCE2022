import os
import argparse
import torch
import json


def main(params):
    answers = []
    with open(params['answer_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            answers.append(json.loads(line))

    predictions = []
    with open(params['prediction_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            predictions.append(json.loads(line))

    if (len(answers) != len(predictions)):
        correct, total = 0, 0
        status, score = 'Length dismatch', 0.0
    else:
        correct, total = 0, 0
        for x, y in zip(answers, predictions):
            total += 1
            if (x['context'] == y['context']) and (x['judge'] == y['judge']):
                correct += 1

        status, score = 'Accepted', correct/total

    print(status)
    print('Accuracy: %d/%d = %f' %(correct, total, score))
    
    final_result = {
        'correct': correct,
        'total': total,
        'accuracy': score,
    }

    return status, final_result


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    # data paths
    parser.add_argument('--answer_path', type=str, default='./data/input/task1/task1_test.jsonl')
    parser.add_argument('--prediction_path', type=str, default='./data/input/task1/task1_test.jsonl')

    args = parser.parse_args()
    params = args.__dict__
    print(params)
    
    main(params)