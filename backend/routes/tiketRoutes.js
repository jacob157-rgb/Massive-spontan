const express = require("express");
const router = express.Router();
const {
  getTikets,
  getTiketById,
  createTiket,
  updateTiket,
  deleteTiket,
} = require("../controllers/tiketController");

// Route untuk mendapatkan semua tags
router.get("/tikets", getTikets);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/tikets/:id", getTiketById);

// Route untuk membuat tag baru
router.post("/tikets", createTiket);

// Route untuk mengupdate tag berdasarkan ID
router.put("/tikets/:id", updateTiket);

// Route untuk menghapus tag berdasarkan ID
router.delete("/tikets/:id", deleteTiket);

module.exports = router;
