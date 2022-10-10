// API URL with API Key.. I had to make an account to get/use this link 
// var APIURL = "https://api.themoviedb.org/3/movie/550?api_key=96b0ba6aa451faff19f357f4cbce740b";

// Variables for search button 
let searchBtn = document.getElementById("search-btn");
let movieInp = document.getElementById("movie-inp");
let api_key = "96b0ba6aa451faff19f357f4cbce740b"; 
let api = "https://api.themoviedb.org/3/";


searchBtn.addEventListener(“click”, () => {
    let movieTitle = movieInp.value;
    let moviePoster = `https://api.themoviedb.org/3/search/movie?api_key=8e49fb40d850072116b1a947ebc11564” “`;
    console.log(moviePoster);
    fetch(moviePoster)
        .then((response) => response.json())
        .then((result) => {
            result.innerHTML = `
        <img src=“${poster_path}” class=“movie-img”>
        <h2>${original_title}</h2>
        <div class=“wrapper”>
            <div class=“data-wrapper”>
                <span>${overview[0]}</span>
            </div>
        </div>
      `;
        })
});