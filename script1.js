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
    }, 1000);    
}

// Validate
function validateForm() {
    let username = document.forms["myLoginForm"]["username"].value;
    let password = document.forms["myLoginForm"]["password"].value;
    
    //let email = document.forms["myRegistrationForm"]["email"].value;

    if (username == "" || password == "") {
        //alert("Name & Password must be filled out!");

        setTimeout(showAngryFace);

        // Set focus on the empty field
        if(username == "")  {            
            document.getElementById("username").style.border = "2px solid";
            document.getElementById("username").style.borderColor = "red";
            document.forms["myLoginForm"]["username"].focus();
        }
        else {
            document.getElementById("password").style.border = "2px solid";
            document.getElementById("password").style.borderColor = "red";
            document.forms["myLoginForm"]["password"].focus();
        }

        return false;
    }
    else {
        angryFace.style.display = 'none';
        normalFace.style.display = 'block';
    }
}
