var express = require('express');
var router = express.Router();

const getRandomPokepunk = require('../utils/random-pokepunk');

router.get('/', function(req, res, next) {
  res.render('index', { pokepunk: getRandomPokepunk() });
});

module.exports = router;
