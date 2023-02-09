const divs = document.querySelectorAll('div'); 
let faqAnsId, faqAns;

divs.forEach((div) => {
    div.addEventListener('click', () => {
      toggleFaq(div.id);
    }) 
})

function toggleFaq(arg) {
    //gets the id of the element that contains the answer
    faqAnsId = document.getElementById(arg).childNodes[3].id;
    //selects the element that contains the answer
    faqAns = document.getElementById(faqAnsId);
    //toggle the class to show or hide answer
    faqAns.classList.toggle('show');
}
