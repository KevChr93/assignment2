 ////////////////////////////////////////////////////////////////////////////////////////////////
 // Web Assignment2
 // group:
 // Kevin christopher 815007355
 // Amrit Sookhai 814001632
 ////////////////////////////////////////////////////////////////////////////////////////////////

 var genres = [];
 var movies = [];
 document.getElementById("createGenre").addEventListener("submit", createGenre);
 document.getElementById("createMovie").addEventListener("submit", formEntry);
 document.getElementById("genreList").innerHTML = genres;
 document.addEventListener("DOMContentLoaded", loadGenres);
 document.addEventListener("DOMContentLoaded", loadMovies);
 ////////////////////////////////////////////////////////////////////////////////////////////////
 //  1. Create a form with the id “createGenre” to create a new instance of the Genre class. The
 //  form contains fields needed for creating a genre. The fields will have an id with the same
 //  name of the field that it captures. The form will capture information from the user and
 //  stores the record in a global array called “genres” using the “enqueue” function from
 //  section 3. The form will clear the fields after the record is inserted correctly. After
 //  inserting the genre use the “sort” function from section 3, to keep genres in ascending
 //  order.
 ////////////////////////////////////////////////////////////////////////////////////////////////
 function createGenre() {
     var g = new Genre();
     g.name = document.getElementById("name").value.toLowerCase();
     if (g.name === "") {
         alert("field can not be blank");
         document.getElementById("name").value = "";
         return false;
     } else if (genres.filter(function (e) { //if the genre is present in the array genres 
             return e.name === g.name;
         }).length > 0) {
         alert("The genre already exists");
         document.getElementById("name").value = "";

     } else addCustomer(genres, g) //adds customer in order using mthod from util.js 
     drop(g.name)
     document.getElementById("name").value = "";
     return true

 }

 /////////////////////////////////////////////////////////////////////////////////////////////////
 //  2. Create a form with the id “createMovie” to create a new instance of the Movie class. The
 //  form contains fields needed for creating a genre. The fields will have an id with the same
 //  name of the field that it captures. Association of only one genre is required for the form.
 //  The genre is specified via a dropdown list (id = ‘genres’) which is populated using the
 //  “genres” global array. The form will capture information from the user and stores the
 //  record in a global array called “movies” using the “enqueue” function from section 3. The
 //  form will clear the fields after the record is inserted correctly. [
 ////////////////////////////////////////////////////////////////////////////////////////////////

 function formEntry() {
     var uuid = document.getElementById("uuid").value.toLowerCase();
     var title = document.getElementById("title").value.toLowerCase();
     var year = document.getElementById("year").value.toString().toLowerCase();
     var gname = document.getElementById("genre").value.toLowerCase();
     var m = createMovie(uuid, title, year, gname)
     if (iffill(m)) { // checkig if file is filled ot 
         if (uidVar(movies, m)) {
             if (isUniqueMov(movies, m)) {
                 if (validYear(m.year)) { // if year is a valid year 1000 to 9999

                     genres[findGnre(m.genre.name)].addMovie(m)
                     moviesArray()
                     displayMovies()
                     //clearing form
                     document.getElementById('uuid').value = '';
                     document.getElementById('title').value = '';
                     document.getElementById('year').value = '';
                     document.getElementById("genre").selectedIndex = 0;
                 }
             } else alert("Movie already exists")

         }
     }
 }

 function createMovie(id, tit, yr, gn) {
     var m = new Movie();
     var g = new Genre();
     m.uuid = id;
     m.title = tit;
     m.year = yr;
     g.name = gn;
     m.genre = g;
     m.related = genres.filter(function (genres) {
         return genres.name.toLowerCase() === g.name.toLowerCase();
     });

     return m
 }

 function validYear(y) { //checksif year entered is valid 
     var val = false;
     if (y.length !== 4) {
         alert("please enter valid year");
         return false;
     } else
     if (parseInt(y[0]) === 0) {
         alert("please enter valid year")
         return false
     } else
         for (var i = 1; i < 4; i++) {
             if (parseInt(y[i]) >= 0 && parseInt(y[i]) <= 9) {
                 val = true;
             }
             if (val === false) {
                 alert("please enter valid year")
                 return false;
             } else
                 return true;
         }
 }

 function addOption(selectbox, text, value) { // creates new option for genre selection
     optn = document.createElement("OPTION");
     optn.text = text;
     optn.value = value;
     selectbox.options.add(optn);
 }

 function drop(name) { //adds option that was created to and refreshes dropdown selection for genre
     addOption(document.getElementById("genre"), name, name);
     updateGenreListing();

 }

 function iffill(m) { //checks if the fields of the movie form was filled out 
     if (m.uuid === "" && m.year === "" && m.title === "" && m.genre.name === "") {
         alert("Form can not be blank")
         return false
     } else {
        if (m.uuid === "") {
            alert("Please Enter a uuid");
            return false
        }else 
         if (m.title === "") {
             alert("Please Enter a title");
             return false
         } else
         if (m.genre.name === "") {
             alert("Select a genre");
             return false
         } else
         if (m.year === "") {
             alert("Please Enter a year");
             return false
         }
     }
     return true;
 }

 function uidVar(movies, m) { // verifies if the uuid is unique
     if (movies.length === 0) {
         return true
     } else
     if (m.uuid.toLowerCase() =="") {
         alert("please enter uuid*")
         return false
     } else
         for (var i = 0; i < movies.length; i++) {
             if (movies[i].uuid.toLowerCase() === m.uuid.toLowerCase()) {
                 alert("UUID already exists \n*UUID MUST BE UNIQUE*")
                 return false
             }
         }
     return true;

 }

 function isUniqueMov(movies, m) { // verifies if exact movie already exists
     if (movies.length === 0) {
         return true //doesnt exist  is unique 
     } else
         for (var i = 0; i < movies.length; i++)
             if (movies[i].title.toLowerCase() === m.title.toLowerCase() && movies[i].genre.name.toLowerCase() === m.genre.name.toLowerCase() && movies[i].year.toLowerCase() === m.year.toLowerCase()) {
                 return false
             }
     else return true
 }
 /////////////////////////////////////////////////////////////////////////////////////////////////
 //  3. Create a function “displayGenres” that will use the createElement method to display an
 //  ordered list of genres in the section with the id “genreList”.
 /////////////////////////////////////////////////////////////////////////////////////////////////
 function displayGenres() { // creates a unordered list from the available genres 
     var List = document.createElement('ul');

     for (let i in genres) {
         var listItem = document.createElement('li');
         listItem.appendChild(document.createTextNode(genres[i].name));
         List.appendChild(listItem);
     }
     document.getElementById('genreList').appendChild(List);
     return List;
 }

 function updateGenreListing() { //appends the new genre to the list 
     var old = document.getElementById('genreList');
     var div = document.createElement('div');
     div.id = 'genreList';
     div.appendChild(displayGenres());
     var par = old.parentNode;
     par.replaceChild(div, old);
 }

 /////////////////////////////////////////////////////////////////////////////////////////////////
 //  4. Create a function “displayMovies” that will use strings to display a table of movies in
 //  the section with the id “movieList”. The columns of the tables are related to the fields of
 //  the movie class.
 /////////////////////////////////////////////////////////////////////////////////////////////////
 function displayMovies() { // creates / "overrites" a table from a string file str  
     var str = `
        <thead>
            <tr>
                <th>UUID</th>
                <th>Title</th>
                <th>Year</th>
                <th>Genre</th>
            </tr>
        </thead>    
    `;
     for (let i in movies) {
         str +=
             `
            <tr>
                <td>${ movies[i].uuid}</td>
                <td>${ movies[i].title}</td>
                <td>${ movies[i].year}</td>
                <td>${ movies[i].genre.name}</td>
            </tr>
        `;
     }
     document.getElementById('movieList').innerHTML = str;
 }

 /////////////////////////////////////////////////////////////////////////////////////////////////
 //  5. Write a function called “loadGenres” that will make an AJAX GET request to retrieve the
 // file “genreDB.txt” that has a list of genres separated by commas. The function will load
 // the data and populate the global genres array. The loadGenres function will also use the
 // displayGenres function created in section 4 to display results.
 /////////////////////////////////////////////////////////////////////////////////////////////////
 function loadGenres() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
             var data = this.responseText.split(',');
             data.forEach(n => {
                 var g = new Genre();
                 g.name = n.toLowerCase();
                 if (!genExist(g)) { //new genre  
                     addCustomer(genres, g);
                     drop(g.name);
                 }
             })
         }
         if (xhttp.status === 404) {
             console.log("genreDB.txt file not found");
         }
     };

     xhttp.open("get", "data/genreDB.txt", true);
     xhttp.send();
 }

 /////////////////////////////////////////////////////////////////////////////////////////////////
 // 6. Write a function called “loadMovies” that will make a request to a json file called
 // “moviesDB.json”. The function will load the data and populate the global genres array.
 // The loadMovies function will also use the displayMovies function created in section 4 to
 // display results. 
 /////////////////////////////////////////////////////////////////////////////////////////////////
 function findMov(m) { 
     var movName = m.title.toLowerCase();
     var movId=m.uuid.toLowerCase();
     var mGenre=m.genre.name.toLowerCase();
     var mYear=m.year.toLowerCase();
     for (var i = 0; i < movies.length; i++) {
         if (movies[i].title.toLowerCase() === movName&&movies[i].uuid.toLowerCase()===movId&&movies[i].year.toLowerCase() === mYear &&movies[i].genre.name.toLowerCase() === mGenre) {
             return true;
         }
     }
     return false;
 }

 function findGnre(gname) { 
     var found = false
     var genName = gname.toLowerCase();
     for (var i = 0; i < genres.length; i++) {
         if (genres[i].name.toLowerCase() === genName) {
             found = true;
             return i;
         }
     }
     if (found === false) {
         var g = new Genre();
         g.name = genName;
         addCustomer(genres, g)
         return findGnre(gname);
     }
 }

 function genExist(g) {
     genName = g.name.toLowerCase();
     for (var i = 0; i < genres.length; i++) {
         if (genres[i].name.toLowerCase() === genName) {
             return true
         }
     }
     return false

 }

 function moviesArray() {
     var m = new Movie()
     for (var i = 0; i < genres.length; i++) {
         for (var j = 0; j < genres[i].movies.length; j++) {
             m = genres[i].movies[j];
             if (!findMov(m)) {
                 addmov(movies, m)
             }
         }
     }
 }

 function loadMovies() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (this.readyState === 4 && this.status === 200) {
             var movie_data = JSON.parse(this.responseText);
             for (var i = 0; i < movie_data.length; i++) {
                 var m = createMovie(movie_data[i].uuid, movie_data[i].title, movie_data[i].year, movie_data[i].genre.name.toLowerCase())
                 if (isUniqueMov(movies, m)) {
                     genres[findGnre(m.genre.name)].addMovie(m);
                     moviesArray();
                     displayMovies();
                 }
             }
         }
         if (xhttp.status === 404) {
             console.log("genreDB.txt file not found");
         }
     };
     xhttp.open('GET', 'data/moviesDB.json', false);
     xhttp.send();
 }

 function addmov(array, newRecord) {
     if (array.length === 0) {
         array.push(newRecord);
         return true;
     } else
         for (var i = 0; i < array.length; i++) {
             if (newRecord.title.toLowerCase() < array[i].title.toLowerCase()) {
                 array.splice(i, 0, newRecord);
                 return true;
             }
         }
     array.push(newRecord);
     return true;
 }