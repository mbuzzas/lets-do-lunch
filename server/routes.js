const User = require('./models/user');

module.exports = function(app) {

	app.post('/signup', (req,res) => {
	  User.find({email:req.body.email},function(err,data){
	  	console.log('---data---',data);
	    if(data.length){
	      res.send({status:'exists'});
	    } else {
	      User.create(req.body,function(err,user){

	      	res.send({status: user})
	      });
	    }
	  });
	  // res.send({status: "OK"});
	});

	app.post('/login', (req,res) => {
	  User.findOne({email:req.body.email, password:req.body.password},function(err,data){
	  	console.log('---data---',data);
	    if(!err){
	      res.send({status:data});
	    } else {
	      res.send({status:'No User'});
	    }
	  });
	  // res.send({status: "OK"});
	});

	app.get('/app', isLoggedIn, (req, res) => {
		res.send({status: 'loggedIn'})
	})

	app.put('/signup/:id', (req, res) => {
		if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
			const message = (
				`Request path id (${req.params.id}) and request body id ` +
	      		`(${req.body.id}) must match`);
			console.error(message);
			res.status(400).json({message: message});
		}
		const toUpdate = {};
		const fieldsToUpdate = ['title', 'age', 'gender', 'zipcode'];
		fieldsToUpdate.forEach(field => {
			if (field in req.body) {
				toUpdate[field] = req.body[field];
			}
		});

		User
			.findByIdAndUpdate(req.params.id, {$set: toUpdate})
			.exec()
			.then(post => res.status(201).end())
			.catch(err => res.status(500).json({message: 'Internal server error'}));
	});

}

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
