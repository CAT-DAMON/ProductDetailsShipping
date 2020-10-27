module.exports = {
  dropDB: `
    DROP DATABASE IF EXISTS sdc;
  `,

  createDB: `
    CREATE DATABASE sdc;
  `,

  dropProductsTable: `
    DROP TABLE IF EXISTS products;
  `,

  createProductsTable: `
    CREATE TABLE products(
      id INT NOT NULL PRIMARY KEY,
      productName VARCHAR NOT NULL,
      price DECIMAL NOT NULL,
      totalSales INT NOT NULL,
      reviews INT NOT NULL,
      inStock BOOLEAN NOT NULL,
      creator VARCHAR NOT NULL,
      quantity INT NOT NULL,
      handmade BOOLEAN NOT NULL,
      descrip VARCHAR NOT NULL,
      ready VARCHAR NOT NULL,
      productFrom VARCHAR NOT NULL
    );
  `,

  seed: `
    COPY products(id,productName,price,totalSales,reviews,inStock,creator,quantity,handmade,descrip,ready,productFrom)
    FROM '/home/samch/CAT-DAMON/ProductDetailsShipping/products.csv'
    DELIMITER ',' CSV HEADER;
  `
};