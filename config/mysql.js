let mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306, 
    user: "root",
    password: "12345678",
    database: "onlinebookdb"

})


class Database {
    constructor(){
        this.connect = mysql.createConnection(connection);
    }
}


module.exports = Database;