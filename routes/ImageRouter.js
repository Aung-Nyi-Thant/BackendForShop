var express = require('express');
var router = express.Router();
let ImageController = require('../controllers/ImageController');
let Imagemodal = require('../model/Image')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('testImage')
router.post('/upload', (req, res) => {
    console.log(req.body.file)
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(req.file.filename)
            const newImage = new Imagemodal({
                name: req.file.filename,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            console.log(newImage)
            newImage.save()
                .then(() => res.send('successful uploaded'))
                .catch(err => console.log(err))
        }
    })
});
router.get('/', ImageController.getAllImage)
router.get('/Image/:imageName', )
module.exports = router