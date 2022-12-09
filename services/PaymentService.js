let Payment = require('../model/PaymentHistory');
const getAllPayment = async() => {
    return Payment.find();
};
const newPayMent = async(payMent) => {
    const newPayMent = new Payment(payMent);
    return newPayMent.save();
}
module.exports = {
    getAllPayment,
    newPayMent
}