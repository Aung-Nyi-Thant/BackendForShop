var express = require('express');
var router = express.Router();
let Poster = require('../controllers/PosterController');
const multer = require('multer');
router.get('/', Poster.getAllPoster)
router.post('/newPost', Poster.newPost)
const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('photo'), (req, res) => {
    // Handle the uploaded photo here
    // You can save the file, generate a unique filename, etc.

    // For this example, we'll assume the file is saved as 'uploads/photo.jpg'
    const photoUrl = req.protocol + '://' + req.get('host') + '/uploads/photo.jpg';

    res.json({ photoUrl });
});
module.exports = router;