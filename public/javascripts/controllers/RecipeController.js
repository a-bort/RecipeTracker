simplEventApp.controller('RecipeController', function($scope, $http){

    //DATA INITIALIZATION
    
    
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
        
        //SETUP SORTING OBJECT
        prop.sortingHelper = new SortingHelper(prop);  
        
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
    
    //CONTENT MANIPULATION
    //  - MAIN PAGE
    
    $scope.parsePropertyValue = function(prop, val){
        if(prop.typeName == "True/False"){
            if(!val){
                return "No";
            }
            else{
                return "Yes";
            }
        } 
        else if(val){
            return val;
        }
        return "---";
        
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
    
    $scope.noRecipes = function(){
        return $scope.recipes.length == 0;
    }
	
    // -- SORTING
    
    // ---- CENTRAL OBJECT FOR TRACKING THE SORT VALUE AND DIRECTION,
    // ---- MAINTAINS THE STATE OF THE LIST
    
    function SortingTracker(){
        var self = this;
        var page = $scope;
        
        self.sortingProperty = "";
        self.sortingAsc = true;
        
        self.setSortingProperty = function(prop){
            console.log(prop);
            self.sortingProperty = prop;
        }
        
        self.setSortingDir = function(isAsc){
            console.log(isAsc);
            self.sortingAsc = isAsc;
        }
        
        self.headingStateChanged = function(){
            page.nameHeader.safeClearSortingStatus();
            for(var i = 0; i < page.properties.length; i++){
                page.properties[i].sortingHelper.safeClearSortingStatus();
            }
        }
        
        self.sortFn = function(recipe){
            if(self.sortingProperty){
                if(self.sortingProperty == "Name"){
                    return recipe.name;
                } else{
                    return recipe.properties[self.sortingProperty] || 0;
                }
            }
            return 0;
        }
        
        self.filterVal = "";
        
        self.filterFn = function(recipe){
            if(self.filterVal && recipe){
                var expression = self.filterVal;
                var rx = RegExp(expression,'i');
                
                var anyMatch = recipe.name.match(rx);
                for(var id in recipe.properties){
                    var anyMatch = anyMatch || (recipe.properties[id] ? JSON.stringify(recipe.properties[id]).match(rx) : false);
                }
                return anyMatch;
            }
            return true;
        }
    }
    
    // ---- OBJECT BOUND TO EACH HEADER DIV
    // ---- BROADCASTS STATES OF HEADERS, EVENT DELEGATE
    
    function SortingHelper(prop){
        var self = this;
        var page = $scope;
        
        self.parseSortIconCss = function(){
            if(self.sortingAsc === true){
                return "glyphicon glyphicon-arrow-up";
            } else if(self.sortingAsc === false){
                return "glyphicon glyphicon-arrow-down"
            }
            return "glyphicon glyphicon-arrow-down icon-invisible";
        }
        
        self.parseSortBackgroundCss = function(){
            if(self.sortingAsc === true || self.sortingAsc === false){
                return "th-sorting";
            }
            return "";
        }
        
        self.parentProperty = prop;
        
        self.sortingProperty = prop._id;
        self.sortingAsc = undefined;
        
        self.clicked = function(){
            if(!self.sortingAsc){
                self.sortingAsc = true;
            } else{
                self.sortingAsc = false;
            }
            
            page.sortTrack.setSortingDir(self.sortingAsc);
            page.sortTrack.setSortingProperty(self.sortingProperty);
            
            page.sortTrack.headingStateChanged();
        }
        
        //LOOK AT CENTRAL TRACKER, REMOVE SORTING STATUS IF NO MATCH
        self.safeClearSortingStatus = function(){
            if(page.sortTrack.sortingProperty != self.sortingProperty){
                self.sortingAsc = undefined;
            }
        }
    }
    
    // INIT VALUES
    $scope.sortTrack = new SortingTracker();
    $scope.nameHeader = new SortingHelper({_id: "Name"});
    
    
	//CONTENT MANIPULATION
    //  - MODAL
	
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
	
    
    // AJAX CALLS
    
    
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