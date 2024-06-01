// server.js

const express = require("express");
const passport = require("passport");
require("./auth");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome dev");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));
