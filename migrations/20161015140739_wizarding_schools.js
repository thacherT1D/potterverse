'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('wizarding_schools', (table) => {
    table.increments('id');
    table.string('school_name');
    table.string('full_school_name');
    table.string('location');
    table.string('school_head');
    table.string('school_crest_image_url');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('wizarding_schools');
};
