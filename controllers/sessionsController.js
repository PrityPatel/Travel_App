// Require passport for user login and logout
var passport = require('passport');

// Require models
var User = require('../models/User');

// Render Login page
var newSession = function(req, res) {
  res.render('auth/login', {user : req.user});
};

// Login creates new session
var create = function(req, res, next) {
  req.session.save(function (err) {
    if (err) return next(err);
    res.redirect('/users/' + req.user.id);
  });
};

// Logout
var destroy = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = {
  newSession: newSession,
  create:     create,
  destroy:    destroy
};

