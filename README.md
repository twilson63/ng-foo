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
    <script src="/controllers/add.js"></script>
    <script src="/controllers/show.js"></script>

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

```

## /templates/index.html

``` html
<div class="container">
  <a class="button button-primary u-pull-right" ui-sref="add">Add</a>
  <h2>My Bucket List</h2>
  <div class="row" ng-repeat="thing in bucketList">
    <div class="six columns offset-by-two">
      <h3><a ui-sref="show({ id: thing._id })">{{thing.title}}</a></h3>
      <p>{{thing.description}}</p>
    </div>
  </div>
</div>
```

## /controllers/index.js

``` js
angular.module('App')
  .controller('IndexController', function($scope) {
    $scope.bucketList = [{_id: 1, title: 'FooBar', description: 'A long desc of foobar'}]
  })
```

## /templates/add.html

``` html
<div class="container">
  <h2>Add</h2>
  <form ng-submit="add(thing)">
    <fieldset>
      <label>Title</label>
      <input class="u-full-width" type="text" ng-model="thing.title">
    </fieldset>
    <fieldset>
      <label>Description</label>
      <textarea class="u-full-width" ng-model="thing.description"></textarea>
    </fieldset>
    <button class="button-primary u-pull-right">Add to BucketList</button>
    <a class="button u-pull-right" ui-sref="index">Cancel</a>
  </form>
</div>
```

## /controllers/add.js

``` js
angular.module('App')
  .controller('AddController', function($scope, $state) {
    
  })
```


## /templates/show.html

``` html
<div class="container">
  <h2>{{thing.title}}</h2>
  <p>{{thing.description}}</p>
  <a class="button" ui-sref="edit({ id: thing._id })">Edit</a>
  <button class="button button-primary" ng-click="complete(thing)">Completed</button>
  <a class="button" ui-sref="index">Back to the List</a>
</div>                                      
```

## /controllers/show.js

``` js
angular.module('App')
  .controller('ShowController', function($scope, $stateParams) {
    $scope.thing = {_id: 1, title: 'FooBar', description: 'A long desc of foobar'}
  })
```

