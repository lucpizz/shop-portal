//Categories Schema
const { Schema } = require('mongoose');

const CategorySchema = new Schema({
  type: {
    type: Schema.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Category', CategorySchema);
