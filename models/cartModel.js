//Cart Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Product Schema
const CartSchema = new Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
  },
  productName: {
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
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  taxable: {
    type: Boolean,
    default: false,
  },
  totalCost: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Mongoose.model('Cart', CartSchema);
