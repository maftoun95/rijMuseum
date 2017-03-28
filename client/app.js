var rijMuse = angular.module('rijMuse', ['ngRoute']);

rijMuse.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('gallery/:id', {
        resolve: {
            theGallery: function(galleryController){
                console.log("Triggered! ID: " + id)
                return galleryController.getGallery(id);
            }
        }
    })
    .when('/vanGogh', {
        templateUrl: '/../partials/canvases.html'
    })
    .when('/vermeer', {
        templateUrl: '/../partials/canvases.html'
    })
    .when('/paper', {
        templateUrl: '/../partials/canvases.html'
    })
    .otherwise({
        templateUrl: '/../partials/canvases.html'
    })
}]);