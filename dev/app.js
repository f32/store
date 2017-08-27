


const app = angular.module('storeApp', ['ngRoute','ngStorage']);

////////////
// routing config
//////

app.config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when("/", {
    templateUrl: "views/home.html",
    controller: "homeCtrl"
  });

  $routeProvider.when("/edit", {
    templateUrl: "views/edit.html",
    controller: "editCtrl"
  });

  $routeProvider.when("/product", {
    templateUrl: "views/product.html",
    controller: "homeCtrl"
  });

  $routeProvider.otherwise({
    templateUrl: "views/home.html",
    controller: "mainCtrl"
  });
});

// export default app
// внутри одного файла может быть нессколько модулей-файлов-тупо_набор_функций.
// и мы можем их експоритровать по отдельности.
// а потом внутри контроллера импортируем его
// import app from app.js
