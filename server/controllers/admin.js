
import Admin from "../models/admin.js";
import mongoose from 'mongoose';

export const getAdmins = async(req, res) => {
    try{
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const getAdmin = async (req, res) => { 
    const { cedula, password } = req.params;
    try {
        // Búsqueda en Mongo
        const admin = await Admin.findOne({ cedula }); // Cambia a findOne para buscar un admin por ID
        if (admin) {
            // Verificar la contraseña (asegúrate de que admin.password esté hasheado y comparar hashes en lugar de texto plano)
            console.log(admin)
            if (admin.password === password) {
                res.status(200).json(admin);
            } else {
                res.status(401).json({ message: "Contraseña incorrecta" });
            }
        } else {
            res.status(404).json({ message: "Admin no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAdmin = async (req, res) => {
    const { cedula, name, password, email, phone } = req.body;

    const newAdmin = new Admin({  cedula, name, password, email, phone })

    try {
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { cedula, name, password, email, phone } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedAdmin = { cedula, name, password, email, phone, _id: id };
    await Admin.findByIdAndUpdate(id, updatedAdmin, { new: true });
    res.json(updatedAdmin);
}

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Admin.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}
