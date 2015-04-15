angular.module('App')
  .controller('ShowController', function($scope, $stateParams) {
    $scope.thing = {_id: 1, title: 'FooBar', description: 'A long desc of foobar'}
  })