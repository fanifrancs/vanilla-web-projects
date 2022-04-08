let heading = document.getElementById('heading');

function toggleFaq(arg) {
    //gets the id of the element that contains the answer
    let faqAnsId = document.getElementById(arg).childNodes[3].id;
    //selects the element that contains the answer
    let faqAns = document.getElementById(faqAnsId);
    //toggle the class to show or hide answer
    faqAns.classList.toggle('showfaqans');
}

function changeColor() {
    //statement below generates a random number from 0 - 4
    let x = Math.floor(Math.random() * 5);
    //code blocks below changes element's styles based on the number generated
    if (x == 0) {
        heading.style.color = 'black';
        heading.style.textShadow = 'none';
    }
    if (x == 1) {
        heading.style.color = 'goldenrod';
        heading.style.textShadow = '0 0 2px goldenrod';
    }
    if (x == 2) {
        heading.style.color = 'crimson';
        heading.style.textShadow = '0 0 2px crimson';
    }
    if (x == 3) {
        heading.style.color = 'green';
        heading.style.textShadow = '0 0 2px green';
    }
    if (x == 4) {
        heading.style.color = '#0ab2f580';
        heading.style.textShadow = '0 0 2px #0ab2f580';
    }
}
//executes the changeColor function every 1000 milliseconds(1 second)
setInterval(changeColor, 1000);