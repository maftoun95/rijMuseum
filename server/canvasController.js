var rijMuse = angular.module('rijMuse', [$http]);

console.log("Canvas Controller");
rijMuse.controller('canvasController', ['$http', function($http){
    var urlPrefix = 'https://www.rijksmuseum.nl/api/en/collection';
    var keyJson = '?key=xvBxNCX5&format=json&';

    // List of all availible galleries.  To add a new gallery, take the URL of the page and copy everything from 
    
    

    var getCanvas = function(id){
        // Grabs JSON data from the passed URL - Hard Coded.
        var query = urlPrefix + id + keyJson;
        $http({
            method: 'GET',
            url: query
        }).then( function successCallback(response){
            console.log(response);
            return canvasFactory(response);
        }, function errorCallback(response){

        });        


    }


}])