const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../model/user');

const register = async(userName, password, email, age, money, totalMoney, type) => {
    let user = new User({
        username: userName,
        password: password,
        email: email,
        age: age,
        money: money,
        totalMoney: totalMoney,
        type_: type
    });
    console.log(user)
    return user.save();

}
const login = async(userName, password) => {

    const filter = {
        username: userName
    };
    console.log('Filter ', filter);
    const user = await User.findOne(filter);
    if (user) {
        //console.log('Username ',userName, " Password ",user.password);
        const validPass = await bcrypt.compare(password, user.password);
        console.log(password)
        if (validPass) {
            return user;
        } else {
            throw Error("Invalid user or password");
        }
    }
    throw Error("Invalid user or password");;
};
const updateUser = async(UserId, user) => {
    console.log("User is", User)
    console.log("User id is", UserId)
    const newUser = await User.findByIdAndUpdate(UserId, user, { new: true });
    console.log("This is new user", newUser)
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