//OrderModel Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const OrderSchema = new Schema({
  orderNumber: {
    type: String,
    default: true,
    required: 'order number is required',
  },
  sku: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
  },
  product: {
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
  isActive: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Mongoose.model('Order', OrderSchema);
