const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex)




module.exports = bookshelf