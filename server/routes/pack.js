import express from 'express';
import { getPacks, getPack, createPack, updatePack, deletePack } from '../controllers/pack.js';
const router = express.Router();

router.get('/packs', getPacks);
router.get('/packs/:id', getPack);
router.post('/packs/', createPack);
router.patch('/packs/:id',  updatePack);
router.delete('/packs/:id', deletePack);

export default router;