var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileExists = require('file-exists');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
   
   var tweets;
   var pollData;

   if (fileExists('tweets.json')) {
      tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf8'));      /* grab the json from the text file */
      for(var y=0; y<tweets.statuses.length; y++) {
         tweets.statuses[y].created_at = moment(tweets.statuses[y].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format('h:mm A - D MMM YYYY');
      }
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
