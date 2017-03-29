var mainDoor = document.querySelector('#mainDoor');
var rembrandt = document.querySelector('#rembrandt');
var vanGoh = document.querySelector('#vanGoh');
var vermeer = document.querySelector('#vermeer');
var paper = document.querySelector('#paper');

// the animation is taking place in the html. here is where the cooresponding API calls will be made
mainDoor.addEventListener('click', function(){
    console.log('yay main button')
})
rembrandt.addEventListener('click', function(){
    console.log('fire controller call to API: rembrandt')
})
vanGoh.addEventListener('click', function(){
    console.log('fire controller call to API: vanGoh')
})
vermeer.addEventListener('click', function(){
    console.log('fire controller call to API: vermeer')
})
paper.addEventListener('click', function(){
    console.log('fire controller call to API: paper')
})