# NG Workshop

## Exercise 2

## index.html

``` html
<!doctype html>
<html>
  <head>
    <title>Foo</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <link rel="stylesheet" href="/custom.css">
  </head>
  <body ng-app="App">
    <ui-view></ui-view>
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="app.js"></script>
    <script src="/controllers/register.js"></script>
    <script src="/controllers/index.js"></script>
  </body>
</html>
```

## app.js

``` js
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
  })

```

## /templates/main.html

``` html
<div class="container">
  <section class="header">
    <h1>Bucket List</h1>
    <p>Store and Track your Bucket List Online</p>
    <a class="button button-primary" ui-sref="register">Register</a>
  </section>
</div>
```

## /controllers/register.js

``` js
angular.module('App')
  .controller('RegisterController', function($scope, $state) {
    $scope.register = function(user) {
      console.log(user)
      $state.go('index')
    }
  })
```
