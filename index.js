// Get the app element from the DOM
// const app = document.getElementById('app');

// Generate a random number between 1 and 100
const randomNum = Math.trunc(Math.random() * 100 + 1);
console.log(randomNum);

// Initialize variables
let guess;
let output = "";

// Create a paragraph element to display messages to the user
const message = document.createElement('p');
app.appendChild(message);

// Game loop
do {
  guess = parseInt(window.prompt("Pick a number between 1-100"));
  
  if (randomNum === guess) {
    output = "Congratulations! You guessed the correct number!";
  } else if (guess > randomNum) {
    output = "Too high! Try again.";
  } else {
    output = "Too low! Try again.";
  }
  
  // Display the output message in both an alert and on the webpage
  window.alert(output);
  message.textContent = output;

} while (randomNum !== guess);

// Final message once the correct number is guessed
message.textContent = "You guessed it! The correct number was " + randomNum + ".";

console.log(randomNum);