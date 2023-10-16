import mongoose from 'mongoose';

const packSchema = mongoose.Schema({
    name: String,
    detail: String,
    available: Boolean,
    price: Number,
    image: String
});

const Pack = mongoose.model('Pack', packSchema);
export default Pack;