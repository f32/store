// productCtrl controller
app.controller("productCtrl", function($scope, $location, dataService, $route){



  // $scope.cancelEdit = () => $location.path("/");

  // получаем данные из модели для view
  // по id получаем данные этого продукта.
  // $scope.item = dataService.data[indexOf(document.location.href)];

  // dataService.getProduct($route.params);

  console.log($route);
  debugger

});
