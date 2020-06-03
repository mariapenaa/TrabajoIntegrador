window.onload = function(){
var queryString = location.search
//var queryStringObj = new URLSearchParams(queryString)

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/")
.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {

      for (let i = 0; i < resultado.data.length; i++) {
        var trackTitle  = resultado.data[i].title ;
        console.log(queryString);
        var nombreCancion = document.querySelector(".nombre");
        
        nombreCancion.innerHTML+=trackTitle;

      }
   })

   .catch(function(error) {
     console.log("Error: " + error);
   })







    

}