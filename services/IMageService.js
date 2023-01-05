const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs')

const router = express.Router();
const Image = require('../model/Image');
const getAllImage = async() => {
    let images = Image.find()
    let data = fs.readFile(images)
    console.log("Data is ", data)
    return (images)
}
module.exports = {
    getAllImage
}