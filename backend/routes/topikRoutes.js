// routes/topiksRouter.js
import express from 'express';
import {
  getTopiks,
  getTopikById,
  createTopik,
  updateTopik,
  deleteTopik,
} from '../controllers/topikController.js';

const router = express.Router();

// Route to get all topiks
router.get('/topiks', getTopiks);

// Route to get topik by ID
router.get('/topiks/:id', getTopikById);

// Route to create a new topik
router.post('/topiks', createTopik);

// Route to update topik by ID
router.put('/topiks/:id', updateTopik);

// Route to delete topik by ID
router.delete('/topiks/:id', deleteTopik);

export default router;
