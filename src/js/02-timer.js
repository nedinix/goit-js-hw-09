// підключити бібліотеку в проект +
// підключення функціїї +
// записати елементи в обєкт +-
// вибір дати
// відлік часу
// форматування часу
// підключення notifix

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './helpers/convertMs';

const refs = {
  inputDatetime: document.querySelector('input#datetime-picker'),
  startTimerBtn: document.querySelector('.timer-start'),

  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

refs.startTimerBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // onOpen(selectedDates) {
  //   if (selectedDates[0] > Date.now) {
  //   }
  // },
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] > Date.now()) {
      refs.startTimerBtn.removeAttribute('disabled');
      refs.startTimerBtn.addEventListener('click', () => {
        refs.inputDatetime.setAttribute('disabled', 'true');
        refs.startTimerBtn.setAttribute('disabled', 'true');

        setInterval(() => {
          onChangeTimer(selectedDates[0]);
        }, 1000);
      });
    } else {
      alert('Please choose a date in the future');
    }
  },
};

const onInputDate = flatpickr(refs.inputDatetime, options);

function onChangeTimer(timedate) {
  const resultData = convertMs(timedate - Date.now());
  refs.daysValue.textContent = resultData.days;
  refs.hoursValue.textContent = resultData.hours;
  refs.minutesValue.textContent = resultData.minutes;
  refs.secondsValue.textContent = resultData.seconds;
}
