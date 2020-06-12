window.onload = function (){
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var loqueBuscoElUsuario = queryStringObj.get("q");
    var userSearch = document.querySelector(".search-results")
    userSearch.innerHTML+=loqueBuscoElUsuario;
    var spinner = document.querySelector("#spinner")
    spinner.style.display='block'
    //BUSCAR ALBUM
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+loqueBuscoElUsuario)
    .then(function(response) {
      return response.json()
    })
    .then(function(resultado) {
      spinner.style.display='none'
    var searchResultAlbum = document.querySelector(".album-results-list");
    for (let i = 0; i < resultado.data.length; i++) {
           // var nombreArtista=resultado.data[i].artist.name;
           var album=resultado.data[i].title;
           var albumCover = resultado.data[i].cover;
           var albumId = resultado.data[i].id;
          
           searchResultAlbum.innerHTML+="<li><div class='img-div'><img src=' " + albumCover+"' ></div>"+ "<a href='detailsong.html?id="+ albumId +"&type=album'>"+album +"</a><li>";
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    //BUSCAR ARTIST
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+loqueBuscoElUsuario)
    .then(function(response) {
      return response.json()
    })
    .then(function(resultado) {
      var searchResultArtist= document.querySelector(".artist-results-list");
        for (let i = 0; i < resultado.data.length; i++) {
            var nombre=resultado.data[i].name;
            var artistCover = resultado.data[i].picture;
            var artistId = resultado.data[i].id;
            searchResultArtist.innerHTML+="<li><div class='img-div'><img src=' "+ artistCover+" '></div><a href='detailsong.html?id="+ artistId +"&type=artist'>"+nombre+"</a></li>";
        }
      })
      .catch(function(error) {
      console.log("Error: " + error);
    })
    //BUSCAR TRACK
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+loqueBuscoElUsuario)
    .then(function(response) {
      return response.json()
    })
    .then(function(resultado) {
      var searchResultTrack= document.querySelector(".track-results-list")
      for (let i = 0; i < resultado.data.length; i++) {
        var nombre=resultado.data[i].title;
        var albumCover = resultado.data[i].album.cover;
        var trackId = resultado.data[i].id
         searchResultTrack.innerHTML+="<li><div class='img-div'><img src=' "+ albumCover +" '></div><a href='detailsong.html?id="+ trackId +"&type=track'>"+nombre+"</a></li>";
          }
        })
        .catch(function(error) {
          console.log("Error: " + error);
      
        })
        
      //   //LOADING BUSCADOR 
      //   $(document).ready(function(){
      //     $(document).ajaxStart(function(){
      //       $("#spinner").css("display","block");
      //     });
      //     $(document).ajaxStop(function(){
      //       $("#spinner").css("display","none");
      //     });
      // });
    
}