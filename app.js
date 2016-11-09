
/*jshint esversion: 6 */

const express = require('express');
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const morgan = require('morgan');
const port = 3000;

app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
app.set('view engine', 'html'); // have res.render work with html files
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

nunjucks.render('index.html', function (err, output) {
  if (err) return console.log(err);
  // console.log(output);
});

app.use(morgan('dev'));
app.use('/', routes);

app.listen(port, () => {
  console.log(chalk.blue("server listening"));
});


// // manually written static file middleware
// app.use(function(req, res, next) {
//   // Need to npm install mime
//   var mimeType = mime.lookup(req.path);
//   fs.readFile('./public' + req.path, function(err, fileBuffer) {
//     if (err) return next();
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer);
//   });
// });

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
