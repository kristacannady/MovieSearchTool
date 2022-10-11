// API URL with API Key.. I had to make an account to get/use this link
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Variables for search button and API call 
var searchBtn = document.getElementById("search-btn");
var movieInp = document.getElementById("movie-inp");
var api_key = "&api_key=96b0ba6aa451faff19f357f4cbce740b";
var searchurl = `https://api.themoviedb.org/3/search/movie?query=${search}${api_key}`;

// Listens for when search button is clicked 
searchBtn.addEventListener("click", fetchData);

// Function for getting the data from the API 
function fetchData() {
  fetch(searchurl)
  .then((response) => response.json())
  .then((data) => console.log(data))
};
