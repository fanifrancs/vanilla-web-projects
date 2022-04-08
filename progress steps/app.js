let stepForward = 0;
let stepBackward = 4;
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let step_1 = document.getElementById('step1');
let step_2 = document.getElementById('step2');
let step_3 = document.getElementById('step3');
let step_4 = document.getElementById('step4');

checkPrev();

nextBtn.addEventListener('click', e => {
    stepForward++
    stepBackward-- 
    checkPrev()
    checkNext()
    progressNext()
})

prevBtn.addEventListener('click', e => {
    stepBackward++
    stepForward--
    checkNext()
    checkPrev()
    progressPrev()
})

function checkPrev() {
  if (stepForward == 0) {
    prevBtn.classList.remove('disabled_nextbtn')
    prevBtn.classList.add('disabled_prevbtn')
  } else {
    prevBtn.classList.remove('disabled_prevbtn')
    prevBtn.classList.add('disabled_nextbtn')
  }
}

function checkNext() {
  if (stepBackward == 0) {
    nextBtn.classList.remove('disabled_nextbtn')
    nextBtn.classList.add('disabled_prevbtn')
  } else {
    nextBtn.classList.remove('disabled_prevbtn')
    nextBtn.classList.add('disabled_nextbtn')
  }
}

function progressNext(){
  switch (stepForward) {
    case 1:
      step_1.classList.remove('circle')
      step_1.classList.add('completed')
      break;
    case 2:
        step_2.classList.remove('circle')
        step_2.classList.add('completed')
      break;
    case 3:
        step_3.classList.remove('circle')
        step_3.classList.add('completed')
      break;
    case 4:
        step_4.classList.remove('circle')
        step_4.classList.add('completed')
  }
}

function progressPrev(){
  switch (stepBackward) {
    case 1:
      step_4.classList.remove('completed')
      step_4.classList.add('circle')
      break;
    case 2:
        step_3.classList.remove('completed')
        step_3.classList.add('circle')
      break;
    case 3:
        step_2.classList.remove('completed')
        step_2.classList.add('circle')
      break;
    case 4:
        step_1.classList.remove('completed')
        step_1.classList.add('circle')
  }
}