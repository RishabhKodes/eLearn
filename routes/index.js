var express = require('express');
var router = express.Router();

var Class = require('../models/class');


router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('index', { classes: classes });
	},3);
});

module.exports = router;
