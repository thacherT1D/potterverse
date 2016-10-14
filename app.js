'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config;
}


var express = require('express');
var app = express();
var handlebars = require('handlebars');

app.disable('x-powered-by');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
var characters = require('./routes/characters');
var data = require('./routes/data');

app.use('/', routes);
app.use('/', characters);
app.use('/', data);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }
  // console.error(JSON.stringify(err, null, 2));
  // if(err.status) {
  //   return res
  //     .status(err.status)
  //     .set('Content-Type', 'text/plain')
  //     .send(err.statusText)
  // }
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
  }
});

module.exports = app;
