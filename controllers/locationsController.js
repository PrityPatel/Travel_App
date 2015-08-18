var Location = require('../models/Location');

//this will render ALL locations
var index = function(req, res, next) {
  Location
    .find({})
    .then(
      function(locations) {
        res.render(
          'locations/index',
          {
            location: locations,
            user:     req.user
        });
      }, function(err) {
        return next(err);
    });
};

//this code is currently incorrect as creating is meant to mean a user can SAVE location to their profile
var create = function(req, res){
  var newLocation = req.body.location;
  newLocation.username = req.user.name;

  Location
      .create(newLocation)
      .then(
          function(location){
            res.redirect('/locations/' + location.id);
          }, function(err) {
            return next(err);
          });
};

//this code will need to be appended as it would need to include the location id as only 1 location view will render. also users will have the option to save the location
var show = function(req, res, next) {
  Location
    .findById(req.params.id)
    .then(
      function(location) {
        res.render(
          'locations/show',
          {
            location: location,
            user:    req.user
        });
      }, function(err) {
        return next(err);
    });
};



module.exports = {
  index:  index,
  show:   show,
  create: create
};
