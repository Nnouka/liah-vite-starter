import dayjs from 'dayjs';

function tick() {
  document.getElementById('clock').textContent = dayjs().format('HH:mm:ss');
}

function startClock() {
  tick(); // Initial call to set the clock immediately
  setInterval(tick, 1000); // Update the clock every second
}

document.addEventListener('DOMContentLoaded', startClock);