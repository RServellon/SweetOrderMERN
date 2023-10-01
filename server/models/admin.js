import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    personalID: String,
    name: String,
    password: String,
    email: String,
    phoneNumber: String
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;