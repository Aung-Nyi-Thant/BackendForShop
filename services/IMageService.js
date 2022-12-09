const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const Image = require('../model/Image');
const getAllImage = async() => {
    let images = Image.find()
    return (images)
}
module.exports = {
    getAllImage
}