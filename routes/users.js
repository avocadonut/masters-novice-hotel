var express = require('express')
var app = express()


app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM roomindex ORDER BY id DESC',function(err, rows, fields) {
			
			if (err) {
				req.flash('error', err)
				res.render('user/list', {
					title: 'User List', 
					data: ''
				})
			} else {
				
				res.render('user/list', {
					title: 'User List', 
					data: rows
				})
			}
		})
	})
})


app.get('/add', function(req, res, next){	
	
	res.render('user/add', {
		title: 'Add New User',
		name: '',
		pax: '',
		roomtype: '',
		roomnumber: '',
		status: 'Unavailable'
	})
})


app.post('/add', function(req, res, next){	
	req.assert('name', 'Name is required').notEmpty()           
	req.assert('pax', 'Pax is required').notEmpty()             
	req.assert('roomtype', 'Room Type is required').notEmpty()
	req.assert('roomnumber', 'Room Number is required').notEmpty() 


    var errors = req.validationErrors()
    
    if( !errors ) {   

		var user = {
			name: req.sanitize('name').escape().trim(),
			pax: req.sanitize('pax').escape().trim(),
			roomtype: req.sanitize('roomtype').escape().trim(),
			roomnumber: req.sanitize('roomnumber').escape().trim()

		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO roomindex SET ?', user, function(err, result) {
				
				if (err) {
					req.flash('error', err)
					
					
					res.render('user/add', {
						title: 'Add New User',
						name: user.name,
						pax: user.pax,
						roomtype: user.roomtype,
						roomnumber: user.roomnumber,
						status: user.status,				
					})
				} else {				
					req.flash('success', 'Data added successfully!')
					
					
					res.render('user/add', {
						title: 'Add New User',
						name: '',
						pax: '',
						roomtype: '',
						roomnumber: '',
						status: 'Unavailable'					
					})
				}
			})
		})
	}
	else {   
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})				
		req.flash('error', error_msg)		
		
		
        res.render('user/add', { 
            title: 'Add New User',
			name: '',
			pax: '',
			roomtype: '',
			roomnumber: '',
			status: 'Unavailable'
        })
    }
})


app.get('/edit/(:id)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM roomindex WHERE id = ' + req.params.id, function(err, rows, fields) {
			if(err) throw err
			
			
			if (rows.length <= 0) {
				req.flash('error', 'User not found with id = ' + req.params.id)
				res.redirect('/users')
			}
			else { 
				res.render('user/edit', {
					title: 'Edit User', 
					
					id: rows[0].id,
					name: rows[0].name,
					pax: rows[0].pax,
					roomtype: rows[0].roomtype,
					roomnumber: rows[0].roomnumber,
					status: rows[0].status					
				})
			}			
		})
	})
})
 function getComboA(roomtype) {
	var value = roomtype.value;  
}


app.put('/edit/(:id)', function(req, res, next) {
	req.assert('name', 'Name is required').notEmpty()           
	req.assert('pax', 'Pax is required').notEmpty()             
	req.assert('roomtype', '').notEmpty()  
	req.assert('roomnumber', '').notEmpty()	

    var errors = req.validationErrors()
    
    if( !errors ) {   
		
		
		var user = {
			name: req.sanitize('name').escape().trim(),
			pax: req.sanitize('pax').escape().trim(),
			roomtype: req.sanitize('roomtype').escape().trim(),
			roomnumber: req.sanitize('roomnumber').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('UPDATE roomindex SET ? WHERE id = ' + req.params.id, user, function(err, result) {
				
				if (err) {
					req.flash('error', err)
					
					
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						name: req.params.name,
						pax: req.body.pax,
						roomtype: req.body.roomtype,
						roomnumber: req.body.roomnumber
					})
				} else {
					req.flash('success', 'Data updated successfully!')
					
					
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						name: req.params.name,
						pax: req.body.pax,
						roomtype: req.body.roomtype,
						roomnumber: req.body.roomnumber
					})
				}
			})
		})
	}
	else {   
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})
		req.flash('error', error_msg)
		
		
        res.render('user/edit', { 
            title: 'Edit User',            
			id: req.params.id,
			name: req.params.name,
			pax: req.body.pax,
			roomtype: req.body.roomtype,
			roomnumber: req.body.roomnumber
        })
    }
})


app.delete('/delete/(:id)', function(req, res, next) {
	var user = { id: req.params.id }
	
	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM users WHERE id = ' + req.params.id, user, function(err, result) {
			
			if (err) {
				req.flash('error', err)
				
				res.redirect('/users')
			} else {
				req.flash('success', 'User deleted successfully! id = ' + req.params.id)
				
				res.redirect('/users')
			}
		})
	})
})

module.exports = app
