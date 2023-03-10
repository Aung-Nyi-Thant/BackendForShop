let Poster = require('../model/Poster');
const getAllPost = async() => {
    return Poster.find();
};
const newPost = async(Post) => {
    const newPost = new Poster(Post);
    return newPost.save();
}
module.exports = {
    getAllPost,
    newPost
}