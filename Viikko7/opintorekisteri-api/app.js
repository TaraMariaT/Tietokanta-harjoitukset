var express = require('express');
var logger = require('morgan');

var opiskelijaRouter = require('./routes/opiskelija');
var opintojaksoRouter = require('./routes/opintojakso');
var arviointiRouter = require('./routes/arviointi');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/opiskelijat', opiskelijaRouter);
app.use('/opintojaksot', opintojaksoRouter);
app.use('/arvioinnit', arviointiRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Opintorekisteri API running' });
});

module.exports = app;
