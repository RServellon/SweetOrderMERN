import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import articleRoutes from './routes/article.js';


const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/api', articleRoutes);

const CONNECTION_URL = 'mongodb+srv://sa:passworddd@clustersweetorder.ktcvqx1.mongodb.net/SweetOrder';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
