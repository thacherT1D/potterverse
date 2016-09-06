exports.seed = function(knex, Promise) {
  return Promise.all ([
    knex('hogwarts_houses').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hogwarts_houses').insert({house_id: 1, house_name: 'Gryffindor'}),
        knex('hogwarts_houses').insert({house_id: 2, house_name: 'Hufflepuff'}),
        knex('hogwarts_houses').insert({house_id: 3, house_name: 'Ravenclaw'}),
        knex('hogwarts_houses').insert({house_id: 4, house_name: 'Slytherin'}),
        knex('hogwarts_houses').insert({house_id: 5, house_name: 'Unknown'}),
        knex('hogwarts_houses').insert({house_id: 6, house_name: 'Did Not Attend Hogwarts'})
      ]);
    }),
    // Deletes ALL existing entries
    knex('characters').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('characters').insert({c_first: 'Harry', c_last: 'Potter', c_house: 'Gryffindor', c_desc: 'Main Protagonist'}),
        knex('characters').insert({c_first: 'Hermione', c_last: 'Granger', c_house: 'Gryffindor', c_desc: 'Smartest Person Ever'})
      ]);
    })
  ]);
};
