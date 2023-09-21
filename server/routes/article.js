import express from 'express';
import { getArticles, getArticle, createArticle, updateArticle, deleteArticle } from '../controllers/article.js';
const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticle);
router.post('/articles/', createArticle);
router.patch('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);

export default router;
