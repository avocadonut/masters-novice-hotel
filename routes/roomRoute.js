var express = require('express')
var app = express()

app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
        conn.query("SELECT * from roomname ",function(err, rows, fields) {
			
			if (err) {
				req.flash('error', err)
				res.render('user/roomview', {
					data: ''
				})
			} else {
				
				res.render('user/roomview', {
					data: rows
				})
			}
		})
	})
})

module.exports = app;