// Variables for search button
var searchBtn = document.getElementById("search-btn");
const movieInp = document.getElementById("movie-inp");

// Gets the input from the search the user put in
const moviesearch = movieInp.value;

// API Call 
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

// Stopping point --> Cannot get the query in the API URL to update to be what the user searched for. 