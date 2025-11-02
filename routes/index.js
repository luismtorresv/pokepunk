var express = require('express');
var router = express.Router();
var os = require('os');
var pokemons = require('../data/pokepunk');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokepunk' });
});

router.get('/api/pokenea', function(req, res, next) {
  const pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
  res.json({
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    ability: pokemon.ability,
    quote: pokemon.quote,
    image: pokemon.image,
    container: os.hostname()
  });
});

module.exports = router;
