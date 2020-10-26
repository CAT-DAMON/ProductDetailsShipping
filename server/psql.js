const psql = require('../db/psql/postgres.js');
const { Client } = require('pg');

const client = new Client(psql.config);
client.connect(() => {console.log('connected to pg client')});

const createQuery = `INSERT INTO products(id,productName,price,totalSales,reviews,inStock,creator,quantity,handmade,descrip,ready,productFrom) VALUES (11000000,'new product',10.00,200,15,true,'sam',15,true,'beautiful wood log','30 Nov 2020 12:00:00 GMT', '30 Nov 2021 12:00:00 GMT') RETURNING *;`

/* PRODUCT ENDPOINTS */
// Create
const createProduct = (product) => {
  return client.query(createQuery)
  .then((product) => {
    return product;
  })
  .catch((err) => {
    console.error(err);
  });
};

// Read
const readProduct = (id) => {
  return client.query(`SELECT * FROM products WHERE id = ${id} LIMIT 25`)
  .then((products) => {
    return products;
  })
  .catch((err) => {
    console.error(err);
  });
};

// Update does not exist

// Delete does not exist

module.exports = {
  createProduct,
  readProduct
};