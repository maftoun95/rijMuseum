// var rijMuse = angular.module('rijMuse');

rijMuse.factory('galleryFactory', ['canvasFactory', function(canvasFactory) {
    console.log('Gallery Factory');
    var newGallery = {};
    newGallery.makeGallery = function(jsonData){
        console.log("JSON Data IN FACTORY: " + jsonData)
        newGallery.artList = jsonData.contentPage.artObjectSet;
        newGallery.text = jsonData.contentPage.body.markdown;
        newGallery.splash = jsonData.contentPage.headerImage;
        for(var i = 0; i< newGallery.artList.length; i++){
            temp = canvasFactory.makeCanvas(newGallery.artList[i]);
            newGallery.artList[i] = temp;
        }
    }
    return newGallery;
}]);
