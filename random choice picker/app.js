let pickBtn = document.querySelector('#pick');
let themeBtn = document.querySelector('#theme');
let theme = document.querySelector('link');

pickBtn.addEventListener('click', pick);
themeBtn.addEventListener('click', changeTheme);

function pick(){
    let input = document.querySelector('textarea').value;
    const choices = input.trim().split(',');
    let x = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[x];
    setTimeout(() => {pickBtn.innerText = 'randomizing...'}, 200);
    setTimeout(() => {pickBtn.innerText = randomChoice}, 500);
}

function changeTheme(){
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        themeBtn.innerHTML = 'light theme';
    } else {
        theme.setAttribute('href', 'light.css');
        themeBtn.innerHTML = 'dark theme';
    }
}