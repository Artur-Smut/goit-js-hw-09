import flatpickr from "flatpickr";
import Notiflix, { Notify } from "notiflix";
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector("#datetime-picker")
const buttonRef = document.querySelector('[data-start]')
const daysRef = document.querySelector('[data-days]')
const hoursRef = document.querySelector('[data-hours]')
const minutesRef = document.querySelector('[data-minutes]')
const secondsRef = document.querySelector('[data-seconds]')

buttonRef.addEventListener('click', start);

buttonRef.disabled = true;


let flat = flatpickr(inputRef, {
    enableTime: true,
    time_24hr: true,
    defaultDate:new Date(),
    minuteIncrement:1,


    onClose(selectedDates) {
       if (selectedDates[0]<Date.now()) {
           buttonRef.disabled = 'true';
           Notiflix.Notify.failure('Please choose a date in the future');
        } else {
           buttonRef.disabled = false;
       }
   }


})


function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const daysRef = Math.floor(ms / day);
 
  const hoursRef = Math.floor((ms % day) / hour);
 
  const minutesRef = Math.floor(((ms % day) % hour) / minute);
 
  const secondsRef = Math.floor((((ms % day) % hour) % minute) / second);

  return { daysRef, hoursRef, minutesRef, secondsRef };
}


function addLeadingZero(value) {
    return String(value).padStart(2,'0')
};
  

function start() {
    const timer = setInterval(() => {
        const date = new Date(inputRef.value);
        const subtraction = date - Date.now()
        const result = convertMs(subtraction)


        daysRef.textContent = result.daysRef;
        hoursRef.textContent = result.hoursRef
        minutesRef.textContent = result.minutesRef
        secondsRef.textContent = result.secondsRef


       const timerEnd = '00'
        if (
      daysRef.textContent === timerEnd &&
      hoursRef.textContent === timerEnd &&
      minutesRef.textContent === timerEnd &&
      secondsRef.textContent === timerEnd
        ) {
            clearInterval(timer)
        }

    }, 1000)
    
    buttonRef.disabled = true;

    // reload()
}



