
import Article from "../models/article.js";
import mongoose from 'mongoose';

export const getArticles = async (req, res) => {
    try{
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getArticle = async (req, res) => { 
    const { id } = req.params;
    try {
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createArticle = async (req, res) => {
    const { available, barcode, category, name, price } = req.body;

    const newArticle = new Article({ available, barcode, category, name, price  })

    try {
        await newArticle.save();
        res.status(201).json(newArticle );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { available, barcode, category, name, price  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedArticle = { available, barcode, category, name, price, _id: id };
    await Article.findByIdAndUpdate(id, updatedArticle, { new: true });
    res.json(updatedArticle);
}

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Article.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}