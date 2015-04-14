angular.module('App', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/templates/main.html'
      })
  })
