const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Blog = require('../model/Blog')

const getAllBlog = async ()=>{
    const blogs =  Blog.find();
    return blogs
}
const newBlog = async (blog)=>{
    console.log("Blog in Service",blog)
    const newBlog = new Blog(blog);
    return newBlog
}
module.exports = {
    getAllBlog,
    newBlog
}