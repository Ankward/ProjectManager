var express = require('express');
var socket = require('socket.io');
const mysql = require('mysql');
var http = require('http');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manager'
});

//Connect
db.connect((err) =>{
    if(err){
        throw err;
    } else {
        console.log('MySQL connected...');
    }
});

function getInfo(req, res){
    let sql = 'SELECT * FROM test';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.send();
    });
}

var main = express();

var server = main.listen(3000);

main.use(express.static('index'));

//Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

});