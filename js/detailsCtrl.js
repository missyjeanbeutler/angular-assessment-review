angular.module('app').controller('detailsCtrl', function($scope, svc, $stateParams) {

console.log($stateParams, ' STATEPARAMS!!')
console.log(svc.findShoe($stateParams.shoeID))

$scope.shoe = svc.findShoe($stateParams.shoeID)



})