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

export const getOrder = async (req, res) => { 
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
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