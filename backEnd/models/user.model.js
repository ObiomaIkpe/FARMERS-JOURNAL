const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        required: true,
        type: String,
    },
    email:{
        required: true,
        type: String,
        unique: true,
    },
    phonenumber: {
        required: true,
        type: Number
    },
    location: {
        type: String,
        required: true
    },
    cropname:{
        type: String,
        required: true
    },
    croptype:{
        type: String,
        required: true
    },
    soilph:{
        type: String,
        required: true
    },
    soiltemperature:{
        type: String,
        required: true
    },
    soilhumidity:{
        type: String,
        required: true
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;

