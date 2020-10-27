const { Client } = require('pg');

const psql = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'sdc1',
  port: 5432
});

module.exports = psql;