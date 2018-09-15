var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var path = require('path');
// var session = require('express-session');

var app = express();

var userRoute = require('./server/routes/userRoutes');

app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', userRoute.renderDashBoard);

module.exports = app;
