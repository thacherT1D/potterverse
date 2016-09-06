exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('hogwarts_houses', function(table) {
      table.increments('house_id');
      table.string('house_name');
    }),
    knex.schema.createTable('characters', function(table) {
      table.increments('c_id');
      table.string('c_first');
      table.string('c_last');
      table.string('c_house');
      table.string('c_desc');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters');
  return knex.schema.dropTable('hogwarts_houses');
};
