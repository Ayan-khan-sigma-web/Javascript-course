// Javscript Tutoriol video # 7 Conditional expressions in JavaScript .


// let a = parseInt(prompt("Hey whats You age :")); 
//Example for shoutcut  String ko Direct number main convert

// alert("Hey");
// let a = prompt("Hey whats You age :");
// console.log(typeof a);

// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a); // Converting the string to a number
// // console.log(a);
// if(a<0){
//     alert("This is an invalid age");
// }
// else if (a<9) {
//     alert("You are kid and you cannot even think of diving");
// }
// else if (a<18 && a>=9) {
//     alert("You are kid and you can think of diving after 18");
// }
// else{
//     alert("You can now drive as you are above 18");
// }

//HomeWork - Explore switch statement and write a basic program in the comments

// let age = prompt("Enter Your age :");

// console.log("You can", (age<18? "Not Drive" : "Drive"));


//Switch statement For Example HomeWork

//Q no 1

// let day = prompt("Enter You Day 1 to 7 ");
// day = Number.parseInt(day);

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Unknown Day");
//         break;
// }


//Q no 2

// Es Not solve

//Q no 3

// let grade = prompt("Enter Your Grade");

// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     case "D":
//         console.log("Star");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
 
//     default:
//         console.log("Invalid grade")
//         break;
// }

//Q no 4

// let light = prompt("Enter Your Traffic Light :");

// switch (light) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Unkonwn Traffic Light Color");
//         break;
// }


//Q no 5

// let food = prompt("Enter Your number For 1 to 3 Food menu :");
// food = Number.parseInt(food);

// switch (food) {
//     case 1:
//         console.log("Pizza");
//     break;
//     case 2:
//         console.log("Burger");
//     break;
//     case 3:
//         console.log("Sandwich");
//     break;
//     default:
//         console.log("Invalid choice");
//     break;
// }

// Q no 6

// let month = prompt("Enter Your number For 1 to 12 Month Days Show :");
// month = Number.parseInt(month);

// switch (month) {
//     case 1:
//         console.log("January – 31 days");
//     break;
//     case 2:
//         console.log("February – 28/29 days");
//     break;
//     case 3:
//         console.log("March – 31 days");
//     break;
//     case 4:
//         console.log("April – 30 days");
//     break;
//     case 5:
//         console.log("May – 31 days");
//     break;
//     case 6:
//         console.log("June – 30 days");
//     break;
//     case 7:
//         console.log("July – 31 days");
//     break;
//     case 8:
//         console.log("August – 31 days");
//     break;
//     case 9:
//         console.log("September – 30 days");
//     break;
//     case 10:
//         console.log("October – 31 days");
//     break;
//     case 11:
//         console.log("November – 30 days");
//     break;
//     case 12:
//         console.log("December – 31 days");
//     break;

//     default:
//         console.log("Invalid Number for Month");
//     break;
// }

//Q no 7
// Not solve

//Q no 8

// let arrow = prompt("Enter Your Direction :");

// switch (arrow) {
//     case "up":
//         console.log("You Jump");
//         break;
//     case "down":
//         console.log("You crouch");
//         break;
//     case "left":
//         console.log("Move Left");
//         break;
//     case "right":
//         console.log("Move Right");
//         break;

//     default:
//         console.log("Unknown For Arrow");
//         break;
// }

//Q no 9

// let week = prompt("Enter Your Day For weekday and Weekend :");

// switch (week) {
//     case "Monday":
//     case "Tuesday": 
//     case "Wednesday": 
//     case "Thursday":
//         console.log("Weekday");
//         break;

//     case "Friday":
//     case  "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;

//     default:
//         console.log("Unknown Day For Weekday and Weekend");
//         break;
// }

//Q no 10

// let browser = prompt("Enter Your Browser name :");

// switch (browser) {
//     case "chrome":
//         console.log("Fast");
//         break;
//     case "firefox":
//         console.log("Secure");
//         break;
//     case "edge":
//         console.log("Microsoft browser");
//         break;
//     case "safari":
//         console.log("Apple Browser");
//         break;

//     default:
//         console.log("Unknown Browser");
//         break;
// }