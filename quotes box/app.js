let q1, cap1, q2, cap2, q3, cap3, q4, cap4;
q1 = 'Intelligence is the ability to adapt to change.'; cap1 = 'Stephen Hawking';
q2 = 'Heroes are not born. They are forged in darkness. Shaped in battle. Defined by sacrifice.'; cap2 = 'The Watcher';
q3 = 'Am like an addict. Oh I got a habit.'; cap3 = 'Neffex';
q4 = 'I had a dream, I was king. Woke up, still king.'; cap4 = 'Eminem';
// let progress = document.getElementById('progress');
const quotes = [q1, q2, q3, q4];
const captions = [cap1, cap2, cap3, cap4];
let arrayNum = -1;
let quote = document.getElementById('quote');
let caption = document.getElementById('caption');

setInterval(changequote, 4000);

function changequote() {
  arrayNum++
  if (arrayNum == 4) {
    arrayNum = 0;
    quote.innerHTML = quotes[arrayNum];
    caption.innerHTML = captions[arrayNum];
  } else {
    quote.innerHTML = quotes[arrayNum];
    caption.innerHTML = captions[arrayNum];
  }
}