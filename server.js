require('dotenv').config();
const pool = require ('./server/config/database')
const express = require('express');
const userRouter = require('./server/api/users/user.router')
const cors = require('cors');
const app = express();
const PORT= process.env.port;
 
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/users', userRouter)
// app.use('/api/users', userRouter)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(PORT,()=>console.log(`listening at http://localhost: ${PORT}`))