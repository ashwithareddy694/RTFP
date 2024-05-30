const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, enum: ['admin', 'patient', 'doctor'], required: true }
});


// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');


