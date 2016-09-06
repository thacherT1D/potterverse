var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

function characters() {
  return knex('characters');
}

function hogwarts_houses() {
  return knex('hogwarts_houses');
}

router.get('/characters', function(req, res) {
  characters().select().then(function(results){
  res.render('characters/index', {characters: results});
  });
});

// router.get('/characters', function(req, res) {
//   hogwarts_houses().select().then(function(results){
//   res.render('characters/index', {hogwarts_houses: results});
//   });
// });

router.get('/characters/data', (req, res) => {
  characters().select().then(function(results){
    var characterResults = {characters: results};
    var jsonCharacterResults = JSON.stringify(characterResults);
    res.send(jsonCharacterResults);
  });
});

router.get('/characters/housedata', (req, res) => {
  hogwarts_houses().select().then(function(results){
    var houseResults = {houses: results};
    var jsonHouseResults = JSON.stringify(houseResults);
    res.send(jsonHouseResults);
  });
});

router.get('/characters/new', function(req, res) {
    res.render('characters/new');
});

module.exports = router;
