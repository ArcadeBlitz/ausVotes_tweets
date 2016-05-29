var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
   
   var tweets;
   var pollData;

   fs.stat('tweets.json', function(err, stats) {
      if (err == null) {
         tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf8'));      /* grab the json from the text file */
      } else if(err.code == 'ENOENT') {
         console.log(err);
         tweets = null;
      } else {
         console.log(err);
      }
   });
   
   fs.stat('polls.json', function(err, stats) {
      if (err == null) {
         pollData = JSON.parse(fs.readFileSync('polls.json', 'utf8'));      /* grab the json from the text file */
      } else if(err.code == 'ENOENT') {
         console.log(err);
         pollData = null;
      } else {
         console.log(err);
      }
   });
   
   res.render('index', { title: '#ausvotes', data: tweets, polls: pollData });

});

module.exports = router;
