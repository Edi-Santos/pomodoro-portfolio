let hh = document.querySelector('.hh');
let mm = document.querySelector('.mm');
let ss = document.querySelector('.ss');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

hh.value = '00';
mm.value = '00';
ss.value = '00';


function timer() {
  let hours = parseInt(hh.value);
  let minutes = parseInt(mm.value);
  let seconds = parseInt(ss.value);
  
  if (seconds >= 0 && seconds <= 60) {
    seconds -= 1;
    ss.value = seconds;
  };

  if (seconds < 0 && minutes >= 0 && minutes <= 60) {
    seconds = 59;
    ss.value = seconds;
    minutes -= 1;
    mm.value = minutes;
  }

  if (minutes < 0 && hours >= 0 && hours <= 60) {
    minutes = 59;
    mm.value = minutes;
    hours -= 1;
    hh.value = hours;
  }
}

start.addEventListener('click', () => {
  const interval = setInterval(() => timer(), 1000);

  stop.addEventListener('click', () => clearInterval(interval));
});
