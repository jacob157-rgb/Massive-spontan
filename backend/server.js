const express = require("express");
const app = express();
const userController = require("./controllers/userController");
const errorhandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const updload = require("./utils/upload");

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE http://localhost:8000/
app.get("/", (req, res) => {
  res.json({
    message: "Berhasil melakukan routing✨",
  });
});

// ROUTING Users
app.get("/api/users", userController.getAllUsers);
app.post("/api/users", userController.createNewUser);
app.put("/api/users/:id", userController.updateUserById);
app.delete("/api/users/:id", userController.deleteUserById);
app.get("/api/users/:id", userController.getUserById);

app.post("/file-upload", upload.single("file"), (req, req) => {
  res.json({ message: "File uploaded!" });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
