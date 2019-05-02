 ////////////////////////////////////////////////////////////////////////////////////////////////
 // Web Assignment2
 // group:
 // Kevin christopher 815007355
 // Amrit Sookhai 814001632
 ////////////////////////////////////////////////////////////////////////////////////////////////

 var mergedArr = []
 document.getElementById("createName").addEventListener("submit", createName);
 document.addEventListener("DOMContentLoaded", displayArr);

 function displayArr() {
     document.getElementById("firstNrr").innerHTML = "First names:\n[" + first_names + "]";
     document.getElementById("lastNrr").innerHTML = "Last names:\n[" + last_names + "]";
 }

 function createName() {
     var fName = document.getElementById("firstName").value.toLowerCase();
     var lName = document.getElementById("lastName").value.toLowerCase();
     first_names.push(fName);
     last_names.push(lName);
     displayArr();

 }

 function mergeObject() {
     var str = ""
     mergedArr = mergeHandler(first_names, last_names, merge2Object);
     for (var i = 0; i < mergedArr.length; i++) {
         str += "<br />" + "FirstName: " + mergedArr[i].firstname.bold() + "&nbsp &nbsp &nbsp LastName: " + mergedArr[i].lastname.bold() + ","

     }
     document.getElementById("mergedArr").innerHTML = str;

 }

 function mergeSingle() {
     var str = ""
     var merg = mergeHandler(first_names, last_names, merge2Single);
     for (var i = 0; i < merg.length; i++) {
         str += "<br />" + merg[i].bold() + " ";
     }
     document.getElementById("mergedArr").innerHTML = str;
 }