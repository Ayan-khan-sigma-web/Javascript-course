//Some More JavaScript Array Methods | JavaScript Tutorial #18


// let num = [1, 2, 3, 4, 5, 6, 7];
// delete num[0];
// console.log(num.length);


// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = [7, 8, 9];

// let newArray = a1.concat(a2, a3);
// console.log(newArray);

//Sort method

// let compare = (a, b)=> {
//     return a - b;
// }
// let num = [8131, 2232, , 333, 444, 555, 666, , 7877, 488];
// num.sort(compare);
// num.reverse();
// console.log(num);


//splice and slice

let num = [1, 2, 3, 4, 5, 6, 7, 8];
// num.splice(2, 3, 1022, 1023, 1024);
// console.log(num);

let newnum = num.slice(3, 5);
console.log(newnum);