function signup(event){
    event.preventDefault();
    var form = document.forms.register;
    var user = {
        firstname : form.elements.firstname.value,
        lastname : form.elements.lastname.value,
        email : form.elements.email.value,
        password : form.elements.password.value
    }
    console.log(user);
}