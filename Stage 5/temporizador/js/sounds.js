export default function Sound() {
  const soundButton = document.querySelectorAll(".relaxing-sound");

  const sounds = {
    cafeteria: new Audio("./sounds/cafeteria.mp3"),
    fireplace: new Audio("./sounds/fireplace.mp3"),
    rain: new Audio("./sounds/rain.mp3"),
    forest: new Audio("./sounds/forest.mp3"),
  };

  let soundsKeys = Object.keys(sounds);

  soundsKeys.forEach((soundKey) => {
    sounds[soundKey].loop = true;
  });

  soundButton.forEach((button) => {
    button.addEventListener("click", audioPlayer);
  });

  function audioPlayer(e) {
    const soundKey = e.target.dataset.sound;
    e.target.classList.toggle("selected");

    if (e.target.classList.contains("selected")) {
      sounds[soundKey].play();
    } else {
      sounds[soundKey].pause();
    }
  }

  return {
    audioPlayer,
  };
}
