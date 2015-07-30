var express = require('express');
var router = express.Router();
var db = require('./../models')
var bcrypt = require('bcryptjs')

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
