// Loading the Mongoose library
var mongoose = require('mongoose');

// Calling Location in order to embed locations in the User Schema
var Location = mongoose.model('Location');

// Creating Schema to define structure of 'users' in our DB
var User = new mongoose.Schema({
  name:     String,
  email:    String,
  password: String,
  locations: [Location.schema]
});

// Creating User model that maps to UserSchema
var User = mongoose.model('User', UserSchema);

module.exports = User;
