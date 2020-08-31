/*jshint esversion: 8 */

const express = require('express');
const connector = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = require('./dbConnect');

connector.use(cors());
connector.use(express.json());
connector.use(express.urlencoded({
    extended: false
}));


//create
connector.post('/insert', (request, response) => {

});

//read

connector.get('/getAll', (request, response) => {
    const db = dbConnect.getDbServiceInsance();

    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});



//update

//delete

connector.listen(process.env.PORT, () => console.log("App is running"));