var model = document.getElementById("model");
var modelBody = document.getElementById("model-body");

function signup(event){
    event.preventDefault();
    var form = document.forms.register;
    model.style.display = "flex";
    model.className = "animate__animated animate__fadeIn";
    modelBody.className = "animate__animated animate__zoomIn";
    var user = {
        firstname : form.elements.firstname.value,
        lastname : form.elements.lastname.value,
        email : form.elements.email.value,
        password : form.elements.password.value
    }
    console.log(user);
}
function closeModel(){
    model.className = "animate__animated animate__fadeOut";
    modelBody.className = "animate__animated animate__zoomOut";
}