// var controllaaaaaaa = require('./controllers/galleryController');

var mainDoor = document.querySelector('#mainDoor');
var rembrandt = document.querySelector('#rembrandt');
var vanGoh = document.querySelector('#vanGoh');
var vermeer = document.querySelector('#vermeer');
var paper = document.querySelector('#paper');
console.log("~~~~~~~~~~~~~~~~~",rembrandt)
var c1 = document.getElementById('1');
var c2 = document.getElementById('2');
var c3 = document.getElementById('3');
var c4 = document.getElementById('4');
var c5 = document.getElementById('5');
var c6 = document.getElementById('6');
var c7 = document.getElementById('7');
var c8 = document.getElementById('8');
var c9 = document.getElementById('9');
var c10 = document.getElementById('10');
var c11 = document.getElementById('11');
var c12 = document.getElementById('12');
var c13 = document.getElementById('13');
var c14 = document.getElementById('14');
var c15 = document.getElementById('15');
var c16 = document.getElementById('16');

var canvases = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];


// the animation is taking place in the html. here is where the cooresponding API calls will be made
mainDoor.addEventListener('click', function(){
    console.log('yay main button')
    doorAnimation.play()
})
rembrandt.addEventListener('click', function(){
    console.log('rembrandt button clicked')
    document.querySelector('#rembrandt').emit('backDoors');
})
vanGoh.addEventListener('click', function(){
    document.querySelector('#vanGoh').emit('backDoors');
    console.log('fire controller call to API: vanGoh')
})
vermeer.addEventListener('click', function(){
    document.querySelector('#vermeer').emit('backDoors');
    console.log('fire controller call to API: vermeer')
})
paper.addEventListener('click', function(){
    document.querySelector('#paper').emit('backDoors');
    console.log('fire controller call to API: paper')
})

