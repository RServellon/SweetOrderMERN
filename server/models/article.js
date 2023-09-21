import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    available: Boolean,
    barcode: String,
    category: String,
    name: String,
    price: Number
});

const Article = mongoose.model('Article', articleSchema);
export default Article;