
// это должен быть как бы переход по ссылке на руотинге. подставлять id для ссылки вида product/id33/
// представим, что в ... короче, по ссылке нужно парсить првильно данные и выводить их ровно.
// get data и кинуть айдишник в сервис дата аргумент.

app.controller('homeCtrl', function($scope, $location, dataService){


      //////////
      // routing
      //////

      $scope.goToEdit = function(){
        $location.path("/edit");
      }

      $scope.goToProduct = function(){
        $location.path("/product");
      }

      $scope.goToHome = function(){
        $location.path("/");
      }

      // EOF routing


    // permanent data-clone:
    $scope.items = dataService.data;

    { // console.log(localStorage);
      // console.log("Здесь будет вывод клона из сервиса: ");
      // $scope.msg = dataService.data;
      // console.log($scope.msg);
      // console.dirxml($scope.msg);
      // console.log("eof $scope.msg");
    }

    $scope.showProduct = (item) => {
      $scope.currentItem = item ? angular.copy(item) : {};
      $scope.goToProduct();
    };



    $scope.delete = (item) => {
      dataService.data.forEach(function(elem, index){
        if (elem.id === item.id) {
          dataService.data.splice(dataService.data.indexOf(elem), 1);
          dataService.updateStorage(dataService.data);
        }
      });
    };


    $scope.edit = (item) => {
      $scope.currentItem = item ? angular.copy(item) : {};
      $location.path("/edit");
    };

    $scope.push = () => {

    };

});
