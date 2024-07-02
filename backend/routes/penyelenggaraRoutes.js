import express from 'express';
import { 
  getPenyelenggaras, 
  getPenyelenggarasById, 
  createPenyelenggara, 
  updatePenyelenggara, 
  deletePenyelenggara 
} from '../controllers/penyelenggaraController.js';

const router = express.Router();

// Route untuk mendapatkan semua penyelenggaras
router.get('/penyelenggaras', getPenyelenggaras);

// Route untuk mendapatkan penyelenggara berdasarkan ID
router.get('/penyelenggaras/:id', getPenyelenggarasById);

// Route untuk membuat penyelenggara baru
router.post('/penyelenggaras', createPenyelenggara);

// Route untuk mengupdate penyelenggara berdasarkan ID
router.put('/penyelenggaras/:id', updatePenyelenggara);

// Route untuk menghapus penyelenggara berdasarkan ID
router.delete('/penyelenggaras/:id', deletePenyelenggara);

export default router;
