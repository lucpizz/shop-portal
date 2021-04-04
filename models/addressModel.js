const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Address Schema
const AddressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    trim: true,
  },
  billingAddress: {
    type: boolean,
    trim: true,
    required: 'Street number and name required',
  },
  street: {
    type: String,
    trim: true,
    required: 'Street number and name required',
  },
  city: {
    type: String,
    trim: true,
    required: 'City required',
  },
  state: {
    type: String,
    trim: true,
    required: 'State required',
  },
  country: {
    type: String,
    trim: true,
    required: 'Country required',
  },
  mailingAddress: {
    type: boolean,
    trim: true,
    required: 'Street number and name required',
  },
  secondName: {
    type: String,
    trim: true,
  },
  secondStreet: {
    type: String,
    trim: true,
    required: 'Street number and name required',
  },
  secondCity: {
    type: String,
    trim: true,
    required: 'City required',
  },
  secondState: {
    type: String,
    trim: true,
    required: 'State required',
  },
  secondCountry: {
    type: String,
    trim: true,
    required: 'Country required',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
});
module.exports = Mongoose.model('Address', AddressSchema);
