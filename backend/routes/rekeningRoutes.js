const express = require("express");
const router = express.Router();
const {
  getRekenings,
  getRekeningsById,
  createRekening,
  updateRekening,
  deleteRekening,
} = require("../controllers/rekeningController");

// Route untuk mendapatkan semua rekenings
router.get("/rekenings", getRekenings);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/rekenings/:id", getRekeningsById);

// Route untuk membuat tag baru
router.post("/rekenings", createRekening);

// Route untuk mengupdate tag berdasarkan ID
router.put("/rekenings/:id", updateRekening);

// Route untuk menghapus tag berdasarkan ID
router.delete("/rekenings/:id", deleteRekening);

module.exports = router;
