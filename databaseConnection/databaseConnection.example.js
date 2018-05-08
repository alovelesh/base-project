const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: {{MY_SQL_CONNECTION_LIMIT}},
    host: '{{MYSQL_HOST}}',
    user: '{{MYSQL_USER}}',
    password: '{{MYSQL_PASSWORD}}',
    database: 'mydb'
});

module.exports = connection;