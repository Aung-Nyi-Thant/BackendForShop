let posterService = require('../services/PosterService');
const getAllPoster = async function(req, res, next) {
    try {
        const post = await posterService.getAllPost();
        if (!post) throw Error('No post');
        await res.status(200).json(post);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const newPost = async function(req, res, next) {
    console.log("new Post ", req.body);
    try {
        const Post = await posterService.newPost(req.body);
        if (!Post) throw Error('Cannot save Post');
        await res.status(201).json(Post);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}
module.exports = {
    getAllPoster,
    newPost
}