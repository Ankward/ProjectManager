const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

});


connection.connect((err) => {

    if(err){
        console.log("bad");
        console.log(err.message);
    }
    console.log("good");
    console.log('db ' + connection.state)
})