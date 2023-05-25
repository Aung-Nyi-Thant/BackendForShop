var express = require('express');
var router = express.Router();
let ImageController = require('../controllers/ImageController');
let Imagemodal = require('../model/Image')
const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads' )
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});
const upload = multer({storage:storage})
router.post('/imageUpload',upload.single('testImage'),(req,res)=>{
    const saveImage = new Imagemodal({
        name:req.body.name,
        image:{
            data:fs.readFileSync('uploads/'+req.file.filename),
            contentType:"image/png"
        }
    })
    saveImage.save()
    .then((res)=>{console.log('image is saved')})
    .catch((err)=>{console.log(err)})
})
router.get('/getAllImage',(req,res)=>{
    let Images = Imagemodal.find()
    return Images
})
module.exports = router