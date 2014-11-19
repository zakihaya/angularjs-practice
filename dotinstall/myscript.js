var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', ['$scope', function($scope) {
  $scope.users = [
      {"name": "hayazaki", "score": 1},
      {"name": "hayazaki2", "score": 2},
      {"name": "hayazaki3", "score": 3},
      {"name": "hayazaki", "score": 1},
      {"name": "hayazaki2", "score": 2},
      {"name": "hayazaki3", "score": 3},
      {"name": "hayazaki", "score": 1},
      {"name": "hayazaki2", "score": 2},
      {"name": "hayazaki3", "score": 3},
    ];
  $scope.today = new Date();
}]);

myApp.controller('userItemCtrl', ['$scope', function($scope) {
  $scope.increment = function() {
    $scope.user.score += 1;
  }
}]);
