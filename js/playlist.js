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
//var docplayCancion = document.querySelector(".iframe");
//var doctituloCancion = document.querySelector(".songtitle");
/*var docartistaCancion = document.querySelector(".song-artist");
var docfechaCreada = document.querySelector(".date-added");
var docduracion = document.querySelector(".duration"); */

if (playlistStorage == null || playlistStorage == "[]") {
    playlist=[];
    doctituloCancion.innerHTML+= "No hay canciones en tu playlist"
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
    console.log(resultado)
    var songTitle = resultado.title
    var songArtist = resultado.artist.name
    var releaseDate = resultado.album.release_date
    var duration = resultado.duration
    var albumID = resultado.album.id
    var artistID = resultado.artist.id

    //duration a minutos
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    var songDuration= minutes+":"+seconds;

    songs.innerHTML+='<li class="list-items"><span id="iframe"><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=70&height=70&color=007FEB&layout=dark&size=small&type=tracks&id='
        +idQuerySelector+'&app_id=1" width="70" height="70"></iframe></span>'+'<span class="songtitle"><a href="detailsong.html?id='+idQuerySelector+'&type=track">'
        +songTitle+'</span></a><span class="song-artist"><a href="detailsong.html?id='+artistID+'&type=artist">'+songArtist+'</a></span><span class="date-added">'
        +releaseDate+'</span><span class="duration">'+songDuration+'</span></li>';
    //var mind = time%(60*60); 
    //var minutes = math.floor(mind/60);

 
    })
    .catch(function(error){
        console.log(error);
    })
   
};
AgregarAPlaylist()
}





}
