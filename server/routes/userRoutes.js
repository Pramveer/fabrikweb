
var mysqlConnection = require('../config/connection');
var connection = mysqlConnection.connection;

var renderDashBoard = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

var renderProduct = (req, res, next) => {
    res.render('product', { title: 'Express' });
};

var renderSignin = (req, res, next) => {
    res.render('signin', { title: 'Express' });
};

var renderSignUp = (req, res, next) => {
    res.render('signup', { title: 'Express' });
};

var renderItem = (req, res, next) => {
    res.render('cart', { title: 'Express' });
};


module.exports.renderDashBoard = renderDashBoard;
module.exports.renderProduct = renderProduct;
module.exports.renderSignin = renderSignin;
module.exports.renderSignUp = renderSignUp;
module.exports.renderItem = renderItem;