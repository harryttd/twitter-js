/*jshint esversion: 6 */
'use strict';

// This is another use for the Express module: it can create a router entity that is configurable outside of any application instance. Think of router as a box for routes; a 'mini-application' capable of only performing middleware and routing functions. All the app.VERB functions can instead be written as router.VERB (docs). We export this router so that app.js can use it as a middleware handler for all / routes and subroutes. In other words, we tell app.js "here, use this box full of routes that we made in a separate file."


const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'));

module.exports = router;
