const express = require("express");
const router = express.Router();
const {
  getFormats,
  getFormatsById,
  createFormat,
  updateFormat,
  deleteFormat,
} = require("../controllers/formatController");

// Route untuk mendapatkan semua format
router.get("/formats", getFormats);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/formats/:id", getFormatsById);

// Route untuk membuat tag baru
router.post("/formats", createFormat);

// Route untuk mengupdate tag berdasarkan ID
router.put("/formats/:id", updateFormat);

// Route untuk menghapus tag berdasarkan ID
router.delete("/formats/:id", deleteFormat);

module.exports = router;
