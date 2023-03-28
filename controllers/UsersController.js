let userService = require('../services/UserService');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async function(req, res, next) {
    let userName = req.body['userName'];
    let password = req.body['password'];
    let email = req.body['email'];
    let age = req.body['age'];
    let money = req.body['money'];
    let totalMoney = req.body['totalMoney']
    let type = req.body['type_']
    console.log(money)
    console.log(userName)
    console.log(password)
    console.log("Type_", type)
    console.log("email is", email)
    try {
        let user = await userService.register(userName, password, email, age, money, totalMoney, type);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: "User already existed" });
    }

}
const login = async function(req, res, next) {
    let userName = req.body['userName'];
    let password = req.body['password'];
    try {
        let user = await userService.login(userName, password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        let status_code = "200"
        res.status(200).send({ token, status_code });
    } catch (err) {
        console.log(err)
        res.status(404).send({ message: "Invalid user" });
    }
}
const getUserById = async function(req, res, next) {
    console.log('Req ', req.params);
    let userId = req.params.userId;
    let user = userService.getUserById(userId);
    return res.status(200).json(user);
}
const getallUser = async function(req, res, next) {
    try {
        const users = await userService.getAllUser();
        if (!users) throw Error('No users');
        await res.status(200).json(users);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}

const updateUser = async function(req, res, next) {
    console.log("UpdateFood")
    let UserId = req.params['UserId'];
    let User = req.body;
    console.log(UserId)
    console.log(User)
    try {
        const updateUser = await userService.updateUser(UserId, User);
        if (!updateFood) throw Error('Cannot update user');
        await res.status(200).json(updateUser);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const RemoveAccount = async function(req, res, next) {
    userId = req.params["UserId"]
    console.log(userId)
    try {
        const users = await userService.RemoveAccount(userId);
        if (!users) throw Error("Can't Remove account");
        await res.status(200).json(users);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}

module.exports = {
    getUserById,
    registerUser,
    login,
    getallUser,
    RemoveAccount,
    updateUser
}