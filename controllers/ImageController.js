let ImageService = require('../services/IMageService');
const multer = require('multer')
const getAllImage = async function(req, res, next) {
    console.log("Get all Images ");
    try {
        const image = await ImageService.getAllImage();
        if (!image) throw Error('Cannot get images');
        await res.status(201).json(image);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ image: err })
    }
}
module.exports = {
    getAllImage
}