'use strict';

var username = process.env.PGO_USERNAME || '';
var password = process.env.PGO_PASSWORD || '';
var provider = process.env.PGO_PROVIDER || '';

// var location = {
//   latitude: 37.78345180814602,
//   longitude: -122.39628374576567
// };

var location = 'Central Park, New York' /*{
  latitude: 39.977335,
  longitude: -75.123887
};*/

var stepsInEachDirection = 2;

var Pokespotter = require('../')(username, password, provider);

Pokespotter.get(location, {
  steps: stepsInEachDirection,
  requestDelay: 0
}).then(function (pokemon) {
  pokemon.forEach(function(p) {
    console.log(p.pokemonId, p.spawnPointId, p.name, p.distance + 'm');
  })
}).catch(function (err) {
  console.error(err);
})

// var geo = require('../lib/geo-helper');

// console.log(geo.getCoordinatesForSteps(location, 3));