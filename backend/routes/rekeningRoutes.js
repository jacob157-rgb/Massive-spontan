import express from 'express';
import { 
  getRekenings, 
  getRekeningsById, 
  createRekening, 
  updateRekening, 
  deleteRekening 
} from '../controllers/rekeningController.js';

const router = express.Router();

// Route untuk mendapatkan semua rekenings
router.get('/rekenings', getRekenings);

// Route untuk mendapatkan rekening berdasarkan ID
router.get('/rekenings/:id', getRekeningsById);

// Route untuk membuat rekening baru
router.post('/rekenings', createRekening);

// Route untuk mengupdate rekening berdasarkan ID
router.put('/rekenings/:id', updateRekening);

// Route untuk menghapus rekening berdasarkan ID
router.delete('/rekenings/:id', deleteRekening);

export default router;
