https://potterverse.herokuapp.com/ | https://git.heroku.com/potterverse.git

TRUNCATE TABLE characters;
INSERT INTO characters (c_first, c_last, c_house, c_desc) VALUES ('Hermione','Granger','Gryffindor','the best'), ('Harry','Potter','Gryffindor','the boy who lived'), ('Ginny','Weasely','Gryffindor','the youngest'), ('Draco','Malfoy','Slyterin','not totally evil');


'use strict';

exports.seed = function(knex) {
  return knex('characters').del()
    .then(() => {
        return Promise.all([
          knex('characters').insert({id: 1, firstName: 'Harry', lastName: 'Potter', middleName: 'James', parents:['James Potter', 'Lily Potter'], born: '1980-07-31T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Stag', bloodStatus: 'Half-blood', imageUrl: 'http://i.imgur.com/lX3lE9V.jpg'}),
          knex('characters').insert({id: 2, firstName: 'Hermione', lastName: 'Granger', middleName: 'Jean', parents:['Mr. Granger', 'Mrs. Granger'], born: '1979-09-19T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Otter', bloodStatus: 'Muggle-born', imageUrl: 'http://i.imgur.com/kvexDei.jpg'}),
          knex('characters').insert({id: 3, firstName: 'Ron', lastName: 'Weasley', middleName: 'Bilius', parents:['Molly Weasley', 'Arthur Weasley'], born: '1980-03-01T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Jack Russell Terrier', bloodStatus: 'Pure-blood', imageUrl: 'http://i.imgur.com/rY7RSAc.jpg'}),
          knex('characters').insert({id: 4, firstName: 'Ginny', lastName: 'Weasley', middleName: 'Molly', parents:['Molly Weasley', 'Arthur Weasley'], born: '1981-08-11T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Horse', bloodStatus: 'Pure-blood', imageUrl: 'http://i.imgur.com/YO9CWSl.jpg'}),
          knex('characters').insert({id: 5, firstName: 'Luna', lastName: 'Lovegood', middleName: '', parents:['Xenophilius Lovegood', 'Pandora Lovegood'], born: '1981-02-13T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Ravenclaw', patronous: 'Hare', bloodStatus: 'Pure-blood', imageUrl: 'http://i.imgur.com/11GYGVT.jpg'}),
          knex('characters').insert({id: 6, firstName: 'Neville', lastName: 'Longbottom', middleName: '', parents:['Alice Longbottom', 'Frank Longbottom'], born: '1980-07-30T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Non-corporeal', bloodStatus: 'Pure-blood', imageUrl: 'http://i.imgur.com/naqfkln.jpg'}),
          knex('characters').insert({id: 7, firstName: 'Dean', lastName: 'Thomas', middleName: '', parents:['', ''], born: '1980-01-01T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: '', bloodStatus: 'Half-blood', imageUrl: 'http://i.imgur.com/l87Gqdk.jpg'}),
          knex('characters').insert({id: 8, firstName: 'Seamus', lastName: 'Finnigan', middleName: '', parents:['Mr. Finnigan', 'Mrs. Finnigan'], born: '1980-01-01T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Fox', bloodStatus: 'Half-blood', imageUrl: 'http://i.imgur.com/dXRY0lC.jpg'}),
          knex('characters').insert({id: 9, firstName: 'Albus', lastName: 'Dumbledore', middleName: 'Percival Wulfric Brian', parents:['Percival Dumbledore', 'Kendra Dumbledore'], born: '1981-06-01T00:00:00.000Z', died: '1997-06-30T00:00:00.000Z', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Phoenix', bloodStatus: 'Half-blood', imageUrl: 'http://i.imgur.com/G0mKTxy.jpg'}),
          knex('characters').insert({id: 10, firstName: 'Minerva', lastName: 'McGonnagal', middleName: '', parents:['Robert McGonnagal', 'Isobel Ross'], born: '1935-10-04T00:00:00.000Z', died: '', school: 'Hogwarts', house: 'Gryffindor', patronous: 'Phoenix', bloodStatus: 'Half-blood', imageUrl: 'http://i.imgur.com/sjgazI7.jpg'})
        ]);
      });
    })
  ]);
};
