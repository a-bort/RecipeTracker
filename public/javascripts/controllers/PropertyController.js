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
        $scope.properties = properties;
    }
    
    $scope.setTypes = function(types){
        $scope.types = types;
    }
    
    $scope.getTypeName = function(typeId){
        var typeObj = $scope.getTypeObject(typeId);
        if(typeObj.name){
            return typeObj.name;
        }
        return "";
    };
    
    $scope.getTypeObject = function(typeId){
        for(var i = 0; i < $scope.types.length; i++){
            var type = $scope.types[i];
            if(type._id == typeId){
                return type;
            }
        }
        return {};
    }
    
    $scope.typeIsScale = function(){
        return $scope.getTypeName($scope.modalProperty.typeId) == "Scale";
    }
    
    $scope.typeIsSelect = function(){
        return $scope.getTypeName($scope.modalProperty.typeId) == "Select";
    }
    
    $scope.noProperties = function(){
      return !$scope.properties || $scope.properties.length == 0;
    }
    
    $scope.modalProperty = $scope.createProperty();
    
    $scope.saveNewPropertyDisabled = function(){
        return !$scope.modalProperty.name || !$scope.modalProperty.typeId;
    }
    
    $scope.newPropertyHasConfig = function(){
        if($scope.modalProperty && $scope.modalProperty.typeId){
            return $scope.getTypeObject($scope.modalProperty.typeId).config;
        }
        return false;
    }
    
    $scope.getConfigString = function(property){
        if(property.typeConfig){
            var type = $scope.getTypeName(property.typeId);
            if(type == "Scale"){
                return (property.typeConfig.min ? ("Minimum: " + property.typeConfig.min + " | ") : "") +
                       (property.typeConfig.max ? ("Maximum: " + property.typeConfig.max) : "");
            } else if(type == "Select"){
                var str = "";
                for(var i = 0; i < property.typeConfig.options.length; i++){
                    var opt = property.typeConfig.options[i];
                    str += (opt + (i == property.typeConfig.options.length - 1 ? "" : ", ") ); //Don't add comma for last entry
                }
                return str;
            }
        }
        return "";
    }
    
    $scope.selectOptionVal = "";
    
    $scope.addOptionClicked = function(){
        if($scope.modalProperty.typeConfig){
            if($scope.selectOptionVal){
                if(!$scope.modalProperty.typeConfig.options){
                    $scope.modalProperty.typeConfig.options = [];
                }
                $scope.modalProperty.typeConfig.options.push($scope.selectOptionVal);
                $scope.selectOptionVal = "";
            }
        }
    }
    
    $scope.removeOption = function(option){
        if($scope.modalProperty.typeConfig && $scope.modalProperty.typeConfig.options){
            var index = $scope.modalProperty.typeConfig.options.indexOf(option);
            if (index != -1) {
                $scope.modalProperty.typeConfig.options.splice(index, 1);
            }
        }
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
            util.alert("Error Updating Property");
        });
    }
});