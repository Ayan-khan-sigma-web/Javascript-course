// Functions in JavaScript Tutoriol video # 11

function onePlusAvg (x, y) {
    // console.log("Done");
    return Math.round(1 + (x + y)/2)
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of a and b is ", onePlusAvg(b, c));
console.log("One plus Average of a and b is ", onePlusAvg(a, c));

const sum = (p, q) => {
    return p + q;
}
console.log(sum(9, 7));

const func = () =>{
    console.log("Hey hello . I am Fine");
    return "hi";
}
let v = func();
console.log(v);