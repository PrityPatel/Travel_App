// Loading the Mongoose library
var mongoose = require('mongoose');
var Location = require('./Location');

// Calling Location in order to embed locations in the User Schema
// var Location = mongoose.model('Location');

// Creating Schema to define structure of 'users' in our DB
var UserSchema = new mongoose.Schema({
  name:     String,
  email:    String,
  password: String,
  locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}]
});

// Creating User model that maps to UserSchema
var User = mongoose.model('User', UserSchema);

module.exports = User;
