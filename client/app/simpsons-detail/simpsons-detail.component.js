angular
  .module("simpsonsDetail")
  .component("simpsonsDetail", {
    templateUrl: "simpsons-detail/simpsons-detail.html",
    controller: ["$http", "$routeParams",
      function SimpsonsDetailController($http, $routeParams) {
        $http.get("assets/data/simpsons.json")
          .then(res => {
            //Filter to find exact Simpson chosen based on params passed
            let chosen = res.data.filter(simpson => simpson.id == $routeParams.id);
            this.simpson = chosen[0];
            this.facts = chosen[0].random;
          })
      }
    ]
  })