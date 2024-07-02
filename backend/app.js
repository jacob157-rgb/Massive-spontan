import express from "express";
import session from "express-session";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import tiketRoutes from "./routes/tiketRoutes.js";
import topikRoutes from "./routes/topikRoutes.js";
import formatRoutes from "./routes/formatRoutes.js";
import rekeningRoutes from "./routes/rekeningRoutes.js";
import penyelenggaraRoutes from "./routes/penyelenggaraRoutes.js";
import cpRoutes from "./routes/cpRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import midtransRoutes from "./routes/midtransRoutes.js";
import { sequelize } from "./database/models/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

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
app.use(midtransRoutes);

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
