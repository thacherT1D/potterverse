'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/data/characters', (req, res, next) => {
  knex('characters')
    .select().then((results) => {
      const characterResults = {characters: results};
      const jsonCharacterResults = JSON.stringify(characterResults);
      res.send(jsonCharacterResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/characters/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('characters')
    .where('id', id)
    .first()
    .then((results) => {
      const characterResults = {characters: results};
      const jsonCharacterResults = JSON.stringify(characterResults);
      res.send(jsonCharacterResults);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
