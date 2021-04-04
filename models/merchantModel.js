//Merchant Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const validateEmail = function (email) {
  let val = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return val.test(email);
};

const MerchantSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    requrired: 'An email address is required',
    validate: [validateEmail, 'Please enter a valid email address'],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      'Please enter a valid email address',
    ],
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
    default: 'Waiting Approval',
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
