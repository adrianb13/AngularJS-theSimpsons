angular
  .module("simpsonsApp")
  .config(["$routeProvider", 
    config = ($routeProvider) => {
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
    }  
]);