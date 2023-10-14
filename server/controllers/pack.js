import Pack from "../models/pack.js";
import mongoose from "mongoose";


export const getPacks = async(req, res) => {
    try{
        const packs = await Pack.find();
        res.status(200).json(packs);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const getPack = async (req, res) => { 
    const { id } = req.params;
    try {
        const pack = await Pack.findById(id);
        res.status(200).json(pack);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPack = async (req, res) => {
    const { name, available, price } = req.body;
    const imageBuffer = req.file.buffer; // Obtiene la imagen cargada

    // Crea un nuevo paquete con la imagen almacenada en el buffer
    const newPack = new Pack({
        name,
        available,
        price,
        image: {
            data: imageBuffer,
            contentType: req.file.mimetype // Obtiene el tipo de contenido de la imagen
        }
    });

    try {
        await newPack.save();
        res.status(201).json(newPack);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePack = async (req, res) => {
    // const { id } = req.params;
    // const { name, available, price, image } = req.body;
    
    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // const updatedPack = { name, available, price, image, _id: id };
    // await Pack.findByIdAndUpdate(id, updatedPack, { new: true });
    // res.json(updatedPack);

    const { id } = req.params;
    const { name, available, price } = req.body; // Campos para actualizar

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No pack with id: ${id}`);

    const updatedPack = { name, available, price, _id: id };
    
    // Actualiza la imagen solo si se proporciona una nueva
    if (req.file) {
        updatedPack.image.data = req.file.buffer;
        updatedPack.image.contentType = req.file.mimetype;
    }

    await Pack.findByIdAndUpdate(id, updatedPack, { new: true });
    res.json(updatedPack);
}

export const deletePack = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Pack.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}