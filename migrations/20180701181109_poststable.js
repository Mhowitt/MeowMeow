
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.uuid('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('handle').notNullable();
    }),
    knex.schema.createTable('posts', function(table) {
      table.uuid('id').primary();
      table.string('text').notNullable();
      table.integer('likes').defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table.uuid('user_id').references('id').inTable('users')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('users'), knex.schema.dropTable('posts')])
};
