const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'postgres',
    database : 'TEST_SM',
    port: 6543
  }
})

module.exports = knex
