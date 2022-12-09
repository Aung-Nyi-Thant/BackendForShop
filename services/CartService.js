const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cart = require("../model/Cart")

const router = express.Router();

const GetAllCart = async() => {
    Carts = cart.find();
    return Carts
};
const newCart = async(Cart) => {
    const newCarts = new cart(Cart);
    return newCarts.save();
}
const DeleteCart = async(Id) => {
    let Carts = cart.findByIdAndDelete(Id)
    return Carts
}
module.exports = {
    GetAllCart,
    newCart,
    DeleteCart
}