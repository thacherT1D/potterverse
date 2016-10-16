'use strict';

exports.seed = function(knex) {
  return knex('wizarding_schools').del()
    .then(() => {
      return knex('wizarding_schools').insert([{
        "id": 1,
        "school_name": "Hogwarts",
        "full_school_name": "Hogwarts School for Witchcraft and Wizardry",
        "location": "Scotland, Great Britain",
        "school_head": "Albus Dumbledore",
        "school_crest_image_url": "http://i.imgur.com/EjLZNsO.png"
      },
      {
        "id": 2,
        "school_name": "Beauxbatons",
        "full_school_name": "Beauxbatons Academy of Magic",
        "location": "Pyrenees, France",
        "school_head": "Olympe Maxime",
        "school_crest_image_url": "http://i.imgur.com/DkpOy8Q.jpg"
      },
      {
        "id": 3,
        "school_name": "Durmstrang",
        "full_school_name": "Durmstrang Institute",
        "location": "Northernmost Scandinavia",
        "school_head": "Igor Karkaroff",
        "school_crest_image_url": "http://i.imgur.com/79wwzsG.png"
      },
      {
        "id": 4,
        "school_name": "Castelobruxo",
        "full_school_name": "Castelobruxo",
        "location": "Amazon Rainforest, Brazil",
        "school_head": "Benedita Dourado",
        "school_crest_image_url": "http://i.imgur.com/PAr5acg.png"
      },
      {
        "id": 5,
        "school_name": "Ilvermorny",
        "full_school_name": "Ilvermorny School of Witchcraft and Wizardry",
        "location": "Massachusetts, United States of America",
        "school_head": "Agilbert Fontaine",
        "school_crest_image_url": "http://i.imgur.com/DOW0BCu.png"
      },
      {
        "id": 6,
        "school_name": "Koldovstoretz",
        "full_school_name": "Koldovstoretz",
        "location": "Russia",
        "school_head": "",
        "school_crest_image_url": ""
      },
      {
        "id": 7,
        "school_name": "Mahoutokoro",
        "full_school_name": "Mahoutokoro School of Magic",
        "location": "Minami Iwo Jima, Japan",
        "school_head": "",
        "school_crest_image_url": "http://i.imgur.com/7wnRaaQ.png"
      },
      {
        "id": 8,
        "school_name": "Uagadou",
        "full_school_name": "Uagadou School of Magic",
        "location": "Mountains of the Moon, Uganda",
        "school_head":"",
        "school_crest_image_url": "http://i.imgur.com/IEO7LCN.png"
      },
      {
        "id": 9,
        "school_name": "W.A.D.A.",
        "full_school_name": "Wizarding Academy of Dramatic Arts",
        "location": "England",
        "school_head":"",
        "school_crest_image_url":""
      }
    ]);
  });
};
