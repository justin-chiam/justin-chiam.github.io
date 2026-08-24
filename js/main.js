function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  const timeString = now.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const formattedTime = timeString.replace(/\s/g, '').toUpperCase();
  
  clockElement.textContent = `${formattedTime} AEST`;
}

updateClock();
setInterval(updateClock, 1000);