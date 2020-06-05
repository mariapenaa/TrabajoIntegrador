window.onload= function(){
var userTitle = document.querySelector(".playlistTitle")
var username= localStorage.getItem("username")
if (username != "" && username !=null) {
    userTitle.innerHTML+= username+"'s Playlist"
    userTitle.style.textTransform = 'capitalize'
} else {
    userTitle.innerHTML+= "My Playlist"
}

var 

}