import express from 'express';
import { getAdmins, getAdmin, createAdmin, updateAdmin, deleteAdmin } from '../controllers/admin.js';
const router = express.Router();

router.get('/admins', getAdmins);
router.get('/admins/:cedula/:password', getAdmin);
router.post('/admins/', createAdmin);
router.patch('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

export default router;
