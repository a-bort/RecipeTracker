var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('PropertyController', function($scope, $http){
    
    window.PropertyController = $scope;
    
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
        $scope.properties = properties;
    }
    
    $scope.setTypes = function(types){
        $scope.types = types;
    }
    
    $scope.getTypeName = function(typeId){
        for(var i = 0; i < $scope.types.length; i++){
            var type = $scope.types[i];
            if(type._id == typeId){
                return type.name;
            }
        }
        return "";
    };
    
    $scope.noProperties = function(){
      return !$scope.properties || $scope.properties.length == 0;
    }
    
    $scope.modalProperty = $scope.createProperty();
    
    $scope.saveNewPropertyDisabled = function(){
        return !$scope.modalProperty.name || !$scope.modalProperty.typeId;
    }
    
    $scope.addPropertyClicked = function(){
        $scope.modalProperty = $scope.createProperty();
        $("#propertyModal").modal("show");
    }
    
    $scope.savePropertyClicked = function(){
        if($scope.modalProperty.editing){
            $scope.sendUpdateRequest($scope.modalProperty);
        } else{
            $scope.addNewProperty();
        }
    }
    
    $scope.addNewProperty = function(){
        $http.post('Properties/create', $scope.modalProperty).success(function(data){
            if(data.properties){
                $scope.setProperties(data.properties);
                $scope.modalProperty = $scope.createProperty();
                $("#propertyModal").modal("hide");
            } else {
                util.log(JSON.stringify(data.error));
                util.alert("Error Reloading Property List");
            }
        })
        .error(function(err){
            util.log(JSON.stringify(err));
            util.alert("Error Creating Property");
        });
    }
    
    $scope.deactivateProperty = function(prop){
        prop.active = false;
        $scope.sendUpdateRequest(prop);
    }
    
    $scope.editProperty = function(prop){
        prop.editing = true;
        var copy = {};
        angular.copy(prop, copy);
        $scope.modalProperty = copy;
        $("#propertyModal").modal("show");
    }
    
    $scope.sendUpdateRequest = function(prop){
        $http.post('Properties/update', prop).success(function(data){
            if(data.properties){
                $scope.setProperties(data.properties);
                //Used for editing and deactivating. Next two lines apply to editing
                $scope.modalProperty = $scope.createProperty();
                $("#propertyModal").modal("hide");
            } else {
                util.log(JSON.stringify(data.error));
                util.alert("Error Reloading Property List");
            }
        })
        .error(function(err){
            util.log(JSON.stringify(err));
            util.alert("Error Deactivating Property");
        });
    }
});