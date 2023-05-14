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
const serchMessage = async function(req, res, next){
    let SendId = req.params['SendId'];
    let recivedID = req.params['recivedID'];
    try{
        const serch_Message = await MessagesService.SerchMessage(SendId,recivedID);
        if (!serchMessage) throw Error('Cannot serch Message');
        await res.status(200).json(serch_Message)
    }
    catch(err){
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
const UpdateMessage_ = async function(req, res, next) {
    console.log("UpdateMessage")
    let MessageId = req.params['MessageId'];
    let Message = req.body;
    console.log("Message", Message)
    try {
        const updateMessage = await MessagesService.UpdateMessage(MessageId, Message);
        if (!updateMessage) throw Error('Cannot update Message');
        await res.status(200).json(updateMessage);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
module.exports = {
    getAllMessage,
    newMessage,
    deleteMessage,
    sendCodeMessage,
    UpdateMessage_,
    serchMessage
}