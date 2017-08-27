// homeCtrl controller
app.controller("homeCtrl", function($scope, $location, dataService){

    //////////
    // routing
    //////

    $scope.goToEdit = function(){
      $location.path("/edit");
    }

    $scope.goToProduct = function(){
      $location.path("/product");
    }

    $scope.goToTable = function(){
      $location.path("/");
    }

    // EOF routing




});
