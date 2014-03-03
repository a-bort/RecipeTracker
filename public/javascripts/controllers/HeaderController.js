var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('HeaderController', function($scope, $location){
        
    $scope.loc = $location;
    
    $scope.homeUrl = "/";
    $scope.homeActive = true;
    $scope.propertyUrl = "/Properties";
    $scope.propertyActive = false;
});