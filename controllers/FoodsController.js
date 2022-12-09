let FoodsService = require('../services/FoodService');

const getAllFoods = async function (req, res, next) {
    console.log("getAllFoods")
    try {
        const foods = await FoodsService.GetAllfoods();
        if(!foods) throw Error('No Foods');
        await res.status(200).json(foods);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
};
const newFoods = async function (req, res, next) {
    console.log("New Food -->",req.foods);
    try {
        const food = await FoodsService.newFoods(req.body);
        if(!food) throw Error('Cannot save food');
        await res.status(201).json(food);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const findFoodByID = async function (req,res,next)
{
    console.log("Find by ID")
    let FoodId = req.params['foodId'];
    try {
        const Food = await FoodsService.getFoodById(FoodId);
        if(!Food) throw Error('No Food found');
        await res.status(200).json(Food);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}
const findFoodByName = async function (req, res, next)
{
    console.log("FoodFindByName")
    let FoodName = req.params['FoodName'];
    try {
        console.log("Find By name")
        const Food = await FoodsService.getFoodByName(FoodName);
        if(!Food) throw Error('No Food found');
        await res.status(200).json(Food);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
};
const findFoodByTaste = async function (req,res,next)
{
    let taste = req.params['taste'];
    try {
        const foods = await FoodsService.searchFoodByTaste(taste);
        if(!foods) throw Error('No foods found');
        await res.status(200).json(foods);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}
const updateFood = async function (req,res,next)
{
    console.log("UpdateFood")
    let FoodId = req.params['FoodId'];
    let Food = req.body;
    console.log(`new Food${Food["Prices"]}`);
    try {
        const updateFood = await FoodsService.updateFood(FoodId,Food);
        if(!updateFood) throw Error('Cannot update food');
        await res.status(200).json(updateFood);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
} ;
const deleteFood = async function (req,res,next)
{
    console.log("Delete Food")
    let FoodId = req.params['FoodId'];
    try {
        const deleteFood = await FoodsService.DeleteFood(FoodId);
        if(!deleteFood) throw Error('Cannot delete food');
        await res.status(200).json(deleteFood);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
} ;
const findFood1ByTaste = async function (req, res, next)
{
    console.log("FindFoodByTaste")
    let FoodTaste = req.params['Taste'];
    if (FoodTaste=="Sweet"){
        FoodTaste = "sweet"
    }
    else if(FoodTaste=="hot"){
        FoodTaste = "Hot"
    }
    else if(FoodTaste=="Bitter"){
        FoodTaste = "bitter"
    }else if(FoodTaste =="sweet"){
        //pass
    }else if(FoodTaste == "Hot"){
        //pass
    }else if(FoodTaste == "bitter"){
        //pass
    }
    else{
        FoodTaste = "Full"
    }
    console.log(FoodTaste)
    try {
        const Food = await FoodsService.findByTaste(FoodTaste);
        console.log("Step 1")
        if(!Food) throw Error('No Food found');
        await res.status(200).json(Food);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
};
const findFoodByAge = async function(req, res, next)
{
    console.log("FindFoodByAge")
    let is = false
    let limitAge = req.params['Age'];
    let Age = limitAge.replace("+","")
    let R_Age = Age+"+"
    console.log(R_Age)
    try {
        const Food = await FoodsService.findByAge(limitAge);
        console.log("Step 1")
        if(!Food) throw Error('No Food found');
        await res.status(200).json(Food);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}

module.exports = {
    findFoodByName,
    updateFood,
    getAllFoods,
    newFoods,
    findFoodByID,
    deleteFood,
    findFoodByTaste,
    findFoodByAge,
}