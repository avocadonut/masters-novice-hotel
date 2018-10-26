var express = require('express')
var app = express()


// //costumer active
// app.get('/', function(req, res, next) {
// 	req.getConnection(function(error, conn) {
// 		conn.query("SELECT * from roomname ;",function(err, rows, fields) {
			
// 			if (err) { 
// 				req.flash('error', err)
// 				res.render('/', {
// 					title: 'User List', 
// 					data: ''
// 				})
// 			} else {
				
// 				res.render('/', {
// 					title: 'User List', 
// 					data: rows
// 				})
// 			}
// 		})
// 	})
// })

module.exports = app