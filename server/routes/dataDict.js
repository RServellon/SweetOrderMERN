import express from 'express';
import { getDatos, getDato, createDato, updateDato, deleteDato } from '../controllers/dataDict.js';
const router = express.Router();

router.get('/datos', getDatos);
router.get('/datos/:id', getDato);
router.post('/datos/', createDato);
router.patch('/datos/:id', updateDato);
router.delete('/datos/:id', deleteDato);

export default router;