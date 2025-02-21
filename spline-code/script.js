// Loading Spinner
var loadingScreen = document.querySelector(".loadingScreen");

// Fake the loading - for aesthetics**
window.addEventListener('load', function() {
    this.setTimeout(async function() {
        loadingScreen.style.display = 'none';
    }, 5000);
});

// switch between normal and angry faces
var normalFace = document.getElementById("normal-face");
var angryFace = document.getElementById("angry-face");
//var switchButton = document.getElementById("switchBtn");
var normalButton = document.getElementById("normalBtn");
var angryButton = document.getElementById("angryBtn");

async function ToggleFace() {
    debugger;

    if(normalFace.classList.value === 'show'){
        normalFace.classList.remove('show');
        normalFace.classList.add('hide');

        angryFace.classList.remove('hide');
        angryFace.classList.add('show');
    }
    else if(angryFace.classList.value === 'show'){
        angryFace.classList.remove('show');
        angryFace.classList.add('hide');

        normalFace.classList.remove('hide');
        normalFace.classList.add('show');
    }
}

// switchButton.addEventListener('click', async function() {
//     await ToggleFace();
// });

// normalButton.addEventListener('click', function() {
//     angryFace.classList.remove('show');
//     angryFace.classList.add('hide');

//     normalFace.classList.remove('hide');
//     normalFace.classList.add('show');
// });

// angryButton.addEventListener('click', function() {
//     normalFace.classList.remove('show');
//     normalFace.classList.add('hide');

//     angryFace.classList.remove('hide');
//     angryFace.classList.add('show');
// });

function myFunction() {
    //debugger;

    if(document.querySelector('.normal').style.display === "none"){
        document.querySelector('.angry').style.display = 'none';
        document.querySelector('.normal').style.display = 'block';
    }
    else{
        document.querySelector('.normal').style.display = 'none';
        document.querySelector('.angry').style.display = 'block';
    }

    $( "#here" ).load(window.location.href + " #here" );
}





