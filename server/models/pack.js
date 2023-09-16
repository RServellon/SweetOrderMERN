import mongoose from 'mongoose';

const packSchema = mongoose.Schema({
    name: String,
    available: Boolean,
    price: Number
});

const Pack = mongoose.model('Pack', packSchema);
export default Pack;