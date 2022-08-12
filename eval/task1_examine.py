import os
import argparse
import json
import traceback


def main(params):
    answers = {}
    with open(params['answer_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            js = json.loads(line)
            answers[js['qid']] = js

    predictions = {}
    with open(params['prediction_path'], 'r', encoding='utf-8') as fin:
        for line in fin:
            js = json.loads(line)
            if ('qid' in js):
                predictions[js['qid']] = js


    correct, total = 0, 0
    for qid in answers:
        total += 1
        if (qid in predictions):
            x, y = answers[qid], predictions[qid]
        
            if (x['judge'] == y['judge']):
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
    
    try:
        status, final_result = main(params)
    except:
        traceback.print_exc()
        status, final_result = 'Error in execution', None