// Loading Mongoose as the ORM for MongoDB
var mongoose = require('mongoose');

// Load passport-local-mongoose for hashing passwords
var passportLocalMongoose = require('passport-local-mongoose');

// Creating Schema to define structure of 'users' in our DB
var UserSchema = new mongoose.Schema({
  name: String,
  location: [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
