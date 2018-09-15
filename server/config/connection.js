var mysql = require('mysql');


var config = {
    host: '13.127.41.224',  // your host
    user: 'root', // your database user
    password: 'FabrixHill#124', // your database password
    database: 'fabrixappdb',
    connectionLimit: 5000
 };
 var connection = mysql.createConnection(config);
 
 module.exports = {
     config : config,
     connection : connection
 };
 