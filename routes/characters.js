var express = require('express');
var router = express.Router();

var knex = require('knex');

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

router.get('/characters/new', function(req, res) {
  res.render('characters/new');
});

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

router.get('/characters/:id', function(req, res, next) {
  characters().where({'c_id': req.params.id}).then(function (results) {
    return knex('characters').then(function() {
      res.render('characters/detail', {character: results});
    });
  });
});

router.get('/characters/:id/update', function(req, res, next) {
  characters().where({'c_id': req.params.id}).then(function (results) {
    return knex('characters').then(function() {
      res.render('characters/update', {character: results});
    });
  });
});

router.put('/characters/:id/update', function(req, res, next) {
  characters().where({c_id: req.params.id})
  .update({
    c_first: req.body.c_first,
    c_last: req.body.c_last,
    c_house: req.body.c_house,
    c_desc: req.body.c_desc
  }).then(function () {
      res.redirect('/characters');
  });
});

router.delete('/characters/:id', function(req, res, next) {
  characters().del().where({c_id: req.params.id}).then(function () {
    res.redirect('/characters');
  });
});

module.exports = router;
