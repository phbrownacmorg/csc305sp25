var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Forms demo, CSC 305, spring 2025' });
});

module.exports = router;
