//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    username: {
        type: 'String',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    Object_user: {
        type: 'String',
        required: true
    },
    Things: {
        type: 'String',
        required: true
    },
    Date: {
        type: "String",
        required: true
    },
    Type: {
        type: "String",
        required: true
    }
});
module.exports = mongoose.model('Payment', PaymentSchema)