var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/BlogController');


router.get('/',BlogController.getAllBlogs);
router.post('/newBlog',BlogController.newBlogController)


module.exports= router;