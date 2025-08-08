function toggle(){
    var sidebar = document.getElementById("sidebar");
    var sideWidth = sidebar.style.width;
    var navbar = document.getElementById("navbar");
    var section = document.getElementById("section");

    if(sideWidth == '0px'){
        sidebar.style.width = '250px';
        sidebar.style.transition = '0.2s';
        navbar.style.width = 'calc(100% - 250px)';
        navbar.style.transition = '0.2s';
        section.style.width = 'calc(100% - 250px)';
        section.style.transition = '0.2s';
    }
    else
    {
        sidebar.style.width = '0px';
        sidebar.style.transition = '0.2s';
        navbar.style.width = '100%';
        navbar.style.transition = '0.2s';
        section.style.width = '100%';
        section.style.transition = '0.2s';
    }
}

function modeChange(){
    var section = document.getElementById("section");
    var bgClr = section.style.background;
    var mode = document.getElementById("mode");

    if(bgClr == 'white'){
        section.style.background = "#323232";
        section.style.transition = ".2s"
        mode.innerText = "Light";
        mode.style.transition = ".2s"
    }
    else
    {
        section.style.background = "white";
        section.style.transition = ".2s"
        mode.innerText = "Dark";
        mode.style.transition = ".2s"
    }
}

function tab(activeBtn, inActiveBtn, activeId, inActiveId){
    var signUp = document.getElementById(activeId);
    var logIn = document.getElementById(inActiveId);
    var activeButton = document.getElementById(activeBtn);
    var inActiveButton = document.getElementById(inActiveBtn);

    activeButton.style.background = 'dodgerblue';
    activeButton.style.color = 'white';
    inActiveButton.style.background = 'white';
    inActiveButton.style.color = 'black';
    
    signUp.style.display ='block';
    signUp.style.transition = '.2s';
    logIn.style.display ='none';
}

function signUp(event){
    event.preventDefault();
    var user = {}
    var form = document.forms.signUpForm;
    var fullname = form.elements.fullname;
    var nameRequired = document.getElementById('nameReq');
    var email = form.elements.email;
    var emailRequired = document.getElementById('emailReq');
    var password = form.elements.password;
    var passwordRequired = document.getElementById('passReq');


    if(fullname.value.trim().length == 0)
    {
        fullname.style.borderColor = 'red';
        nameRequired.style.display = 'block';
        nameRequired.innerText = "Fullname Required";
    }
    else if(email.value.trim().length == 0)
    {
        email.style.borderColor = 'red';
        emailRequired.style.display = 'block';
        emailRequired.innerText = "Email Required";
    }
    else if(password.value.trim().length == 0){
        password.style.borderColor = 'red';
        passwordRequired.style.display = 'block';
        passwordRequired.innerText = "Password Required";
    }
    else if(password.value.trim().length < 8){
        password.style.borderColor = 'red';
        passwordRequired.style.display = 'block';
        passwordRequired.innerText = "Minimum 8 digits Required";
    }
    else
    {
        user.fullname = fullname.value.trim();
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
        Swal.fire({
            title : 'SignUp Success',
            icon: 'success'
        })
        
    }
}

function onInputValidation(input){
    var nameRequired = document.getElementById('nameReq');
    var emailRequired = document.getElementById('emailReq');
    var passwordRequired = document.getElementById('passReq');

    input.style.borderColor = '#ccc';
    nameRequired.style.display = 'none';
    emailRequired.style.display = 'none';
    passwordRequired.style.display = 'none';
}

function togglePassword(idOfPassword, iconId){
    var viewPassword = document.getElementById(idOfPassword);
    var view = document.getElementById(iconId);

    if(viewPassword.type == 'password'){
        viewPassword.type = 'text';
        view.className = 'fa fa-eye-slash';
    }
    else
    {
        viewPassword.type = 'password';
        view.className = 'fa fa-eye';
    }
}

function login(event){
    event.preventDefault();
    var form = document.forms.logInForm;
    var user = {}
    var email = form.elements.email;
    var password = form.elements.password;
    var logEmail = document.getElementById('login-emailReq');
    var logPassword = document.getElementById('login-passReq');

    if(email.value.trim().length == 0)
    {
        email.style.borderColor = 'red';
        logEmail.style.display ='block';
        logEmail.innerHTML = "Email Required";
    }
    else if(password.value.trim().length == 0)
    {
        password.style.borderColor = 'red';
        logPassword.style.display = 'block';
        logPassword.innerHTML = "Password Required";
    }
    else
    {
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
        Swal.fire({
            title : 'Login Success',
            icon: 'success'
        })
    }
}
function onInputValidation(input){
    var logEmailRequired = document.getElementById('login-emailReq');
    var logPasswordRequired = document.getElementById('login-passReq');

    input.style.borderColor = '#ccc';
    logEmailRequired.style.display = 'none';
    logPasswordRequired.style.display = 'none';
}