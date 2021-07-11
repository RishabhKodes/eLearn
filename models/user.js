var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Instructor = require('../models/instructor');
var Student = require('../models/student');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password:{
		type:String,
		bcrypt: true
	},
	type:{
		type:String
	}
	
});

var User = module.exports = mongoose.model('User', UserSchema);

// Get User By Id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

// Get User by Username
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

// Compare password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

// Create Student User
module.exports.saveStudent = function(newUser, newStudent, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;

		User.insertMany(newUser, (err)=>{
			if(err) throw err;
			console.log('User added!');
			Student.insertMany(newStudent, (err)=>{
				if(err) throw err;
				console.log('Student added!');
			});

		})
	});
}

// Create Instructor User
module.exports.saveInstructor = function(newUser, newInstructor, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		User.insertMany(newUser, (err)=>{
			if(err) throw err;
			console.log('User added!');
			Instructor.insertMany(newInstructor, (err)=>{
				if(err) throw err;
				console.log('Instructor added!');
			});

		})
	});
}
