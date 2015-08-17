var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/User');

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
  {failureRedirect: '/login'}
);

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

router.get( '/register', usersController.new);
router.post('/register', usersController.create);

router.get( '/login',  sessionsController.new);
router.post('/login',  authenticateUser, sessionsController.create);
router.get( '/logout', sessionsController.destroy);

// router.get( '/locations',     locationsController.index);
// router.post('/locations',     isLoggedIn, loadCurrentUser, locationsController);
// router.get( '/locations/:id', locationsController.show);

module.exports = router;


// // GET new LOG-IN form //

// router.get('/login', function(req, res, next){
//   res.render('sessions/new', {user: req.user});
// });

// // POST new session/login form//
// router.post('/login', passport.authenticate(
//   'local',
//   {
//     failureRedirect: '/login'
//   }),
//   function (req, res, next) {
//     req.session.save(function (err) {
//       if (err) return next(err);
//       res.redirect('/');
//     });
//   }
// );

// //GET a NEW USER form//
// router.get('/register', function (req, res) {
//   res.render('users/new');
// });

// //POST/create a NEW USER //
// router.post('/register', function (req, res) {
//   User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
//     if (err) return res.render('users/new', {user: user});
//     passport.authenticate('local')(req, res, function () {
//       req.session.save(function (err) {
//         if (err) {
//           return next(err);
//         }
//         res.redirect('/');
//       });
//     });
//   });
// });

// //LOGOUT current user//
// router.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/');
// });
