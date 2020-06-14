window.onload = function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response) {
        return response.json() 
      })
    
        .then(function(resultado) {
            for (let i = 0; i < resultado.data.length; i++) {
                var genreCard = document.querySelector(".genre");
                var genreName = resultado.data[i].name;
                var genreFoto = resultado.data[i].picture;
                var genreId = resultado.data[i].id;
                var genreCardSingle = document.querySelector(".div.genre-div")
                genreCard.innerHTML+="<div><div class='uk-card uk-card-default uk-card-body genre-div'>"
                +"<a href='detailsong.html?id="+genreId+"&type=genre'>"+genreName+"</a></div></div>";
               
       /*          <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img src="images/dark.jpg" alt="">
            <img class="uk-transition-scale-up uk-position-cover" src="images/light.jpg" alt="">
        </div>
        <p class="uk-margin-small-top">2 Images</p>
    </div>
     */
          }//cierra for
       })//cierra then
    
       .catch(function(error) {
         console.log("Error: " + error);
       })//cierra then























}//cierra el window onload