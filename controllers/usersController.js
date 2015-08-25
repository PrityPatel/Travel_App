// Require passport for user registration
var passport = require('passport');

// Require models
var User = require('../models/User');
var Location = require('../models/Location');

// Renders the new user form
var newUser = function(req, res, next) {
  res.render('auth/register', {user: req.user});
};

// Posts and saves the data from the Registration form
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

// Grabs user from the DB and renders the user's profile page
var show = function(req, res, next) {
  var id = req.user.id;

  User.findById({_id: id})
  .populate('location')
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/show', {user: user});
  });
};

// Edits the user's profile
var editUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.json({message: 'Could not find user because:' + err});
    res.render('users/edit', {user: req.user});
  });
};

// Updates user's information
var updateUser = function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.json({message: 'Could not find user because:' + err});
    if(req.body.name) user.name = req.body.name;
    if (req.body.email) user.username = req.body.email;
    if (req.body.password) user.password= req.body.password;

    user.save(function(err) {
      if(err) res.json({messsage: 'Could not update user because:' + err});
      res.redirect('/users/' + req.params.id );
    });
  });
}

// Deletes User from the DB
var removeUser = function(req, res, next){
  var id = req.params.id;
  User.remove({_id: id}, function(error){
    if (error) res.json({message: 'Could not delete User: ' + error});

  res.redirect('/');
  });
};

module.exports = {
  newUser:  newUser,
  create:   create,
  show:     show,
  editUser: editUser,
  updateUser: updateUser,
  removeUser:   removeUser
};
