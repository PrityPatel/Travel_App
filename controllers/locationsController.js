var Location = require('../models/Location');
var instagram = require('../api/instagram');
var numbeo = require('../api/numbeo');

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
  //get instagram data
  var instagramData;
  instagram.get(req.params.id, function(stringdata){
    instagramData = JSON.parse(stringdata);
    console.log('instagramData: ' + instagramData);
    instagramData = instagramData.data.map(function(post){
      return post.images.standard_resolution.url;
    });
    console.log('instagramData mapped: ' + instagramData);

//get numbeo data
  var numbeoData, locationName;
  if (req.params.id == "728021537") locationName = "London";
  if (req.params.id == "523722982") locationName = "Mumbai";
  if (req.params.id == "35932492") locationName = "New+York";
  if (req.params.id == "301343440") locationName = "Paris";
  if (req.params.id == "167346217") locationName = "San+Francisco";
  if (req.params.id == "213193384") locationName = "Shanghai";
  numbeo.get(locationName, function(stringdata){
    numbeoData = JSON.parse(stringdata);

    numbeoData.prices.forEach(function(post){
      console.log('item name: ' + post.item_name + ' average price: ' + post.average_price);

    });

    console.log('numbeoData: ' + numbeoData);
  });


    Location.findById(req.params.id, function(location) {
          res.render('locations/show',
            {
              location: location,
              user:    req.user,
              instagramData: instagramData,
              numbeoData: numbeoData
            });
    });
  });
};



module.exports = {
  index:  index,
  show:   show,
  create: create
};
