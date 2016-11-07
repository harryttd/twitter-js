
/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const app = express(); // creates an instance of an express application
const port = 3000;

app.use(function (req, res, next) {
    // do your logging here
    console.log(chalk.red('This should go off every time.'));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
});

app.use('/special/', function (req, res, next) {
    // do your logging here
    console.log(chalk.green('You reached the special area.'));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
});

app.get('/', function(request, response) {
  response.send('Hello Colin!');
});

app.get('/news', function(request, response) {
  response.send('You are listening to the news.');
});

app.get('/special', function(request, response) {
  response.send('Hello Aryeh! You are in special!');
});

app.listen(port, (request, response) => {
  console.log(chalk.blue("server listening"));
});
