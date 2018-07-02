exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('handle').notNullable();
    }),
    knex.schema.createTable('posts', function(table) {
      table.increments('id').primary();
      table.string('text').notNullable();
      table.timestamp('created_at');
      table.integer('user_id').unsigned()
        .references('users.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.raw('DROP TABLE users CASCADE'), knex.raw('DROP TABLE posts CASCADE')])
};
