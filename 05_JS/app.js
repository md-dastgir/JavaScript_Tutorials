function login(event){

    event.preventDefault();  //  This is use to stop for data going on server
    var username = document.getElementById("username");
    var passowrd = document.getElementById("password");

    console.log(username.value);
    console.log(passowrd.value);
}