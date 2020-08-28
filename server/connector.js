const express = require('express');
const connector = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbconnect = require('./dbconnect');

connector.use(cors());
connector.use(express.json());
connector.use(express.urlencoded({ extended : false }));


//create
connector.post('/insert', (request, response) => {

});

//read

connector.get('/getAll', (request, response) => {
    response.json({
        success: true
    });
});



//update

//delete

connector.listen(process.env.PORT, () => console.log("App is running"));