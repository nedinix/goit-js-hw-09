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

let intervalId = null;

refs.startTimerBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    selectedDates[0] > Date.now()
      ? (refs.startTimerBtn.disabled = false)
      : (refs.startTimerBtn.disabled = true) &
        Notify.failure('Please choose a date in the future');
  },
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      const { inputDatetime, startTimerBtn } = refs;
      startTimerBtn.addEventListener('click', () => {
        inputDatetime.disabled = true;
        startTimerBtn.disabled = true;
        onChangeTimer(selectedDates[0], inputDatetime, startTimerBtn);
      });
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.inputDatetime, options);

function onChangeTimer(timedate, ...args) {
  intervalId = setInterval(() => {
    const resultOfDifference = timedate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(resultOfDifference);

    if (resultOfDifference >= 0) {
      refs.daysValue.textContent = addLeadingZero(days);
      refs.hoursValue.textContent = addLeadingZero(hours);
      refs.minutesValue.textContent = addLeadingZero(minutes);
      refs.secondsValue.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
      args.forEach(item => (item.disabled = false));
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
