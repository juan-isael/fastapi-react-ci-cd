class Dictionary:
    
    def __init__(self):
        # self._data = dict()
        self._data = {}

    def newentry(self, key, value):
        self._data[key.lower()] = value


    def look(self, key):
        return self._data.get(key, None)

    def get_dictionary(self):
        return self._data

    # def __contains__(self, key):
    #     return key in self._data


def main():
    d = Dictionary()

    d.newentry('apple', 'fruit')

    print(d.look('apple'))
    print(d.look('orange'))

    # print('apple' in d)


if __name__ == "__main__":
    main()