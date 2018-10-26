var express = require('express')
var app = express()

app.get('/', function(req, res) {
	
	res.render('index', {title: 'My Node.js Application'})
})



//costumer active
app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query("SELECT * from roomname where status='active';",function(err, rows, fields) {
			
			if (err) { 
				req.flash('error', err)
				res.render('/', {
					title: 'User List', 
					data: ''
				})
			} else {
				
				res.render('/', {
					title: 'User List', 
					data: rows
				})
			}
		})
	})
})



module.exports = app;
