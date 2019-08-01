angular
  .module("nav1")
  .component("nav1", {
    templateUrl: "nav1/nav1.html",
    controller: ["$scope", "$location",
      function NavController($scope, $location) {
        this.charVal = {};

        $scope.redirectTo = function(url) {
          url = this.charVal;
          $location.url("/fam/" + url);
        }
      }
    ]
  })