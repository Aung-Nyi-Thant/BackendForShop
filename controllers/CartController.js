let CartsService = require('../services/CartService');

const getAllCarts = async function(req, res, next) {
    console.log("getAllCarts")
    try {
        const Carts = await CartsService.GetAllCart();
        if (!Carts) throw Error('No Carts');
        await res.status(200).json(Carts);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
};
const newCarts = async function(req, res, next) {
    console.log("New Carts -->", req.Cart);
    try {
        const Cart = await CartsService.newCart(req.body);
        if (!Cart) throw Error('Cannot save Cart');
        await res.status(201).json(Cart);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}
const DeleteCart = async function(req, res, next) {
    console.log("Delete Cart")
    let CartId = req.params['CartId'];
    try {
        const deleteCart = await CartsService.DeleteCart(CartId);
        if (!deleteCart) throw Error('Cannot delete Cart');
        await res.status(200).json(deleteCart);

    } catch (err) {
        await res.status(400).json({ message: err })
    }
}
module.exports = {
    getAllCarts,
    newCarts,
    DeleteCart
}