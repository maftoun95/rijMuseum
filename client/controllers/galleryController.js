var rijMuse = angular.module('rijMuse', [$http]);

console.log("Gallery Controller");
rijMuse.controller('galleryController', ['$http', function($http){
    var exhib = [];
    var apiKey = 'xvBxNCX5';
    var singleImgUrlPrefix = 'https://www.rijksmuseum.nl/api/en/collection';
    var galleryPrefix = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
    var keyJson = '?key=xvBxNCX5&format=json&';



    var getGallery = function(galleryName){
        galleryFactory.getGallery(galleryName);
    }

    // // Grabs JSON data from the passed URL - Hard Coded.
    // $http({
    //     method: 'GET',
    //     url: 'EROlkjfgsdfghdfjgs;dlkfgja;lkfj;sfdg;dfg;ldgdg'
    // }).then( function successCallback(response){

    // }, function errorCallback(response){

    // });        





}])