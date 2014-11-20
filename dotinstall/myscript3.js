var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', ['$scope', function($scope) {
  $scope.addUser = function() {
    alert(1);
  }
}]);
