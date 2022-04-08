function playSound(param) {
    //statement below gets all the audios and stores them into an array-like node list
    let sounds = document.getElementsByTagName('audio');
    //for of loop iterates over each audio and pauses any other playing
    //sound when another sound is played. If you dont want a sound to 
    //stop before playing another one just remove the loop below : )
    for (let sound of sounds) {
        sound.pause();
        sound.currentTime = 0;
    }
    // a for loop can also be used to achieve the same result : )
    // for (let i = 0; i < sounds.length; i++) {
    // sounds[i].pause();
    // sounds[i].currentTime = 0;
    // }
    let soundBtn = document.getElementById(param);
    // Statement below selects the sound through DOM
    let sound = soundBtn.childNodes[1].id;
    document.getElementById(sound).play();
}