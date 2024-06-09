const express = require("express");
const router = express.Router();
const {
  getTags,
  getTagsById,
  createTag,
  updateTag,
  deleteTag,
} = require("../controllers/TagController");

// Route untuk mendapatkan semua tags
router.get("/tags", getTags);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/tags/:id", getTagsById);

// Route untuk membuat tag baru
router.post("/tags", createTag);

// Route untuk mengupdate tag berdasarkan ID
router.put("/tags/:id", updateTag);

// Route untuk menghapus tag berdasarkan ID
router.delete("/tags/:id", deleteTag);

module.exports = router;
