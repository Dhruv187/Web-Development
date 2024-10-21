//? Loops

//For Loops

//! For Loop

for (let i = 1; i <= 6; i++) {
  //console.log(i);
}

//! Print even number

for (let i = 2; i <= 20; i = i + 2) {
  //console.log(i);
}

//! Print odd number

for (let i = 1; i <= 15; i = i + 2) {
  //console.log(i);
}

//! Print table

//let t = prompt("enter the number")
//t = parseInt(t);

//for (i = t; i <= t * 10; i = i + t) {
//console.log(i);
//}

// While loop

//let FavMovie = "Avengers";
//let quit = "quit";
//let guess = prompt("Guess the movie");

//while (guess != FavMovie && guess != quit) {
//guess = prompt("Worng Guess Please try again");
//}
//if (guess == FavMovie) {
//alert("Made a right guess");
//} else if (guess == quit) {
//alert("You Quit");
//}

//? Break statement

let FavMovie = "Avengers";
let quit = "quit";
let guess = prompt("Guess the movie");

while (guess != FavMovie) {
  if (guess == quit) {
    console.log(quit);
    break;
  }
  guess = prompt("Worng Guess Please try again");
}
if (guess == FavMovie) {
  alert("Made a right guess");
}

//! Loops in Array

let arr = ["hulk", "captain", "vision"];
for (i = 1; i < arr.length; i++) {
  console.log(i, arr[i]);
}

//? Nested Loops in Array

let heros = [
  ["ironman", "snetry", "deadpool"],
  ["superman", "flash", "batman"],
];

for (i = 0; i < heros.length; i++) {
  console.log(i);
  for (j = 0; j < heros[i].length; j++) {
    console.log(heros[i][j]);
  }
}
