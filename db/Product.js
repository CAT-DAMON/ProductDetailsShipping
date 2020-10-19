const faker = require('faker');

const Product = function(id) {
  const _id = id;
  const productName = faker.lorem.words();
  const price = faker.random.number();
  const totalSales = faker.random.number();
  const reviews = faker.random.number({'min': 0, 'max': 5});
  const inStock = faker.random.boolean();
  const creator = faker.name.findName();
  const quantity = faker.random.number();
  const handmade = faker.random.boolean();
  const description = faker.lorem.sentences();
  const ready = `${faker.date.soon()}`;
  const from = faker.address.city();

  return (`${_id},${productName},${price},${totalSales},${reviews},${inStock},${creator},${quantity},${handmade},${description},${ready},${from}\n`);
};

module.exports = Product;