angular.module('App', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/templates/main.html'
      })
      .state('register', {
        url: '/register', 
        templateUrl: '/templates/register.html',
        controller: 'RegisterController'
      })
      .state('index', {
        url: '/index',
        templateUrl: '/templates/index.html',
        controller: 'IndexController'
      })
      .state('add', {
        url: '/add',
        templateUrl:'/templates/add.html',
        controller: 'AddController'
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: '/templates/show.html',
        controller: 'ShowController'
      })
  })
