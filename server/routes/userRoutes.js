
var mysqlConnection = require('../config/connection');
var connection = mysqlConnection.connection;

var renderDashBoard = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

module.exports.renderDashBoard = renderDashBoard;