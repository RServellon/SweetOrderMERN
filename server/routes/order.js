import express from 'express';
import { getOrders, getOrderCodigo, createOrder, updateOrder, deleteOrder, getOrderNomCliente, getOrderEstado } from '../controllers/order.js';
const router = express.Router();

router.get('/orders', getOrders);
router.get('/ordersCodigo/:paramm', getOrderCodigo);
router.get('/ordersCliente/:paramm', getOrderNomCliente);
router.get('/ordersEstado/:paramm', getOrderEstado);
router.post('/orders/', createOrder);
router.patch('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;