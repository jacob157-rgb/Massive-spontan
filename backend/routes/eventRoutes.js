import express from 'express';
import { getEvents, getEventsById, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

// Route untuk mendapatkan semua Events
router.get('/events', getEvents);

// Route untuk mendapatkan Event berdasarkan ID
router.get('/events/:id', getEventsById);

// Route untuk membuat Event baru
router.post('/events', createEvent);

// Route untuk mengupdate Event berdasarkan ID
router.put('/events/:id', updateEvent);

// Route untuk menghapus Event berdasarkan ID
router.delete('/events/:id', deleteEvent);

export default router;
