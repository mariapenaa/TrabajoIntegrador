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
        if (typeQuerySelector =="track"){
        var tracks = document.querySelector(".info-songs")
        tracks.style.display = "flex"
        var trackTitle = resultado.title;
        var trackAlbum = resultado.album.title;
        var trackDate = resultado.album.release_date;
        var trackCover = resultado.album.cover_big;
        var artistName = resultado.artist.name;
        var trackDuration = resultado.duration;
        var docNombreCancion = document.querySelector(".nombre");
        var docNombreAlbum = document.querySelector (".album-name");
        var docFechaAlbum = document.querySelector (".album-date");
        var docFotoAlbum = document.querySelector (".foto1");
        var docPlaysong = document.querySelector(".play-song")
        var docArtist = document.querySelector(".artist-name")
        var docDuration = document.querySelector(".duration")

        var minutes = Math.floor(trackDuration / 60);
        var seconds = trackDuration - minutes * 60;
        var songDuration= minutes+":"+seconds;

        var cancionIframe = resultado.id
        var idAlbum = resultado.album.id;
        docNombreCancion.innerHTML+=trackTitle;
        docNombreAlbum.innerHTML += "<a href='detailsong.html?id="+ idAlbum+"&type=album'>"+ trackAlbum+"</a>"
        docFechaAlbum.innerHTML += trackDate;
        docArtist.innerHTML+=artistName;
        docDuration.innerHTML+=songDuration;
        
        docPlaysong.innerHTML+='<span><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=50&height=50&color=007FEB&layout=dark&size=medium&type=tracks&id='+cancionIframe+'&app_id=1" width="50" height="50"></iframe></span>'
        docFotoAlbum.innerHTML += "<img class= 'fotodetail' src='"+trackCover+" ' alt='albumcover'>"
       console.log(cancionIframe)
      }
        
        //artists
        if(typeQuerySelector == "artist"){
        var artist = document.querySelector(".info-artists")
        artist.style.display = "flex"
        var artistTitle = resultado.name;
        var artistFollowers = resultado.nb_fan;
        var artistFoto = resultado.picture_big;
        var artistID = resultado.id;
        var docArtistName = document.querySelector (".nombre-artist")
        var docArtistFollowers = document.querySelector(".artists-followers")
        var docFotoArtist = document.querySelector (".foto1")
        docArtistName.innerHTML+= artistTitle
        docArtistFollowers.innerHTML+= artistFollowers
        docFotoArtist.innerHTML+= "<img class= 'fotodetail' src='"+artistFoto+" ' alt='albumcover'>"
        }
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistID+"/top")
        .then(function(response) {
            return response.json() 
          })
            .then(function(resultado) {
              console.log(resultado)
              console.log(resultado)
              for (let i = 0; i < "5"; i++) {
              var topSongs = resultado.data[i].title
              var idTracks = resultado.data[i].id
              var docTopSongs = document.querySelector(".topsongs")
              docTopSongs.innerHTML+= "<li> <a href='detailsong.html?id="+ idTracks+"&type=track'>"+ topSongs+"</li>"
           }
          })

        //albums
        if (typeQuerySelector == "album") {
          var tracks = document.querySelector(".info-albums")
          tracks.style.display = "flex"
          var albumTitle = resultado.title;
          var albumArtist = resultado.artist.name;
          var albumGenre = resultado.genres.data[0].name;
          var albumGenreId = resultado.genres.data[0].id
          var albumDate = resultado.release_date;
          var albumCover = resultado.cover_big;
          var artistId = resultado.artist.id;
          var docAlbumTitle = document.querySelector(".nombre-album")
          var docAlbumArtist = document.querySelector(".album-artist")
          var docAlbumGenre = document.querySelector(".album-genre")
          var docAlbumDate = document.querySelector(".album-date1")
          var docAlbumCover = document.querySelector(".foto1")
          docAlbumTitle.innerHTML+= albumTitle
          docAlbumArtist.innerHTML+= "<a href='detailsong.html?id="+artistId+"&type=artist'>"+ albumArtist +"</a>"
          docAlbumGenre.innerHTML+= "<a href='detailsong.html?id="+albumGenreId+"&type=genre'>"+albumGenre+"</a>"
          docAlbumDate.innerHTML+= albumDate.toString()
          docAlbumCover.innerHTML+= "<img class= 'fotodetail' src='"+ albumCover + "' alt='albumcover'>"
          console.log(docAlbumDate)
       
        } 

        //genres
        if (typeQuerySelector == "genre") {
          var tracks = document.querySelector(".info-genre")
          tracks.style.display = "flex"
          var genreName = resultado.name;
          var genreImage = resultado.picture_big;
          var genreID = resultado.id
          var docGenreImage = document.querySelector(".foto1")
          var docGenreName = document.querySelector('.nombre-genre')
          docGenreImage.innerHTML+="<img src='"+genreImage+"' alt='genre image'>";
          docGenreName.innerHTML+= genreName
          console.log(resultado.data)
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+genreID+"/artists")

                .then(function(response) {
                    return response.json() 
                  })
                
                    .then(function(resultado) {
                      console.log(resultado)
                      console.log(resultado)
                      for (let i = 0; i < "10"; i++) {
                      var nombreArtista = resultado.data[i].name;
                      var genreArtistFoto = resultado.data[i].picture
                      var genreArtistName = document.querySelector(".genre-artists-list")
                      var artistId = resultado.data[i].id;
                     
  
                      
                     genreArtistName.innerHTML+= "<li> <img class= 'fotoartists' src ='"+ genreArtistFoto + "' alt=foto artist><span></span><a href='detailsong.html?id="+artistId+"&type=artist'><h2 class='nameartists'>"+nombreArtista+"</h2></a></li>"
                      }//cierra for
                   })//cierra then
                     
            }//cierra if
        })//cierra then 
          
             .catch(function(error) {
               console.log("Error: " + error);
             })//cierra catch
          
        // }//cierrra if
      //cierra then
            
      
    
      
        
        
        
        
        
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
      if (playlist.includes(idQuerySelector)) {
        document.querySelector(".datos-add").innerHTML = "Remove"
      }
      
      
      
      add.addEventListener('click',function(e){
        console.log (playlist)
        
        if (playlist.includes(idQuerySelector)) {
          var indiceEnPlaylist = playlist.indexOf(idQuerySelector);
          playlist.splice(indiceEnPlaylist,1)
          document.querySelector(".datos-add").innerHTML = "Add to playlist"
        }
        else{
          playlist.push(idQuerySelector)
          document.querySelector(".datos-add").innerHTML = "Remove"
        }
        localStorage.setItem("playlist", JSON.stringify(playlist));
      
   })






}







