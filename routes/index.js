var express = require('express');
var router = express.Router();
var os = require('os');

const pokemons = [
  {
    id: 1,
    name: 'Arbok',
    height: 1.2,
    ability: 'Shed Skin',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/024-arbok.png',
    quote: 'I shed my past to move forward.'
  },
  {
    id: 2,
    name: 'Ekans',
    height: 0.8,
    ability: 'Intimidate',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/023-ekans.png',
    quote: 'Fear makes way for respect.'
  },
  {
    id: 3,
    name: 'Fearow',
    height: 1.5,
    ability: 'Keen Eye',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/022-fearow.png',
    quote: 'From above, nothing escapes my sight.'
  },
  {
    id: 4,
    name: 'Kakuna',
    height: 0.6,
    ability: 'Shell Armor',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/014-kakuna.png',
    quote: 'Within this shell, I become something greater.'
  },
  {
    id: 5,
    name: 'Beedrill',
    height: 2.0,
    ability: 'Swarm',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/015-beedrill.png',
    quote: 'Together we are unstoppable.'
  },
  {
    id: 6,
    name: 'Caterpie',
    height: 1.6,
    ability: 'Shield Dust',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/010-caterpie.png',
    quote: 'Even the smallest can defend themselves.'
  },
  {
    id: 7,
    name: 'Blastoise',
    height: 1.7,
    ability: 'Torrent',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/009-blastoise.png',
    quote: 'My power flows like water without limit.'
  },
  {
    id: 8,
    name: 'Raichu',
    height: 2.0,
    ability: 'Static',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/026-raichu.png',
    quote: 'I spark with endless energy.'
  },
  {
    id: 9,
    name: 'Pikachu',
    height: 2.2,
    ability: 'Static',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/025-pikachu.png',
    quote: 'My electricity can light up the world.'
  },
  {
    id: 10,
    name: 'Nidoran',
    height: 2.0,
    ability: 'Rivalry',
    image: 'https://storage.googleapis.com/pokepunk-2025-2-ripjsb/pokemon/029-nidoran.png',
    quote: 'My horns carry the strength of my determination.'
  }
];

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
