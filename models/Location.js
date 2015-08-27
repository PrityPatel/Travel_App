// Require lodash for _.snakeCase method
var _ = require('lodash');

// Loading Mongoose as our ORM for MongoDB
var mongoose = require('mongoose');

// Creating Schema to define structure of 'locations' in our DB
var LocationSchema = new mongoose.Schema({
  name:        String,
  instagramId: String,
  currencyId:   String,
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});


LocationSchema.methods.uriName = function() {
  return encodeURIComponent(this.name);
};

LocationSchema.methods.snakeName = function() {
  return _.snakeCase(this.name);
};

// Creating Location model that maps to LocationSchema
var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
