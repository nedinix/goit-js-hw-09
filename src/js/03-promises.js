import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
  form: document.querySelector('.form'),
};

const notifyOptions = {
  useIcon: false,
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const { delay, step, amount } = refs.form.elements;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue).then(onResolvePromise).catch(onRejectPromise);
    delayValue += stepValue;
  }

  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onResolvePromise({ position, delay }) {
  return Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`,
    notifyOptions
  );
}

function onRejectPromise({ position, delay }) {
  return Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`,
    notifyOptions
  );
}
