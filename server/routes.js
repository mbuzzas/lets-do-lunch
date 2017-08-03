const User = require('./models/user');

module.exports = function(app) {

	app.post('/signup',function(req,res){
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

	app.post('/login',function(req,res){
	  User.findOne({email:req.body.email, password:req.body.password},function(err,data){
	  	console.log('---data---',data);
	    if(data.length){
	      res.send({status:'exists'});
	    } else {
	      res.send({status:'No User'});
	      res.redirect('/')
	    }
	  });
	  // res.send({status: "OK"});
	});

	app.get('/app', isLoggedIn, function(req, res) {
		res.send({status: 'loggedIn'})
	})

}

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
