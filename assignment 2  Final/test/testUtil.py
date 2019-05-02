from util import *

def main():
    test = [
        {
            "name": "John", 
            "sex": "m",
            "country": "tt",
            "products": [
                {"name": "Peanut", "category": "food", "value": 15,}, 
                {"name": "Peanut", "category": "food", "value": 15,},
                {"name": "Peanut", "category": "food", "value": 15,},
            ]
        },
        {
            "name": "John", 
            "sex": "m",
            "country": "tt",
            "products": [
                {"name": "Peanut", "category": "food", "value": 15,}, 
                {"name": "Peanut", "category": "food", "value": 15,},
                {"name": "Peanut", "category": "food", "value": 15,},
                {"name": "Peanut", "category": "food", "value": 15,},
            ]
        },
        {
            "name": "John", 
            "sex": "m",
            "country": "tt",
            "products": [
                {"name": "Peanut", "category": "food", "value": 15,},
                {"name": "Peanut", "category": "food", "value": 15,},
            ]
        },
    ]

    print(getMostValuable(test))



if __name__ == '__main__':
    main()