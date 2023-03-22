var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');
const { db } = require('./config/database');
const multer = require('multer');
let customLogger = require('./middleware/DemoLogger');
let auth = require('./middleware/auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminRouter = require('./routes/admin');
let movieRouter = require('./routes/movies');
let reviewRouter = require('./routes/reviews');
let FoodRoter = require('./routes/FoodRouter')
let MessageRouter = require('./routes/messageRouter')
let CartsRouter = require('./routes/Cart')
let ImageRouter = require('./routes/ImageRouter')
let PayMentRouter = require('./routes/PayMentRouter')
let PostRouter = require('./routes/PosterRouter')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(customLogger.logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let PORT = process.env.PORT || 3001;

mongoose.set('strictQuery', false);


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://thantaungnyi:Accmobile001@cluster0.wbtexqy.mongodb.net/test");
        console.log(`MongoDB connect ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}
// mongoose.connect(db, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(() => console.log('MongoDB connected!'))
//     .catch(err => console.log(err));
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    })
})

app.use('/', indexRouter);
/*
app.use('/admin/*',function(req,res,next)
{
  res.send('Admin/*');
});

 */
app.use('/admin', adminRouter);
app.use('/api/users', usersRouter);
app.use('/api/movies', /*auth.verifyUserToken,*/ movieRouter);
app.use('/api/reviews', /*auth.verifyUserToken,*/ reviewRouter);
app.use('/api/foods', FoodRoter)
app.use('/api/messages', MessageRouter)
app.use('/api/carts', CartsRouter)
app.use('/api/image', ImageRouter)
app.use('/api/payMent', PayMentRouter)
app.use('/api/poster', PostRouter)

app.use('/test', (req, res, next) => {
    res.send('Test router');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('testImage')
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newImage = new Imagemodal({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
                .then(() => res.send('successful uploaded'))
                .catch(err => console.log(err))
        }
    })
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;