import express from 'express';
import { getCPs, getCPById, createCP, updateCP, deleteCP } from '../controllers/cpController.js';

const router = express.Router();

// Route untuk mendapatkan semua tags
router.get('/cps', getCPs);

// Route untuk mendapatkan tag berdasarkan ID
router.get('/cps/:id', getCPById);

// Route untuk membuat tag baru
router.post('/cps', createCP);

// Route untuk mengupdate tag berdasarkan ID
router.put('/cps/:id', updateCP);

// Route untuk menghapus tag berdasarkan ID
router.delete('/cps/:id', deleteCP);

export default router;
