const http = require('http');
const mysql = require('mysql');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    
});

server.listen(3000);

console.log("Listening on port 3000...");


/*
const mysql = require('mysql');



// Create connection
const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: "",
    database: "manager"
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("MySql Connected...");
});


const connect = express();

connect.listen('8080', () => {
    console.log('Server Started on port 8080');
}) 
*/
