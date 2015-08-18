var passport = require('passport');

var User = require('../models/User');

// Get the new user form
var newUser = function(req, res, next) {
  res.render('auth/register');
};

//Post the new user form
var create = function(req, res) {
  User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user) {
    if (err) return res.render('auth/register', {user: user});
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/users/' + req.user.id);
      });
    });
  });
};

var show = function(req, res, next) {
  var id = req.user.id;
  User.findById({_id: id}, function(error, user) {
    if(error) res.json({message: 'Could not find User because: ' + error});
        res.render('users/show', {user: user});
        //api time!
        //rs.json (user: user});
      });
};

//NEED TO WRITE CODE TO EDIT USER PROFILE

//NEED TO WRITE CODE TO DELETE USER PROFILE


module.exports = {
  newUser:  newUser,
  create:   create,
  show:     show
};
