require("dotenv").config();

const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const { sequelize } = require("./database/models");

// CSRF protection middleware setup
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Only set secure to true in production
      httpOnly: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/endpoints", (req, res) => {
  res.json(listEndpoints(app));
});

// Use routes
app.use("/auth", authRoutes);
app.use(protectedRoutes)

// CSRF protection for the routes that need it
app.use(csrfProtection);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.send("Adios!");
    });
  });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running on port ${process.env.PORT || 3000}`)
  );
});
