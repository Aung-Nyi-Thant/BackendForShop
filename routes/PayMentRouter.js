var express = require('express');
var router = express.Router();
let payMent = require('../controllers/PaymentController');

router.get('/', payMent.getAllPayMent)
router.post('/newPayMent', payMent.newPayMent)
module.exports = router;