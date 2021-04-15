const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Product collection and inserts the products below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const reviewSeed = [
  {
    name: 'Great t-shirt!!',
    imageUrl:
      'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
    imageKey: 'My new hot t-shirt',
    description:`I love this shirt and wear it a lot. It's super soft and fits great. The shirt has a ladies cut, which is flattering.`,
    totalStars: 5,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Review.deleteMany({})
  .then(() => db.Review.insertMany(reviewSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
