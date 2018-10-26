var express = require('express')
var app = express()

app.get('/', function(req, res, next){	

	res.render('user/costumer', {
		title: 'Add New Costumer',
		costumer: '',
		room_type: '',
		pax: ''		
	})
})
app.post('/add', function(req, res, next){	
	req.assert('costumer', 'Name is required').notEmpty()          
	req.assert('room_type', 'Age is required').notEmpty()            
    req.assert('pax', 'A valid email is required').isEmail() 

    var errors = req.getValidationResult()
    
    if( !errors ) {  

		var user = {
			costumer: req.sanitize('costumer').escape().trim(),
			room_type: req.sanitize('room_type').escape().trim(),
			pax: req.sanitize('pax').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO reserve SET ?', costumer, function(err, result) {
	
				if (err) {
					req.flash('error', err)
					

					res.render('user/costumer', {
						title: 'Add New User',
						costumername: costumer.costumer,
						roomtype: costumer.room_type,
						pax: costumer.pax					
					})
				} else {				
					req.flash('success', 'Data added successfully!')
					

					res.render('user/costumer', {
						title: 'Add New User',
						costumername: '',
						roomtype: '',
						pax: ''					
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

        res.render('user/costumer', { 
            title: 'Add New User',
            costumer: req.body.costumer,
            roomtype: req.body.roomtype,
            pax: req.body.pax
        })
    }
})

module.exports = app;