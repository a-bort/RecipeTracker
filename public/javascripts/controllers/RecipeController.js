simplEventApp.controller('RecipeController', function($scope, $http){
    $scope.recipes = [];
    $scope.properties = [];
    $scope.propertyTypes = [];
    
    $scope.initData = function(recipes, properties, types){
      $scope.setPropertyTypes(types);
      $scope.setProperties(properties);
      $scope.setRecipes(recipes);
      
      console.log($scope.properties);
    }
    
	$scope.createRecipe = function(){
		return {
			name : "",
			url: "",
			properties: { },
			active: true
		}
	}
	
    $scope.setRecipes = function(recipes){
      $scope.recipes = recipes;
    }
    
    $scope.setProperties = function(properties){
      for(var i = 0; i < properties.length; i++){
        var prop = properties[i];
        for(var j = 0; j < $scope.propertyTypes.length; j++){
            var type = $scope.propertyTypes[j];
            if(type._id == prop.typeId){
                prop.typeName = type.name;
                properties[i] = prop;
                continue;
            }
        }
      }
      $scope.properties = properties;
    }
    
    $scope.setPropertyTypes = function(types){
      $scope.propertyTypes = types;
    }
    
    $scope.noRecipes = function(){
        return $scope.recipes.length == 0;
    }
	
	$scope.modalRecipe = $scope.createRecipe();
	
	$scope.saveNewRecipeDisabled = function(){
		return false;
	}
	
	$scope.addRecipeClicked = function(){
		$scope.modalRecipe = $scope.createRecipe();
        $("#recipeModal").modal("show");
	}
	
	$scope.saveRecipeClicked = function(){
		console.log($scope.modalRecipe);
		$("#recipeModal").modal("hide");
	}
});