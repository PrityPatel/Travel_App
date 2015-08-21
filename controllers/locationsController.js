// Source in Location model
var Location = require('../models/Location');

// Source in http request methods for the Instagram API
var instagram = require('../api/instagram');
var numbeo = require('../api/numbeo');

// Renders the locations index page
var index = function(req, res, next) {

    res.render('locations/index', { user: req.user, });
};

// Saves a location to the user's list of favorite locations
var create = function(req, res){

  // create a new Location instance
  var location = new Location(
    {
      name: req.body.name,
      user: req.user.id
    });

  // save `location` to the database
  var saveLocation = function(done) {
    location.save(function(err) {
      if (err) console.log(err);
      console.log('Location saved');
      done();
    });
  };

  // redirect user to the user's profile page
  res.redirect('/users/' + req.user.id);

};

// Shows a location's most popular instagram photos
var show = function(req, res, next) {
  //get instagram data
  var instagramData;
  instagram.get(req.params.id, function(stringdata){
    instagramData = JSON.parse(stringdata);
    instagramData = instagramData.data.map(function(post){
      return post.images.standard_resolution.url;
    });

    console.log('Array of Instagram Photo URLs: ' + instagramData);

//get numbeo data of average prices for certain items per city
  var numbeoData, locationName;

  if (req.params.id == "728021537") locationName = "London";
  if (req.params.id == "523722982") locationName = "Mumbai";
  if (req.params.id == "35932492") locationName = "Manhattan";
  if (req.params.id == "301343440") locationName = "Paris";
  if (req.params.id == "167346217") locationName = "San+Francisco";
  if (req.params.id == "213193384") locationName = "Shanghai";

  numbeo.get(locationName, function(stringdata){
    // first turn JSON into an object, then
    // get the `prices` array inside it and assign it to var `numbeoData`
    numbeoData = JSON.parse(stringdata).prices;
    // turn numbeoData into an array of objects with 'name' and 'price' as key names
    numbeoData = numbeoData.map(function(item) {
      return {name: item.item_name, price: item.average_price};
    });

    numbeoData.forEach(function(pricegroup) {
      console.log('Item: ' + pricegroup.name + ' price:' + pricegroup.price);
    });

    Location.findById(req.params.id, function(location) {
      res.render('locations/show',
        {
          location: locationName,
          user:    req.user,
          instagramData: instagramData,
          numbeoData: numbeoData
        });
      });
    });
  });

};

module.exports = {
  index:  index,
  show:   show,
  create: create
};
