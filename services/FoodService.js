const express = require('express');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const Foods = require('../model/Foods');

const GetAllfoods = async ()=>{
    foods = Foods.find();
    return foods
};
const newFoods = async (foods)=>{
    const newFoods = new Foods(foods);
    return newFoods.save();
}
const getFoodById = async (foodId)=>{
    console.log(foodId)
    return Foods.findById(foodId)
}
const getFoodByName = async (foodName)=>{
    console.log(foodName)
    const Food = await Foods.find({
        Food_name: {
            $regex:foodName
        }
    });
    return Food;
}
const updateFood = async(FoodId,Food)=>{
    const newFood = await Foods.findByIdAndUpdate(FoodId, Food,{new: true});
    console.log("This is new food",newFood)
    return newFood;
}
const DeleteFood = async(FoodId)=>{
    const food = await Foods.findByIdAndDelete(FoodId);
    return food
}
const findByTaste = async (Taste)=>{
    const Food = await Foods.find({
        typeOfTaste: {
            $regex:Taste
        }
    });
    console.log(Food)
    return Food;
}
const findByAge = async (limitAge)=>{
    const Food = await Foods.find({
        age_permisssion: {
            $regex:limitAge
        }
    });
    return Food;
}
const searchFoodByTaste = async(foodTaste)=>
{
    const foods = await Foods.find({
        typeOfTaste: {
            $regex:foodTaste
        }
    });
    return  foods;
}
module.exports = {
    GetAllfoods,
    updateFood,
    newFoods,
    findByAge,
    getFoodById,
    getFoodByName,
    DeleteFood,
    findByTaste,
    searchFoodByTaste
}