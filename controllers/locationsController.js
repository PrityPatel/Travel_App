// Source in Location model
var Location = require('../models/Location');

// Source in http request methods for the Instagram API
var instagram = require('../api/instagram');

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
  var instagramData;

  instagram.get(req.params.id, function(stringdata){
    instagramData = JSON.parse(stringdata);
    instagramData = instagramData.data.map(function(post){
      return post.images.standard_resolution.url;
    });

    console.log('Instagram photo URIs: ' + instagramData);

    Location.findById(req.params.id, function(location) {
      res.render('locations/show',
        {
          location: location,
          user:    req.user,
          instagramData: instagramData
        }
      );
    });
  });
};

module.exports = {
  index:  index,
  show:   show,
  create: create
};
