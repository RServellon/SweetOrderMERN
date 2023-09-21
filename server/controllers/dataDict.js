
import DataDict from "../models/dataDict.js";
import mongoose from 'mongoose';

export const getDatos = async (req, res) => {
    try{
        const datos = await DataDict.find();
        res.status(200).json(datos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getDato = async (req, res) => { 
    const { id } = req.params;
    try {
        const dato = await DataDict.findById(id);
        res.status(200).json(dato);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDato = async (req, res) => {
    const { idGeneral, name, value } = req.body;

    const newDato = new DataDict({ idGeneral, name, value })

    try {
        await newDato.save();
        res.status(201).json(newDato);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDato = async (req, res) => {
    const { id } = req.params;
    const { idGeneral, name, value } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedDato = { idGeneral, name, value, _id: id };
    await DataDict.findByIdAndUpdate(id, updatedDato, { new: true });
    res.json(updatedDato);
}

export const deleteDato = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await DataDict.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}