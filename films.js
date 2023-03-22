"use strict";

// let numberOfFilms;

// function start(){
//      numberOfFilms = +prompt("How much films have you watched?",'');

//      while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("How much films have you watched?",'');
//      }

// }


const personalMovieDB = {
    count : 0,
    movies : {},
    actor: {},
    genres: [],
    private: false,

    start: function() {
        personalMovieDB.count = +prompt("How much films have you watched?",'');

     while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("How much films have you watched?",'');
     }

    },

   
    rememberMyFilms: function() {
        for (let i = 0; i < 2 ; i++){
            const a = prompt("One of the last seen films?",'').trim();
            const b = prompt("Please, rate the film",'');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
                personalMovieDB.movies[a] = b ; 
                console.log("done");
            }else {console.log("error");
                   i--;//return to previous question
            }
        }

  

    },


    

    detectPersonslLevel: function() {

        if (personalMovieDB.count < 10) {
            console.log ('Not enough films');
        } else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30 ){
            console.log ("You are classic viewer")
        }else if (personalMovieDB.count >= 30){
            console.log ("You are cinoman")
        }else{console.log ("Error");
        }
     
    },

    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
        else {
            console.log('error');
        }
    
    
    },


    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;

        }else{
            personalMovieDB.private = true;
        }


    },

    // writeYourGenres: function(){
    //     for(let i=1; i<=3; i++){
    //         let genre = prompt(`Your favorite genre ${i}?`);
            
    //         if(genre === '' || genre == null){
    //             console.log ('Вы ааели некорректные данные');
    //             i--;

    //         }else {
    //             personalMovieDB.genres[i-1] =  genre;

    //         }
         
    //     }

    //     personalMovieDB.genres.forEach((item, i) =>{
    //         console.log(`Любимый жанр $(i+1)  - это ${item}`);
    //     });

    // }

    writeYourGenres: function(){
        for(let i=1; i<2; i++){
            let genres = prompt(`Put favorite genres using coma`).toLowerCase();
            
            if(genres === '' || genres == null){
                console.log ('Вы ввели некорректные данные');
                i--;

            }else {
                personalMovieDB.genres =  genres.split(', ');
                personalMovieDB.genres.sort();

            }
         
        }

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1}  - это ${item}`);
        });

   

    }


  
   
    





    

  




};





// personalMovieDB.start();


// const a = prompt("One of the las seen folms?",'');
//       b = prompt("Please, rate the film",'');
//       c = prompt("One of the las seen folms?",''),
//       d = prompt("Please, rate the film",'');





// function rememberMyFilms (){
//     for (let i = 0; i < 2 ; i++){
//         const a = prompt("One of the las seen films?",'').trim();
//         const b = prompt("Please, rate the film",'');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
//             personalMovieDB.movies[a] = b ; 
//             console.log("done");
//         }else {console.log("error");
//                i--;
//         }
//     }

// }

// personalMovieDB.rememberMyFilms();



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






// function writeYourGenres (){
//     for(let i=1; i<=3; i++){
//         personalMovieDB.genres[i-1] =  prompt(`Your favorite genre ${i}?`);
     
//     }
// }
// writeYourGenres();


// function showMyDB(hidden){
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
//     else {
//         console.log('error');
//     }

// }

// showMyDB(personalMovieDB.private);




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

// 
