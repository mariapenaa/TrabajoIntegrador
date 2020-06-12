window.onload= function(){
// titulo playlist
 var userTitle = document.querySelector(".playlistTitle")
var username= localStorage.getItem("username")
if (username != "" && username !=null) {
    userTitle.innerHTML += username+"'s Playlist"
    userTitle.style.textTransform = 'capitalize'
} else {
    userTitle.innerHTML += "My Playlist"
}

// agregar a playlist
let playlistStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(playlistStorage);
var songs = document.querySelector(".songnames");
var docplayCancion = document.querySelector(".iframe");
var doctituloCancion = document.querySelector(".songtitle");
var docartistaCancion = document.querySelector(".song-artist");
var docfechaCreada = document.querySelector(".date-added");
var docduracion = document.querySelector(".duration");

if (playlistStorage == null || playlistStorage == "[]") {
    playlist=[];
    songs.innerHTML+= "No hay canciones en tu playlist"
} else {
    playlist.forEach(function(idQuerySelector) {
    AgregarAPlaylist(idQuerySelector)
    });


function AgregarAPlaylist(idQuerySelector){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+idQuerySelector)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        console.log(tituloCancion)
        var tituloCancion = resultado.name;
        var artistaCancion = resultado.artist.name;
        var fechaCreada = resultado.release-date;
        var duration = resultado.duration

    // docplayCancion.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=true&width=100&height=100&color=007FEB&layout=dark&size=medium&type=playlist&id='+track.id+'&app_id=1" width="100" height="100"></iframe>'
    doctituloCancion.innerHTML+= tituloCancion
    docartistaCancion.innerHTML+= artistaCancion
    docfechaCreada.innerHTML+= fechaCreada
    docduracion.innerHTML+= duration

    })
    .catch(function(error){
        console.log(error);
    })
   
};
AgregarAPlaylist()
}

}
