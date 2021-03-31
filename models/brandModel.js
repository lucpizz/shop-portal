//Brand Schema
const BrandSchema = new Schema({
    name: {
      type: String,
      trim: true
    },
    image: {
      data: Buffer,
      contentType: String
    },
    description: {
      type: String,
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    merchant: {
      type: Schema.Types.ObjectId,
      ref: 'Merchant',
      default: null
    },
    updated: Date,
    created: {
      type: Date,
      default: Date.now
    }
  });
  module.exports = Mongoose.model('Brand', BrandSchema);
