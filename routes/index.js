var express = require('express');
var router = express.Router();
var os = require('os');
var pokepunks = require('../data/pokepunks');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokepunk' });
});

router.get('/api/pokepunk', function(req, res, next) {
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
