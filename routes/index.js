var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();


var usersController    = require('../controllers/usersController');
var sessionsController = require('../controllers/sessionsController');
var locationsController = require('../controllers/locationsController');


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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome_page', { title: 'Welcome' });
});

//register
router.get( '/register', usersController.newUser);
router.post('/register', usersController.create);

//login
router.get( '/login',  sessionsController.newSession);
router.post('/login',  authenticateUser, sessionsController.create);

//logout
router.get( '/logout', sessionsController.destroy);

//User CRUD
//
router.get('/user/:id', usersController.show);
// router.get('/user/:id/edit', usersController.edit);


//Location resource; need to write route to delete location from user profile
router.get('/locations',     locationsController.index);
router.post('/locations',     isLoggedIn, loadCurrentUser, locationsController.create);
router.get( '/locations/show', locationsController.show);

module.exports = router;
