let hh = document.querySelector('.hh');
let mm = document.querySelector('.mm');
let ss = document.querySelector('.ss');
const start = document.querySelector('.start');

hh.value = 0;
mm.value = 0;
ss.value = 0;


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
  setInterval(() => timer(), 1000);
});
