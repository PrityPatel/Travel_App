var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel_app');

console.log('Connected to MongoDB');

var User = require('./models/User');
var Location = require('./models/Location');

var phil = new User({
  name: 'Phil'
});

var jim = new User({
  name: 'Jim'
});

phil.save();
jim.save();

var sanFran = new Location({
  name: "San Francisco",
  user: phil._id
});

var newYork = new Location({
  name: "New York",
  user: jim._id
});

sanFran.save(function(error) {
  if (!error) {
    Location.find({})
            .populate('user')
            .exec(function(error, locations) {
              console.log(JSON.stringify(locations, null, '/t'))
            })
  }
});

newYork.save(function(error) {
  if (!error) {
    Location.find({})
            .populate('user')
            .exec(function(error, locations) {
              console.log(JSON.stringify(locations, null, ' '))
            })
  }
});


