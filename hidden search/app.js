let btn  = document.querySelector('button'),
inputField = document.querySelector('input');

btn.addEventListener('click', trick);

function trick() {
    inputField.classList.toggle('inputtoggle');
}
