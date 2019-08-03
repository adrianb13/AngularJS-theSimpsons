angular
  .module("simpsonsList")
  .component("simpsonsList", {
    templateUrl: "simpsons-list/simpsons-list.html", 
    controller: [ "$scope", "$http", "$location",
      function SimpsonsListController($scope, $http, $location) {
        $http.get("assets/data/simpsons.json")
          .then(res => {
            this.simpsons = res.data;
          })
        
        this.char = {}
        $scope.redirectTo = function(url) {
          url = this.char;
          $location.url("/fam/" + url);
        }

      }
    ]
  })