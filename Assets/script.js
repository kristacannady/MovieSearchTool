// Setting up the search button variable
var searchBtn = document.getElementById("clickme");
// API URL with API Key.. I had to make an account to get/use this link 
var APIURL = "https://api.themoviedb.org/3/movie/550?api_key=96b0ba6aa451faff19f357f4cbce740b";


// Shows that calling on the API works 
fetch(APIURL)
.then((response) => {
    console.log("We got a response!");
    console.log(response);
});

