var rijMuse = angular.module('rijMuse', []);

console.log("Gallery Controller");
rijMuse.controller('galleryController', ['$http', 'galleryFactory', function($http, galleryFactory){
    console.log("In galleryController")
    var galleryPrefix = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
    var keyJson = '?key=xvBxNCX5&format=json&';
    
    // List of all availible galleries.  To add a new gallery, take the URL of the page and copy everything from 
    
    // The URLs for for calls to the API are urlPrefix + 'optionalObjectNumber' + keyJson + 'searchTerms'
    var galleryIndex = {
        "rembrandt": "artists/rembrandt-harmensz-van-rijn",
        "vanGogh": "artists/vincent-van-gogh",
        "vermeer": "artists/johannes-vermeer",
        "paper": "works-of-art/masterpieces-on-paper"
    }


    var getGallery = function(galleryName){
        var queryURL = galleryPrefix + galleryIndex.galleryName + keyJson;
        console.log(queryURL);
        $http({
            method: 'GET',
            url: queryURL
        }).then(function successCallback(jsonData) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(jsonData);
            return galleryFactory.makeGallery(jsonData);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("Sorry, this wing is closed. Try a different gallery!")
        });
    }
    console.log(getGallery('paper'));
}])