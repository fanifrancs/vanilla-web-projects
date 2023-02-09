const board = document.querySelector('.board');

// generate hoverboard tiles
for (let i = 0; i < 100; i++) {
    board.innerHTML += '<div class="tile"></div>';
}

const
classes = ['brown', 'green', 'yellow'],
tiles = document.querySelectorAll('.tile');

for (const tile of tiles) {
    tile.addEventListener('mouseover', () => {
        tile.className = '';
        tile.classList.add(classes[x]);
    });
}

setInterval(() => {
    x = Math.floor(Math.random() * 3);
}, 100)
