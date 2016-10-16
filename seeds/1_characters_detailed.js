'use strict';

exports.seed = function(knex) {
  return knex('characters_detailed').del()
    .then(() => {
      return knex('characters_detailed').insert([{
        "id": 1,
        "first_name": "Harry",
        "last_name": "Potter",
        "middle_name": "James",
        "parents":["James Potter", "Lily Potter"],
        "born": "1980-07-31T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Stag",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/lX3lE9V.jpg"
      },
      {
        "id": 2,
        "first_name": "Hermione",
        "last_name": "Granger",
        "middle_name": "Jean",
        "parents":["Mr. Granger", "Mrs. Granger"],
        "born": "1979-09-19T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Otter",
        "blood_status": "Muggle-born",
        "image_url": "http://i.imgur.com/kvexDei.jpg"
      },
      {
        "id": 3,
        "first_name": "Ron",
        "last_name": "Weasley",
        "middle_name": "Bilius",
        "parents":["Molly Weasley", "Arthur Weasley"],
        "born": "1980-03-01T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Jack Russell Terrier",
        "blood_status": "Pure-blood",
        "image_url": "http://i.imgur.com/rY7RSAc.jpg"
      },
      {
        "id": 4,
        "first_name": "Ginny",
        "last_name": "Weasley",
        "middle_name": "Molly",
        "parents":["Molly Weasley", "Arthur Weasley"],
        "born": "1981-08-11T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Horse",
        "blood_status": "Pure-blood",
        "image_url": "http://i.imgur.com/YO9CWSl.jpg"
      },
      {
        "id": 5,
        "first_name": "Luna",
        "last_name": "Lovegood",
        "middle_name": "",
        "parents":["Xenophilius Lovegood", "Pandora Lovegood"],
        "born": "1981-02-13T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Ravenclaw",
        "patronous": "Hare",
        "blood_status": "Pure-blood",
        "image_url": "http://i.imgur.com/11GYGVT.jpg"
      },
      {
        "id": 6,
        "first_name": "Neville",
        "last_name": "Longbottom",
        "middle_name": "",
        "parents":["Alice Longbottom", "Frank Longbottom"],
        "born": "1980-07-30T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Non-corporeal",
        "blood_status": "Pure-blood",
        "image_url": "http://i.imgur.com/naqfkln.jpg"
      },
      {
        "id": 7,
        "first_name": "Dean",
        "last_name": "Thomas",
        "middle_name": "",
        "parents":["", ""],
        "born": "1980-01-01T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/l87Gqdk.jpg"
      },
      {
        "id": 8,
        "first_name": "Seamus",
        "last_name": "Finnigan",
        "middle_name": "",
        "parents":["Mr. Finnigan", "Mrs. Finnigan"],
        "born": "1980-01-01T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Fox",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/dXRY0lC.jpg"
      },
      {
        "id": 9,
        "first_name": "Albus",
        "last_name": "Dumbledore",
        "middle_name": "Percival Wulfric Brian",
        "parents":["Percival Dumbledore", "Kendra Dumbledore"],
        "born": "1981-06-01T00:00:00.000Z",
        "died": "1997-06-30T00:00:00.000Z",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Phoenix",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/G0mKTxy.jpg"
      },
      {
        "id": 10,
        "first_name": "Minerva",
        "last_name": "McGonnagal",
        "middle_name": "",
        "parents":["Robert McGonnagal", "Isobel Ross"],
        "born": "1935-10-04T00:00:00.000Z",
        "died": "",
        "school": "Hogwarts",
        "house": "Gryffindor",
        "patronous": "Phoenix",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/sjgazI7.jpg"
      },
      {
        "id": 11,
        "first_name": "Serverus",
        "last_name": "Snape",
        "middle_name": "",
        "parents":["Eileen Snape", "Tobias Snape"],
        "born": "1960-01-09T00:00:00.000Z",
        "died": "1998-05-29T00:00:00.000Z",
        "school": "Hogwarts",
        "house": "Slytherin",
        "patronous": "Doe",
        "blood_status": "Half-blood",
        "image_url": "http://i.imgur.com/sjgazI7.jpg"
      }
    ]);
  });
    // .then(() => {
    //   return knex.raw(
    //     "SELECT setval('id', (SELECT MAX(id) FROM charactersDetailed));"
    //   );
    // });
};
