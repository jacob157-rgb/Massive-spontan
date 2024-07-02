// routes/tagsRouter.js
import express from 'express';
import {
  getTags,
  getTagsById,
  createTag,
  updateTag,
  deleteTag,
} from '../controllers/tagController.js';

const router = express.Router();

// Route to get all tags
router.get('/tags', getTags);

// Route to get tag by ID
router.get('/tags/:id', getTagsById);

// Route to create a new tag
router.post('/tags', createTag);

// Route to update tag by ID
router.put('/tags/:id', updateTag);

// Route to delete tag by ID
router.delete('/tags/:id', deleteTag);

export default router;
