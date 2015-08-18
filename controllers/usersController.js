var passport = require('passport');

var User = require('../models/User');

var newUser = function(req, res, next) {
  res.render('users/new');
};

var create = function(req, res) {
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user) {
    if (err) return res.redirect('/register');
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};

var show = function(req, res, next) {
  var id = req.params.id;
  User.findById({_id: id}, function(error, user) {
    if(error) res.json({message: 'Could not find User because: ' + error});
        res.render(
          'users/:id',
          {
            user: req.user
        }
        );
        //api time!
        //rs.json (user: user});
      });
};



module.exports = {
  newUser:  newUser,
  create:   create,
  show:     show
};
