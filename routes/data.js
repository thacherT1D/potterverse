'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/data/characters_detailed', (req, res, next) => {
  knex('characters_detailed')
    .select().then((results) => {
      const characterResults = {characters: results};
      const jsonCharacterResults = JSON.stringify(characterResults);
      res.send(jsonCharacterResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/characters_detailed/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('characters_detailed')
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

router.get('/data/hogwarts_houses', (req, res, next) => {
  knex('hogwarts_houses')
    .select().then((results) => {
      const hogwartsHousesResults = {hogwartsHouses: results};
      const jsonHogwartsHousesResults = JSON.stringify(hogwartsHousesResults);
      res.send(jsonHogwartsHousesResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/hogwarts_houses/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('hogwarts_houses')
    .where('id', id)
    .first()
    .then((results) => {
      const hogwartsHousesResults = {hogwartsHouses: results};
      const jsonHogwartsHousesResults = JSON.stringify(hogwartsHousesResults);
      res.send(jsonHogwartsHousesResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/characters_basic', (req, res, next) => {
  knex('characters_basic')
    .select().then((results) => {
      const charactersBasicResults = {charactersBasic: results};
      const jsonCharacterBasicResults = JSON.stringify(charactersBasicResults);
      res.send(jsonCharacterBasicResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/characters_basic/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('characters_basic')
    .where('id', id)
    .first()
    .then((results) => {
      const charactersBasicResults = {charactersBasic: results};
      const jsonCharacterBasicResults = JSON.stringify(charactersBasicResults);
      res.send(jsonCharacterBasicResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/hogwarts_staff', (req, res, next) => {
  knex('hogwarts_staff')
    .select().then((results) => {
      const hogwartsStaffResults = {hogwartsStaff: results};
      const jsonHogwartsStaffResults = JSON.stringify(hogwartsStaffResults);
      res.send(jsonHogwartsStaffResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/hogwarts_staff/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('hogwarts_staff')
    .where('id', id)
    .first()
    .then((results) => {
      const hogwartsStaffResults = {hogwartsStaff: results};
      const jsonHogwartsStaffResults = JSON.stringify(hogwartsStaffResults);
      res.send(jsonHogwartsStaffResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/wizarding_schools', (req, res, next) => {
  knex('wizarding_schools')
    .select().then((results) => {
      const wizardingSchoolsResults = {wizardingSchools: results};
      const jsonWizardingSchoolsResults = JSON.stringify(wizardingSchoolsResults);
      res.send(jsonWizardingSchoolsResults);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/data/wizarding_schools/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('wizarding_schools')
    .where('id', id)
    .first()
    .then((results) => {
      const wizardingSchoolsResults = {wizardingSchools: results};
      const jsonWizardingSchoolsResults = JSON.stringify(wizardingSchoolsResults);
      res.send(jsonWizardingSchoolsResults);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
