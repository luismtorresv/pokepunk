var os = require('os');

function getRandomPokepunk() {
  var pokepunks = require('../data/pokepunks');
  const pokepunk = pokepunks[Math.floor(Math.random() * pokepunks.length)];
  return {
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
  };
}

module.exports = getRandomPokepunk;
