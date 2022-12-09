//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImagesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});
module.exports = mongoose.model('images', ImagesSchema)