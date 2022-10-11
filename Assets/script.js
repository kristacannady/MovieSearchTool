// Variables for search button
var searchBtn = document.getElementById("search-btn");
const movieInp = document.getElementById("movie-inp");

// API Call
const api_key = "96b0ba6aa451faff19f357f4cbce740b";

// Function for getting the data from the API
function fetchData(movie) {
  var searchURL = `https://api.themoviedb.org/3/search/movie?api_key=96b0ba6aa451faff19f357f4cbce740b&language=en-US&query=${movieInp.value}`;
  // This shows that the input is being read when the search button is clicked
  console.log(movieInp.value);
  console.log(searchURL);
  fetch(searchURL)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data))
  );


  // Trying to get the data to display on the page
};


// Listens for when search button is clicked
searchBtn.addEventListener("click", fetchData);

