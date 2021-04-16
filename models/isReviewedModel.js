//isReviewed Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// isReviewed Schema
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
  product: [
    {
      type: Schema.Types.String,
      ref: 'Product',
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Review', isReviewableSchema);
