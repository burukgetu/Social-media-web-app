import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// READ
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', getUserPosts);

// UPDATE
router.patch('/:id/like', verifyToken, likePost);

export default router;