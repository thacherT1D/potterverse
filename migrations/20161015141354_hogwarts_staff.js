'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('hogwarts_staff', (table) => {
    table.increments('id');
    table.string('name');
    table.string('characters_basic_id');
    table.string('position');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('hogwarts_staff');
};
