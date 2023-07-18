// $('.search-button').on('click', function() {
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=35246643&s=' + $('.input-keyword').val(),
//     success: result => {
//       const movies = result.Search
  
//       let movieCards = '';
  
//       movies.forEach(movie => {
//         movieCards += showMovieCards(movie);
//       })
  
//       $(".movies-row").html(movieCards)
  
//       $('.modal-detail-button').on('click', function() {
//         $.ajax({
//           url: `http://www.omdbapi.com/?apikey=35246643&i=${$(this).data('imdbid')}`,
//           success: movie => {
//             const movieModal = showMovieDetails(movie);
//             $('.modal-movie').html(movieModal)    
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           }
//         })
//       })
  
//     }, 
//     error: (e) => {
//       console.log(e.responseText)
//     }
//   })
// })






// const searchButton = document.querySelector(".search-button")

// searchButton.addEventListener('click', function() {
//   const inputKeyword = document.querySelector('.input-keyword')

//   fetch('http://www.omdbapi.com/?apikey=35246643&s=' + inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//       const movies = response.Search

//       let movieCards = '';

//       movies.forEach(movie => movieCards += showMovieCards(movie))

//       const movieContainer = document.querySelector('.movies-container')

//       movieContainer.innerHTML = movieCards

//       // modal details
//       const detailButtons = document.querySelectorAll('.modal-detail-button')


//       detailButtons.forEach(detailButton => {
//         detailButton.addEventListener('click', function() {
//           const imdbID = this.dataset.imdbid
//           fetch('http://www.omdbapi.com/?apikey=35246643&i=' + imdbID)
//             .then(response => response.json())
//             .then(response => {
//               const modalBody = document.querySelector('.modal-body')
  
//               let movieDetail = showMovieDetails(response)
              
//               modalBody.innerHTML = movieDetail
              
//             })
//         })
//       })

      
//     })
//     .catch(error => console.log(error))
// })


const searchButton = document.querySelector('.search-button')

searchButton.addEventListener('click', async function() {
  try {
    const inputKeyword = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies); 
  } catch (err) {
      alert(err)
  }
})


function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=35246643&s=' + keyword)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(response => {
      if (response.Response === "False") {
        throw new Error(response.Error)
      }
      return response.Search
    })
}

function updateUI(movies) {
  let movieCards = '';
  movies.forEach(movie => movieCards += showMovieCards(movie))
  const movieContainer = document.querySelector('.movies-container')
  movieContainer.innerHTML = movieCards
}


// event binding

document.addEventListener('click', async function(e) {
  try {
    if(e.target.classList.contains('modal-detail-button')) {
      const imdbid = e.target.dataset.imdbid
      const movieDetail = await getMoviesDetail(imdbid)
      updateUIDetail(movieDetail)
    }
  } catch (err) {
      alert(err)
  }
  
})

function getMoviesDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=35246643&i=' + imdbid)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(response => {
      if (response.Response === "False") {
        throw new Error(response.Error)
      }
      return response
    })
}

function updateUIDetail(movie) {
  const modalBody = document.querySelector('.modal-body')
  let movieDetail = showMovieDetails(movie)
  modalBody.innerHTML = movieDetail
}


function showMovieCards(movie) {
  return `
  <div class="col-md-4 my-3 movie-card">
    <div class="card">
      <img src="${movie.Poster}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailsModal" data-imdbid="${movie.imdbID}">Show Details</a>
      </div>
    </div>
  </div>
  `
}


function showMovieDetails(movie) {
  return `
  <div class="container-fluid">
   <div class="row">
      <div class="col-md-3">
        <img src="${movie.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
          <li class="list-group-item">
            <strong>Director:</strong> ${movie.Director}
          </li>
          <li class="list-group-item">
            <strong>Actors: </strong> ${movie.Actors}
          </li>
          <li class="list-group-item">
            <strong>Genre: </strong> ${movie.Genre}
          </li>
          <li class="list-group-item">
            <strong>Plot: </strong> <br/>
            ${movie.Plot}
          </li>
        </ul>
      </div>
    </div>
  </div>
  `    
}