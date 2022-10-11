// API URL with API Key.. I had to make an account to get/use this link
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Variables for search button and API call
var searchBtn = document.getElementById("search-btn");
const movieInp = document.getElementById("movie-inp");
// Gets the input from the search the user put in
const moviesearch = movieInp.value;
const api_key = "96b0ba6aa451faff19f357f4cbce740b";
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=96b0ba6aa451faff19f357f4cbce740b&language=en-US&query=${movieInp.value}';

// Listens for when search button is clicked
searchBtn.addEventListener("click", fetchData);

// Function for getting the data from the API
function fetchData() {
  // This shows that the input is being read when the search button is clicked
  console.log(movieInp.value); 
  fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
};
