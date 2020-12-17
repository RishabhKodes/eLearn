var express = require('express');
var router = express.Router();


router.get('/register', function(req, res, next) {
  res.send('users/register');
});

module.exports = router;
