let inputField = document.querySelector('input');
let searchBtn = document.querySelector('button');
let container = document.querySelector('div.container');
let response;

searchBtn.addEventListener('click', getMovies);

function getMovies(e) {
    e.preventDefault();
    container.innerHTML = '';
    let query= inputField.value;
    let xhr = new XMLHttpRequest();
    let url = 'https://www.omdbapi.com/?apikey=1691f1b1&s=' + query;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            response = JSON.parse(this.responseText);
            renderMovies();
        }
    }

    xhr.onerror = function() {
        alert('Something went wrong');
    }
    xhr.send();
}

function renderMovies() {
    response['Search'].forEach((movie) => {
        container.innerHTML += `
        <div class="gallery">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="desc">
                <span>${movie.Title}</span> <span>(${movie.Year})</span> 
                <p>${movie.Type}</p>
            </div>
        </div>`
    })
}