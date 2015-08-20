var express = require('express');
var passport = require('passport');

//require models
var User = require('../models/User');
//require router
var router = express.Router();

// require controllers
var usersController    = require('../controllers/usersController');
var sessionsController = require('../controllers/sessionsController');
var locationsController = require('../controllers/locationsController');


//Passport authentication helpers

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
  res.render('welcome_page', { title: 'Welcome', user: req.user });
});

//register new and save new user (listed under User CRUD)
// router.get( '/register', usersController.newUser);
// router.post('/register', usersController.create);

//login existing user
router.get( '/login',  sessionsController.newSession);
router.post('/login',  authenticateUser, sessionsController.create);

//logout existing user
router.get( '/logout', sessionsController.destroy);

//User CRUD
//Create and save new user
router.get( '/register', usersController.newUser);
router.post('/register', usersController.create);
//Read user
router.get('/users/:id', isLoggedIn, loadCurrentUser, usersController.show);
//Update user
router.get('/users/:id/edit', isLoggedIn, loadCurrentUser, usersController.editUser);
router.put('/users/:id', isLoggedIn, loadCurrentUser, usersController.updateUser);
//Delete user
router.delete('/users/:id', isLoggedIn, loadCurrentUser, usersController.removeUser);


//Location resource; need to write route to delete location from user profile
router.get('/locations',     locationsController.index);
router.post('/locations',     isLoggedIn, loadCurrentUser, locationsController.create);
router.get( '/locations/:id', locationsController.show);

module.exports = router;
