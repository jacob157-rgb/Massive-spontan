require("dotenv").config();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const { User } = require("../database/models");

// Configure Passport
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

// Configure Passport to use Google OAuth 2.0 Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // Find or create user based on Google ID
        const [user, created] = await User.findOrCreate({
          where: { googleId: profile.id },
          defaults: {
            avatar: profile.photos[0].value,
            googleId: profile.id,
            nama:
              profile.displayName ||
              `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            email_verified: profile.emails[0].verified, // Set to true if verified by Google
          },
        });

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

// Configure Passport to use JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        console.log("JWT Payload:", jwtPayload);
        const user = await User.findByPk(jwtPayload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        console.error("Error in JWT strategy:", err);
        return done(err, false);
      }
    }
  )
);

// Route to initiate Google OAuth 2.0 authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route to handle the OAuth 2.0 callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    // Generate JWT
    const user = req.user;
    const token = jwt.sign(
      { id: user.id, googleId: user.googleId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send token in response header or as a part of the URL
    res.redirect(`/api/profile?token=${token}`);
  }
);

module.exports = router;
