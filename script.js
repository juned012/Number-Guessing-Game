const searchField = document.getElementById("search");
const feedBack = document.getElementById("feedBack");
let guessAttempt = 0;

function guessNumber() {
  const userGuess = parseInt(searchField.value);

  const computerGuess = Math.floor(Math.random() * 5) + 1;
  if (isNaN(userGuess) || !userGuess) {
    feedBack.textContent = "Please enter valid number!";
    return;
  }
  guessAttempt++;

  if (userGuess === computerGuess) {
    feedBack.textContent = `🎉Congratulation, You Won this game in ${guessAttempt} Attempts`;
    guessAttempt = 0;
  } else if (userGuess < computerGuess) {
    feedBack.textContent = "You guess to low , Try again!";
  } else {
    feedBack.textContent = "You guess to high , Try again!";
  }

  searchField.value = "";
}

function restartGame() {
  searchField.value = "";
  feedBack.textContent = "";
  guessAttempt = 0;
}
