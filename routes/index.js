/*jshint esversion: 6 */

// This is another use for the Express module: it can create a router entity that is configurable outside of any application instance. Think of router as a box for routes; a 'mini-application' capable of only performing middleware and routing functions. All the app.VERB functions can instead be written as router.VERB (docs). We export this router so that app.js can use it as a middleware handler for all / routes and subroutes. In other words, we tell app.js "here, use this box full of routes that we made in a separate file."

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const chalk = require('chalk');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
router.use(bodyParser.json()); // would be for AJAX requests

router.use('/', function (req, res) {
  console.log(chalk.blue('Went to routers'));
  let allTweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: allTweets, showForm: true });
});

router.get('/user/:username', function(req, res, next) {
  let userTweets = tweetBank.find({name: req.params.username});
  res.render('index', {title: 'Twitter.js', tweets: userTweets, showForm: true, username: req.params.username});
});

router.get('/tweets/:id', function(req, res, next) {
  let tweet = tweetBank.find({id: +req.params.id});
  res.render('index', {title: 'Twitter.js', tweets: tweet});
});

router.post('/tweets', function(req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
  next();
});

router.use(express.static('public'));

module.exports = router;
