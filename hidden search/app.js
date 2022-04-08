let btn  = document.querySelector('button');
btn.addEventListener('click', trick);
function trick() {
    let inputField = document.querySelector('input');
    inputField.classList.toggle('inputtoggle');
}