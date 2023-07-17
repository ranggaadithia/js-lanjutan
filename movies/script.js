$('.search-button').on('click', function() {
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=35246643&s=' + $('.input-keyword').val(),
    success: result => {
      const movies = result.Search
  
      let movieCards = '';
  
      movies.forEach(movie => {
        movieCards += showMovieCards(movie);
      })
  
      $(".movies-row").html(movieCards)
  
      $('.modal-detail-button').on('click', function() {
        $.ajax({
          url: `http://www.omdbapi.com/?apikey=35246643&i=${$(this).data('imdbid')}`,
          success: movie => {
            const movieModal = showMovieDetails(movie);
            $('.modal-movie').html(movieModal)    
          },
          error: (e) => {
            console.log(e.responseText);
          }
        })
      })
  
    }, 
    error: (e) => {
      console.log(e.responseText)
    }
  })
})




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