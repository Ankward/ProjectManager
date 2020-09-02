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


async function dbQuery(sql){
    let promise = new Promise(data => {
        db.query(sql, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {

                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });

    return promise = await promise;

}

var main = express();

var server = main.listen(3000);

main.use(express.static('index'));

//Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    
    socket.on("GET_DATA", async function() {
        var returnVal = await dbQuery("SELECT * FROM test");
        returnVal = JSON.stringify(returnVal);

        socket.emit("GET_DATA_RETURN", returnVal);
    })
});
