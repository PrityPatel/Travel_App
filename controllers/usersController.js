var passport = require('passport');

var User = require('../models/User');

var renderRegister = function(req, res) {
  res.render('users/new');
};

var create = function(req, res) {
  User.register
    (new User({
      name: req.body.name
      // email: req.body.email,
    }), req.body.password, function(err, user) {
    if (err) return res.render('/register', {user: user});
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/user/:id');
      });
    });
  });
};

var show = function(req, res, next) {
  User
    .findById(req.params.id)
    .then(
      function(user) {
        res.render(
          'users/:id',
          {
            user:    req.user
        });
      }, function(err) {
        console.log("You screwed up");
    });
};

module.exports = {
  renderRegister:    renderRegister,
  create: create,
  show: show
};
