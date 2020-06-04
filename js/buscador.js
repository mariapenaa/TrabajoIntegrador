window.onload = function (){
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var loqueBuscoElUsuario = queryStringObj.get("q");
    var userSearch = document.querySelector(".search-results")
    userSearch.innerHTML+=loqueBuscoElUsuario;
    //BUSCAR ALBUM
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+loqueBuscoElUsuario)
    .then(function(response) {
      return response.json()
    })
    .then(function(resultado) {
        var searchResultAlbum = document.querySelector(".album-results-list");
        for (let i = 0; i < resultado.data.length; i++) {
           // var nombreArtista=resultado.data[i].artist.name;
            var album=resultado.data[i].title;
            var albumCover = resultado.data[i].cover;
            searchResultAlbum.innerHTML+="<li><img src=' " + albumCover+"' >"+ album+ "<li>";
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
            searchResultArtist.innerHTML+="<li><img src=' "+ artistCover+" '>"+nombre+"<li>";
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
            searchResultTrack.innerHTML+="<li><img src=' "+ albumCover+" '>"+nombre+"<li>";
        }
    })
    .catch(function(error) {
      console.log("Error: " + error);

    })
}