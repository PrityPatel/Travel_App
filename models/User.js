// Loading the Mongoose library
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


// // Loading Location in order to reference locations in the User Schema
// var Location = require('./Location');

// Creating Schema to define structure of 'users' in our DB
var User = new mongoose.Schema({
  name: String,
  location: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
