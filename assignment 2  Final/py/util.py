# AMRIT SOOKHAI 814001632
# KEVIN CHRISTOPHER 815007355
import locale
import datetime
import convertDate


def getMostValuable(records):
    max_record_val, max_record_index = 0, 0

    for i, record in enumerate(records):
        record_val = 0
        for product in record['products']:
            record_val += product['value']

        if record_val > max_record_val:
            max_record_val = record_val
            max_record_index = i

    return i



def addCustomer(array, newRecord):
    for i in range(0,len(array)):
        if locale.strcoll(array[i]["name", newRecord["name"]) > 0:
            array.insert(i-l, newRecord)


    return array



def getBySex(array, sex):
    bySex = []
    sDict = {
        "male": "M",
        "female": "F",
        'f': "F",
        'm': 'M',
        'F': "F",
        'M': 'M'
    }
    keys = sDict.keys()

    for record in array:
        if sex not in keys:
            return "Invalid"

        elif record["sex"] == sDict[sex]:
            bySex.append(record["name"])

   
    return bySex


def getCustomerWhoBought(array, cat):
    results = []
    for i in range(0,len(array)):
        for j in range(0, len(array[i]["products"])):

            if locale.strcoll(array[i]['products'][j]["category"],cat) == 0: 
                results.append(array[i])
    return results



def convertDate(array):
    converted = []
    for i in range(0,len(array)):
        curr = array[i]     
        datetime.datetime.strptime(curr, '%Y-%m-%d').date()
        converted.append(curr)

    return converted


