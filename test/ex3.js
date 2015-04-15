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


test('templates/index.html should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/templates-index.html', 'utf-8')
  var appjs = fs.readFileSync('./templates/index.html', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})

test('add.js should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/add.js', 'utf-8')
  var appjs = fs.readFileSync('./controllers/add.js', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})

test('show.js should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/show.js', 'utf-8')
  var appjs = fs.readFileSync('./controllers/show.js', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})

test('index.js should equal fixture', function(t) {
  var appjs_fixture = fs.readFileSync(__dirname + '/fixtures/index.js', 'utf-8')
  var appjs = fs.readFileSync('./controllers/index.js', 'utf-8')
  t.equals(appjs, appjs_fixture)
  t.end()
})