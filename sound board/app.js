const
btns = document.querySelectorAll('button'),
sound = document.createElement('audio');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound(btn.innerText);
  }) 
})

function playSound(arg) {
  sound.pause();
  sound.currentTime = 0;
  switch (arg) {
    case 'Applause':
      sound.src = './sounds/applause.mp3';
      sound.play();
      break;
    case 'Boo':
      sound.src = './sounds/boo.mp3';
      sound.play();
      break;
    case 'Gasp':
      sound.src = './sounds/gasp.mp3';
      sound.play();
      break;
    case 'Tada':
      sound.src = './sounds/tada.mp3';
      sound.play();
      break;
    case 'Victory':
      sound.src = './sounds/victory.mp3';
      sound.play();
      break;
    case 'Wrong':
      sound.src = './sounds/wrong.mp3';
      sound.play();
  }
}
