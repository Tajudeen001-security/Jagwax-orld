function countdown(elementId, month, day) {
  function getNextBirthday(month, day) {
    const now = new Date();
    let year = now.getFullYear();
    let next = new Date(year, month - 1, day);
    if (next < now) next = new Date(year + 1, month - 1, day);
    return next;
  }
  function updateCountdown() {
    const now = new Date();
    const target = getNextBirthday(month, day);
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById(elementId).textContent = "Happy Birthday!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById(elementId).textContent = 
      `Countdown to next birthday: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
}