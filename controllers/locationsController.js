var Location = require('../models/Location');

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

var show = function(req, res, next) {
  Location
    .findById(req.params.id)
    .then(
      function(location) {
        res.render(
          'location/show',
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
  show:   show
};
