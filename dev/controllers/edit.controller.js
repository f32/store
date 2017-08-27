// editCtrl controller
app.controller("editCtrl", function($scope, $location, dataService, $route){


    $scope.cancelEdit = () => $location.path("/");
              // когда проверка routecurrent params...
    if ($route.current.params.id) {
      $scope.currentItem = dataService.getProduct($route.current.params.id);
    } else {
      $scope.currentItem = "";
    }




    $scope.saveEdit = function(item){
      if (angular.isDefined(item.id)){
        $scope.update(item);
      } else {
        $scope.create(item);
      }
    }


    $scope.update = (item) => {
      dataService.data.forEach(function(elem, index){
      	if (elem.id === item.id){
      		dataService.data.splice(index, 1, item);
      		// ^^ выбыраем место для работы, сколько удаляем, и тыкаем туда новый объект,
      		//который мы уже сами и сможем править.
      		// обновляем LS:
      		dataService.updateStorage(dataService.data);
      	}
      });
      $location.path("/");
    };


    $scope.create = function(item){
      $scope.currentItem.id = new Date().getTime().toString();



      // if ($route.current.params.id) {
      //   $scope.currentItem = getProduct[$route.current.params.id];
      // }

      // let newId = 0;
      // dataService.data.forEach(function(elem, index){
      //   if (newId < elem.id) {
      //     newId = elem.id;
      //   }
      // });
      // item.id = ++newId;

      // просто создаем id перед отправкой для товара нового.


      // пишем метод в сервисе для добавления продукта в localstorage и в базу-клон.
      // он работает с моделью сам, в контроллере мы это не делаем.


      // !! переписать эти методы в сервисе. Сервис работает с моделью.
      dataService.data.push(item); // переписать эти.
      dataService.updateStorage(dataService.data); // методы на другие.
      $location.path("/");
    }





    // что вызывается на change для input-a. доставет из инпута.
    $scope.getImage = function (elem, callback) {
        var reader = new FileReader();
        if( $scope.fileIsImage(elem.files[0].type) ){
            reader.onload = callback;
            reader.readAsDataURL(elem.files[0]); // только здесь запустится ридер файла.
        }
        else {
            angular.element(elem).val(null);
        }
    };

    $scope.fileIsImage = function (file) {
        var types = [ 'image/png', 'image/jpeg'/*, 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml'*/ ];

        return types.some(function (type) {
            return file.indexOf(type) !== -1;
        })
    };

    // это callback на файл ридере. коллбек вызывается, когда ридер переварит весь файл.
      // просто передаем результат
    $scope.imageIsLoaded = function (e) {
        $scope.$apply(function () {
            $scope.currentItem.image = e.target.result;
        });
        angular.element(document.querySelector('#edit_avatar')).val(null);
    };

    // Валидацию для картинок. формат уже есть.

    // debugger;
}); // EOF homeCtrl
