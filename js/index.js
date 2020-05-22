window.onload = function(){

// fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
// .then(function(response) {
//     return response.json() 
//   })
  
//   .then(function(resultado) {
//     console.log(resultado.title)
//     var cancion = resultado.title;
//     //var li = document.querySelector(".songs li");
//     //li.innerHTML += "<h4>" + cancion + "<h4>";


//   })
//   .catch(function(error) {
//     console.log("Error: " + error);
//   })

//   //no entendemos como y donde poner el proxy para poder usar la API

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
