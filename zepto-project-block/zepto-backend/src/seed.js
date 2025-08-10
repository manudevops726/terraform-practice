const { Product, sequelize } = require('./models');

async function seed() {
  await sequelize.sync({ force: false }); // ensure tables exist, but don't drop data

  const products = [
    { name: 'Banana', image: 'https://images.heb.com/is/image/HEBGrocery/000377497', price: 10 },
    { name: 'Cranberries', image: 'https://link-to-cranberries.jpg', price: 25 },
    { name: 'Spinach', image: 'https://link-to-spinach.jpg', price: 15 },
    { name: 'Tomato', image: 'https://link-to-tomato.jpg', price: 12 },
    { name: 'Rose', image: 'https://link-to-rose-image.jpg', price: 20 }
  ];

  for (const product of products) {
    await Product.findOrCreate({ where: { name: product.name }, defaults: product });
  }

  console.log('Seeding done!');
  process.exit();
}

seed().catch(console.error);
