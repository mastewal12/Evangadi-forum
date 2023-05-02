require('dotenv').config();
const pool = require ('./server/config/database')
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT= process.env.port;

 
app.use(cors()); //middle ware
app.use(express.urlencoded({extended: true}));
app.use(express.json());





app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>console.log(`listening at http://localhost: ${PORT}`))