var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db');

var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
var logRouter = require('./routes/log');
var lineainovadoraRouter = require('./routes/lineainovadora');
var proyectoRouter = require('./routes/proyecto');
var reporte4Router = require('./routes/reporte4');
var informetecnicoRouter = require('./routes/informetecnico');
var reporte1Router = require('./routes/reporte1');
var reporte2Router = require('./routes/reporte2');
var reporte3Router = require('./routes/reporte3');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/log', logRouter);
app.use('/lineainovadora', lineainovadoraRouter);
app.use('/proyecto', proyectoRouter);
app.use('/reporte4', reporte4Router);
app.use('/informetecnico', informetecnicoRouter);
app.use('/reporte1', reporte1Router);
app.use('/reporte2', reporte2Router);
app.use('/reporte3', reporte3Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
