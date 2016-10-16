'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('characters_detailed', (table) => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('middle_name');
    table.string('parents');
    table.string('born');
    table.string('died');
    table.string('school');
    table.string('house');
    table.string('patronous');
    table.string('blood_status');
    table.string('image_url');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('characters_detailed');
};
