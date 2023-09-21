import express from 'express';
import { getShoppingCarts, getShoppingCart, createShoppingCart, updateShoppingCart, deleteShoppingCart } from '../controllers/shoppingCart.js';
const router = express.Router();

router.get('/shoppingCarts', getShoppingCarts);
router.get('/shoppingCarts/:id', getShoppingCart);
router.post('/shoppingCarts/', createShoppingCart);
router.patch('/shoppingCarts/:id', updateShoppingCart);
router.delete('/shoppingCarts/:id', deleteShoppingCart);

export default router;