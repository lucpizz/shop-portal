//Brand Schema
const BrandSchema = new Schema({
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
  name: {
    type: String,
    trim: true,
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
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
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
module.exports = Mongoose.model('Brand', BrandSchema);
