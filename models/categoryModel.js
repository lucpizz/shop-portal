//Categories Schema
const CategorySchema = new Schema({
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
     updated: Date,
    created: {
      type: Date,
      default: Date.now
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
  });
  module.exports = Mongoose.model('Category', Schema);