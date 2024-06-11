const express = require("express");
const router = express.Router();
const {
  getCPs,
  getCPById,
  createCP,
  updateCP,
  deleteCP,
} = require("../controllers/cpController");

// Route untuk mendapatkan semua tags
router.get("/cps", getCPs);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/cps/:id", getCPById);

// Route untuk membuat tag baru
router.post("/cps", createCP);

// Route untuk mengupdate tag berdasarkan ID
router.put("/cps/:id", updateCP);

// Route untuk menghapus tag berdasarkan ID
router.delete("/cps/:id", deleteCP);

module.exports = router;
