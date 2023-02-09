const container = document.querySelector('#container');

for (let i = 0; i < 9; i++) {
    container.innerHTML += 
    `<div class="square"></div>`;
}

const
squares = document.querySelectorAll('.square'),
spanElements = document.querySelectorAll('span'),
scoreElement = spanElements[0],
timeElement = spanElements[1];
//
let score = 0, time = 60, hitPosition;

function showMole() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    })
    const randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition;
}

const moveMole = setInterval(showMole, 1000);

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (square === hitPosition) {
            score++; scoreElement.innerText = score;
        }
    })
})

const timer = setInterval(countDown, 1000);

function countDown() {
    if (time === 0) {
        clearInterval(timer);
        clearInterval(moveMole);
        alert(`GAME OVER ! You scored ${score}.`);
        location.reload();
    } else {
        time--;
        timeElement.innerText = time;
    }
}
