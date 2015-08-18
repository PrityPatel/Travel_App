var Location = require('../models/Location');
var instagram = require('../api/instagram');

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
  var instagramData;
  instagram.get(req.params.id, function(data){
    instagramData = data;
      console.log(instagramData);


    Location.findById(req.params.id, function(location) {
          res.render('locations/show',
            {
              location: location,
              user:    req.user,
              instagramData: instagramData
            });
    });
  });
};



module.exports = {
  index:  index,
  show:   show,
  create: create
};
