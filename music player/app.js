const songs = [
    {
        name: 'crown of clay', 
        artiste: 'Vector X MI', 
        src: 'https://fanifrancs.github.io/music-player/songs/crown of clay.mp3', 
        img: `url('https://fanifrancs.github.io/music-player/img/crown of clay.jpeg')`
    },
    {
        name: 'grateful', 
        artiste: 'Neffex', 
        src: 'https://fanifrancs.github.io/music-player/songs/grateful.mp3', 
        img: `url('https://fanifrancs.github.io/music-player/img/grateful.jpg')`
    },
    {
        name: 'the box', 
        artiste: 'Roddy Ricch', 
        src: 'https://fanifrancs.github.io/music-player/songs/the box.mp3', 
        img: `url('https://fanifrancs.github.io/music-player/img/the box.jpg')`
    },
    {
        name: 'primal', 
        artiste: 'Neffex', 
        src: 'https://fanifrancs.github.io/music-player/songs/primal.mp3', 
        img: `url('https://fanifrancs.github.io/music-player/img/primal.jpg')`
    }
];
let controls = document.querySelectorAll('button');
let count = 0;
let title = document.querySelector('#title');
let artiste = document.querySelector('#artiste');
let music = document.createElement('audio');
let songImg = document.querySelector('#songimg');

music.src = songs[count].src;

controls[0].addEventListener('click', prev);
controls[1].addEventListener('click', playNpause);
controls[2].addEventListener('click', next);

function next(){
    count++;
    if (count == songs.length) {
        count = 0;
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    } else {
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    }
}

function prev(){
    count--;
    if (count == -1) {
        count = songs.length - 1;
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    } else {
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    }
}

function playNpause(){
    if (music.paused == true) {
        songImg.style.backgroundImage = songs[count].img;
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
    if (music.ended == true) {
        next();
    }
}, 1);