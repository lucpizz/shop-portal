//Product Schema
const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120,
};

Mongoose.plugin(slug, options);

// Product Schema
const isReviewableSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  totalStars: {
    type: Number,
  },
  reviewBody: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isReviewable: {
    type: Boolean,
    default: false,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('isReviewable', isReviewableSchema);
