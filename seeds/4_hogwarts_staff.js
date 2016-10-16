'use strict';

exports.seed = function(knex) {
  return knex('hogwarts_staff').del()
    .then(() => {
      return knex('hogwarts_staff').insert([{
        "id": 1,
        "position": "Headmaster",
        "name": "Albus Dumbledore",
        "characters_basic_id": 9
      },
      {
        "id": 2 ,
        "position": "Transfiguration Professor",
        "name": "Minerva McGonnagal",
        "characters_basic_id": 10
      },
      {
        "id": 3 ,
        "position": "Head of Gryffindor House",
        "name": "Minerva McGonnagal",
        "characters_basic_id": 10
      },
      {
        "id": 4,
        "position": "Potions Professor",
        "name": "Severus Snape",
        "characters_basic_id": 11
      },
      {
        "id": 5,
        "position": "Head of Slytherin House",
        "name": "Severus Snape",
        "characters_basic_id": 11
      },
      {
        "id": 6,
        "position": "Head of Ravenclaw House",
        "name": "Filius Flitwick",
        "characters_basic_id": 12
      },
      {
        "id": 7,
        "position": "Charms Professor",
        "name": "Filius Flitwick",
        "characters_basic_id": 12
      },
      {
        "id": 8,
        "position": "Head of Hufflepuff House",
        "name": "Pomona Sprout",
        "characters_basic_id": 13
      },
      {
        "id": 9,
        "position": "Herbology Professor",
        "name": "Pomona Sprout",
        "characters_basic_id": 13
      }
    ]);
  });
};
