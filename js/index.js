window.onload = function(){
  var userTitle = document.querySelector('.title1');

     var username = localStorage.getItem("username")
      
  if (username != "" && username !=null) {
 userTitle.innerHTML+= username+"'s"
  } else { 
    var newUsername = prompt( 'Cual es tu usuario?');
    localStorage.setItem("username", newUsername); 
    if (newUsername != "" && newUsername != null) {
      userTitle.innerHTML+= newUsername+"'s"
      
    } else {
      userTitle.innerHTML+= "your"
    }
  }



//TRACK
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
.then(function(response) {
    return response.json() 
  })
    
    .then(function(resultado) {
      spinner.style.display='none'

      var cancion = resultado.title;
      //var li = document.querySelector(".songs li");
      //li.innerHTML += "<h4>" + cancion + "<h4>";


   })
   .catch(function(error) {
     console.log("Error: " + error);
   })

//TOP SONGS

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")

.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {

      for (let i = 0; i < resultado.data.length; i++) {
        console.log(resultado.data)
        var songTitle = resultado.data[i].title;
        var songList = document.querySelector(".songs");
        var songImg = resultado.data[i].album.cover;
        var artist = resultado.data[i].artist.name;
        var trackId = resultado.data[i].id ;
        var trackType = resultado.data[i].type;
        var artistId = resultado.data[i].artist.id;

        //songList.innerHTML+= "<li><img class='list-foto' alt='albumcover' src='"+songImg+"'>";
       // songList.innerHTML+= "<a href='detailsong.html'><h4>"+songTitle+"</h4></a>";
       //songList.innerHTML+= "<span class='linea'>|</span><a href='detailartist.html'><h5>"+artist+"</h5></a></li>";

       songList.innerHTML+="<li><img class='list-foto' alt='albumcover' src='"+songImg+"'>"
        +"<a href='detailsong.html?id="+trackId+"&type="+trackType+"'>"+"<h4>"+songTitle+"</h4></a>"
        +"<a href='detailsong.html?id="+artistId+"&type=artist'><h5>"+artist+"</h5></a></li>";
        //<span class='linea'>|</span>


      }
   })

   .catch(function(error) {
     console.log("Error: " + error);
   })



  //TOP ALBUMS
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")

.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {

      for (let i = 0; i < resultado.data.length; i++) {
        var albumTitle = resultado.data[i].title;
        var albumList = document.querySelector(".albums");
        var albumImg = resultado.data[i].cover;
        var artist = resultado.data[i].artist.name;
        var trackType = resultado.data[i].type;
        var albumID = resultado.data[i].id;

       albumList.innerHTML+="<li><img class='list-foto' alt='albumcover' src='"+albumImg+"'>"
        +"<a href='detailsong.html?id="+albumID+"&type="+trackType+"'><h4>"+albumTitle+"</h4></a>"
        +"<a href='detailsong.html?id="+albumID+"&type="+trackType+"'><h5>"+artist+"</h5></a></li>";
      }
   })

   .catch(function(error) {
     console.log("Error: " + error);
   })

//TOP ARTISTS
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")

.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {
      for (let i = 0; i < resultado.data.length; i++) {
        var artistTitle = resultado.data[i].name;
        var artistList = document.querySelector(".artists");
        var artistImg = resultado.data[i].picture;
        var trackType = resultado.data[i].type;
        var artistId = resultado.data[i].id;

       artistList.innerHTML+="<li><img class='list-foto' alt='artistcover' src='"+artistImg+"'>"
        +"<a href='detailsong.html?id="+artistId+"&type="+trackType+"'><h4>"+artistTitle+"</h4></a>"
        +"<a href='detailsong.html?id="+artistId+"&type="+trackType+"'><h5>"+artistTitle+"</h5></a></li>";
      }
   })

   .catch(function(error) {
     console.log("Error: " + error);
   })


//CARROUSEL
  var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  slideshows.forEach(initSlideShow);
  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll('#slideshow-example [role="list"] .slide'); 
    var index = 0, time = 5000;
    slides[index].classList.add('active');     
    setInterval( () => {
      slides[index].classList.remove('active');
      index++;
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }}





 


