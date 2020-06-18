
//animación de la caja
$(".message a").click(function(){
    $("form").animate({height:"toggle",opacity:"toggle"},"slow")
});
//Register
function store(){
    var username = document.getElementById("username")
    var pw = document.getElementById("pw")
    var firstName = document.getElementById("first-name")
    var lastName = document.getElementById("last-name")
    if(username.value.length == 0){
        alert('Please fill in username');
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    }else if(firstName.value.length == 0){
        alert('Please fill in first name');
    }else if(lastName.value.length == 0){
        alert('Please fill in last name');
    }else{
        localStorage.setItem('username', username.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        alert('Your account has been created');
        document.querySelector(".register-form").reset();
    }
}
//Login
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');
    var userName = document.getElementById('user-username');
    var userPw = document.getElementById('user-pw');
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.location="index.html"
    }else if(userName.value==storedName && userPw.value != storedPw){
        alert('Wrong password');
    }else if(userPw.value==storedPw && userName.value != storedName){
        alert('Wrong username')
    }else{
        alert("Wrong login information")
    }
}