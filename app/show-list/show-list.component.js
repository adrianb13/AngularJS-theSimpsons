angular
  .module("showList")
  .component("showList", {
    templateUrl: "show-list/show-list.html",
    controller: ["$scope", "$http", 
      function ShowListController($scope, $http) {
        $http.get("assets/data/show.json") 
          .then(res => {
            this.seasons = res.data;
          })

        $scope.show = {};
/*        $scope.change = function() {} */

        $scope.details = function() {
          this.result = false;
          let info = $scope.show;

          //Retrieve Episode Info from API
          $http.get("https://www.omdbapi.com/?t=the+simpsons&y=&season=" + info.season.season + "&episode=" + info.ep + "&plot=short&apikey=trilogy")
            .then(res => {
              this.episode = res.data;
              
              //If there is a valid result - show results
              if(!this.episode.Error) {
                this.result = true;

              //If no result from API, try to retrieve from custom JSON.
              } else if (this.episode.Error) {
                $http.get("assets/data/missing.json")
                .then(res => {
                  let sfil = res.data.filter(miss => info.season.season == miss.season && info.ep == miss.episode);
                  this.episode = sfil[0];
                  
                  this.result = true;
                })

              //If still no result, return error message.
              } else if (sfil.length === 0) {
                this.result = "error";
              }
            })
        }
      }
    ]
  })