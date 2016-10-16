'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('characters_basic', (table) => {
    table.increments('id');
    table.string('name');
    table.string('school');
    table.string('house');
    table.string('role');
    table.string('image_url');
    table.string('characters_detailed_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('characters_basic');
};
