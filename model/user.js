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
        required: false
    },
    email: {
        type: 'String',
        require: true
    },
    age: {
        type: "String",
        require: false
    },
    money: {
        type: 'Number',
        require: false
    },
    totalMoney: {
        type: 'String',
        require: false
    },
});
module.exports = mongoose.model('User', UserSchema)