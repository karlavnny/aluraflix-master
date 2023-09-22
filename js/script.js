let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.id == 'movie-trailer') {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    }
  })
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#movie-trailer'))

/* Altera cor da Navbar quando estiver no topo */
$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $('nav').addClass('header-color')
  } else {
    $('nav').removeClass('header-color')
  }
})

let moviesArr = []
let userElement = document.getElementById('user-movies')
// Adicionar filme
function addMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    if (moviesArr.includes(favoriteMovie) == true) {
      alert('Filme existente! Porfavor, insira outro.')
    } else {
      moviesArr.push(favoriteMovie)

      listMoviesOnScreen()
    }
  } else {
    console.error('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

// Lista filmes
function listMoviesOnScreen() {
  let element = ''
  for (let i = 0; i < moviesArr.length; i++) {
    element += `<div class="user-item">`
    element += `<img src="${moviesArr[i]}" class="movie-item">`
    element += `<div class="movie-info" >
    <i class="fa-solid fa-info"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i></div>`
    element += `</div>`
  }
  userElement.innerHTML = element
}

// Remover Séries
function removeMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    let index = moviesArr.indexOf(favoriteMovie)
    moviesArr.splice(index, 1)
    listMoviesOnScreen()
  } else {
    console.error('Direcciòn de pelicula invalida')
  }
  document.getElementById('filme').value = ''
}

/* 
  Séries Adicionadas
*/
const seriesList = [
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6OaqJemoz2j1nmuVATxr638xNyJ.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2maz7RReUStEmwXV1svJhCwd8MW.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2XKziwAUwPiOonJfSJxnEzFPNSU.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pJb3XGAl7XZSz8Dv9D14rNWPdja.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggieuy9kdXskNSKmysnsPP7uO1r.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fiiEdn5QId58LBuGOguI6cs3Rg6.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zejpUiN1xrvbkrSHGPT7vzQfy3i.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rF6Mtwjpd4gtPTpNfw3ha9B7f0N.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zNUyiCEMDFXq1hYXZY2ERAwTv0V.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bZwzWJ3JWhTsSkpCeTQ0JiEabxZ.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bLXHhl520rvw4uIJXAfZW7KQZ5U.jpg'
]
const moviesList = [
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y8W1GS5fEY2XrqkpQrOiLnrf5Kk.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hcLpibOpLDtrZQkHcLGbR8vRyo4.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dOPrKofNEryFCTuJ5Zl61wfMyHi.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pVmH4R0d34UHH3n9ODWbPC3ALn7.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fct7a84QDgyMf4TypgWgeluIccG.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3nx30Ay0VpsuLXwRCMUKUfZuP9h.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kYIoYr5ZNsXOXp2OglGaDm0Fm2n.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/26lShqM7IBqnKwr15aAKpYmM2yD.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/it2gYKHfzGg9ffLuP7Wnt1yKpvn.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aMICDrSzZNSOcSpBnrnNQyDYQl9.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hNCxDHH3HNOGNuZna9CmffiEinS.jpg'
]

const itemsElement = document.getElementById('items-movies')
const itemsElementSeries = document.getElementById('items-series')

for (let i = 0; i < seriesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', seriesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElementSeries.appendChild(div)
}

for (let i = 0; i < moviesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', moviesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElement.appendChild(div)
}
