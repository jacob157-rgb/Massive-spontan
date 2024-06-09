const express = require("express");
const router = express.Router();
const {
  getPenyelenggaras,
  getPenyelenggarasById,
  createPenyelenggara,
  updatePenyelenggara,
  deletePenyelenggara,
} = require("../controllers/penyelenggaraController");

// Route untuk mendapatkan semua penyelenggaras
router.get("/penyelenggaras", getPenyelenggaras);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/penyelenggaras/:id", getPenyelenggarasById);

// Route untuk membuat tag baru
router.post("/penyelenggaras", createPenyelenggara);

// Route untuk mengupdate tag berdasarkan ID
router.put("/penyelenggaras/:id", updatePenyelenggara);

// Route untuk menghapus tag berdasarkan ID
router.delete("/penyelenggaras/:id", deletePenyelenggara);

module.exports = router;
