import mongoose from 'mongoose';

const dataDictSchema = mongoose.Schema({
    name: String,
    value: String,
   });

const DataDict = mongoose.model('DataDict', dataDictSchema);
export default DataDict;