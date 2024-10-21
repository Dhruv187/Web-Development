const max = parseInt(prompt("Enter the Maximum Value"), 10);
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while (true) {
  if (guess.toLowerCase() === "quit") {
    alert("You quit the game.");
    break;
  }

  guess = parseInt(guess, 10); // Convert guess to a number

  if (guess === random) {
    alert("Congrats! You are right.");
    break;
  } else if (guess > random) {
    guess = prompt("Your guess is too large! Please try again");
  } else {
    guess = prompt("Your guess is too small! Please try again");
  }
}
