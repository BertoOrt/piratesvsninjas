var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bookmarks");

module.exports.Users = require('./users.js');

//
// array.forEach(function (element) {
//   this.add(Card.apply(this, element))
// }, this)
