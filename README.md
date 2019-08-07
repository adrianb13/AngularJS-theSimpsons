# theSimpsons
The Simpsons Fan Page - AngularJS

Deployed Link: https://the-simpsons-angularjs.herokuapp.com/#!/

This is a fan site dedicated to "The Simpsons" TV show.  On the home page, it allows fans to view one of the opening sequences of the show (since the opening sequence changes every episode). It also displays the 5 members of the beloved family: Homer, Marge, Bart, Lisa, and Maggie.  You are able to click each member and read details and random facts of each member.  There is also a separate page dedicated to looking up the details of each episode in all 30 Seasons.  This uses a combination of a custom JSON dataset I created as well as the OMDB API.  The API did not have info available for certain episodes, so I created a "library" of my own to fill in the details of the missing episodes.

The app used NODE, EXPRESS, and ANGULARJS.

You can view the running web app at the above.  As for cloning this repo and seeing the project for yourself, feel free to do so.

*** Cloning the repo ***

Using SSH: git@github.com:adrianb13/theSimpsons.git
Using HTTPS: https://github.com/adrianb13/theSimpsons.git

Copy one of the above links depending on your preference and move into a preferred folder or create a new folder to copy the repo into.

Assuming you already have NODE installed, proceed with the following. If not, you can download it here which should include NPM (Node Package Manager):
https://nodejs.org/en/download/

--If you want a new folder--
(do not include <> in any of the following)
This creates a new folder:                                      mkdir <foldername>
Then move into the new folder:                                  cd <foldername>
Then clone folder:                                              git clone git@github.com:adrianb13/theSimpsons.git

--Using existing folder--
Then clone folder:                                              git clone git@github.com:adrianb13/theSimpsons.git

This process will copy the repo to your designated folder.

Once complete move into the repo that was created:              cd theSimpsons
Once in the folder, you need to install the dependencies:       npm install

If any dependencies need updating, you can update using:        npm audit fix

This will install all the dependencies needed to run the web app. If all is installed correctly, you can run the app and test it using the following while in the root folder("theSimpsons" folder):

node app.js

It will return the localhost port the app can be viewed on in your preferred browser. It should be localhost:8000/ otherwise follow the port listed in your console.  In this example, you should be entering localhost:8000/ in your browser url.

*** Structuring of App Code/Folders ***

You will land on the home page.  Each sectional component has it's own dedicated folder with the "app" folder such as the Nav Bar held within the "nav1" folder.

       app ----
         / nav1     
         / show-list
         / simpsons-detail     
         / simpsons-list
         index.html
       
Each component is structured like so:

       nav1 ----
        / nav1.component.js
        / nav1.html
        / nav1.module.js
        
So when viewing a component, you are able to view the details of what each component is doing. You can view any component dependencies in the .module.js file. You can view the controller and functionality in the .component.js file.  The html layout is listed in the .html file. I've set up the web app where basically each component has a dedicated page in the app. But they can be combined and referenced in each other's components with very minimal code changes based on this structure.  An example is the Nav Bar being referenced in the other components and injected where I wanted it represented.  On the landing page, the Nav Bar is in the middle, the other pages have it at the top.

*** General Component Functionality ***

In most of the components, I use ng-repeat to dynamically produce a list of data instead of hard coding each line.  As an example, to display the family on the homepage, I used the following:


       <div ng-repeat="simpson in $ctrl.simpsons" class="cBox">
           <a href="#!/fam/{{simpson.id}}">
              <img src="{{simpson.image}}" alt="{{simpson.name}}" class="imgBox" />
              <div class="font">{{simpson.name}}</div>
           </a>
       </div>

ng-repeat iterates through each item in my JSON data array I had created for the Simpsons family through "simpson in $ctrl.simpsons".
(Basically, iterate through each item (simpson) in the array ($ctrl.simpsons)).
$ctrl.simpsons calls the controller of the component with the variable simpsons.

Here is the controller code snippet:

       controller: [ "$scope", "$http", "$location",
              function SimpsonsListController($scope, $http, $location) {
              $http.get("assets/data/simpsons.json")
                     .then(res => {
                     this.simpsons = res.data;
              })
       ....more code
       }
       
The controller for this component within simpsons-list.component.js is doing a GET using $http.get from my customized json file. 
$http is a built-in service within AngularJS.
It returns the results in a promise .then() and assigns the data to this.simpsons  
$ctrl.simpsons from the previous html is referencing this.simpsons
Using expressions {{}}, I can inject the info I need where I need such as "{{simpson.name}}" to read the "name" property in my json file.

The end result is each character displayed on the home page with a clickable routing reference to a details page.

*** Routing *** 

The routing is handled in app.config.js in the root folder using $routeProvider, another built in AngularJS service.
This is a snippet:

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
    
This basically tells that app, if the following url is met, use the assigned component reference by "template: ...." 
.otherwise tells the app to re-route a user to a certain route or page if the url is not recognized.  In this case, it routes back to the home page.


For more AngularJS info, feel free to visit: https://angularjs.org/
