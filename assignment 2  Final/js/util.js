////////////////////////////////////////////////////////////////////////////////////////////////
// Web Assignment2
// group:
// Kevin christopher 815007355
// Amrit Sookhai 814001632
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Write a function called “getMostValuable” that accept an array/list of customer records
// stored as object-literals/dictionaries. Each record has a field called ‘products’ which stores
// additional records that contain the fields ‘name’ and ‘value’. This structure is illustrated
// in Figure 1. The function “getMostValuable” will return the position of the most valuable
// record.
////////////////////////////////////////////////////////////////////////////////////////////////
function getMostValuable() {
    var largloc = 0;
    var largest = 0;
    for (var i = 0; i < array.length;) {
        var sum = 0;

        for (var j = 0; j < array[i].products.length; j++) {
            sum = sum + array[i].products[j].value
        }
        if (sum > largest) {
            largest = sum;
            largloc = i;
        }
        i++;
    }
    return largloc;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a function called “addCustomer” that will add a new customer record to a sorted
// array/list of customer records. The structure of the customer record is provided in Figure
// 1. The records are sorted in ascending order based on the name field of the customer
// record.
////////////////////////////////////////////////////////////////////////////////////////////////
function addCustomer(array, newRecord) {
    if (array.length === 0) {
        array.push(newRecord);
        return true;
    } else
        for (var i = 0; i < array.length; i++) {
            if (newRecord.name.toLowerCase() < array[i].name.toLowerCase()) {
                array.splice(i, 0, newRecord);
                return true;
            }
        }
    array.push(newRecord);
    return true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function called “getBySex” that accepts an array/list of customer records stored
// as object-literals/dictionaries illustrated in Figure 1. The function will return an array/list
// that contains customers that matches the sex specified as a parameter. The function will
// accept both the word [‘male’, ’female’] or the letter [‘m’, ‘f’] as valid inputs.
////////////////////////////////////////////////////////////////////////////////////////////////
function getBySex(array, sex) {
    sex = sex.toLowerCase();
    if (sex === 'm' || sex === 'male') {
        sex = 'm';
    } else if (sex === 'f' || sex === 'female') {
        sex = 'f';
    } else console.log("invalid input");

    var bySex = array.filter(function (array) {
        return array.sex === sex;
    });
    return bySex;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a function called “getCustomerWhoBought” that accepts an array/list of customer
// records stored as object-literals/dictionaries and a second parameter which stores the
// product category. The function will return an array/list that contains customers who has
// products belonging to the category specified as a parameter
// var cat="food"
////////////////////////////////////////////////////////////////////////////////////////////////
function getCustomerWhoBought(array, cat) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i]["products"].length; j++) {
            if (cat.toLowerCase() === array[i].products[j].category.toLowerCase()) {
                results.push(array[i]);
                break
            }
        }
    }
    return results;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Write a function called “convertDate” that will accept an array/list of string dates in the
// form ‘YYYY-MM-DD’ and returns an array/list containing valid dates from the values
// specified in the input array. If an invalid formatted date is found in the array/list,
// conversion should produce undefined/None for that record. 
////////////////////////////////////////////////////////////////////////////////////////////////
function convertDate(array) {
    var converted = [];
    for (var i = 0; i < array.length; i++) {
        var parts = array[i].split('-');

        if (parts[0].length != 4 || parts[1].length != 2 || parts[2].length != 2) {
            converted.push(undefined);
        } else
            parts.forEach(function (item, index, arr) { // converts all to int
                arr[index] = parseInt(item);
            })
        if (parts[1] > 0 && parts[1] < 13 && parts[2] > 0 && parts[2] < 32) {
            var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

            if (mydate.getMonth() + 1 === parts[1] && mydate.getDate() === parts[2] && mydate.getFullYear() === parts[0]) {
                converted.push(mydate)
            } else converted.push(undefined);

        } else converted.push(undefined);
    }
    return converted;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Write a function called “convertProductDates” that accepts an array/list of customer
// records. The function will use the “convertDate” function created in Q5 to convert the
// dates of all the products stored in the records provided as a parameter}
////////////////////////////////////////////////////////////////////////////////////////////////
function convertProductDates(array) {
    var dateA = [];
    var dateB = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i]["products"].length; j++) {
            dateA[0] = array[i].products[j].date;
            dateB = convertDate(dateA);
            array[i].products[j].date = dateB[0];
        }
    }
}