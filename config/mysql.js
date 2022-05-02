let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'onlinebookdb',
    password: '12345678',
    port:3306
})
connection.connect();


module.exports = Database;