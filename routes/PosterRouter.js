var express = require('express');
var router = express.Router();
let Poster = require('../controllers/PosterController');

router.get('/', Poster.getAllPoster)
router.post('/newPost', Poster.newPost)
module.exports = router;