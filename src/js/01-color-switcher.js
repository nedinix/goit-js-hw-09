import { getRandomHexColor } from './helpers/getRandomHex';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onChangeBackgroundColor);
refs.stopBtn.addEventListener('click', onStopBtn);

function onChangeBackgroundColor() {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    refs.startBtn.setAttribute('disabled', 'true');
    refs.stopBtn.removeAttribute('disabled');
  }, 1000);
}

function onStopBtn() {
  clearInterval(timerId);
  refs.stopBtn.setAttribute('disabled', 'true');
  refs.startBtn.removeAttribute('disabled');
}
