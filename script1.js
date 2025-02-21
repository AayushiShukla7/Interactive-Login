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

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Spline - Switch between normal and angry faces
var normalFace = document.getElementById("normal-face");
var angryFace = document.getElementById("angry-face");
