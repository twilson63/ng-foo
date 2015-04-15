angular.module('App')
  .controller('RegisterController', function($scope, $state) {
    $scope.register = function(user) {
      console.log(user)
      $state.go('index')
    }
  })