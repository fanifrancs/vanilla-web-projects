const songs = [
    {
        name: 'crown of clay', 
        artiste: 'Vector X MI', 
        src: './songs/crown of clay.mp3', 
        img: `url('./img/crown of clay.jpeg')`
    },
    {
        name: 'grateful', 
        artiste: 'Neffex', 
        src: './songs/grateful.mp3', 
        img: `url('./img/grateful.jpg')`
    },
    {
        name: 'the box', 
        artiste: 'Roddy Ricch', 
        src: './songs/the box.mp3', 
        img: `url('./img/the box.jpg')`
    },
    {
        name: 'primal', 
        artiste: 'Neffex', 
        src: './songs/primal.mp3', 
        img: `url('./img/primal.jpg')`
    }
];

const
controls = document.querySelectorAll('button'),
title = document.querySelector('#title'),
artiste = document.querySelector('#artiste'),
music = document.createElement('audio'),
songImg = document.querySelector('#songimg');

let count = 0;

music.src = songs[count].src;

controls[0].addEventListener('click', prev);
controls[1].addEventListener('click', playNpause);
controls[2].addEventListener('click', next);

function update(param) {
    music.src = songs[param].src;
    songImg.style.backgroundImage = songs[param].img;
    music.play();
    songImg.style.animationPlayState = 'running';
    title.innerText = songs[param].name;
    artiste.innerText = songs[param].artiste;
    controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function next() {
    count++;
    if (count === songs.length) {
        count = 0;
        update(count);
    } else {
        update(count);
    }
}

function prev() {
    count--;
    if (count === -1) {
        count = songs.length - 1;
        update(count);
    } else {
        update(count);
    }
}

function playNpause() {
    songImg.style.backgroundImage = songs[count].img;
    if (music.paused) {
        music.play();
        controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
        show();   
    } else {
        music.pause();
        controls[1].innerHTML = '<i class="fa-solid fa-play"></i>';
        songImg.style.animationPlayState = 'paused';
    }
}

function show() {
    controls[0].style.visibility = 'visible';
    controls[2].style.visibility = 'visible';
}

setInterval(() => {
    if (music.ended) {
        next();
    }
}, 1);
