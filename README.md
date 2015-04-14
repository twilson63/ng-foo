# NG Workshop

## Setup

```
npm install
```

`` html
<!doctype html>
<html>
  <head>
    <title>Foo</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  </head>
  <body ng-app="App">
    <div ng-init="foo='bar'"></div>
    <h1>{{foo}}</h1>
    <script src="node_modules/angular/angular.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

`` js
angular.module('App', [])
``
`
