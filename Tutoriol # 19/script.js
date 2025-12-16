//Using Loops With Arrays in JavaScript | JavaScript Tutorial #19

let num = [3, 54, 6, 5];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

//ForEach loop
num.forEach(element => {
    console.log(element*element);
});


//Array.form

let name = "Harry";
let arr = Array.from(name);
console.log(arr);

//For..of   loop
for (const i of num) {
    console.log(i);
}


//For...in   loop
for (const i in num) {
    console.log(i);
}
