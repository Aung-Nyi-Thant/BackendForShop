//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartsSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    ThingID: {
        type: String,
        require: true
    },
    ThingName: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    },
    Prize: {
        type: String,
        require: true
    }


});
module.exports = mongoose.model('Carts', CartsSchema)