/*jshint esversion: 8 */

const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

});


connection.connect((err) => {

    if (err) {
        console.log(err.message);
    }
    //console.log('db ' + connection.state)
});

class dbConnect {
    static getDbServiceInsance() {
        return instance ? instance : new dbConnect();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM test;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });

            });
            
            return response;

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = dbConnect;