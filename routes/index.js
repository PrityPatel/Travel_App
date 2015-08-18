var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();


var usersController    = require('../controllers/usersController');
var sessionsController = require('../controllers/sessionsController');
var locationsController = require('../controllers/locationsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome_page', { title: 'Welcome' });
});

/*
 * Passport auth helpers.
 */

var authenticateUser = passport.authenticate(
  'local',
  {failureRedirect: '/login'
});

var isLoggedIn = function(req, res, next) {
  if (!req.isAuthenticated()) res.redirect('/login');
  return next();
};

var loadCurrentUser = function(req, res, next) {
  if (req.session.passport) {
    User
      .findOne({ username: req.session.passport.user })
      .then(
        function(user) {
          // attach the current User instance to the request!
          req.currentUser = user;
          next();
        }, function(err) {
          return next(err);
      });
  } else {
    next();
  }
};

router.get( '/register', usersController.renderRegister);
router.post('/register', usersController.create);
router.get('/user/:id', usersController.show);

router.get( '/login',  sessionsController.renderLogin);
router.post('/login',  authenticateUser, sessionsController.create);
router.get( '/logout', sessionsController.destroy);

router.get( '/locations',     locationsController.index);
// router.post('/locations',     isLoggedIn, loadCurrentUser, locationsController);
router.get( '/locations/:id', locationsController.show);

module.exports = router;
