var express = require('express');

// Modules for body parse and sesion store
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var mongoose = require('mongoose');
require('./models/users_model.js');
var conn = mongoose.connect('mongodb://localhost/myapp'); // n/a
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser());
app.use(cookieParser());
app.use(expressSession({
  secret: 'SECRET',
  saveUninitialized: true,
  resave: true,
  cookie: {maxAge: 60*60*1000},
  store: new mongoStore({
    db: conn.connection.db,
    collection: 'sessions'
  })
}));

require('./routes')(app);
app.listen(8080);
