////////////////////////////////////////////////////////////////////////////////////////////////
// Web Assignment2
// group:
// Kevin christopher 815007355
// Amrit Sookhai 814001632
////////////////////////////////////////////////////////////////////////////////////////////////
class Movie {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 1. Create a no parameter constructor for the Movie and Genre class. The attributes are
    // configured with reasonable defaults (i.e. empty strings, empty arrays and nulls) in the
    // constructor.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    constructor() {
        this.uuid = ""
        this.title = ""
        this.year = ""
        this.genre = ""
        this.related = []
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //     2. The “addRelatedMovie” method of the Movie class will check to ensure that an instance
    //     of the Movie class is passed as a parameter before adding to the array of Movies called
    // “related”. The method will return true if operation is completed successfully.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    addRelatedMovie(m) {
        if (m instanceof Movie) {
            related.push(m);
            return true;
        } else
            return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 3. The “setGenre” method of the Movie class will check to ensure that an instance of the
    // Genre class is passed as a parameter before changing the genres attribute. The method
    // will also add the current movie object to the genre instance using the “addMovie”
    // method of the Genre class. The method will return true if operation is completed
    // successfully.
    ////////////////////////////////////////////////////////////////////////////////////////////////

    setGenre(g) {
        if (g instanceof Genre) {
            if (g.addMovie(this)) {
                return true;
            } else
                return false;
        }
        return false;
    }

} //end movie class
////////////////////////////////////////////////////////////////////////////////////////////////
class Genre {

    constructor() {
        this.name = ""
        this.movies = []
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //4. The “addMovie” method of Genre class will check to ensure that an instance of the
    //Mobile class is passed as a parameter before addition to the array of Movies called
    //“movies”. The movies array is sorted by movie’s title. The method will return true if
    //operation is completed successfully and false otherwise.
    ////////////////////////////////////////////////////////////////////////////////////////////////
    addMovie(m) {
        if (m instanceof Movie) {
            this.movies.push(m);
            return true;
        } else
            return false;
    }
} // end gentre class
////////////////////////////////////////////////////////////////////////////////////////////////