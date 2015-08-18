var mongoose = require('mongoose'),
    async    = require('async');

mongoose.connect('mongodb://localhost:27017/travel_app');

console.log('Connected to MongoDB!', "\n");

var User = require('./models/User');
var Location = require('./models/Location');

var phil;
var jim;

// `.remove()` requires a callback function
// in that callback function, `done()` is called
// so that removeUsers returns a value.
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
  // `Promise.all` returns a promise that is fulfilled when all the items in the array are fulfilled.
  Promise.all([
    User.create({
      name: 'Phil'
    }).then(
      function(user) {
        console.log('User created: ', user.name);
        phil = user;
      },
      function(err) {
        console.log(err);
      }
    ),
    User.create({
      name: 'Jim'
    }).then(
      function(user) {
        console.log('User created: ', user.name);
        jim = user;
      },
      function(err) {
        console.log(err);
      }
    )
    // once promise fulfilled, then call `done`
  ]).then(function() {
    console.log("");
    done();
  });
};

var createLocations = function(done) {
  Promise.all([
    Location.create({
      name: "San Francisco",
      user: phil._id
    }).then(function(loc) {
      console.log("Location created: ", loc.name);
    }),
    Location.create({
      name: "New York",
      user: jim._id
    }).then(function(loc) {
      console.log("Location created: ", loc.name);
    })
  ]).then(function() {
    console.log("");
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

// ^ what async.series does above is equivalent to:
// closeMongoose(
//   testLocationsPopulation(
//     createLocations(
//       createUsers(
//         removeLocations(
//           removeUsers)
//         )
//       )
//     )
//   )


