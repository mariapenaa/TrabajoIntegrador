window.onload = function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response) {
        return response.json() 
      })
    
        .then(function(resultado) {
            for(let i = 0; i<resultado.data.length; i++){
                console.log(resultado)
                var genreCard = document.querySelector(".genre");
                var genreName = resultado.data[i].name;
                var genreFoto = resultado.data[i].picture_big;
                var genreId = resultado.data[i].id;
            }
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+genreId+"/artists")
                 .then(function(response) {
                    return response.json() 
                  })
                
                    .then(function(resultado) {
                       for(let i = 0; i<resultado.data.length; i++){
                            console.log(resultado)
                            var topArtist = resultado.data[i].picture_big
                            genreCard.innerHTML+="<div class='genre-card-single'><div class='uk-text-center uk-card uk-card-default uk-card-body genre-div uk-cover-container'>"
                            +" <div class='uk-inline-clip uk-transition-toggle' tabindex='0'><img src='"+genreFoto+"' alt='genre foto' uk-cover>"
                            +"<img class='uk-transition-scale-up uk-position-cover' src='"+topArtist+"' alt='otra foto' uk-cover></div>"
                            +"<p class='uk-margin-small-top'><a href='detailsong.html?id="+genreId+"&type=genre'>"+genreName+"</a></p></div>";
                       }//cierra for
              
        
                    
                   })//cierra then
                
                   .catch(function(error) {
                     console.log("Error: " + error);
                   })//cierra then
            
            
   
          //cierra for
       })//cierra then
    
       .catch(function(error) {
         console.log("Error: " + error);
       })//cierra then























}//cierra el window onload