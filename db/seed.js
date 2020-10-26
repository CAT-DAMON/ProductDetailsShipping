const fs = require('fs');
const psqlQueries = require('./psql/queries');
const postgres = require('./psql/postgres.js');

/*
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE
});
*/

const seedPostgres = async () => {
  console.log('connecting to postgres');
  postgres.connect();
  console.log('dropping products table');
  await postgres.query(psqlQueries.dropProductsTable);
  console.log('creating products table');
  await postgres.query(psqlQueries.createProductsTable);
  console.log('seeding');
  await postgres.query(psqlQueries.seed);
  console.log('ending');
  await postgres.end();
  console.log('success');
};

const runSeed = async () => {
  try {
    await seedPostgres();
  } catch(err) {
    console.error(err);
  } finally {
    console.log('psql db seeded');
  }
};

runSeed();