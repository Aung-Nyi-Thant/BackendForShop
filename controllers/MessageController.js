let MessagesService = require('../services/MessageService');

const getAllMessage = async function(req, res, next) {
    console.log("getAllFoods")
    try {
        const messages = await MessagesService.GetAllMessage();
        if (!messages) throw Error('No Foods');
        await res.status(200).json(messages);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const newMessage = async function(req, res, next) {
    console.log("new message ", req.body);
    try {
        const movie = await MessagesService.newMessage(req.body);
        if (!movie) throw Error('Cannot save message');
        await res.status(201).json(movie);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}
const deleteMessage = async function(req, res, next) {
    console.log("Delete Message")
    let MessageId = req.params['MessageId'];
    console.log(MessageId)
    try {
        const deleteMessage = await MessagesService.DeleteMessage(MessageId);
        if (!deleteMessage) throw Error('Cannot delete Message');
        await res.status(200).json(deleteMessage);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const sendCodeMessage = async function(req, res, next) {
    try {

        const message = await MessagesService.sendCodeMessage()

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}
module.exports = {
    getAllMessage,
    newMessage,
    deleteMessage,
    sendCodeMessage
}