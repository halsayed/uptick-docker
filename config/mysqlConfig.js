var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "10.21.30.208",
   user: "root",
   password: "nutanix/4u",
   database: "uptick"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
