import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { convertMs } from './helpers/convertMs';

const refs = {
  inputDatetime: document.querySelector('input#datetime-picker'),
  startTimerBtn: document.querySelector('.timer-start'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

refs.startTimerBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    refs.startTimerBtn.disabled =
      selectedDates[0] > Date.now()
        ? false
        : Notify.failure('Please choose a date in the future') || true;
  },
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      refs.startTimerBtn.addEventListener('click', () => {
        toggleControlBtn(true);
        onChangeTimer(selectedDates[0]);
      });
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.inputDatetime, options);

function onChangeTimer(timeDate) {
  const intervalId = setInterval(() => {
    const resultOfDifference = timeDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(resultOfDifference);

    if (resultOfDifference >= 0) {
      refs.daysValue.textContent = addLeadingZero(days);
      refs.hoursValue.textContent = addLeadingZero(hours);
      refs.minutesValue.textContent = addLeadingZero(minutes);
      refs.secondsValue.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
      toggleControlBtn(true);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function toggleControlBtn(value) {
  refs.inputDatetime.disabled = value;
  refs.startTimerBtn.disabled = value;
}
