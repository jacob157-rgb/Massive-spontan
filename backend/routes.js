const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Local Login Route
router.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Google Auth Route
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Auth Callback Route
router.get("/auth/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Protected Route
router.get("/protected", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({ message: "This is a protected route" });
});

module.exports = router;
