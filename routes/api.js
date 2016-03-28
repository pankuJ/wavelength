var config = require('../config');
var userDetails = require('../app/models/users')
var secretKey = config.secretKey;

module.exports = function(app,express){

	var api = express.Router();

  // Get request for getting data from database

  api.get('/users', function(req,res){

    userDetails.find({},'email matchingPeople', function (err, person) {
      if(err){

        throw err;
      }
      res.json(person);
          
    });    

  });         



  // Getting single document as by id
  api.get('/users/:_id', function(req,res){
    userDetails.findById(req.params._id,function(err,user){
      if(err){
        throw err;
      }
      res.json(user);
    });

  });


  
  api.post('/wavelength',function(req,res){
    var wavelength = new wavelength({
      email: req.body.email,
      photo: req.body.photo,
    	gender:req.body.gender,
    	score: req.body.score,
   		age:req.body.age,
   		status:req.body.status,
   	 	location: req.body.location,
    	keyword1: req.body.keyword1,
    	keyword2: req.body.keyword2,
    	keyword3: req.body.keyword3,
    	matchingPeople:req.body.matchingPeople

	  });
    userDetails.save(function(err){

      if(err) {
        res.send(err);
        return;
      }
      res.json({message : "Data is inserted!!"});
    });	

  });





	
	
	

    


    


    

    



	return api
}