let x, board = document.querySelector('div.board');

for (let i = 0; i < 300; i++) {
    board.innerHTML += '<div class="tile"></div>';
}

const classes = ['brown', 'green', 'yellow'];
let tiles = document.querySelectorAll('.tile');

setInterval(() => {
    x = Math.floor(Math.random() * 3);
}, 100)

for (let tile of tiles) {
    tile.addEventListener('mouseover', () => {
        tile.className = '';
        tile.classList.add(classes[x]);
    });

    tile.addEventListener('touchstart', () => {
        tile.className = '';
        tile.classList.add(classes[x]);
    });
}