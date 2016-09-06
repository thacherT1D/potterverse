exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', function(table) {
    table.increments('c_id');
    table.string('c_first');
    table.string('c_last');
    table.string('c_house').references('house_name').inTable('hogwarts_houses');
    table.string('c_desc');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters');  
};
