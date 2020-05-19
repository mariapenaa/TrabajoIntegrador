window.onload = function(){}

fetch("https://api.deezer.com/version/service/id/method/?parameters")
.then(function(response) {
    return response.json() 
    Headers(Access-Control-Allow-Origin https://cors-anywhere.herokuapp.com/),
  })
  
  .then(function(resultado) {
    console.log(resultado)
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  //no entendemos como y donde poner el proxy para poder usar la API
