//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type:{
            name:{
                type: String,
                required: true,
            },
            phoneNo:{
                type: String
            }
        },
        required:false,
    },
    image_adress:{
        type:String
    },
    background_img:{
        type:String
    },
    year: {
        type: Number,
        required: true,
    },
    summary:{
        type:String
    },
    color:{
        type:String
    },
    type:{
        type:String
    }
});
module.exports = mongoose.model('Movies', MovieSchema);