import { getRandomHexColor } from './helpers/getRandomHex';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onChangeBackgroundColor);
refs.stopBtn.addEventListener('click', onStopBtn);
refs.stopBtn.disabled = true;

function onChangeBackgroundColor() {
  toggleControlBtn(true);

  timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, 1000);
}

function onStopBtn() {
  clearInterval(timerId);
  toggleControlBtn(false);
}

function toggleControlBtn(value) {
  refs.startBtn.disabled = value;
  refs.stopBtn.disabled = !value;
}
