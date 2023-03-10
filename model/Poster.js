const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PosterSchema = new Schema({
    id: {
        type: 'String',
        required: true
    },
    message:{
        type: 'String',
        required: true
    },
    
});
module.exports = mongoose.model('Poster', PosterSchema)