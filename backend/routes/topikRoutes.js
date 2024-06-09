const express = require("express");
const router = express.Router();
const {
  getTopiks,
  getTopikById,
  createTopik,
  updateTopik,
  deleteTopik,
} = require("../controllers/topikController");

// Route untuk mendapatkan semua tags
router.get("/topiks", getTopiks);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/topiks/:id", getTopikById);

// Route untuk membuat tag baru
router.post("/topiks", createTopik);

// Route untuk mengupdate tag berdasarkan ID
router.put("/topiks/:id", updateTopik);

// Route untuk menghapus tag berdasarkan ID
router.delete("/topiks/:id", deleteTopik);

module.exports = router;
