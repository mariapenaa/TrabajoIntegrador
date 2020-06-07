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
var songs = document.querySelector(".songnames")
if (playlistStorage == null || playlistStorage == "[]") {
    playlist=[];
    songs.innerHTML+= "No hay canciones en tu playlist"
} else {
    playlist.forEach(function() {
    songs.innerHTML
    });


function agregarAPlaylist(idQuerySelector){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+idQuerySelector)
    .then(function(response){
        return response.JSON();
    })
    .then(function(resultado){
        songs.innerHTML+='<li>' + resultado.data.title + '</li>' 
    })
    .catch(function(error){
        console.log(error);
    })
   
}
}

// // Guardo el objeto como un string
// localStorage.setItem('playlist', JSON.stringify(canciones));
// localStorage.getItem('playlist')
// // var canciones = localStorage.getItem('playlist');
// canciones = JSON.parse(canciones);

// for (let i = 0; i < canciones.length; i++) {
//     const element = canciones[i];
    
// }
    
// console.log(canciones)
}
