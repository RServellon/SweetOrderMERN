import ShoppingCart from "../models/shoppingCart.js";
import mongoose from "mongoose";

export const getShoppingCarts = async(req, res) => {
    try{
        const shoppingCarts = await ShoppingCart.find();
        res.status(200).json(shoppingCarts);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
}

export const getShoppingCart = async (req, res) => { 
    const { id } = req.params;
    try {
        const shoppingCart = await ShoppingCart.findById(id);
        res.status(200).json(shoppingCart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createShoppingCart = async (req, res) => {
    const { numberOrder, idPack, amount, price, createdAt } = req.body;

    const newShoppingCart = new ShoppingCart({  numberOrder, idPack, amount, price, createdAt })

    try {
        await newShoppingCart.save();
        res.status(201).json(newShoppingCart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateShoppingCart = async (req, res) => {
    const { id } = req.params;
    const { numberOrder, idPack, amount, price, createdAt } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedShoppingCart = { numberOrder, idPack, amount, price, createdAt, _id: id };
    await ShoppingCart.findByIdAndUpdate(id, updatedShoppingCart, { new: true });
    res.json(updatedShoppingCart);
}

export const deleteShoppingCart = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ShoppingCart.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}