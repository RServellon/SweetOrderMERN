import mongoose from 'mongoose';

const shoppingCartSchema = mongoose.Schema({
    numberOrder: String,
    idPack: String,
    amount: Number,
    price: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
export default ShoppingCart;