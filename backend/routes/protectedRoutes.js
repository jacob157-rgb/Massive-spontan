// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware to protect routes
function authenticateJWT(req, res, next) {
  const token = req.query.token || req.headers.authorization?.split(' ')[1];
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }

  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.error('Authentication error:', err, info);
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
}

// Example protected route
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
