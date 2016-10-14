var express = require('express');
var router = express.Router();

var knex = require('../knex');

function characters() {
  return knex('characters');
}

function hogwarts_houses() {
  return knex('hogwarts_houses');
}

router.get('/data', function(req, res, next) {
  res.render('data/index');
});

router.get('/data/characters', (req, res) => {
  characters().select().then(function(results){
    var characterResults = {characters: results};
    var jsonCharacterResults = JSON.stringify(characterResults);
    res.send(jsonCharacterResults);
  });
});

router.get('/data/houses', (req, res) => {
  hogwarts_houses().select().then(function(results){
    var houseResults = {houses: results};
    var jsonHouseResults = JSON.stringify(houseResults);
    res.send(jsonHouseResults);
  });
});


module.exports = router;
