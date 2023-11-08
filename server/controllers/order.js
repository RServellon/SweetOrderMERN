import Order from "../models/order.js";
import mongoose from "mongoose";

export const getOrders = async(req, res) => {
    try{
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const getOrderCodigo = async (req, res) => { 
    const { paramm } = req.params;
    try {
        // Búsqueda en Mongo
        const order = await Order.findOne({ codigo: paramm }); 
        if (order) {
            console.log(order)
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(401).json({ message: "Contraseña incorrecta" });
            }
        } else {
            res.status(404).json({ message: "Orden no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrderNomCliente = async (req, res) => { 
    const { paramm } = req.params;
    try {
        // Búsqueda en Mongo
        var nombre = capitalizeWords(paramm)
        const order = await Order.findOne({ cliente: nombre }); 
        if (order) {
            console.log(order)
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(401).json({ message: "Nombre incorrecto" });
            }
        } else {
            res.status(404).json({ message: "Orden no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrderEstado = async (req, res) => { 
    const { paramm } = req.params;
    try {
        // Búsqueda en Mongo
        var estado = capitalizeWords(paramm)

        const order = await Order.find({ estado: estado }); 
        if (order) {
            console.log(order)
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(401).json({ message: "Estado incorrecto" });
            }
        } else {
            res.status(404).json({ message: "Orden no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createOrder = async (req, res) => {
    const { numberOrder, detail, totalPrice, address, status, deliverAt } = req.body;

    const newOrder = new Order({  numberOrder, detail, totalPrice, address, status, deliverAt })

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { numberOrder, detail, totalPrice, address, status, deliverAt } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedOrder = { numberOrder, detail, totalPrice, address, status, deliverAt, _id: id };
    await Order.findByIdAndUpdate(id, updatedOrder, { new: true });
    res.json(updatedOrder);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Order.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

function capitalizeWords(str) {
    // Convierte todas las letras a minúsculas
    const words = str.toLowerCase().split(' ');
  
    // Capitaliza la primera letra de cada palabra
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Une las palabras nuevamente en una cadena
    return capitalizedWords.join(' ');
  }