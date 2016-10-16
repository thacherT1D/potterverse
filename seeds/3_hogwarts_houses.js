'use strict';

exports.seed = function(knex) {
  return knex('hogwarts_houses').del()
    .then(() => {
      return knex('hogwarts_houses').insert([{
        "id": 1,
        "house_name": "Gryffindor",
        "house_ghost": "Nearly Headless Nick",
        "house_founder": "Godric Gryffindor",
        "house_color": "Red",
        "house_mascot": "Lion",
        "house_crest_image_url": "http://i.imgur.com/e1fjVZx.png",
        "house_head_character_id": 10
      },
      {
        "id": 2,
        "house_name": "Slytherin",
        "house_ghost": "Bloody Baron",
        "house_founder": "Salazar Slytherin",
        "house_color": "Green",
        "house_mascot": "Serpent",
        "house_crest_image_url": "http://i.imgur.com/ldcDMbR.png",
        "house_head_character_id": 11
      },
      {
        "id": 3,
        "house_name": "Ravenclaw",
        "house_ghost": "Grey Lady",
        "house_founder": "Rowena Ravenclaw",
        "house_color": "Blue",
        "house_mascot": "Eagle",
        "house_crest_image_url": "http://i.imgur.com/LAbfOPL.png",
        "house_head_character_id": 12
      },
      {
        "id": 4,
        "house_name": "Hufflepuff",
        "house_ghost": "Fat Friar",
        "house_founder": "Helga Hufflepuff",
        "house_color": "Yellow",
        "house_mascot": "Badger",
        "house_crest_image_url": "http://i.imgur.com/9L7sZiE.png",
        "house_head_character_id": 13
      }
    ]);
  });
};
