// JavaScript Chapter 4 - Practice Set on Strings JavaScript Tutorial video #15

//Q no 1
let str = "Har\"";
console.log(str.length);

//Q no 2

const sentence = 'The Quick Brown fox jumps over the lazy dog.';
const word = 'Fox';

console.log(sentence.includes(word));
console.log(`The word ${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);



const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false


//Q no 3

let simple = "AyanKhan";
console.log(simple.toLowerCase());
console.log(simple.toUpperCase());

//Q no 4

let str3 = "Please give Rs 1000";
let amount = Number.parseInt(str3.slice(15));
// let amount = str3.slice("Please give Rs".length);
console.log(amount);
console.log(typeof amount);


//Q no 5
let friend = "Deepika";
friend[3] = "R";
console.log(friend); //Friend is not change, because string is imutable
