import express from 'express';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/order.js';
const router = express.Router();

router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.post('/orders/', createOrder);
router.patch('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;