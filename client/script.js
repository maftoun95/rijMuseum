var elButton = document.querySelector('#mainDoor');
var galleryButton = document.querySelector('.bButton');
var flDoor = document.querySelector('#flDoor');
var frDoor = document.querySelector('#frDoor');
var blDoor = document.querySelector('#blDoor');
var brDoor = document.querySelector('#brDoor');

elButton.addEventListener('click', function(){
    elButton.innerHTML('');
    flDoor.innerHTML('');
    frDoor.innerHTML('');
})