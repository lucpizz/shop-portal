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
      'https://www.pexels.com/photo/woman-wearing-gray-shirt-holding-head-428338/',
    imageKey: 'My new hot t-shirt',
    description:`I love this shirt and wear it a lot. It's super soft and fits great. The shirt has a ladies cut, which is flattering.`,
    totalStars: 5,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.isReviewable.deleteMany({})
  .then(() => db.isReviewable.insertMany(reviewSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
