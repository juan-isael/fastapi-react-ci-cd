from typing import List


def get_total(costs: dict(), 
                bought_items: List[str],
                tax: float):

    subtotal = 0
    
    for item in bought_items:
        subtotal += costs.get(item, 0)

    total = subtotal + (tax*subtotal)

    return [round(subtotal,2), round(total,2)]


def main():
    items = {'socks': 5, 'shoes': 60, 'sweater': 30}

    print(get_total(items, ['socks', 'shoes'], 0.09))


if __name__ == "__main__":
    main()