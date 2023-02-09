const 
inputField = document.querySelector('input'),
searchBtn = document.querySelector('button'),
container = document.querySelector('.container');

let
query,
url,
res,
data;

searchBtn.addEventListener('click', getMovies);

async function getMovies(event) {
  event.preventDefault();
  container.innerHTML = '';
  query = inputField.value;
  url = 'https://www.omdbapi.com/?apikey=1691f1b1&s=' + query;
  try {
    res = await fetch(url, {cache: 'no-cache'});
    if (res.status === 200) {
      data = await res.text();
      renderMovies(JSON.parse(data));
    } else {
      alert('Something went wrong');
    }
  } catch(error) {
    console.log(error);
  }
}

function renderMovies(param) {
  param['Search'].forEach((movie) => {
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
