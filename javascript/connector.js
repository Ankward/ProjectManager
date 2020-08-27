var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "manager"
});

var sql = "SELECT test";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});