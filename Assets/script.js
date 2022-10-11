// API URL with API Key.. I had to make an account to get/use this link 
// var APIURL = "https://api.themoviedb.org/3/movie/550?api_key=96b0ba6aa451faff19f357f4cbce740b";

// Variables for search button
let searchBtn = document.getElementById("search-btn");
let movieInp = document.getElementById("movie-inp");
let api_key = "96b0ba6aa451faff19f357f4cbce740b";
var queryURL = "https://api.themoviedb.org/3/movie/${movie_inp}?api_key=${api_key}&language=en-US";
