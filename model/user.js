//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    type_: {
        type: "String",
        required: true
    },
    email: {
        type: 'String',
        require: true
    },
    age: {
        type: "String",
        require: true
    },
    money: {
        type: 'Number',
        require: true
    },
    totalMoney: {
        type: 'String',
        require: true
    },
});
module.exports = mongoose.model('User', UserSchema)