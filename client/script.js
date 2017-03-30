var mainDoor = document.querySelector('#mainDoor');
var rembrandt = document.querySelector('#rembrandt');
var vanGoh = document.querySelector('#vanGoh');
var vermeer = document.querySelector('#vermeer');
var paper = document.querySelector('#paper');

var c1 = document.querySelector('#1');
var c2 = document.querySelector('#2');
var c3 = document.querySelector('#3');
var c4 = document.querySelector('#4');
var c5 = document.querySelector('#5');
var c6 = document.querySelector('#6');
var c7 = document.querySelector('#7');
var c8 = document.querySelector('#8');
var c9 = document.querySelector('#9');
var c10 = document.querySelector('#10');
var c11 = document.querySelector('#11');
var c12 = document.querySelector('#12');
var c13 = document.querySelector('#13');
var c14 = document.querySelector('#14');
var c15 = document.querySelector('#15');
var c16 = document.querySelector('#16');

var canvases = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];


// the animation is taking place in the html. here is where the cooresponding API calls will be made
mainDoor.addEventListener('click', function(){
    console.log('yay main button')
})
rembrandt.addEventListener('click', function(){
    var set = galleryController.getGallery('rembrandt', 1, function(){
        // for(var i = 0; i < canvases.length; i++){
        //     canvases[i].setAttribute()
        // }
        console.log($scope.theGallery);
    });

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