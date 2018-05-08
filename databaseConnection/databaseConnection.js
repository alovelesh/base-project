const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb'
});

module.exports = connection;