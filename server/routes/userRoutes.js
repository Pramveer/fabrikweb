
let mysqlConnection = require('../config/connection');
let connection = mysqlConnection.connection;

let renderDashBoard = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

module.exports.renderDashBoard = renderDashBoard;