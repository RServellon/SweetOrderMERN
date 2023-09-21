
import Admim from "../models/admin.js";
import mongoose from 'mongoose';

export const getAdmins = async(req, res) => {
    try{
        const admins = await Admim.find();
        res.status(200).json(admins);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const getAdmin = async (req, res) => { 
    const { id } = req.params;
    try {
        const admin = await Admim.findById(id);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAdmin = async (req, res) => {
    const { cedula, name, password, email, phone } = req.body;

    const newAdmin = new Admim({  cedula, name, password, email, phone })

    try {
        await newAdmin.save();
        res.status(201).json(newAdmin );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { cedula, name, password, email, phone } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedAdmin = { cedula, name, password, email, phone, _id: id };
    await Admim.findByIdAndUpdate(id, updatedAdmin, { new: true });
    res.json(updatedAdmin);
}

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Admim.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}