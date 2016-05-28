var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
   
   var tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf8'));      /* grab the json from the text file */
   var pollData = JSON.parse(fs.readFileSync('polls.json', 'utf8'));      /* grab the json from the text file */
   res.render('index', { title: '#ausvotes', data: tweets, polls: pollData });

});

module.exports = router;
