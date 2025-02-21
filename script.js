// Loading Spinner
var loadingScreen = document.querySelector(".loadingScreen");

// Fake the loading - for aesthetics**
window.addEventListener('load', function() {
    this.setTimeout(async function() {
        loadingScreen.style.display = 'none';
    }, 3000);
});

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Form Buttons
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Spline - Switch between normal and angry faces
const normalFace = document.getElementById("normal-face");
const angryFace = document.getElementById("angry-face");

function showAngryFace() {
    // normalFace.style.display = 'none';
    // angryFace.style.display = 'block';

    normalFace.classList.add('hidden');
    normalFace.classList.add('visuallyhidden');

    angryFace.classList.remove('hidden');
    setTimeout(function () {
        angryFace.classList.remove('visuallyhidden');
    }, 100);    
}

function showNormalFace() {
    angryFace.classList.add('hidden');
    angryFace.classList.add('visuallyhidden');

    normalFace.classList.remove('hidden');
    setTimeout(function () {
        normalFace.classList.remove('visuallyhidden');
    }, 100);    
}

function resetNormalFace() {
    setTimeout(showNormalFace);

    document.forms["myLoginForm"]["username"].style.border = "none";
    document.forms["myLoginForm"]["password"].style.border = "none";    
}

function resetAngryFace() {
    setTimeout(showNormalFace);

    document.forms["myRegistrationForm"]["username1"].style.border = "none";
    document.forms["myRegistrationForm"]["email"].style.border = "none";
    document.forms["myRegistrationForm"]["password1"].style.border = "none";    
}

// Validate
function validateLoginForm() {
    //resetNormalFace();

    let username = document.forms["myLoginForm"]["username"].value;
    let password = document.forms["myLoginForm"]["password"].value;

    if (username == "" || password == "") {
        //alert("Name & Password must be filled out!");

        setTimeout(showAngryFace);

        // Set focus on the empty field
        if(username === "")  {            
            document.forms["myLoginForm"]["username"].style.border = "2px solid";
            document.forms["myLoginForm"]["username"].style.borderColor = "red";
            document.forms["myLoginForm"]["username"].focus();
        }
        else {
            document.forms["myLoginForm"]["username"].style.border = "none";
        }

        if(password === "")  { 
            document.forms["myLoginForm"]["password"].style.border = "2px solid";
            document.forms["myLoginForm"]["password"].style.borderColor = "red";
            document.forms["myLoginForm"]["password"].focus();
        }
        else {
            document.forms["myLoginForm"]["password"].style.border = "none";
        }

        return false;
    }
    else {
        resetNormalFace();
    }
}

function validateRegisterForm() {
    //resetAngryFace();

    let username = document.forms["myRegistrationForm"]["username1"].value;
    let password = document.forms["myRegistrationForm"]["password1"].value;    
    let email = document.forms["myRegistrationForm"]["email"].value;

    if (username === "" || email === "" || password === "") {
        setTimeout(showAngryFace);

        // Set focus on the empty field
        if(username === "")  {            
            document.forms["myRegistrationForm"]["username1"].style.border = "2px solid";
            document.forms["myRegistrationForm"]["username1"].style.borderColor = "red";
            document.forms["myRegistrationForm"]["username1"].focus();
        }
        else {
            document.forms["myRegistrationForm"]["username1"].style.border = "none";
        }

        if(email === "")  {            
            document.forms["myRegistrationForm"]["email"].style.border = "2px solid";
            document.forms["myRegistrationForm"]["email"].style.borderColor = "red";
            document.forms["myRegistrationForm"]["email"].focus();
        }
        else {
            document.forms["myRegistrationForm"]["email"].style.border = "none";
        }


        if(password === "")  { 
            document.forms["myRegistrationForm"]["password1"].style.border = "2px solid";
            document.forms["myRegistrationForm"]["password1"].style.borderColor = "red";
            document.forms["myRegistrationForm"]["password1"].focus();
        }
        else {
            document.forms["myRegistrationForm"]["password1"].style.border = "none";
        }

        return false;
    }
    else {
        resetAngryFace();
    }
}
