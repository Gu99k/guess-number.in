const win = document.querySelector(".win");
const btn = document.querySelector("#btn");
const number = document.querySelector("#number");
const atends = document.querySelector(".atends");
const congra = document.querySelector("#congrat");
const enterNumber = document.querySelector("#enter-number");

number.focus();
const guessNumber = Math.floor(Math.random() * 100 + 1);
// console.log(guessNumber);

let guess = 10;

btn.addEventListener("click", () => {
  guess--;

  let numberValue = number.value;
  if (numberValue == guessNumber) {
    [win.innerHTML, number.disabled] = ["You won", true];
    [btn.innerHTML] = ["Replay"];
    [congra.innerHTML, enterNumber.innerHTML] = ["Congratulation", "Done"];
    [atends.innerHTML, atends.style.color] = ["Great", "Yellow"];
  } else if (numberValue > guessNumber && numberValue < 100) {
    enterNumber.innerHTML = "Enter lower number please";
    [atends.innerHTML, win.innerHTML] = [guess, "Sorry"];
    [number.value] = [""];
  } else if (numberValue < guessNumber && numberValue > 0) {
    enterNumber.innerHTML = "Enter upper number please";
    [atends.innerHTML, win.innerHTML] = [guess, "sorry"];
    [number.value] = [""];
  } else {
    [enterNumber.innerHTML, atends.innerHTML] = ["This is invalid", guess];
    [win.innerHTML] = ["Please enter correct num"];
  }

  if (guess == 0) {
    [btn.innerHTML, number.disabled, numberValue] = ["Replay", true, ""];
    [atends.innerHTML, atends.style.color] = ["You have lost the game", "red"];
  }

  if (guess < 0) {
    window.location.reload();
  }
});
