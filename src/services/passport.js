const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcryptjs';

// Simple password login
const localLogin = new LocalStrategy(
  function(username, password, done) {
    User.findOne({ 'username': username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (!isValid) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
      })
      .catch(err => {
        return done(err);
      });
  }
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Tell passport to use this strategy
passport.use(localLogin);
