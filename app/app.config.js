angular
  .module("simpsonsApp")
  .config(["$routeProvider", "$locationProvider",
    config = ($routeProvider, $locationProvider) => {
      $routeProvider
        .when("/", {
          template: "<simpsons-list><simpsons-list>"
        })
        .when("/fam/:id", {
          template: "<simpsons-detail><simpsons-detail>"
        })
        .when("/show", {
          template: "<show-list><show-list>"
        })
        .otherwise("/");
      $locationProvider.html5Mode(true).hashPrefix('');
    }  
]);