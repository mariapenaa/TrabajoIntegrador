window.onload = function(){

var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);
var idQuerySelector = queryStringObj.get("id")
console.log(idQuerySelector)


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+idQuerySelector)
.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {
        console.log(resultado)
        var trackTitle = resultado.title;
        var trackAlbum = resultado.album.title;
        var trackDate = resultado.album.release_date;
        var trackCover = resultado.album.cover;
        var docNombreCancion = document.querySelector(".nombre");
        var docNombreAlbum = document.querySelector (".album-name");
        var docFechaAlbum = document.querySelector (".album-date");
        var docFotoAlbum = document.querySelector (".foto1");
        docNombreCancion.innerHTML+=trackTitle;
        docNombreAlbum.innerHTML += trackAlbum;
        docFechaAlbum.innerHTML += trackDate;
        docFotoAlbum.innerHTML += "<img class= 'fotodetail' src='"+trackCover+" ' alt='albumcover'>"
    


      
   })

   .catch(function(error) {
     console.log("Error: " + error);
   })







    

}