const express = require('express');
const { config } = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const Message = require('../model/Message');

const GetAllMessage = async() => {
    message = Message.find();
    return message
};
const newMessage = async(message) => {
    const newMessage = new Message(message);
    return newMessage.save();
}
const DeleteMessage = async(MessageId) => {
    const DeleteMessage = Message.findByIdAndDelete(MessageId)
    return DeleteMessage
}
const UpdateMessage = async(Message, MessageId) => {
    console.log("Message", Message)
    let newMessage = Message.findByIdAndUpdate(MessageId, Message, { new: true })
    console.log("This is new message", newMessage)
    return newMessage;
}
const sendCodeMessage = async() => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'thantaungnyi@gmail.com',
            pass: 'accmobile123'
        }
    });

    var mailOptions = {
        from: 'thantaungnyi@gmail.com',
        to: 'aungnyithant6@gmal.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return "Successful"
}
module.exports = {
    GetAllMessage,
    newMessage,
    DeleteMessage,
    sendCodeMessage,
    UpdateMessage
}