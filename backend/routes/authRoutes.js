require("dotenv").config();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const { User } = require("../database/models");
const { where } = require("sequelize");

// Local Strategy
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      console.log("Local strategy verify callback");
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          return done(null, false, { message: "Email tidak ditemukan." });
        }

        if (user.googleId && !password) {
          return done(null, false, {
            message: "Silahkan login melalui Google.",
          });
        }

        const isValid = await user.isValidPassword(password);
        if (!isValid) {
          return done(null, false, { message: "Kata sandi salah." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Google OAuth 2.0 Strategy
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

// JWT Strategy
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

router.post(
  "/login",
  (req, res, next) => {
    console.log("Login route hit");
    next();
  },
  passport.authenticate("local", {
    session: false,
    successRedirect: "/",
  }),
  function (req, res) {
    const user = req.user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  }
);

// router.get("/login", (req, res) => {});

router.post("/register", async (req, res) => {
  try {
    const { avatar, nama, email, password, no_hp, tgl_lahir, gender } =
      req.body;

    // Check for existing user
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create new user
    const newUser = await User.create({
      avatar,
      nama,
      email,
      password,
      no_hp,
      tgl_lahir,
      gender,
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send token in response
    res.json({ token });
  } catch (err) {
    console.error("Error in user registration:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Google OAuth 2.0 authentication route
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth 2.0 callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate JWT token
    const user = req.user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Redirect with token in the URL
    res.redirect(`http://localhost:5173/google/callback?token=${token}`);
  }
);

// Configure Passport
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

module.exports = router;
