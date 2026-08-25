function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  const timeString = now.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  
  clockElement.textContent = `${timeString} AEST`;
}

function isNightTime() {
  const hour = Number(new Date().toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: '2-digit',
    hourCycle: 'h23'
  }));

  return hour < 5 || hour >= 19;
}

function applyTheme(isNight) {
  document.body.classList.toggle("night-mode", isNight);
  document.getElementById("theme-toggle").checked = !isNight;
}

function toggleTheme() {
  applyTheme(!document.getElementById("theme-toggle").checked);
}

document.addEventListener("DOMContentLoaded", function () {
  applyTheme(isNightTime());
});
updateClock();
setInterval(updateClock, 1000);