const faker = require('faker');
const fs = require('fs');
const { writer } = require('repl');
const Product = require('./Product.js');

const entries = 10000000;
const encoding = 'utf8';
const fileOut = 'products.csv';

const writeStream = fs.createWriteStream(fileOut);

// header
writeStream.write(
  'id,\
  productName,\
  price,\
  totalSales,\
  reviews,\
  inStock,\
  creator,\
  quantity,\
  handmade,\
  description,\
  ready,\
  from\n',
encoding);

const write = function(i) {
  let hasRoom = true;

  // case: all entries pushed
  if (i >= entries) {
    writer.write(Product(i), encoding, () => {
      writeStream.end;
      console.log('write finished!');
    });
  }

  // fill stock
  while (i < entries && hasRoom) {
    hasRoom = writeStream.write(Product(i), encoding);
    i++;
  }

  // drain stock
  if (!hasRoom && i < entries) {
    writeStream.once('drain', () => write(i));
  }
};

const generateData = function() {
  debugger;
  write(0);
};

generateData();