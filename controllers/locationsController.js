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


var show = function(req, res, next) {
  var instagramData;
  instagram.get(req.params.id, function(stringdata){
    instagramData = JSON.parse(stringdata);
    console.log('instagramData: ' + instagramData)
    instagramData = instagramData.data.map(function(post){
      return post.images.standard_resolution.url
    });
    console.log('instagramData mapped: ' + instagramData);
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
