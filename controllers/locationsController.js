// Source in Location model
var Location = require('../models/Location');
var async = require('async');

// Source in http request methods for the Instagram API
var instagram = require('../api/instagram');

// Renders the locations index page
var index = function(req, res, next) {

  // Location
  //   .find({}})
  //   .populate('user')
  //   .exec(function (err, locations) {
  //     if (err) res.send(err);
  //     console.log('The locations user is: ' + location.user.name);
  //     res.render('locations/index', locations);

  //   });


    res.render('locations/index', { user: req.user, });
};

// Saves a location to the user's list of favorite locations
var create = function(req, res){

  console.log('what is req.params?' + typeof req.params);
  console.log('what is req.params constructor?' + req.params.constructor);

  for (var key in req.params) {
    console.log('req.params key:  ' + key);
  };

  console.log('Location id from params: ' + req.params.id);
  console.log('Location name from form: ' + req.body.name);
  console.log('Location user from session: ' + req.user.name);

  var location = new Location(
    {
      _id: req.params.id,
      name: req.body.name,
      user: req.user.id
    });

  var saveLocation = function(done) {
    location.save(function(err) {
      if (err) console.log(err);
      console.log('Location saved');
      done();
    });
  };

  var findLocation = function(done) {
    Location.findById(req.params.id, function(err) {
      if (err) console.log(err);
      console.log('Location found');
    })
    .populate('user')
    .exec(function(err, location){
      if (err) console.log(err);
      console.log('location in exec method: ' + location);
      done();
    })
  };

  async.series([
    saveLocation,
    findLocation
  ]);

    // .save(function(error) {
    //   // If there's an error saving the location, flash a message to the user.
    //   if (error)
    //     console.log(error)
    //     // req.flash('info', "We're Sorry, there was an error saving this location. Please try again.");

    //   // If location was successfully saved,
    //   //  flash a message to the user and redirect user to the location's show page
    //   console.log(location.name + ' added to ' + req.user.name + '\'s list of locations.')

    //   Location
    //     .findById(req.params.id)
    //     .populate('user')
    //     .exec(function (err, location) {
    //       if (err) res.send(err);
    //       // console.log('This is location in .exec method: ' + location.user);
    //     // req.flash('info', location.name + ' has been saved to your list of favorite locations!');
    //       res.redirect('/locations');
    //     });
    //   });
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
