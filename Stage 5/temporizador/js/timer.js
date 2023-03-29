import Sound from "./sounds.js";
const sound = Sound();

export function Timer({
  displayMinutes,
  displaySeconds,
  countDownInterval,
  minuteAdder,
  playButton,
}) {
  let timerTimeOut;
  let minutes = Number(displayMinutes.textContent);
  let minutesInitialMemory = 0;

  function displayFormatter(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, 0);
    displaySeconds.textContent = String(seconds).padStart(2, 0);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(displaySeconds.textContent);
      let minutes = Number(displayMinutes.textContent);
      let isFinished = minutes == 0 && seconds == 1;

      if (seconds == 0) {
        seconds = 60;

        displayFormatter(String(minutes - 1));
      }

      displayFormatter(displayMinutes.textContent, String(seconds - 1));

      if (isFinished) {
        return setTimeout(() => {
          alert("Tempo Finalizado");

          const formattedMinutes = String(minutesInitialMemory).padStart(2, 0);
          displayMinutes.textContent = formattedMinutes;

          playButton.removeAttribute("disabled", "");
        }, countDownInterval);
      }
      console.log("minutos", minutes);
      console.log("segundos", seconds);
      countDown();
    }, countDownInterval);
  }

  function increaseMinutes() {
    minutes += minuteAdder;
    displayFormatter(minutes, 0);
  }

  function decreaseMinutes() {
    if (minutes > 0) {
      minutes -= minuteAdder;
      displayFormatter(minutes, 0);
    } else {
      alert("Impossivel tempo ser negativo.");
    }
  }

  function playTimer() {
    if (minutes != 0) {
      countDown();
      minutesInitialMemory = minutes;
      playButton.setAttribute("disabled", "");
    } else {
      alert("Selecione um tempo válido");
    }
  }

  function stopTimer() {
    clearTimeout(timerTimeOut);
    playButton.removeAttribute("disabled", "");
  }

  return {
    displayFormatter,
    countDown,
    increaseMinutes,
    playTimer,
    decreaseMinutes,
    stopTimer,
  };
}
