from app.scripts.task1 import Dictionary
from app.scripts.task2 import get_total
from app.scripts.task3 import constructNewWord

# Temporary in-memory storage
d = Dictionary()
arr = []

tax = 0.09
subtotal = ""
total = ""

def add_pair_service(pair):
    
    d.newentry(pair.key, pair.value)

    return {
        "message": "Pair added",
        "dictionary": d.get_dictionary()
    }


def add_to_car_service(key: str):

    global subtotal, total
    
    if key == "clean_checkout":

        arr.clear()

        return { 
            "status": 200,
            "message": "Cleaning done",
            "items": arr,
            "tax": "",
            "subtotal": "",
            "total": ""
        }

    elif d.look(key) is None:

        return { 
            "status": 404,
            "message": f"Can't find entry for {key}",
            "items": arr,
            "tax": tax,
            "subtotal": subtotal,
            "total": total
        }

    arr.append(key)

    subtotal, total = get_total(
        d.get_dictionary(), 
        arr, 
        tax
    )

    return {
        "status": 200,
        "message": "Correct cost calculation",
        "items": arr,
        "tax": tax,
        "subtotal": subtotal,
        "total": total
    }


def create_word_service(arr):

    return constructNewWord(arr)

