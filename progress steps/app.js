let 
stepForward = 0,
stepBackward = 4;

const
nextBtn = document.querySelector('#next'),
prevBtn = document.querySelector('#prev'),
step_1 = document.querySelector('#step1'),
step_2 = document.querySelector('#step2'),
step_3 = document.querySelector('#step3'),
step_4 = document.querySelector('#step4');

checkPrev();

nextBtn.addEventListener('click', () => {
  stepForward++;
  stepBackward-- ;
  checkPrev();
  checkNext();
  progressNext();
})

prevBtn.addEventListener('click', () => {
  stepBackward++;
  stepForward--;
  checkNext();
  checkPrev();
  progressPrev();
})

function checkPrev() {
  if (stepForward === 0) {
    prevBtn.classList.remove('visible');
    prevBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
    prevBtn.classList.add('visible');
  }
}

function checkNext() {
  if (stepBackward === 0) {
    nextBtn.classList.remove('visible');
    nextBtn.classList.add('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    nextBtn.classList.add('visible');
  }
}

function progressNext(){
  switch (stepForward) {
    case 1:
      step_1.classList.remove('circle');
      step_1.classList.add('completed');
      break;
    case 2:
      step_2.classList.remove('circle');
      step_2.classList.add('completed');
      break;
    case 3:
      step_3.classList.remove('circle');
      step_3.classList.add('completed');
      break;
    case 4:
      step_4.classList.remove('circle');
      step_4.classList.add('completed');
  }
}

function progressPrev(){
  switch (stepBackward) {
    case 1:
      step_4.classList.remove('completed');
      step_4.classList.add('circle');
      break;
    case 2:
      step_3.classList.remove('completed');
      step_3.classList.add('circle');
      break;
    case 3:
      step_2.classList.remove('completed');
      step_2.classList.add('circle');
      break;
    case 4:
      step_1.classList.remove('completed');
      step_1.classList.add('circle');
  }
}
