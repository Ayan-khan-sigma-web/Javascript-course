// JavaScript alert, prompt & confirm | JavaScript Tutorial in #27

alert("Enter This value of a!");
let a = prompt("Enter of a", "578");
// document.write(a);
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));

let write = confirm("Do you want to write it to the page");
if (write) {
    document.write(a);
}
else{
    document.write("Please allow me to write");
}