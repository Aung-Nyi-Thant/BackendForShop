const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    UserId:{
        type:String,
        required:true
    },
    BlogText:{
        type:String,
        required:true
    },
    Photo:{
        type:String
    },
});
module.exports = mongoose.model('Blog', BlogSchema)