var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('TodoListController', function($scope){
    $scope.todos = [];
    
    $scope.doneFilter = { done : true };
    $scope.notDoneFilter = { done : false };
    
    $scope.setTodos = function(todos){
        $scope.todos = todos;
    }
});