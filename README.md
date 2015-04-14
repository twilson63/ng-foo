# NG Workshop

## Exercise 1

```
npm i angular-ui-router --save
```

## index.html

``` html
<!doctype html>
<html>
  <head>
    <title>Foo</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  </head>
  <body ng-app="App">
    <ui-view></ui-view> 
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angualr-ui-router/release/angular-ui-router.js"></script>
    <script src="app.js"></script>
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
  })
```

## /templates/main.html

``` html
<h1>Bucket List</h1>
<p>Store and Track your Bucket List Online</p>
<button>Register</button>
```
