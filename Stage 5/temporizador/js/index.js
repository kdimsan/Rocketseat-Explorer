import { Timer } from "./timer.js";
import { elements } from "./elements.js";

const {
  addButton,
  subButton,
  displayMinutes,
  displaySeconds,
  playButton,
  stopButton,
  minuteAdder,
  countDownInterval,
} = elements;

const timer = Timer({
  displayMinutes,
  displaySeconds,
  countDownInterval,
  minuteAdder,
  playButton,
});

addButton.addEventListener("click", timer.increaseMinutes);

subButton.addEventListener("click", timer.decreaseMinutes);

playButton.addEventListener("click", timer.playTimer);

stopButton.addEventListener("click", timer.stopTimer);
