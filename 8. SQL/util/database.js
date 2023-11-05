const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'host-name',
    user: 'user-name',
    database: 'db-name',
    password: 'password'
});

module.exports = pool.promise();