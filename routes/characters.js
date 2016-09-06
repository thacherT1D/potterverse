var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

function characters() {
  return knex('characters');
}

// function hogwarts_houses() {
//   return knex('hogwarts_houses');
// }

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

router.post('/characters', function(req, res) {
  var newCharacter = {
    c_first: req.body.c_first,
    c_last: req.body.c_last,
    c_house: req.body.c_house,
    c_desc: req.body.c_desc
  }
  characters().insert(newCharacter).then(function(result){
    res.redirect('/characters');
  });

});

router.get('/characters/new', function(req, res) {
    res.render('characters/new');
});

module.exports = router;
