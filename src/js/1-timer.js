import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let countdownInterval;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        const timeUntilSelectedDate = userSelectedDate - new Date();

        // Clear the interval if it's already running
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }

        if (timeUntilSelectedDate < 0) {
            iziToast.error({
                color: 'red',
                position: 'topRight',
                message: 'Please choose a date in the future',
            });
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
};

const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

const flatpickrInstance = flatpickr('#datetime-picker', options);
const inputTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;

startBtn.addEventListener('click', () => {
    inputTime.disabled = true;
    startBtn.disabled = true;

    countdownInterval = setInterval(() => {
        const timeInterval = userSelectedDate - new Date();
        
        if (timeInterval < 0) {
            clearInterval(countdownInterval);
            inputTime.disabled = false;
            iziToast.success({
                title: 'Completed',
                message: 'The countdown has finished!',
                titleColor: '#fff',
                titleSize: '16px',
                position: 'topRight',
                backgroundColor: 'green',
                messageColor: 'white',
                theme: 'dark',
            });
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeInterval);
        updateTimerDisplay({ days, hours, minutes, seconds });
    }, 1000);
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
    timerFields.days.textContent = String(days).padStart(2, '0');
    timerFields.hours.textContent = String(hours).padStart(2, '0');
    timerFields.minutes.textContent = String(minutes).padStart(2, '0');
    timerFields.seconds.textContent = String(seconds).padStart(2, '0');
}