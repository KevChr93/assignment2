# AMRIT SOOKHAI 814001632
# KEVIN CHRISTOPHER 815007355
first_names = ["Luther", "Dieago", "Allison", "Klaus", "Five", "Ben", "Vanya"]
last_names = ["Senju", "Uchiha", "Custer", "Sheeran", "Hargreeves", "Grimm", "Violas"]

def merge2Single (arr1, arr2):
    fullName = []  
    for i in range (len(arr1)):
        fullName.append (arr1[i] + " " + arr2[i])
    return fullName


def merge2Object (arr1,arr2):
    data = {}
    keys = []
    for i in range (0,len(arr1)):
        data = {'firstname':arr1[i],'lastname':arr2[i]}
        keys.append(d)
   
    return(keys)



def mergeHandler (func,arr1,arr2):
    return (func(arr1, arr2))


print (mergeHandler(merge2Single, first_names,last_names))
print (mergeHandler(merge2Object,first_names,last_names))

