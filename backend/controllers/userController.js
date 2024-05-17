const db = require("../db.js");

const getAllUsers = (req, res) => {
  db.query("SELECT * FROM `users`", (err, results) => {
    if (err) {
      res.status(500).json({ error: "something wrong" });
      throw err;
    }
    console.log(results);
    res.json({ results });
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM \`users\` WHERE id=${id}`, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "error while getting user with id",
      });
    }
    if (results.length === 0) {
      return res.json({
        message: "User not found!",
        results: [],
      });
    }
    res.json({ results });
  });
};

const createNewUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Silahkan isi field name, email, dan password!",
    });
  }
  db.query(
    `INSERT INTO \`users\` (\`name\`, \`email\`, \`password\`) VALUES (?,?,?)`,
    [name, email, password],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "error while creating new user",
        });
      }

      if (results.affectedRows > 0) {
        return res.status(201).json({
          message: "User created successfully",
          results,
        });
      }
    }
  );
};

const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Silahkan isi field name, email, dan password!",
    });
  }
  db.query(
    `UPDATE \`users\` SET \`name\`=?, \`email\`=?, \`password\`=? WHERE id=${id}`,
    [name, email, password],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "error while updating user",
        });
      }
      if (results.affectedRows > 0) {
        return res.status(200).json({
          message: "User updated successfully",
          results,
        });
      }
      return res.status(404).json({
        message: "User not found!",
        results: [],
      });
    }
  );
};

const deleteUserById = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM \`users\` WHERE id=${id}`, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "error while deleting user",
      });
    }
    if (results.affectedRows > 0) {
      return res.status(200).json({
        message: "User deleted successfully",
        results,
      });
    }
    return res.status(404).json({
      message: "User not found!",
      results: [],
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
};
