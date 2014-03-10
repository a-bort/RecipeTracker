simplEventApp.controller('RecipeController', function($scope, $http){
    $scope.recipes = [];
    $scope.properties = [];
    $scope.propertyTypes = [];
    
    $scope.initData = function(recipes, properties, types){
      $scope.setPropertyTypes(types);
      $scope.setProperties(properties);
      $scope.setRecipes(recipes);
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
    
    $scope.parsePropertyValue = function(val){
        if(val === false){
            return "No";
        }
        else if(val === true){
            return "Yes";
        } else if(val === undefined){
			return "---";
		}
        return val;
    }
	
	$scope.generateRecipeLink = function(href){
		href = href.trim();
		if(href.substring(0, 7) != "http://" && href.substring(0, 8) != "https://"){
			href = "http://" + href;
		}
		return href;
	}
    
	$scope.modalHeader = function(){
		if($scope.modalRecipe && !$scope.modalRecipe.editing){
			return "Add New Recipe";
		} else{
			return "Edit Recipe";
		}
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
    
    $scope.editRecipe = function(recipe){
		recipe.editing = true;
		var copy = {};
        angular.copy(recipe, copy);
        $scope.modalRecipe = copy;
        $("#recipeModal").modal("show");
    }
	
    $scope.saveDisabled = function(){
        return !$scope.modalRecipe.name;
    };
    
	$scope.saveRecipeClicked = function(){
        if(!$scope.modalRecipe.editing){
			$scope.saveNewRecipe();
		} else{
			$scope.updateRecipe($scope.modalRecipe);
		}
    };
	
	$scope.deactivateRecipe = function(recipe){
		recipe.active = false;
		$scope.updateRecipe(recipe);
	};
	
	$scope.saveNewRecipe = function(){
		$http.post('Recipe/create', $scope.modalRecipe).success(function(data){
            if(data.recipes){
                $scope.setRecipes(data.recipes);
                $scope.modalRecipe = $scope.createRecipe();
                $("#recipeModal").modal("hide");
            } else {
                util.log(JSON.stringify(data.error));
                util.alert("Error Reloading Recipe List");
            }
        })
        .error(function(err){
            util.log(JSON.stringify(err));
            util.alert("Error Creating Recipe");
        });
	};
	
	$scope.updateRecipe = function(recipe){
		$http.post('Recipe/update', recipe).success(function(data){
            if(data.recipes){
                $scope.setRecipes(data.recipes);
                $scope.modalRecipe = $scope.createRecipe();
                $("#recipeModal").modal("hide");
            } else {
                util.log(JSON.stringify(data.error));
                util.alert("Error Reloading Recipe List");
            }
        })
        .error(function(err){
            util.log(JSON.stringify(err));
            util.alert("Error Creating Recipe");
        });
	};
});