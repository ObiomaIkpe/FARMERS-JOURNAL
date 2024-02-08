const mongoose = require('mongoose');

const farmProductSchema = new mongoose.Schema({
    farmProduce: [],
    userRef: userid
}, {timestamps})

const farmProduce = new mongoose.model('farmProduce', farmProductSchema)

module.exports = farmProduce;

