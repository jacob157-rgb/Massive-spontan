const express = require("express");
const app = express();
const db = require("./db");
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("ExpressJS is Running!");
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({ result });
    }
  });
});
app.post("/api/users", (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    name: name,
    email: email,
    password: password,
  });
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  db.query(
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
    [name, email, password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json({ message: "User updated successfully" });
      }
    }
  );
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({ message: "User deleted successfully" });
    }
  });
});
