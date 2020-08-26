const express = require('express');
const mysql = require('mysql');

const connect = express();

connect.listen('8080', () =>{
    console.log('Server started on port 8080!');
});