var mongoose = require('mongoose'),
    async    = require('async');

var mongoURI = 'mongodb://localhost/travel_app';
if (process.env.NODE_ENV === 'production') {
    mongoURI= process.env.MONGOLAB_URI;
}
mongoose.connect(mongoURI);

console.log('Connected to MongoDB!', "\n");

var User = require('./models/User');
var Location = require('./models/Location');

var phil;
var jim;

// `.remove()` requires a callback function; in that callback function,
// `done()` is called so that removeUsers returns a value.
var removeUsers = function(done) {
  User.remove({}, function(err) {
    if (err) console.log(err);
    console.log('Users removed...');
    done();
  });
};

var removeLocations = function(done) {
  Location.remove({}, function(err) {
    if (err) console.log(err);
    console.log('Locations removed...', "\n");
    done();
  });
};

var createUsers = function(done) {
  User.register(new User({
     name: 'Phil',
     username: 'phil@email.com'
    }), 'phil', function(err, user) {
      phil = user;
      User.register(new User(
        {
         name: 'jim',
         username: 'jim@email.com'
        }), 'jim', function(err, user) {
          jim = user
          done();
      });
  });
};

var createLocations = function(done) {
  Promise.all([
    Location.create({
      name: "London",
      instagramId: 728021537,
    }),
    Location.create({
      name: "Mumbai",
      instagramId: 523722982,
    }),
    Location.create({
      name: "New York",
      instagramId: 35932492,
      user: jim._id
    }),
    Location.create({
      name: "Paris",
      instagramId: 301343440,
    }),
    Location.create({
      name: "San Francisco",
      instagramId: 167346217,
      user: phil._id
    }),
    Location.create({
      name: "Shanghai",
      instagramId: 213193384,
    })
  ]).then(function() {
    console.log("Created locations!");
    done();
  });
};

var testLocationsPopulation = function(done) {
  console.log("'It's always good to test...' — Mama");

  console.log('  1. Testing all locations populated with their user.');
  Location.find({})
          .populate('User')
          .exec(function(err, locations) {
            if (err) console.log(err);
            console.log("\n  ", locations, "\n");
            done();
          });
};

var closeMongoose = function(done) {
  console.log('Closing mongoose.')
  mongoose.disconnect();
  done();
};

// calls each of the functions inside the array "in order"
async.series([
  removeUsers,
  removeLocations,
  createUsers,
  createLocations,
  testLocationsPopulation,
  closeMongoose
]);



