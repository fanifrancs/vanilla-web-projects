let pickBtn = document.querySelector('#pick');
pickBtn.addEventListener('click', pick);

function pick(){
    let input = document.querySelector('textarea').value;
    const choices = input.trim().split(',');
    let x = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[x];
    setTimeout(() => {pickBtn.innerText = 'randomizing...'}, 200);
    setTimeout(() => {pickBtn.innerText = randomChoice}, 500);
}