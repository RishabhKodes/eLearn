var express = require('express');
var router = express.Router();

var Class = require('../models/class');

const course1 = {"title" : "Course Name",
"description" : "Course Decription",
"instructor" : "Richard Feynman"
}

const course2 = {"title" : "Course Name 2",
"description" : "Course Decription 2",
"instructor" : "HC Verma"
}

module.exports.initMongo = function(callback){
        Class.insertMany([course1, course2], callback);
        Class.ensureIndexes({title: 1}, {unique: true, dropDups: true});
}