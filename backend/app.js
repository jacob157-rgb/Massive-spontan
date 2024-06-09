const express = require("express");
const session = require("express-session");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const passport = require("passport");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const tagRoutes = require("./routes/tagRoutes");
const tiketRoutes = require("./routes/tiketRoutes");
const topikRoutes = require("./routes/topikRoutes");
const formatRoutes = require("./routes/formatRoutes");
const rekeningRoutes = require("./routes/rekeningRoutes");
const penyelenggaraRoutes = require("./routes/penyelenggaraRoutes");
const cpRoutes = require("./routes/cpRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const { sequelize } = require("./database/models");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/endpoints", (req, res) => {
  res.json(listEndpoints(app));
});

// Use routes
app.use("/auth", authRoutes);
app.use(protectedRoutes);
app.use(eventRoutes);
app.use(tagRoutes);
app.use(formatRoutes);
app.use(topikRoutes);
app.use(cpRoutes);
app.use(rekeningRoutes);
app.use(penyelenggaraRoutes);
app.use(tiketRoutes);

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
