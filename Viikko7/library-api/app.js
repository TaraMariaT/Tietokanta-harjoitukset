var express = require('express');
var path = require('path');
var logger = require('morgan');

var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', bookRouter);
app.use('/borrowers', borrowerRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Library API is running' });
});

module.exports = app;