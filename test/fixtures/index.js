angular.module('App')
  .controller('IndexController', function($scope) {
    $scope.bucketList = [{_id: 1, title: 'FooBar', description: 'A long desc of foobar'}]
  })