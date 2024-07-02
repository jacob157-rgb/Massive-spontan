// routes/tiketsRouter.js
import express from 'express';
import {
  getTikets,
  getTiketById,
  createTiket,
  updateTiket,
  deleteTiket,
} from '../controllers/tiketController.js';

const router = express.Router();

// Route to get all tikets
router.get('/tikets', getTikets);

// Route to get tiket by ID
router.get('/tikets/:id', getTiketById);

// Route to create a new tiket
router.post('/tikets', createTiket);

// Route to update tiket by ID
router.put('/tikets/:id', updateTiket);

// Route to delete tiket by ID
router.delete('/tikets/:id', deleteTiket);

export default router;
