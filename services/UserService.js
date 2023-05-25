const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../model/user');

const register = async(userName, password, email, age, money, totalMoney, type) => {
    let passwordEndCode = bcrypt.hashSync(password, 10)
    let user = new User({
        username: userName,
        password: passwordEndCode,
        email: email,
        age: age,
        money: money,
        totalMoney: totalMoney,
        type_: type
    });
    return user.save();

}
const login = async(userName, password) => {

    const filter = {
        username: userName
    };
    const user = await User.findOne(filter);
    if (user) {
        const validPass = await bcrypt.compare(password, user.password);
        if (validPass) {
            return validPass;
        } else {
            throw ("Invalid user or password");
        }
    }
    throw ("Invalid user or password");;
};
const updateUser = async(UserId, user) => {    
    const newUser = await User.findByIdAndUpdate(UserId, user, { new: true });
    return newUser;
}
const getUserById = (userId) => {
    return {
        userId: userId,
        name: "Some data from DB"
    }
};
const RemoveAccount = (userId) => {
    users = User.findByIdAndRemove(userId)
    return users;
}
const getAllUser = () => {
    users = User.find()
    return users
}
module.exports = {
    getUserById,
    register,
    login,
    getAllUser,
    RemoveAccount,
    updateUser
}