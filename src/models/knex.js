const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '172.20.10.3',
    user : 'postgres',
    password : 'postgres',
    database : 'TEST_SM',
    port: 6543
  }
})

module.exports = knex
