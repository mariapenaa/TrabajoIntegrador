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

var canciones = [];

// Guardo el objeto como un string
localStorage.setItem('playlist', JSON.stringify(canciones));
localStorage.getItem('playlist')
// var canciones = localStorage.getItem('playlist');
canciones = JSON.parse(canciones);

for (let i = 0; i < canciones.length; i++) {
    const element = canciones[i];
    
}
    
console.log(canciones)


}