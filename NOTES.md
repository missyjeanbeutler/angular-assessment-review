What was covered

$stateParams -
$stateParams is an object. You assign it a key and value pair in the ui-sref on the html page. In the ui-sref, you type the name of the view that you're going to be going to and attach the object for stateParams. Make sure the key matches the url ending of the url in the state object of that view (in app.js) that it will be changing to. 

routing -
Using ui-router, you can change views in the same browser tab. .state in the app.js takes a name and an object. When you use ui-sref to go to a view, the name of the view from the app.js file will determine the html doc to serve and what controller to use for that html page. It will also determine the url ending of the applications web address.

ng-src -
Used like src in an image tag like so....
```<img ng-src={{thing.url}}>```

ng-model -
What ng-model is equal to becomes the key in a key value pair on the $scope object. The value of that key value pair is whatever the ng-model is connected to. If it's an input, whatever is typed in the input will become the value of the key value pair, etc... This is useful to make values from the view accessible to the controller. 
