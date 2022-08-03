// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;

// var PORT = 3006;
// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const createError = require('http-errors');

const auth = require('./middleware/auth');
const headers = require('./middleware/headers');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lecturersRouter = require('./routes/lecturers');
var coursesRouter = require('./routes/courses');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'exports')));

app.use(headers);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lecturers', lecturersRouter);
app.use('/courses', coursesRouter);



// catch 404 err forward error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// })

// custom error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.locals.message = err.message;
    res.locals.error = err;

    res.status(500).send(err);
})

module.exports = app;