import mongoose from 'mongoose';

const packSchema = mongoose.Schema({
    name: String,
    available: Boolean,
    price: Number,
    image: {
        data: Buffer, // Almacenar los datos de la imagen como un buffer
        contentType: String // Tipo de contenido de la imagen (por ejemplo, "image/jpeg" o "image/png")
    }
});

const Pack = mongoose.model('Pack', packSchema);
export default Pack;