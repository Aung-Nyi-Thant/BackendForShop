var express = require('express');
var router = express.Router();
let messages = require('../controllers/MessageController');
let messsagess = require('../services/MessageService')
let path = require('path');


router.get('/getAllMessages', messages.getAllMessage);
router.post('/', messages.newMessage)
router.delete('/:MessageId', messages.deleteMessage)
router.patch('/:MessageId', messages.UpdateMessage_)
router.get('/sendCode', messages.sendCodeMessage)
router.get('SerchMessage/:SendId/:recivedID',messages.serchMessage)
module.exports = router