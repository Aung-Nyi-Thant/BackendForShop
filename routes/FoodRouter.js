var express = require('express');
var router = express.Router();
let foods = require('../controllers/FoodsController');


router.get('/',foods.getAllFoods)
router.get('/:foodId', foods.findFoodByID);
router.get('/foodname/:FoodName', foods.findFoodByName)
router.post('/',foods.newFoods)
router.patch('/:FoodId',foods.updateFood)
router.delete('/:FoodId',foods.deleteFood)
// router.get('/Taste/:Taste',foods.findFood1ByTaste)
router.get('/Age/:Age',foods.findFoodByAge)
router.get('/Taste/:taste',foods.findFoodByTaste)
module.exports = router