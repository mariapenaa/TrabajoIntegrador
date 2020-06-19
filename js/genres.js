window.onload = function(){


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response) {
        return response.json() 
      })
    
        .then(function(resultado) {
            
               
                   for(let i = 1; i< resultado.data.length; i++){

                    var genreCard = document.querySelector(".genre");
                    var genreName = resultado.data[i].name;
                    var genreFoto = resultado.data[i].picture_big;
                    var genreId = resultado.data[i].id;
                   
                    genreCard.innerHTML+="<div class='genre-card-single'><div class='uk-text-center uk-card uk-card-default uk-card-body genre-div uk-cover-container'>"
                    +" <a href='detailsong.html?id="+genreId+"&type=genre'><div class='uk-inline-clip uk-transition-toggle' tabindex='0'><img src='"+genreFoto+"' alt='genre foto' uk-cover>"
                    +"<img class='imagenArtista uk-transition-scale-up uk-position-cover'  alt='otra foto' uk-cover src=' '></div></a>"
                    +"<p class='uk-margin-small-top'><a href='detailsong.html?id="+genreId+"&type=genre'>"+genreName+"</a></p></div>"; 
                  
                   }

                   genreCard.innerHTML+="<div><div class='uk-card uk-card-default uk-card-body anchor'><a href='#genre-top' uk-totop uk-scroll></a></div></div>"
             

                   fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+genreId+"/artists")
                    .then(function(response) {
                    return response.json() 
                  })
                
                    .then(function(resultado) {
                      var todasImagenes = document.querySelectorAll('.imagenArtista')

                      for(let i = 0; i<resultado.data.length; i++){
                        var todasImagenesFor = todasImagenes[i]
                        var topArtist = resultado.data[i].picture_big
                        console.log(todasImagenesFor)
                        todasImagenesFor.src=topArtist
                       
                           
                            
                        

                      }//cierra segundo for
                    
                   })//cierra then
                  
                   .catch(function(error) {
                     console.log("Error: " + error);
                   })//cierra then

                       
               
       })//cierra then
    
       .catch(function(error) {
         console.log("Error: " + error);
       })//cierra then























}//cierra el window onload