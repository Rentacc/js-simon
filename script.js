const countdown = document.querySelector('.countdown');

// Set the countdown time to 9:30 AM tomorrow
const targetTime = new Date();
targetTime.setDate(targetTime.getDate() + 1);
targetTime.setHours(9, 30, 0, 0);

// Update the countdown every second
setInterval(() => {
  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) {
    // Countdown has ended
    countdown.innerHTML = '<span>00</span> : <span>00</span> : <span>00</span>';
  } else {
    // Calculate remaining time
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Update the countdown display
    countdown.innerHTML = `<span>${hours.toString().padStart(2, '0')}</span> : <span>${minutes.toString().padStart(2, '0')}</span> : <span>${seconds.toString().padStart(2, '0')}</span>`;
  }
}, 1000);
