function countdown() {
  const 
  currentYear = new Date().getFullYear(),
  newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`),
  currentTime = new Date(),
  diff = newYearTime - currentTime;

  const 
  spans = document.querySelectorAll('span'),
  d = Math.floor(diff / 1000 / 60 / 60 / 24),
  h = Math.floor(diff / 1000 / 60 / 60) % 24,
  m = Math.floor(diff / 1000 / 60) % 60,
  s = Math.floor(diff / 1000) % 60;

  spans[0].innerHTML = d + 'd';
  spans[1].innerHTML = h + 'h';
  spans[2].innerHTML = m + 'm';
  spans[3].innerHTML = s + 's';
}

setInterval(countdown, 1000);
