var express = require('express');
var os = require('os');

var router = express.Router();

router.get('/pokepunk', function(req, res, next) {
  var pokepunks = require('../data/pokepunks');
  const pokepunk = pokepunks[Math.floor(Math.random() * pokepunks.length)];
  res.json({
    data: {
      id: pokepunk.id,
      name: pokepunk.name,
      height: pokepunk.height,
      ability: pokepunk.ability,
      quote: pokepunk.quote,
      image: pokepunk.image,
    },
    meta: {
      container: os.hostname()
    }
  });
});

module.exports = router;
