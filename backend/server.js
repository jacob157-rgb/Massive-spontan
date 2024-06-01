// server.js

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Passport Google OAuth2 Strategy Configuration
passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // This function is called after a successful authentication
    // You can save user data to the database or generate JWT here
    // For simplicity, we will generate JWT
    const user = { id: profile.id, email: profile.emails[0].value };
    const token = jwt.sign(user, 'your_jwt_secret');
    done(null, token);
  }
));

// Middleware for Passport Authentication
app.use(passport.initialize());

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to frontend with JWT token
    res.redirect(`http://localhost:3000?token=${req.user}`);
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));
