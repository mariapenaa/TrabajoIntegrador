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
var playlist = JSON.parse(playlistStorage);
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
       
            var songTitle = resultado.title
            var songArtist = resultado.artist.name
            var releaseDate = resultado.album.release_date
            var duration = resultado.duration
            //var albumID = resultado.album.id
            var artistID = resultado.artist.id
            var id = resultado.id


        
     
       
            
            
            //duration a minutos
            var minutes = Math.floor(duration / 60);
            var seconds = duration - minutes * 60;
            var songDuration= minutes+":"+seconds;
            ///mira esta linea 58 como le pongo el onclick ademas, movi la funcion para afuera del fetch, si no la estabas creando CADA vez que ejecutabas este codigo.
            songs.innerHTML+='<li class="list-items"><span class="play-icon-span"><button onclick="playSong(this.id)"  class="button-play" value="'+songTitle+'" id="'+id+'">'
            +'<span class="overlay"><i class="fas fa-play play-icon"></i></span><img src="'+resultado.album.cover+'"></button></span><span class="songtitle"><a href="detailsong.html?id='+idQuerySelector+'&type=track">'
            ///hasta aca
            +songTitle+'</span></a><span class="song-artist"><a href="detailsong.html?id='+artistID+'&type=artist">'+songArtist+'</a></span><span class="date-added">'
            +releaseDate+'</span><span class="duration">'+songDuration+'</span><span class="remove"><button class="remove-button"><i class="fas fa-times"></i></button></span></li>';
            
          /*todo esto sobraba estaba raro lo de declarar una funcion adentro del fetch en todo caso se declara afuera y se la llama como termine haciendo */  
            
            //iframeButton.onclick = playSong(iframeButton.id)
            
            
            
            //iframeButton = document.getElementById(id)
            
            
            //iframeButton.onclick = playSong(iframeButton)

            /*HASTA ACA*/
            
         
            /*  var removeSong = document.querySelectorAll(".remove-button")
            removeSong.forEach(function(){
                removeSong.addEventListener('click',function (e){
                    var indiceEnPlaylist = playlist.indexOf(idQuerySelector);
                    playlist.splice(indiceEnPlaylist,1)
                    console.log(playlist)
                    localStorage.setItem("playlist", JSON.stringify(playlist));
                })
                */
               // });
               
               
               
               
            })
            
            .catch(function(error){
                console.log(error);
            })
            
        
            
        };
        
        AgregarAPlaylist()
        
    }
    
    
}


function playSong(idCancion){

    var iframeHTML = document.querySelector("#iframe-html");
    iframeHTML.src ='https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=70&height=70&color=007FEB&layout=dark&size=small&type=tracks&id='+idCancion+'&app_id=1&autoplay=1'
    
    
}
