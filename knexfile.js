module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/meow_meow-db',
    migrations: {
      directory: './migrations'
    }
  }
}
