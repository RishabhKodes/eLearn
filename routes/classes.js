var express = require('express');
var router = express.Router();

var Class = require('../models/class');

//get all the classes details
router.get('/', function(req, res, next) {
  Class.getClasses(function(err, classes){
      if(err) throw err;
      res.render('classes/index', { classes: classes });
  },3);
});

//get particular class details
router.get('/:id/details', function(req, res, next) {
    Class.getClassById([req.params.id],function(err, classname){
        if(err) throw err;
        res.render('classes/details', { class: classname });
    });
  });

module.exports = router;
