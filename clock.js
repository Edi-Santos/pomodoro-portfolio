const clock = document.querySelector('.clock');

function clock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000);
