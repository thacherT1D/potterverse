'use strict';

exports.seed = function(knex) {
  return knex('characters_basic').del()
    .then(() => {
      return knex('characters_basic').insert([{
        "id": 1,
        "name": "Harry Potter",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/lX3lE9V.jpg",
        "characters_detailed_id": 1
      },
      {
        "id": 2,
        "name": "Hermione Granger",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/kvexDei.jpg",
        "characters_detailed_id": 2
      },
      {
        "id": 3,
        "name": "Ron Weasley",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/rY7RSAc.jpg",
        "characters_detailed_id": 3
      },
      {
        "id": 4,
        "name": "Ginny Weasley",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/YO9CWSl.jpg",
        "characters_detailed_id": 4
      },
      {
        "id": 5,
        "name": "Luna Lovegood",
        "school": "Hogwarts",
        "house": "Ravenclaw",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/11GYGVT.jpg",
        "characters_detailed_id": 5
      },
      {
        "id": 6,
        "name": "Neville Longbottom",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/naqfkln.jpg",
        "characters_detailed_id": 6
      },
      {
        "id": 7,
        "name": "Dean Thomas",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/l87Gqdk.jpg",
        "characters_detailed_id": 7
      },
      {
        "id": 8,
        "name": "Seamus Finnigan",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Student",
        "image_url": "http://i.imgur.com/dXRY0lC.jpg",
        "characters_detailed_id": 8
      },
      {
        "id": 9,
        "name": "Albus Dumbledore",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Headmaster",
        "image_url": "http://i.imgur.com/G0mKTxy.jpg",
        "characters_detailed_id": 9
      },
      {
        "id": 10,
        "name": "Minerva McGonnagal",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "role": "Hogwarts Professor",
        "image_url": "http://i.imgur.com/sjgazI7.jpg",
        "characters_detailed_id": 10
      },
      {
        "id": 11,
        "name": "Serverus Snape",
        "school": "Hogwarts",
        "house": "Slytherin",
        "role": "Hogwarts Professor",
        "image_url": "http://i.imgur.com/sjgazI7.jpg",
        "characters_detailed_id": 11
      },
      {
        "id": 12,
        "name": "Filius Flitwick",
        "school": "Hogwarts",
        "house": "Ravenclaw",
        "role": "Hogwarts Professor",
        "image_url": "http://i.imgur.com/rThf0UO.png",
        "characters_detailed_id": ""
      },
      {
        "id": 13,
        "name": "Pomona Sprout",
        "school": "Hogwarts",
        "house": "Hufflepuff",
        "role": "Hogwarts Professor",
        "image_url": "http://i.imgur.com/A4DtpYV.jpg",
        "characters_detailed_id": ""
      },
      {
        "id": 14,
        "name": "Olympe Maxime",
        "school": "Beauxbatons",
        "house": "",
        "role": "Beauxbatons Headmaster",
        "image_url": "http://i.imgur.com/2oVxUni.jpg",
        "characters_detailed_id": ""
      },
      {
        "id": 15,
        "name": "Igor Karkaroff",
        "school": "Durmstrang",
        "house": "",
        "role": "Durmstrang Headmaster",
        "image_url": "http://i.imgur.com/CuGA0Tv.jpg",
        "characters_detailed_id": ""
      }
    ]);
  });
};
