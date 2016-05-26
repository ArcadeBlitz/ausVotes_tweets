var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
   
   var tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf8'));      /* grab the json from the text file */
   res.render('index', { title: '#ausvotes', data: tweets });

});

module.exports = router;
