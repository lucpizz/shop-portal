//Merchant Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const MerchantSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
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
  status: {
    type: String,
    enum: ['Waiting Approval', 'Rejected', 'Approved'],
    default: "Waiting Approval",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Merchant', MerchantSchema);
