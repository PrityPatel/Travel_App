var passport = require('passport');

//require models
var User = require('../models/User');

// Get the new user form
var newUser = function(req, res, next) {
  res.render('auth/register');
};

//Post and save the data from the new user form
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

//Show a User
var show = function(req, res, next) {
  var id = req.user.id;
  User.findById({_id: id}, function(error, user) {
    if(error) res.json({message: 'Could not find User because: ' + error});
        res.render('users/show', {user: user});

        //code for travel_app api available
        //res.json (user: user});
      });
};

//Edit User Profile
// var editUser = function(req, res, next){
//   if (error) res.json({message: 'Could not find User because: ' + error});

//   if (req.body.username) user.username = req.body.username;
//   if (req.body.name) user.name = req.body.name;
//   if (req.body.email) user.email = req.body.email;
//   if (req.body.password) user.password= req.body.password;

//   user.save(function(error) {
//     if (error) res.json({message: 'User Profile Updated!'});
//   });
// };

//Edit User Profile
// GET '/users/:id/edit'
function editUser (req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.json({message: 'Could not find user because:' + err});
      res.render('users/edit', {user: req.user});
    });
  }

// PUT '/users/:id'
function updateUser (req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.json({message: 'Could not find user because:' + err});
    if(req.body.name) user.name = req.body.name;
    if (req.body.email) user.username = req.body.email;
    if (req.body.password) user.password= req.body.password;

    user.save(function(err) {
      if(err) res.json({messsage: 'Could not update user because:' + err});
      res.redirect('/users/show', {user: user});
    });
  });
}



//Delete User Profile
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
