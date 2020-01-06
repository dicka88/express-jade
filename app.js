var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var db = require('./config/database')

var app = express();

//---------------ROUTER----------------//
var indexRouter = require('./routes/index');
//--------------END ROUTER ------------//

// Connect to Database
db.connect(err => {
    if (err) throw err
    console.log("MySQL connected to db Node");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Body Parser
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

//Static URL
app.use(express.static(path.join(__dirname, 'public')));

//static path url
app.use('/fontawesome', express.static('./node_modules/@fortawesome/fontawesome-free/'))

//basic routing
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // next(createError(404));
    res.render('404', { title: 'Error Page' })
});

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