//Exercise 1 - Guess the Number | JavaScript Tutorial #22

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);

let guess;
let attempts = 0;

while(true) {
    guess = Number.parseInt(prompt("Guess the number (1-100):"));
    attempts++;

    if(guess === randomNumber) {
        alert("Congratulations! You guessed the correct number in " + attempts + " attempts.");
        break;  // game end
    } 
    else if(guess < randomNumber) {
        alert("Too low! Try again.");
    } 
    else {
        alert("Too high! Try again.");
    }
}
