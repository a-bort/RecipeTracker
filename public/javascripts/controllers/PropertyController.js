var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('PropertyController', function($scope, $http){
    
    $scope.createProperty = function(){
        return {
            name : "",
            active: true,
            typeId: "",
            typeConfig: {}
        }
    }
    
    $scope.types = [];
    $scope.properties = [];

    $scope.initData = function(types, properties){
      $scope.setTypes(types);
      $scope.setProperties(properties);
    }
    
    $scope.setProperties = function(properties){
        console.log(properties);
        $scope.properties = properties;
    }
    
    $scope.setTypes = function(types){
        console.log(types);
        $scope.types = types;
    }
    
    $scope.noProperties = function(){
      return !$scope.properties || $scope.properties.length == 0;
    }
    
    $scope.newProperty = $scope.createProperty();
    
    $scope.saveNewPropertyDisabled = function(){
        return !$scope.newProperty.name || !$scope.newProperty.typeId;
    }
    
    $scope.addNewProperty = function(){
        $http.post('Properties/create', $scope.newProperty).success(function(data){
            if(data.properties){
                $scope.setProperties(data.properties);
                $scope.newProperty = $scope.createProperty();
                console.log($scope.properties);
            } else {
                alert(JSON.stringify(data.error));
            }
        });
    }
});