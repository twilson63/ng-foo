var test = require('tap').test
var fs = require('fs')

test('app.js should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/app.js', 'utf-8')
  var appjs = fs.readFileSync('./app.js', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})

test('index.html should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/index.html', 'utf-8')
  var appjs = fs.readFileSync('./index.html', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})

test('main.html should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/main.html', 'utf-8')
  var appjs = fs.readFileSync('./templates/main.html', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})
