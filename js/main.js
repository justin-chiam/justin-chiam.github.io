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

function applySavedTheme() {
    const isNightMode = localStorage.getItem("theme") === "night";
    
    // Toggle night mode if saved and check button
    document.body.classList.toggle("night-mode", isNightMode);
    document.getElementById("theme-toggle").checked = isNightMode;
}

function toggleTheme() {
    const isNightMode = document.body.classList.toggle("night-mode");

    // Set theme in local storage
    if (isNightMode) {
        localStorage.setItem("theme", "night");
    } else {
        localStorage.setItem("theme", "day");
    }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);
updateClock();
setInterval(updateClock, 1000);