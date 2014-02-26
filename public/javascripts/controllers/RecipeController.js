var simplEventApp = angular.module('simplEventApp', []);

simplEventApp.controller('RecipeController', function($scope, $http){
    $scope.recipes = [];
    
    //done, due, description
  //  function todo(js){
  //      var self = this;
  //      angular.copy(js, self);
  //      
  //      self.setTodoState = function(){
  //          $http.post('/update', {id: self._id, done: self.done}).error(function(data){
  //              alert(data);
  //          }).success(function(data){
  //              if(data.error){
  //                  alert(data.error);
  //              }
  //          });
  //      }
  //      
  //      self.removeItem = function(){
  //          $http.post('/delete', {id: self._id})
  //          .success(function(data){
  //              if(data.todos){
  //                  $scope.setTodos(data.todos);
  //              } else if(data.error){
  //                  alert(data.error);
  //              } else{
  //                  alert('no todos found');
  //              }
  //          })
  //          .error(function(data){
  //              alert(data);
  //          });
  //      }
  //  }
  //  
  //  $scope.newTodo = new todo({
  //      done: false,
  //      due: "", //new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  //      description: ''
  //  });
  //  
  //  $scope.doneFilter = { done : true };
  //  $scope.notDoneFilter = { done : false };
  //  
      $scope.setRecipes = function(todos){
          console.log("Set Recipes");
      }
  //  
  //  $scope.addNewTodo = function(){
  //      $http.post('/create', $scope.newTodo).success(function(data){
  //          if(data.todo){
  //              $scope.todos.push(new todo(data.todo));
  //              $scope.newTodo.description = '';
  //          } else {
  //              alert(JSON.stringify(data));
  //          }
  //      });
  //  }
});