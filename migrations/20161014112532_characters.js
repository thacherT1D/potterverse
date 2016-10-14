exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('characters', function(table) {
      table.increments('id');
      table.string('firstName');
      table.string('lastName');
      table.string('middleName');
      table.string('parents');
      table.string('born');
      table.string('died');
      table.string('school');
      table.string('house');
      table.string('patronus');
      table.string('bloodStatus');
      table.string('imageUrl');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters');
};
