import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    numberOrder: String,
    detail: String,
    totalPrice: Number,
    address: String,
    status: String,
    deliverAt: {
        type: Date,
        default: null,
    }});
    
const Order = mongoose.model('Order', orderSchema);
export default Order;