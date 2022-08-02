const workTimer = document.querySelector('.work-timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let minutes = 25;
let seconds = 00;

function workTime() {
  if (seconds >= 0 && seconds < 60 && minutes >= 0) {
    if (seconds === 0) {
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
})
