const mysql= require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.MYSQL_DB,
  });

  pool.getConnection(function (err, connection) {
    console.log('database connected')
  });


