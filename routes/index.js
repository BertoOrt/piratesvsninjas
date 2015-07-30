var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/', function(req, res, next) {
  console.log(res.locals);
  var username = req.session.username;
  res.render('index', {username: username});
});

module.exports = router;
