"use strict"

var mysql      = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'players',
    user     : 'root',
    password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM playerinfo', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();






// var mysql = require('mysql');

// var con = mysql.createConnection({
// 	"host": "localhost",
// 	"user": "root"
// });

// con.connect(function(err) {
// 	if(err) {
// 		throw err;
// 	} else {
// 		console.log("Connected!");


		// var sql = "show databases;";
		// con.query(sql, function (err, result) {
		// 	if (err) throw err;
			
		// 	for(key in result) {
		// 		console.log("Result", result[key]);
		// 	}

		// });


// 	}
// });