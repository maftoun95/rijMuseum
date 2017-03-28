var rijMuse = angular.module('rijMuse', ['ngRoute']);

rijMuse.config(function($routeProvider){
    $routeProvider
    .when('/rembrandt', {
        // templateUrl: '/../partials/new.html'
    })
    .when('/vanGogh', {
        // templateUrl: '/../partials/edit.html'
    })
    .when('/vermeer', {
        // templateUrl: '/../partials/show.html'
    })
    .when('/paper', {
        // templateUrl: '/../partials/show.html'
    })
    .otherwise({
        // templateUrl: '/../partials/home.html'
    })
});