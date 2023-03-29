const addButton = document.querySelector(".add-button");
const subButton = document.querySelector(".sub-button");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const playButton = document.querySelector(".play-button");
const stopButton = document.querySelector(".stop-button");

const minuteAdder = 5;
const countDownInterval = 1000;

export const elements = {
  addButton,
  subButton,
  displayMinutes,
  displaySeconds,
  playButton,
  stopButton,
  minuteAdder,
  countDownInterval,
};
