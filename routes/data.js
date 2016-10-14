const express = require('express');
const router = express.Router();

const knex = require('../knex');

function characters() {
  return knex('characters');
}

// function hogwarts_houses() {
//   return knex('hogwarts_houses');
// }

// router.get('/data', function(req, res, next) {
//   res.render('data/index');
// });

router.get('/data/characters', (req, res) => {
  characters().select().then(function(results){
    const characterResults = {characters: results};
    const jsonCharacterResults = JSON.stringify(characterResults);
    res.send(jsonCharacterResults);
  });
});

// router.get('/data/houses', (req, res) => {
//   hogwarts_houses().select().then(function(results){
//     const houseResults = {houses: results};
//     const jsonHouseResults = JSON.stringify(houseResults);
//     res.send(jsonHouseResults);
//   });
// });


module.exports = router;
