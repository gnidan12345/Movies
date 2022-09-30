"use strict";

const numberOfFilms = +prompt("How much films have you watched?",'');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actor: {},
    genres: [],
    private: false

};

const a = prompt("One of the last seen folms?",''),
      b = prompt("Please, rate the film",''),
      c = prompt("One of the last seen folms?",''),
      d = prompt("Please, rate the film",'');

// movies[lastSeenFilm]= 'filmRate';


personalMovieDB.movies[a] = b ; 
personalMovieDB.movies[c] = d ;

console.log(personalMovieDB);