var express = require('express');
var router = express.Router();
var db = require('./../models');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var Error = require('./../error');
var Errors = new Error;

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  var hash = bcrypt.hashSync(password, 8);
  db.Users.create({name: name, password: hash, favorites: [], bookmarks: []}).then(function () {
    res.redirect('/');
  })
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
