var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var abjad = ["abcdefghijkl"]
  res.render('index', { title: 'allalaal', kirim : abjad});
});

module.exports = router;
