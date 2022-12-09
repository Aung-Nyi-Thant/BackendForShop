var express = require('express');
var router = express.Router();
let Carts = require('../controllers/CartController');

router.get('/', Carts.getAllCarts)
router.post('/creCart', Carts.newCarts)
router.delete("/delete/:CartId", Carts.DeleteCart)





module.exports = router;