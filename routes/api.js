var express = require('express');
var router = express.Router();

const getRandomPokepunk = require('../utils/random-pokepunk');

router.get('/pokepunk', function(req, res, next) {
  const pokepunk = getRandomPokepunk();
  res.json(pokepunk);
});

module.exports = router;
