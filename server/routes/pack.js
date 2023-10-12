import express from 'express';
import { getPacks, getPack, createPack, updatePack, deletePack } from '../controllers/pack.js';
const router = express.Router();
import multer from 'multer';

// Configurar Multer para manejar las imágenes
const storage = multer.memoryStorage(); // Almacenar la imagen en memoria (Buffer)
const upload = multer({ storage: storage });

router.get('/packs', getPacks);
router.get('/packs/:id', getPack);
router.post('/packs/', upload.single('image'), createPack);
router.patch('/packs/:id', upload.single('image'), updatePack);
router.delete('/packs/:id', deletePack);

export default router;