import express from 'express';
import { getFormats, getFormatsById, createFormat, updateFormat, deleteFormat } from '../controllers/formatController.js';

const router = express.Router();

// Route untuk mendapatkan semua format
router.get('/formats', getFormats);

// Route untuk mendapatkan format berdasarkan ID
router.get('/formats/:id', getFormatsById);

// Route untuk membuat format baru
router.post('/formats', createFormat);

// Route untuk mengupdate format berdasarkan ID
router.put('/formats/:id', updateFormat);

// Route untuk menghapus format berdasarkan ID
router.delete('/formats/:id', deleteFormat);

export default router;
