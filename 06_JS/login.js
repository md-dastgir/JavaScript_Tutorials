//global Variables
var model = document.getElementById("model");
var modelBody = document.getElementById("model-body");
var user = {}

function signup(event){
    event.preventDefault();
    var form = document.forms.register;
    model.style.display = "flex";
    model.className = "animate__animated animate__fadeIn";
    modelBody.className = "animate__animated animate__zoomIn";
    
    user.firstname = form.elements.firstname.value;
    user.lastname = form.elements.lastname.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
}
function closeModel(){
    model.className = "animate__animated animate__fadeOut";
    modelBody.className = "animate__animated animate__zoomOut";
}

function login(event){
    event.preventDefault();
    var form = document.forms.signin;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
    
}