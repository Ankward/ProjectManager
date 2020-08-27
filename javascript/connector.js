var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "manager"
});

var sql = "SELECT namn FROM test";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("SELECT namn FROM test", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        
    });
});