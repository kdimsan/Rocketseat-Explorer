let randomNumber;
let attempts = 1;
let numberSelector;

const btnTries = document.querySelector("#btnTries");
const btnRestart = document.querySelector("#btnRestart");

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

function handleTriesClick(event) {
  event.preventDefault();

  randomNumber = Math.round(Math.random() * 10);

  numberSelector = document.querySelector("#numberSelector");

  if (randomNumber == numberSelector.value) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    document.querySelector(
      ".box h2"
    ).innerText = `Você acetou em ${attempts} tentativa(s)`;
  }

  attempts++;
}

function handleRestartClick() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  attempts = 1;
  numberSelector.value = "";
}

btnTries.addEventListener("click", handleTriesClick);
btnRestart.addEventListener("click", handleRestartClick);
