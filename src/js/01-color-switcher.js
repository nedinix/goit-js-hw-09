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
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, 1000);
}

function onStopBtn() {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}
