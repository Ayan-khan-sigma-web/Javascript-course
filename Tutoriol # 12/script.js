//Tutoriol video # 12 JavaScript Chapter 3 - Practice Set on Loops and Functions 

//Q no 1

// let marks = {
//     Harry: 98,
//     Rohan: 78,
//     Vibham: 48,
//     Monika: 4
// }

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


//Q no 2

// for (let key in marks) {
//     console.log("The marks of " + key + " are " + marks[key]);
// }


//Q no 3

// let cn = 43;

// let i;
// while (i!=cn) {
//     console.log("Try Again");
//     i = prompt("Enter a number");
    
// }
// console.log("Conguration of correct number = " + i);


//Q no 4

// const means = (a, b, c, d) => {
//     return (a + b + c + d)/4
// }

// console.log(means(4, 5, 6, 7));




// For Example

// function create(name) {
//     console.log("You name " + name);
// }
// create(prompt("Enter a name"));


// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(5, 10);
// console.log("Multiply = " + result);


// const arr = (a, b, c, d) => {
//       return (a + b + c + d);
// }

// let sum = arr(3, 4, 5, 6);
// console.log("This number sum = " + sum);

// const square = (x) => {
//     return (x * x);
// }

// let power = square(6);
// console.log("The square is = " + power);


// let result = prompt("Enter a number for Grade:");
// result = Number.parseInt(result);

// if (result >= 80 && result <= 100) {
//     console.log("A Grade");
// } 
// else if (result >= 70 && result <= 79) {
//     console.log("B Grade");
// } 
// else if (result >= 60 && result <= 69) {
//     console.log("C Grade");
// } 
// else if (result >= 50 && result <= 59) {
//     console.log("D Grade");
// }
// else if (result >= 0 && result <= 49) {
//     console.log("F Grade");
// } 
// else {
//     console.log("Unknown number for Grade");
// }
