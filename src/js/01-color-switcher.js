function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onChangeBackgroundColor);

refs.stopBtn.addEventListener('click', () => {
  console.log('stop', refs.stopBtn);
});

function onChangeBackgroundColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}
