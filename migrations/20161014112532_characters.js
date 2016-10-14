'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id');
    table.string('firstName');
    table.string('lastName');
    table.string('middleName');
    table.string('parents');
    table.string('born');
    table.string('died');
    table.string('school');
    table.string('house');
    table.string('patronous');
    table.string('bloodStatus');
    table.string('imageUrl');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('characters');
};
