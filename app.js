
/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const routes = require('./routes/');
const port = 3000;

app.use('/', routes);

app.use(function (req, res, next) {
    // do your logging here
    console.log(chalk.red('This should go off every time.'));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
});

// app.get('/style', function(req, res) {
//   res.sendFile(__dirname + '/public/stylesheets/style.css');
// });

// app.use('/special/', function (req, res, next) {
//     // do your logging here
//     console.log(chalk.green('You reached the special area.'));
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     next();
// });


// app.get(`/special/wizards`, function(req, res) {
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// });
//
// var wizards = {
//     title: 'Notterrible',
//     people: [
//         { name: 'Sarumon'},
//         { name: 'Harry' },
//         { name: 'Dumbledore'}
//     ]
// };

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
nunjucks.render('index.html', function (err, output) {
    console.log(output);
});

app.listen(port, (request, response) => {
  console.log(chalk.blue("server listening"));
});
