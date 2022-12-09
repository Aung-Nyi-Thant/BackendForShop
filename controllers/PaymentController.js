let payMentService = require('../services/PaymentService');
const getAllPayMent = async function(req, res, next) {
    try {
        const payMents = await payMentService.getAllPayment();
        if (!payMents) throw Error('No payMents');
        await res.status(200).json(payMents);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}
const newPayMent = async function(req, res, next) {
    console.log("new payment ", req.body);
    try {
        const Payment = await payMentService.newPayMent(req.body);
        if (!Payment) throw Error('Cannot save Payment');
        await res.status(201).json(Payment);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}
module.exports = {
    getAllPayMent,
    newPayMent
}