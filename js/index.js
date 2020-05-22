window.onload = function(){}

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
.then(function(response) {
    return response.json() 
  })
  
  .then(function(resultado) {
    console.log(resultado.title)
    var cancion = resultado.title;
    //var li = document.querySelector(".songs li");
    //li.innerHTML += "<h4>" + cancion + "<h4>";


  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  //no entendemos como y donde poner el proxy para poder usar la API
