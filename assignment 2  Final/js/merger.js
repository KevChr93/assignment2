////////////////////////////////////////////////////////////////////////////////////////////////
// Web Assignment2
// group:
// Kevin christopher 815007355
// Amrit Sookhai 814001632
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// a. Write a function called “mergeHandler” that will accept three parameters; arr1,
// arr2 and func.
////////////////////////////////////////////////////////////////////////////////////////////////

var first_names = ["Kevin", "Amrit", "Sharlima", "Ashida", "John", "Hailey", "Danielle"];
var last_names = ["Christopher", "Sookhai", "Seebaran", "Bissoondial", "Doe", "Christopher", "Pallai"];

function mergeHandler(arr1, arr2, func) {
   return (func(arr1, arr2))
}
////////////////////////////////////////////////////////////////////////////////////////////////
// b. Write a function called “merge2Single” that will use the “mergeHandler” to create
// an array of strings with the first name and last name concatenated into a single
// string. (produces [‘johnny bravo’, ‘peter griffin’])
////////////////////////////////////////////////////////////////////////////////////////////////

function merge2Single(arr1, arr2) {
  var str = [];
  var x =0;
  arr1.forEach(function (){str.push(arr1[x] + " " + arr2[x]); x++})
    return str;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// c. Write a function called “merge2Object” that will use the “mergeHandler” to
// create an array of objects with the keys ‘firstname’ and ‘lastname’ populated with
//     the values from the arrays “first_names” and “last_names”.
////////////////////////////////////////////////////////////////////////////////////////////////

// function merge2Object(arr1, arr2) {
function merge2Object(arr1,arr2){
  d = {};
  names = [];
  for (i=0; i < arr1.length;i++){
    d = {'firstname':arr1[i],'lastname':arr2[i]}
    names.push(d)
  }
  return names;

}


console.log(mergeHandler(first_names, last_names, merge2Single));
console.log(mergeHandler(first_names, last_names, merge2Object));