const express = require("express");
const {
  getEvents,
  getEventsById,
  createEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController.js"); // Import getEvents correctly
const router = express.Router();

// Route untuk mendapatkan semua Events
router.get("/events", getEvents);

// Route untuk mendapatkan tag berdasarkan ID
router.get("/events/:id", getEventsById);

// Route untuk membuat tag baru
router.post("/events", createEvent);

// Route untuk mengupdate tag berdasarkan ID
router.put("/events/:id", updateEvent);

// Route untuk menghapus tag berdasarkan ID
router.delete("/events/:id", deleteEvent);

module.exports = router;
