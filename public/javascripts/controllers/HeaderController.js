var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('HeaderController', function($scope, $http){
    $scope.homeActive = false;
    $scope.propertyActive = false;
    
    $scope.setHomeActive = function(){
        $scope.homeActive = true;
    }
    
    $scope.setPropertyActive = function(){
        $scope.propertyActive = true;
    }
});