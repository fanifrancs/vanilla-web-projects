function updateCountdown() {
    let currentYear = new Date().getFullYear();
    let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    let currentTime = new Date();
    let diff = newYearTime - currentTime;

    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;

    document.getElementById('days').innerHTML = d + 'd';
    document.getElementById('hours').innerHTML = h + 'h';
    document.getElementById('minutes').innerHTML = m + 'm';
    document.getElementById('seconds').innerHTML = s + 's';

    let x = Math.floor(Math.random() * 5);
    if (x == 0) {
      document.getElementById('div1').style.border = '1.5px solid black';
    }
    if (x == 1) {
      document.getElementById('div1').style.border = '1.5px solid goldenrod';
    }
    if (x == 2) {
      document.getElementById('div1').style.border = '1.5px solid crimson';
    }
    if (x == 3) {
      document.getElementById('div1').style.border = '1.5px solid green';
    }
    if (x == 4) {
      document.getElementById('div1').style.border = '1.5px solid #0ab2f580';
    }
  }

  setInterval(updateCountdown, 1000);
  