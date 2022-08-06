"use strict";

let numberOfFilms;

function start(){
     numberOfFilms = +prompt("How much films have you watched?",'');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How much films have you watched?",'');
     }

}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actor: {},
    genres: [],
    private: false

};

// const a = prompt("One of the las seen folms?",'');
//       b = prompt("Please, rate the film",'');
//       c = prompt("One of the las seen folms?",''),
//       d = prompt("Please, rate the film",'');





// function rememberMyFilms (){
//     for (let i = 0; i < 2 ; i++){
//         const a = prompt("One of the las seen films?",'');
//         const b = prompt("Please, rate the film",'');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
//             personalMovieDB.movies[a] = b ; 
//             console.log("done");
//         }else {console.log("error");
//                i--;
//         }
//     }

// }

// rememberMyFilms();



// function detectPersonslLevel(){

//     if (personalMovieDB.count < 10) {
//         console.log ('Not enough films');
//     } else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30 ){
//         console.log ("You are classic viewer")
//     }else if (personalMovieDB.count >= 30){
//         console.log ("You are cinoman")
//     }else{console.log ("Error");
//     }
    

// }

// detectPersonslLevel();






function writeYourGenres (){
    for(let i=1; i<=3; i++){
        personalMovieDB.genres[i-1] =  prompt(`Your favorite genre ${i}?`);
     
    }
}
writeYourGenres();


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
    else {
        console.log('error');
    }

}

showMyDB(personalMovieDB.private);

// showMyDB(personalMovieDB.private);
    // const a = prompt("One of the las seen films?",'');
    // const b = prompt("Please, rate the film",'');

// let count= 0;
// // while (count < 2){
// //     const a = prompt("One of the las seen films?",'');
// //     const b = prompt("Please, rate the film",'');

// do {
//     const a = prompt("One of the las seen films?",'');
//     const b = prompt("Please, rate the film",'');
 
 
// count++;
// }while(count < 2);



// movies[lastSeenFilm]= 'filmRate';


// personalMovieDB.movies[a] = b ; 
// personalMovieDB.movies[c] = d ;

// console.log(personalMovieDB);