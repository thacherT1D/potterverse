var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

function characters() {
  return knex('characters');
}

function hogwarts_houses () {
  return knex('hogwarts_houses');
}

/* GET users listing. */
router.get('/characters', function(req, res, next) {
  characters().select().then(function(results) {
  });
  res.render('characters/index', {characters: results});
});


module.exports = router;
