window.onload = function(){

var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);
var idQuerySelector = queryStringObj.get("id")
console.log(idQuerySelector)

//query string type
var typeQuerySelector = queryStringObj.get("type")



fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/+"+typeQuerySelector+"/"+idQuerySelector)
.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {
      //TRACK
        var trackTitle = resultado.title;
        var trackAlbum = resultado.album.title;
        var trackDate = resultado.album.release_date;
        var trackCover = resultado.album.cover_big;
        var docNombreCancion = document.querySelector(".nombre");
        var docNombreAlbum = document.querySelector (".album-name");
        var docFechaAlbum = document.querySelector (".album-date");
        var docFotoAlbum = document.querySelector (".foto1");
        docNombreCancion.innerHTML+=trackTitle;
        docNombreAlbum.innerHTML += trackAlbum;
        docFechaAlbum.innerHTML += trackDate;
        docFotoAlbum.innerHTML += "<img class= 'fotodetail' src='"+trackCover+" ' alt='albumcover'>"
        var add = document.querySelector(".datos-add")
        
        //artists
        var artistTitle = resultado.name;
        var artistFollowers = resultado.nb_fan;
        // var songsAlbum = resultado
        var artistFoto = resultado.picture;
        var docArtistName = document.querySelector (".nombre")
        var docArtistFollowers = document.querySelector(".artist-followers")
        var docFotoArtist = document.querySelector (".foto1")
        docArtistName.innerHTML+= artistTitle
        docArtistFollowers.innerHTML+= artistFollowers
        docFotoArtist.innerHTML+= artistFoto
        
      })
      
    
      //Album


      //GENRE
        
        
        
        
        
        // add.onclick = addToPlaylist
       
      .catch(function(error) {
        console.log("Error: " + error);
      })
      let playlistStorage = localStorage.getItem("playlist")
      if (playlistStorage== null) {
        playlist = [];
      } else {
        playlist= JSON.parse(playlistStorage)
      }
      
      
      var add = document.querySelector(".datos-add")
      add.addEventListener('click',function(e){
        playlist.push(idQuerySelector)
        console.log (playlist)
        
        localStorage.setItem("playlist", JSON.stringify(playlist));
  //  var playlist = [];
  //  localStorage.setItem('playlist', JSON.stringify(playlist));
  //  localStorage.getItem('playlist')
  //  JSON.parse(localStorage.getItem(playlist));
   })

  //  var playlist = [];
  //  localStorage.setItem('playlist', JSON.stringify(playlist));
  //  localStorage.getItem('playlist')
  //  JSON.parse(localStorage.getItem(playlist));

if (typeQuerySelector == "track") {
  var tracks = document.querySelector(".info-songs")
  tracks.style.display = "flex"
} 
if (typeQuerySelector == "artist") {
  var artist = document.querySelector(".info-artists")
  artist.style.display = "flex"
}

}







