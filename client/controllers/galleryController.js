// var rijMuse = angular.module('rijMuse');

rijMuse.controller('galleryController', ['$http', '$routeParams', 'canvasFactory', '$scope', function($http, $routeParams, canvasFactory, $scope){
    console.log("In galleryController")
    var galleryPrefix = 'https://www.rijksmuseum.nl/api/pages/en/'
    var keyJson = '?key=xvBxNCX5&format=json&imgonly=true';
    $scope.theGallery = {};
    // List of all availible galleries.  To add a new gallery, take the URL of the page and copy everything from 
    
    // The URLs for for calls to the API are urlPrefix + 'optionalObjectNumber' + keyJson + 'searchTerms'
    var galleryIndex = {
        "rembrandt": "rijksstudio/artists/rembrandt-harmensz-van-rijn",
        "vanGogh": "rijksstudio/artists/vincent-van-gogh",
        "vermeer": "rijksstudio/artists/johannes-vermeer",
        "paper": "rijksstudio/works-of-art/masterpieces-on-paper"
    }


    var getGallery = function(galleryName, page = 1){
        if(galleryName === 'undefined'){
            galleryName = 'vermeer';
        }
        var pageData = '&p='+page+'&ps=16'
        var queryURL = galleryPrefix + galleryIndex[galleryName] + keyJson + pageData;
        console.log("Query = " + queryURL);
        $http({
            method: 'GET',
            url: queryURL
        }).then(function successCallback(jsonData) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log("JSON = " + JSON.stringify(jsonData));
            //Takes JSON data and converts it into a gallery object
            var newGallery = {}
            newGallery.artList = jsonData.data.contentPage.artObjectSet;
            newGallery.text = jsonData.data.contentPage.body.markdown;
            newGallery.splash = jsonData.data.contentPage.headerImage;
            var temp;
            for(var i = 0; i< newGallery.artList.length; i++){

                !function outer(i){
                    canvasFactory(newGallery.artList[i],function(newCanvas){
                        if(!newCanvas.url){
                            newGallery.artList[i] = "()()()()()()()()()()()()()()";
                        }else{
                            newGallery.artList[i] = newCanvas;
                        }
                        console.log("Image " + (i+1) + ": "+ JSON.stringify(newGallery.artList[i]));
                    });
                }(i)


            }
            console.log("TEH BROWSER SEEED THE DATAS AZZZZ ***************************************" + JSON.stringify(newGallery))
            $scope.theGallery = newGallery;
            return newGallery;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("Sorry, this wing is closed. Try a different gallery!")
        });
    }
    // console.log(getGallery('paper'));

}])

