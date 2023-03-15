// Inspirado no timer do prof Gustavo Caetano
const buttonStart = document.getElementById('start');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const display = document.getElementById('timer');
const buttonReset = document.getElementById('reset');
const audio = new Audio('alarm_clock.mp3');

buttonStart.addEventListener('click', () => {
  let duration = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
  timer(duration);
})

const timer = (duration) => {
  let time = duration;

  let interval = setInterval(() => {
    // Cálculo de cada parte do cronômetro
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60 - (hours * 60));
    let seconds = Math.floor(time % 60);

    // fixa cada tempo com 2 dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    display.innerHTML = `${hours}:${minutes}:${seconds}`;
  
    time -= 1;

    if(time < 0){
      display.innerHTML = 'Tempo Finalizado';
      clearInterval(interval);
      audio.play();
    }
  }, 1000);

};

buttonReset.addEventListener('click', () => {
  window.location.reload();
})