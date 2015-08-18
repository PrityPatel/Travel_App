var passport = require('passport');

var User = require('../models/User');

var newSession = function(req, res) {
  res.render('auth/login', {user : req.user});
};

var create = function(req, res, next) {
  req.session.save(function (err) {
    if (err) return next(err);
    res.redirect('/users/' + req.user.id);
  });
};

var destroy = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = {
  newSession: newSession,
  create:     create,
  destroy:    destroy
};

