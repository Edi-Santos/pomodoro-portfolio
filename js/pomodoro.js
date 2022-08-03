const workTimerTitle = document.querySelector('.work-timer-title');
const workTimer = document.querySelector('.work-timer');
const restTimerTitle = document.querySelector('.rest-timer-title');
const restTimer = document.querySelector('.rest-timer');
const restart = document.querySelector('.restart');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let minutes = 25;
let restMin = 5;
let seconds = 00;
let restSec = 00;

function restTime() {
  workTimerTitle.innerText = '';
  restTimerTitle.innerText = 'DESCANSO';
  restTimer.innerText = '5:00';

  if (restSec >= 0 && restSec < 60 && restMin >= 0) {
    if (restSec === 0 && restMin === 0) return restTimer.innerText = '0:0';

    if (restSec === 0 && restMin > 0) {
      restSec = 59;
      restMin -= 1;
    } else {
      restSec -= 1;
    }
  }

  restTimer.innerText = `${restMin}:${restSec}`;
}

function workTime() {
  if (seconds >= 0 && seconds < 60 && minutes >= 0) {
    if (seconds === 0 && minutes === 0) {
      workTimer.innerText = '';

      return restTime();
    }

    if (seconds === 0 && minutes > 0) {
      seconds = 59;
      minutes -= 1;
    } else {
      seconds -= 1;
    } 
  }

  workTimer.innerText = `${minutes}:${seconds}`;
}

start.addEventListener('click', () => {
  const interval = setInterval(() => workTime(), 1000);

  stop.addEventListener('click', () => clearInterval(interval));

  restart.addEventListener('click', () => {
    clearInterval(interval);

    restTimer.innerText = '';
    workTimerTitle.innerText = 'TRABALHO';
    workTimer.innerText = '25:00';
  });
})
