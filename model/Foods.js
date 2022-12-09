//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FoodsSchema = new Schema({
    Food_name:{
        type:String,
        required:true
    },
    Prices:{
        type:String,
        required:true
    },
    expire_date:{
        type:String,
        required:true
    },
    FoodImage:{
        type:String,
        required:true
    },
    typeOfTaste:{
        type:String,
        required:true
    },
    age_permisssion:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    Ingredients:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    textStyle:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    ColorForStyle:{
        type:String,
        required:true
    },
    like:{
        type:Number
    }


});
module.exports = mongoose.model('foods', FoodsSchema)