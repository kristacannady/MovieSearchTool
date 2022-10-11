// API URL with API Key.. I had to make an account to get/use this link 
// var APIURL = 
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Variables for search button and API call 
var searchBtn = document.getElementById("search-btn");
var movieInp = document.getElementById("movie-inp");
var api_key = "&api_key=96b0ba6aa451faff19f357f4cbce740b";
var searchurl = `https://api.themoviedb.org/3/search/movie?query=${movieInp}${api_key}`;

searchBtn.addEventListener("click", () => {
  console.log("I have been clicked")
});

// function for current condition
function MovieSearch(movieInp) {
      $.ajax({
          url: searchurl,
          method: "GET"
      }).then(function(cityWeatherResponse) {
          console.log(cityWeatherResponse);
          
          $("#weatherContent").css("display", "block");
          $("#cityDetail").empty();