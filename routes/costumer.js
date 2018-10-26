var express = require('express')
var app = express()


//logs 
app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query("SELECT * FROM roomindex ORDER BY date DESC  ",function(err, rows, fields) {
			
			if (err) {
				req.flash('error', err)
				res.render('user/costumer', {
					title: 'User List', 
					data: ''
				})
			} else {
				
				res.render('user/costumer', {
					title: 'User List', 
					data: rows
				})
			}
		})
	})
})


module.exports = app;