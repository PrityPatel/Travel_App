// Loading the Mongoose library
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// Creating Schema to define structure of 'users' in our DB
var UserSchema = new mongoose.Schema({
  name: String,
  location: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
