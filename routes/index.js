var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileExists = require('file-exists');

/* GET home page. */
router.get('/', function(req, res, next) {
   
   var tweets;
   var pollData;

   if (fileExists('tweets.json')) {
      tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf8'));      /* grab the json from the text file */
   } else {
      tweets = false;
   }

   if (fileExists('polls.json')) {
      pollData = JSON.parse(fs.readFileSync('polls.json', 'utf8'));      /* grab the json from the text file */
   } else {
      pollData = false;
   }
   
   res.render('index', { title: '#ausvotes', data: tweets, polls: pollData });
});

module.exports = router;
