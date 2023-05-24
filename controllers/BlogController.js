let BlogService = require('../services/BlogService');


const getAllBlogs = async function(req, res, next) {
    console.log("getAllBlogs")
    try {
        const Blogs = await BlogService.getAllBlog();
        if (!Blogs) throw Error('No Blogs');
        await res.status(200).json(Blogs);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const newBlogController = async function(req, res, next) {
    console.log("newBlog")
    const blog  = req.body
    console.log("new Blog is",blog)
    try{
        const Blogs = await BlogService.newBlog(blog);
        if(!Blogs) throw Error('Cannot save blog');
        await res.status(201).json(Blogs);
    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
module.exports = {
   getAllBlogs,
   newBlogController
}