var express = require('express');
var socket = require('socket.io');
const mysql = require('mysql');
var http = require('http');
const path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plum'
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


//main.use(express.static('../index'));

main.get('/', function(req, resp) {
    resp.sendFile('index.html', {root: path.join(__dirname, '../projects')});
});

//Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    
    socket.on("GET_DATA", async function() {
        var returnVal = await dbQuery("SELECT * FROM category WHERE projectId = 545");
        returnVal = JSON.stringify(returnVal);
        returnVal = JSON.parse(returnVal);

        socket.emit("GET_DATA_RETURN", returnVal);
    });
    socket.on("GET_DATA_RAND", async function() {
        var randomNum = await dbQuery("SELECT joinCode FROM project;");
        randomNum = JSON.stringify(randomNum);
        randomNum = JSON.parse(randomNum);

        socket.emit("GET_DATA_RAND_RETURN", randomNum);
    });
    socket.on("INSERT_NEW_COLUMN", async function(name, color, id) {
        console.log(name + " " + color + " " + id);

        await dbQuery("INSERT INTO category(projectId, categoryName, color) VALUES (545, 'testaa', 'black');");
    });
    
    socket.on("INSERT_NEW_PROJECT", async function(name, desc, code) {
        await dbQuery("INSERT INTO project(projectName, description, joinCode) VALUES ('" + name + "', '" + desc + "', '"+ code +"');");
        
    });
});


/*
    socket.on("INSERT_VALUE", async function() {
        var returnVal = await dbQuery("INSERT INTO ......");
        returnVal = JSON.stringify(returnVal);

        socket.emit("INSERT_VALUE_RETURN", returnVal);
    });
*/