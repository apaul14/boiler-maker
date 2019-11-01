const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../db/models/crypto');

if (process.env.NODE_ENV !== 'production') {
  require('../../secrets');
}

passport.use(
  new GoogleStrategy(
    {
      clientID:
      process.env.client_id,
      clientSecret: process.env.client_secret,
      callbackURL: '/auth/google/verify'
    },
    (token, refreshToken, profile, done) => {
      console.log(profile);
      const info = {
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos ? profile.photos[0].value : undefined
      };

      User.findOrCreate({
        where: { googleId: profile.id },
        defaults: info
      })
        .spread(user => done(null, user))
        .catch(done);
    }
  )
);


// Google authentication and login
router.get('/', passport.authenticate('google', { scope: 'email' }));


// router.get('/auth/google/callback', passport.authenticate('google', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }));

// handle the callback after Google has authenticated the user
router.get(
  '/verify',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`/users/${req.user.id}`);
  }
);

module.exports = router;