const imageClicker = document.querySelector("#imageClicker");
const returnButton = document.querySelector("#returnButton");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

function containerChanger() {
  container1.classList.toggle("hide");
  container2.classList.toggle("hide");
}

imageClicker.addEventListener("click", containerChanger);
returnButton.addEventListener("click", containerChanger);
