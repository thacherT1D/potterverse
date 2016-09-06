var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

function characters() {
  return knex('characters');
}

router.get('/characters', function(req, res) {
  characters().select().then(function(results){
  res.render('characters/index', {characters: results});
  });
});

router.get('/characters/menu', (req, res) => {
  characters().select().then(function(results){
    var characterResults = {characters: results};
    var jsonCharacterResults = JSON.stringify(characterResults);
    res.send(jsonCharacterResults);
  });
});


module.exports = router;
