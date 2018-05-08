const mysql = require("mysql")

var tableArray = require("./queryForNewTable")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected")
    con.query("CREATE DATABASE IF NOT EXISTS mydb", function(err, result) {
        if (err) throw err;
        con.query('USE mydb', function(err) {
            if (err) throw err;
            for (var q of tableArray) {
                con.query(q, function(err) {
                    if (err) throw err;
                });
            }
        });
    })
});