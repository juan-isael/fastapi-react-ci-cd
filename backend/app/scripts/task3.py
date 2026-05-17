from typing import List
import json


def constructNewWord(words: List[str]):

    new_word = ''

    for i in range(len(words)):
        try:
            new_word += words[i][i]
        except IndexError:
            return {
                'new_word': None,
                'description': f"Wrong input: '{words[i]}'. It'd be at least {i - len(words[i]) + 1} character(s) longer"
            }

    return {
        'new_word': new_word,
        'description': 'correct new word formulated'
    }


def main():
    arr = ["yoda", "best", "has"]

    print(constructNewWord(arr))
    

if __name__ == "__main__":
    main()