var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/travel_app');

console.log('Connected to MongoDB!', "\n");

var User = require('./models/User');
var Location = require('./models/Location');

var phil;
var jim;

User.remove({}, function(err){
  Location.remove({}, function(err){
    User.register(new User(
      {
       name: 'Phil',
       username: 'phil@email.com'
      }), 'phil', function(err, user) {
        phil = user;
        User.register(new User(
          {
           name: 'jim',
           username: 'jim@email.com'
          }), 'jim', function(err, user) {
            jim = user;
            Location.create({name: 'San Francisco'}, function(err, loc) {
              phil.location.push(loc);
              phil.save();
              jim.location.push(loc);
              jim.save();
              Location.create({name: 'New York'}, function(err, loc) {
                jim.location.push(loc);
                jim.save();
              });
            });
        });
    });
  });
});


