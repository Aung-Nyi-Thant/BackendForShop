//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    username: {
        type: 'String',
        required: true
    },
    FoodName: {
        type: 'String',
        required: true,
    },
    Message: {
        type: 'String'
    },
    count: {
        type: 'String',
        required: true
    },
    cost: {
        type: "String",
        required: true
    },
    date: {
        type: "String",
        required: true
    },
    image_adress: {
        type: "String",
        require: true
    }
});
module.exports = mongoose.model('Message', MessageSchema)