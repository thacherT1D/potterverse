'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('hogwarts_houses', (table) => {
    table.increments('id');
    table.string('house_name');
    table.string('house_ghost');
    table.string('house_founder');
    table.string('house_color');
    table.string('house_mascot');
    table.string('house_crest_image_url');
    table.string('house_head_character_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('hogwarts_houses');
};
